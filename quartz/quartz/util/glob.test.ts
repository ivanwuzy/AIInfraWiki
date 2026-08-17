import assert from "node:assert/strict"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import { glob } from "./glob"

test("glob discovers content ignored by Git", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "quartz-glob-"))
  try {
    await writeFile(path.join(directory, ".gitignore"), "content\n")
    await mkdir(path.join(directory, "content"))
    await writeFile(path.join(directory, "content", "index.md"), "# Index\n")

    assert.deepEqual(await glob("**/*.*", directory, []), ["content/index.md"])
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})
