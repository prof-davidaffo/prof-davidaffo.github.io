// The packaged Explorer calls scrollIntoView after its asynchronous tree render.
// That also scrolls the document, overriding links to article headings. Until the
// plugin fixes this, restrict that call to the Explorer's own scroll container.
export function containExplorerScroll(script: string): string {
  if (!script.includes("explorerScrollTop")) return script
  return script.replace(
    /([\w$]+)\.scrollIntoView\(\{\s*behavior:\s*["']smooth["']\s*\}\)/g,
    `(($1) => {
      const list = $1.closest(".explorer-ul")
      if (!list) return
      const item = $1.getBoundingClientRect()
      const bounds = list.getBoundingClientRect()
      const top = bounds.top + list.clientTop
      const bottom = top + list.clientHeight
      if (item.top < top) list.scrollTop += item.top - top
      else if (item.bottom > bottom) list.scrollTop += item.bottom - bottom
    })($1)`,
  )
}
