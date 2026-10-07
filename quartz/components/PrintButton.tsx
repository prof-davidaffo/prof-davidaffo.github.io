import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/print.inline"

const PrintButton: QuartzComponent = () => {
  return (
    <button
      type="button"
      title="Stampa"
      data-print-page
      style={{
        width: "100%",
        marginBottom: "1rem",
        padding: "0.4rem 0.6rem",
        cursor: "pointer",
      }}
    >
      🖨️ Stampa
    </button>
  )
}

PrintButton.afterDOMLoaded = script

export default (() => PrintButton) satisfies QuartzComponentConstructor
