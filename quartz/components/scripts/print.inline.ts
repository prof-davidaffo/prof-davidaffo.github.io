document.addEventListener("nav", () => {
  document.querySelectorAll<HTMLButtonElement>("[data-print-page]").forEach((button) => {
    const printPage = () => window.print()
    button.addEventListener("click", printPage)
    window.addCleanup(() => button.removeEventListener("click", printPage))
  })
})
