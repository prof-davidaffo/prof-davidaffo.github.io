import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/textsize.inline"
import styles from "./styles/readingcontrols.scss"

const ReadingControls: QuartzComponent = () => (
  <div class="reading-controls" role="group" aria-label="Opzioni di lettura">
    <input
      type="range"
      min="80"
      max="200"
      step="1"
      value="100"
      data-text-size-slider
      aria-label="Dimensione del testo"
      aria-valuetext="100%"
    />
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
)

ReadingControls.css = styles
ReadingControls.beforeDOMLoaded = script

export default (() => ReadingControls) satisfies QuartzComponentConstructor
