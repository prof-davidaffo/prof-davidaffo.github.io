import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { runInNewContext } from "node:vm"
import ts from "typescript"

const script = ts.transpileModule(
  readFileSync(new URL("./anchors.inline.ts", import.meta.url), "utf8"),
  { compilerOptions: { target: ts.ScriptTarget.ESNext } },
).outputText

function setup(hash = "#sezione%20due") {
  const handlers = new Map<string, ((event?: unknown) => void)[]>()
  const frames = new Map<number, () => void>()
  let frameId = 0
  const calls: unknown[] = []
  const addEventListener = (name: string, handler: () => void) => {
    handlers.set(name, [...(handlers.get(name) ?? []), handler])
  }
  const location = { hash }
  runInNewContext(script, {
    window: { location, addEventListener },
    document: {
      addEventListener,
      fonts: { ready: new Promise(() => {}) },
      getElementById: (id: string) => {
        assert.equal(id, "sezione due")
        return { scrollIntoView: (options: unknown) => calls.push(options) }
      },
    },
    requestAnimationFrame: (fn: () => void) => {
      frames.set(++frameId, fn)
      return frameId
    },
    cancelAnimationFrame: (id: number) => frames.delete(id),
  })
  return {
    calls,
    location,
    emit: (name: string) => handlers.get(name)?.forEach((handler) => handler()),
    flush: () => {
      while (frames.size) {
        const pending = [...frames.values()]
        frames.clear()
        pending.forEach((fn) => fn())
      }
    },
  }
}

test("realigns a decoded anchor after component initialization and page load", () => {
  const page = setup()
  page.emit("nav")
  assert.equal(page.calls.length, 0)
  page.flush()
  page.emit("load")
  page.flush()
  assert.equal(page.calls.length, 2)
  assert.equal((page.calls[0] as { behavior: string }).behavior, "instant")
})

test("late initialization does not override manual scrolling", () => {
  const page = setup()
  page.emit("wheel")
  page.emit("nav")
  page.emit("load")
  page.flush()
  assert.equal(page.calls.length, 0)
})

test("manual input cancels a pending anchor correction", () => {
  const page = setup()
  page.emit("nav")
  page.emit("touchstart")
  page.flush()
  assert.equal(page.calls.length, 0)
})

test("does not move pages without an anchor or with invalid escapes", () => {
  for (const hash of ["", "#%invalid"]) {
    const page = setup(hash)
    page.emit("nav")
    page.flush()
    assert.equal(page.calls.length, 0)
  }
})
