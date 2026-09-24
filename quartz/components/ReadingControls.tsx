import { QuartzComponent, QuartzComponentConstructor } from "./types"
import ReaderMode from "./ReaderMode"
import { concatenateResources } from "../util/resources"
// @ts-ignore
import script from "./scripts/textsize.inline"
import styles from "./styles/readingcontrols.scss"

const Reader = ReaderMode()
const ReadingControls: QuartzComponent = (props) => (
  <div class="reading-controls" role="group" aria-label="Opzioni di lettura">
    <input
      type="range"
      min="80"
      max="150"
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
    <Reader {...props} />
  </div>
)

ReadingControls.css = concatenateResources(Reader.css, styles)
ReadingControls.beforeDOMLoaded = concatenateResources(Reader.beforeDOMLoaded, script)

export default (() => ReadingControls) satisfies QuartzComponentConstructor
