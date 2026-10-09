import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/textsize.inline"
import styles from "./styles/readingcontrols.scss"

const ReadingControls: QuartzComponent = () => (
  <div class="reading-controls" role="group" aria-label="Opzioni di lettura">
    <button type="button" data-reading-mode aria-pressed="false">
      Lettura
    </button>
    <div class="reading-controls-zoom">
      <button type="button" data-text-size-decrease aria-label="Riduci il testo">
        −
      </button>
      <input
        type="range"
        min="80"
        max="200"
        step="5"
        value="100"
        data-text-size-slider
        aria-label="Dimensione del testo"
        aria-valuetext="100%"
      />
      <button type="button" data-text-size-increase aria-label="Ingrandisci il testo">
        +
      </button>
      <output data-text-size-value aria-label="Dimensione attuale">
        100%
      </output>
      <button
        type="button"
        data-text-size-reset
        title="Ripristina la dimensione al 100%"
        aria-label="Ripristina la dimensione al 100%"
      >
        Reset
      </button>
    </div>
  </div>
)

ReadingControls.displayName = "ReadingControls"
ReadingControls.beforeDOMLoaded = `
  try {
    const savedSize = Number(localStorage.getItem("quartz-text-size"))
    const size = savedSize >= 80 && savedSize <= 200 ? Math.round(savedSize / 5) * 5 : 100
    document.documentElement.style.setProperty("--reading-font-scale", String(size / 100))
    document.documentElement.setAttribute("reader-mode",
      localStorage.getItem("quartz-reader-mode") === "on" ? "on" : "off")
  } catch {}
`
ReadingControls.css = styles
ReadingControls.afterDOMLoaded = script

export default (() => ReadingControls) satisfies QuartzComponentConstructor
