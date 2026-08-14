import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"
import test from "node:test"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const quartzRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

test("enables the agreed standard Quartz features", async () => {
  const config = YAML.parse(await readFile(path.join(quartzRoot, "quartz.config.yaml"), "utf8"))
  assert.equal(config.configuration.locale, "zh-CN")
  assert.equal(config.configuration.analytics.provider, null)
  const enabled = new Set(config.plugins.filter((plugin) => plugin.enabled).map((plugin) => plugin.source))
  for (const source of [
    "@quartz-community/content-index",
    "@quartz-community/explorer",
    "@quartz-community/graph",
    "@quartz-community/search",
    "@quartz-community/backlinks",
    "@quartz-community/table-of-contents",
    "@quartz-community/darkmode",
  ]) assert.ok(enabled.has(source), `${source} must be enabled`)
  for (const source of ["@quartz-community/encrypted-pages", "@quartz-community/comments"]) {
    assert.ok(!enabled.has(source), `${source} must be disabled`)
  }
})