import assert from "node:assert/strict"
import test from "node:test"
import { Script, runInNewContext } from "node:vm"
import { Explorer } from "@quartz-community/explorer"
import { containExplorerScroll } from "./explorerScroll"

test("patches the installed Explorer's asynchronous scroll call", () => {
  const script = Explorer().afterDOMLoaded as string
  assert.match(script, /\.scrollIntoView\(/)
  const patched = containExplorerScroll(script)
  assert.doesNotMatch(patched, /\.scrollIntoView\(/)
  assert.doesNotThrow(() => new Script(patched))
})

for (const [label, top, bottom, expected] of [
  ["above the panel", 60, 80, 58],
  ["below the panel", 340, 360, 158],
  ["already visible", 140, 160, 100],
] as const) {
  test(`scrolls only the sidebar when the active note is ${label}`, () => {
    const list = {
      scrollTop: 100,
      clientTop: 2,
      clientHeight: 200,
      getBoundingClientRect: () => ({ top: 100 }),
    }
    const active = {
      closest: (selector: string) => {
        assert.equal(selector, ".explorer-ul")
        return list
      },
      getBoundingClientRect: () => ({ top, bottom }),
      scrollIntoView: () => assert.fail("must not scroll the document"),
    }
    runInNewContext(
      containExplorerScroll('/* explorerScrollTop */ active.scrollIntoView({behavior:"smooth"})'),
      { active },
    )
    assert.equal(list.scrollTop, expected)
  })
}

test("leaves other components' scrolling unchanged", () => {
  const script = 'heading.scrollIntoView({behavior:"smooth"})'
  assert.equal(containExplorerScroll(script), script)
})
