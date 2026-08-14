import assert from "node:assert/strict"
import { mkdtemp, readFile, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import YAML from "yaml"
import { configurePages } from "./configure-pages.mjs"

test("writes a validated GitHub Pages baseUrl", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "quartz-pages-"))
  const configPath = path.join(root, "quartz.config.yaml")
  await writeFile(configPath, "configuration:\n  baseUrl: localhost\nplugins: []\n")
  await configurePages({ configPath, baseUrl: "ivanwuzy.github.io/AIInfraWiki" })
  const config = YAML.parse(await readFile(configPath, "utf8"))
  assert.equal(config.configuration.baseUrl, "ivanwuzy.github.io/AIInfraWiki")
})

test("rejects protocols and leading or trailing slashes", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "quartz-pages-"))
  const configPath = path.join(root, "quartz.config.yaml")
  await writeFile(configPath, "configuration:\n  baseUrl: localhost\nplugins: []\n")
  for (const baseUrl of ["https://example.com/repo", "/example.com/repo", "example.com/repo/"]) {
    await assert.rejects(configurePages({ configPath, baseUrl }), /Invalid Quartz baseUrl/)
  }
})