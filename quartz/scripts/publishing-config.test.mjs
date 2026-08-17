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

test("deploys built artifact to a separate public GitHub Pages repository", async () => {
  const workflowPath = path.resolve(quartzRoot, "..", ".github", "workflows", "deploy-pages.yml")
  const workflow = await readFile(workflowPath, "utf8")
  assert.match(workflow, /branches:\s*\n\s*- main/)
  assert.match(workflow, /workflow_dispatch:/)
  assert.match(workflow, /npm run test:publishing/)
  assert.match(workflow, /npm run sync:content/)
  assert.match(workflow, /npm run configure:pages -- --base-url/)
  assert.match(workflow, /npx quartz build --baseDir/)
  assert.match(workflow, /npm run verify:public/)
  assert.match(workflow, /peaceiris\/actions-gh-pages@v4/)
  assert.match(workflow, /external_repository:/)
  assert.match(workflow, /publish_dir: quartz\/public/)
  assert.match(workflow, /PAGES_DEPLOY_TOKEN/)
})