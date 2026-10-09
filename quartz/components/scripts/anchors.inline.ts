// Track user intent before async component imports can change the page layout.
let anchorInterrupted = false
let anchorFrame = 0
const interruptAnchor = () => {
  anchorInterrupted = true
  cancelAnimationFrame(anchorFrame)
}
window.addEventListener("wheel", interruptAnchor, { passive: true })
window.addEventListener("touchstart", interruptAnchor, { passive: true })
window.addEventListener("pointerdown", interruptAnchor, { passive: true })
window.addEventListener("keydown", (event) => {
  if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key))
    interruptAnchor()
})

const alignAnchor = () => {
  const hash = window.location.hash
  if (!hash || anchorInterrupted) return
  cancelAnimationFrame(anchorFrame)
  // Let synchronous nav handlers and their layout updates finish first.
  anchorFrame = requestAnimationFrame(() => {
    anchorFrame = requestAnimationFrame(() => {
      if (anchorInterrupted || window.location.hash !== hash) return
      try {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
          behavior: "instant",
          block: "start",
        })
      } catch {
        // Invalid percent escapes should not break navigation.
      }
    })
  })
}

document.addEventListener("prenav", () => {
  anchorInterrupted = false
})
document.addEventListener("nav", () => {
  alignAnchor()
  void document.fonts.ready.then(alignAnchor)
})
document.addEventListener("render", alignAnchor)
window.addEventListener("load", alignAnchor)
window.addEventListener("hashchange", () => {
  anchorInterrupted = false
  alignAnchor()
})
