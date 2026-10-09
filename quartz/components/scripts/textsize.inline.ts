const textSizeKey = "quartz-text-size"
const readerModeKey = "quartz-reader-mode"

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
    button.textContent = "Lettura"
    button.title = readerMode ? "Esci dalla modalità lettura" : "Attiva la modalità lettura"
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
    window.addCleanup(() => {
      cleanups.forEach((cleanup) => cleanup())
      delete panel.dataset.readingInitialized
    })
  })
})
