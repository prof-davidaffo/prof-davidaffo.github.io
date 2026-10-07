const textSizeKey = "quartz-text-size"
const readerModeKey = "quartz-reader-mode"
const panelPositionKey = "quartz-reading-position"

const readPreference = (key: string) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
const savePreference = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Controls also work when storage is blocked.
  }
}
const savedSize = Number(readPreference(textSizeKey))
let textSize = savedSize >= 80 && savedSize <= 200 ? Math.round(savedSize / 5) * 5 : 100
let readerMode = readPreference(readerModeKey) === "on"

const applyReadingPreferences = () => {
  document.documentElement.style.setProperty("--reading-font-scale", String(textSize / 100))
  document.documentElement.setAttribute("reader-mode", readerMode ? "on" : "off")
  document.querySelectorAll<HTMLInputElement>("[data-text-size-slider]").forEach((slider) => {
    slider.value = String(textSize)
    slider.setAttribute("aria-valuetext", `${textSize}%`)
  })
  document.querySelectorAll<HTMLOutputElement>("[data-text-size-value]").forEach((output) => {
    output.value = `${textSize}%`
  })
  document.querySelectorAll<HTMLButtonElement>("[data-reading-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(readerMode))
    button.textContent = readerMode ? "Esci da lettura" : "Lettura"
  })
  document.querySelectorAll<HTMLButtonElement>("[data-text-size-decrease]").forEach((button) => {
    button.disabled = textSize <= 80
  })
  document.querySelectorAll<HTMLButtonElement>("[data-text-size-increase]").forEach((button) => {
    button.disabled = textSize >= 200
  })
}
const setTextSize = (value: number) => {
  if (!Number.isFinite(value)) return
  textSize = Math.max(80, Math.min(200, Math.round(value / 5) * 5))
  applyReadingPreferences()
  savePreference(textSizeKey, String(textSize))
}

applyReadingPreferences()
document.addEventListener("nav", () => {
  applyReadingPreferences()
  document.querySelectorAll<HTMLElement>(".reading-controls").forEach((panel) => {
    if (panel.dataset.readingInitialized === "true") return
    panel.dataset.readingInitialized = "true"
    const cleanups: (() => void)[] = []
    const listen = <K extends keyof HTMLElementEventMap>(
      target: HTMLElement | null,
      event: K,
      handler: (event: HTMLElementEventMap[K]) => void,
    ) => {
      if (!target) return
      target.addEventListener(event, handler as EventListener)
      cleanups.push(() => target.removeEventListener(event, handler as EventListener))
    }
    const slider = panel.querySelector<HTMLInputElement>("[data-text-size-slider]")
    listen(slider, "input", () => setTextSize(Number(slider?.value)))
    const activate = (selector: string, action: () => void) => {
      const button = panel.querySelector<HTMLButtonElement>(selector)
      let lastTouch = -Infinity
      listen(button, "pointerup", (event) => {
        // Browsers can suppress the compatibility click after a touch drag.
        if (event.pointerType === "touch" && !button?.disabled) {
          lastTouch = performance.now()
          action()
        }
      })
      listen(button, "click", (event) => {
        const pointerType = (event as PointerEvent).pointerType
        // Older browsers synthesize a MouseEvent for a touch click.
        if (
          pointerType === "touch" ||
          (!pointerType && event.detail > 0 && performance.now() - lastTouch < 750)
        )
          return
        action()
      })
    }
    activate("[data-text-size-decrease]", () => setTextSize(textSize - 5))
    activate("[data-text-size-increase]", () => setTextSize(textSize + 5))
    activate("[data-text-size-reset]", () => setTextSize(100))
    activate("[data-reading-mode]", () => {
      readerMode = !readerMode
      applyReadingPreferences()
      savePreference(readerModeKey, readerMode ? "on" : "off")
      document.dispatchEvent(
        new CustomEvent("readermodechange", {
          detail: { mode: readerMode ? "on" : "off" },
        }),
      )
    })
    const movePanel = (x: number, y: number) => {
      const rect = panel.getBoundingClientRect()
      const left = Math.max(8, Math.min(x, window.innerWidth - rect.width - 8))
      const top = Math.max(8, Math.min(y, window.innerHeight - rect.height - 8))
      panel.style.left = `${left}px`
      panel.style.top = `${top}px`
      panel.style.right = "auto"
      panel.style.bottom = "auto"
    }
    const savePosition = () => {
      const { left, top } = panel.getBoundingClientRect()
      savePreference(panelPositionKey, JSON.stringify({ x: left, y: top }))
    }
    try {
      const position = JSON.parse(readPreference(panelPositionKey) ?? "null")
      if (position && Number.isFinite(position.x) && Number.isFinite(position.y)) {
        movePanel(position.x, position.y)
      }
    } catch {
      /* Invalid saved positions use the default corner. */
    }
    const handle = panel.querySelector<HTMLButtonElement>("[data-reading-drag]")
    let drag: { id: number; x: number; y: number; left: number; top: number } | null = null
    listen(handle, "pointerdown", (event) => {
      if (event.button !== 0 || !handle) return
      event.preventDefault()
      const rect = panel.getBoundingClientRect()
      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        left: rect.left,
        top: rect.top,
      }
      handle.setPointerCapture(event.pointerId)
      panel.classList.add("is-dragging")
    })
    listen(handle, "pointermove", (event) => {
      if (!drag || event.pointerId !== drag.id) return
      movePanel(drag.left + event.clientX - drag.x, drag.top + event.clientY - drag.y)
    })
    const endDrag = () => {
      if (!drag) return
      drag = null
      panel.classList.remove("is-dragging")
      savePosition()
    }
    listen(handle, "pointerup", endDrag)
    listen(handle, "pointercancel", endDrag)
    listen(handle, "lostpointercapture", endDrag)
    listen(handle, "keydown", (event) => {
      if (event.key === "Home") {
        event.preventDefault()
        for (const property of ["left", "top", "right", "bottom"])
          panel.style.removeProperty(property)
        savePreference(panelPositionKey, "null")
        return
      }
      const directions: Record<string, [number, number]> = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
      }
      const direction = directions[event.key]
      if (!direction) return
      event.preventDefault()
      const rect = panel.getBoundingClientRect()
      const step = event.shiftKey ? 40 : 10
      movePanel(rect.left + direction[0] * step, rect.top + direction[1] * step)
      savePosition()
    })
    const keepInViewport = () => {
      if (!panel.style.left) return
      const rect = panel.getBoundingClientRect()
      movePanel(rect.left, rect.top)
    }
    window.addEventListener("resize", keepInViewport)
    cleanups.push(() => window.removeEventListener("resize", keepInViewport))
    window.addCleanup(() => {
      cleanups.forEach((cleanup) => cleanup())
      delete panel.dataset.readingInitialized
    })
  })
})
