const textSizeKey = "quartz-text-size"
let textSize = 100
try {
  const saved = Number(localStorage.getItem(textSizeKey))
  if (Number.isFinite(saved) && saved >= 80 && saved <= 150) textSize = saved
} catch {
  // Controls remain usable when storage is unavailable.
}

const applyTextSize = () => {
  document.documentElement.style.fontSize = `${textSize}%`
  document.querySelectorAll<HTMLInputElement>("[data-text-size-slider]").forEach((slider) => {
    slider.value = String(textSize)
    slider.setAttribute("aria-valuetext", `${textSize}%`)
  })
  document.querySelectorAll<HTMLOutputElement>("[data-text-size-value]").forEach((output) => {
    output.value = `${textSize}%`
  })
}

const setTextSize = (value: number) => {
  if (!Number.isFinite(value)) return
  textSize = Math.max(80, Math.min(150, Math.round(value)))
  applyTextSize()
  try {
    localStorage.setItem(textSizeKey, String(textSize))
  } catch {
    // A blocked storage must not prevent changing the text size.
  }
}

applyTextSize()
document.addEventListener("nav", () => {
  applyTextSize()
  document.querySelectorAll<HTMLInputElement>("[data-text-size-slider]").forEach((slider) => {
    const changeSize = () => setTextSize(Number(slider.value))
    slider.addEventListener("input", changeSize)
    window.addCleanup(() => slider.removeEventListener("input", changeSize))
  })
  document.querySelectorAll<HTMLButtonElement>("[data-text-size-reset]").forEach((button) => {
    const resetSize = () => setTextSize(100)
    button.addEventListener("click", resetSize)
    window.addCleanup(() => button.removeEventListener("click", resetSize))
  })
})
