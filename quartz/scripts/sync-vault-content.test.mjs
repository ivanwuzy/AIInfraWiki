import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, readdir, symlink, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import { syncVaultContent } from "./sync-vault-content.mjs"

async function fixture() {
  const root = await mkdtemp(path.join(tmpdir(), "quartz-sync-"))
  const contentRoot = path.join(root, "quartz", "content")
  await mkdir(path.join(root, "wiki"), { recursive: true })
  await mkdir(path.join(root, "raw", "assets"), { recursive: true })
  await mkdir(path.join(root, "local_research"), { recursive: true })
  await mkdir(contentRoot, { recursive: true })
  await writeFile(path.join(root, "wiki", "index.md"), "# Wiki\n")
  await writeFile(path.join(root, "raw", "assets", "evidence.txt"), "evidence\n")
  await writeFile(path.join(root, "local_research", "secret.md"), "secret\n")
  await writeFile(path.join(contentRoot, "stale.md"), "stale\n")
  return { root, contentRoot }
}

test("copies only wiki and raw and removes stale generated files", async () => {
  const { root, contentRoot } = await fixture()
  await syncVaultContent({ sourceRoot: root, contentRoot })
  assert.deepEqual((await readdir(contentRoot)).sort(), ["index.md", "raw", "wiki"])
  assert.equal(await readFile(path.join(contentRoot, "wiki", "index.md"), "utf8"), "# Wiki\n")
  assert.equal(
    await readFile(path.join(contentRoot, "raw", "assets", "evidence.txt"), "utf8"),
    "evidence\n",
  )
  assert.match(await readFile(path.join(contentRoot, "index.md"), "utf8"), /AI Infra/)
})

test("does not modify source files", async () => {
  const { root, contentRoot } = await fixture()
  const before = await readFile(path.join(root, "wiki", "index.md"), "utf8")
  await syncVaultContent({ sourceRoot: root, contentRoot })
  assert.equal(await readFile(path.join(root, "wiki", "index.md"), "utf8"), before)
})

test("rejects symbolic links before replacing generated content", async () => {
  const { root, contentRoot } = await fixture()
  await symlink(path.join(root, "local_research", "secret.md"), path.join(root, "wiki", "leak.md"))
  await assert.rejects(
    syncVaultContent({ sourceRoot: root, contentRoot }),
    /Refusing to publish symbolic link/,
  )
  assert.equal(await readFile(path.join(contentRoot, "stale.md"), "utf8"), "stale\n")
})
