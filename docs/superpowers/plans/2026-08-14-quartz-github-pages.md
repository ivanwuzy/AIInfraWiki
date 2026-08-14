# Quartz GitHub Pages Publishing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reproducible Quartz 5 site that publishes only `wiki/` and `raw/` to GitHub Pages.

**Architecture:** Vendor the upstream Quartz 5.0.0 source into `quartz/`, then place all repository-specific behavior behind three small scripts: a whitelist content synchronizer, a Pages URL configurator, and a built-output verifier. A root GitHub Actions workflow runs tests, synchronizes only `wiki/` and `raw/`, builds with the repository subpath, verifies the artifact, and deploys `quartz/public/`.

**Tech Stack:** Quartz 5.0.0 at upstream commit `075afd3f712da0088a07f5284a7b3aba37dd61b6`, Node.js 24, npm 10+, ECMAScript modules, Node built-in test runner, YAML, GitHub Actions, GitHub Pages.

## Global Constraints

- `wiki/` and `raw/` remain the only knowledge sources and must not be moved or rewritten.
- Published content may contain only `wiki/**`, `raw/**`, the generated root navigation page, and Quartz runtime assets.
- `local_research/`, `Clippings/`, `.obsidian/`, local tool state, and all other repository directories must never enter `quartz/content/` or `quartz/public/`.
- `raw/` Markdown, HTML, PDF, images, and other attachments are intentionally public.
- Synchronization must reject symbolic links and remove stale generated content before every copy.
- GitHub Pages deploys on pushes to `main` and on manual dispatch.
- The GitHub repository name determines both the canonical `baseUrl` and the build `--baseDir`; no custom domain is included.
- Do not add authentication, comments, databases, Cloudflare, Supabase, or custom administration.
- Do not modify the semantic content of existing Wiki or Raw files to make the build pass; fix the publishing adapter first.

## File Structure

- `quartz/`: vendored upstream Quartz source and npm lockfile.
- `quartz/UPSTREAM.md`: pinned upstream repository, version, commit, and update procedure.
- `quartz/quartz.config.yaml`: Chinese-language AI infrastructure site configuration and standard Quartz plugins.
- `quartz/scripts/sync-vault-content.mjs`: whitelist-only synchronization API and CLI.
- `quartz/scripts/configure-pages.mjs`: validated `baseUrl` update API and CLI.
- `quartz/scripts/verify-public-boundary.mjs`: final artifact boundary validation API and CLI.
- `quartz/scripts/sync-vault-content.test.mjs`: synchronization behavior tests.
- `quartz/scripts/configure-pages.test.mjs`: Pages URL configuration tests.
- `quartz/scripts/verify-public-boundary.test.mjs`: output verification tests.
- `quartz/scripts/publishing-config.test.mjs`: Quartz feature and workflow contract tests.
- `.github/workflows/deploy-pages.yml`: CI test, build, artifact upload, and Pages deployment.

---

### Task 1: Vendor and pin Quartz 5

**Files:**
- Create: `quartz/**` from upstream Quartz commit `075afd3f712da0088a07f5284a7b3aba37dd61b6`
- Create: `quartz/UPSTREAM.md`
- Modify: `quartz/.gitignore`
- Modify: `quartz/package.json`

**Interfaces:**
- Consumes: upstream repository `https://github.com/jackyzha0/quartz.git`.
- Produces: a self-contained Quartz project invoked with `npm --prefix quartz`; `npm run test:publishing`, `npm run sync:content`, and `npm run build:wiki` become the stable local interfaces.

- [ ] **Step 1: Import the pinned upstream tree mechanically**

Run:

```bash
vendor_tmp=$(mktemp -d /tmp/aiinfra-quartz-vendor.XXXXXX)
git clone https://github.com/jackyzha0/quartz.git "$vendor_tmp/upstream"
git -C "$vendor_tmp/upstream" checkout 075afd3f712da0088a07f5284a7b3aba37dd61b6
mkdir -p quartz
git -C "$vendor_tmp/upstream" archive HEAD | tar -x -C quartz
git -C "$vendor_tmp/upstream" rev-parse HEAD
```

Expected: the final command prints exactly `075afd3f712da0088a07f5284a7b3aba37dd61b6`; `quartz/.git` does not exist.

- [ ] **Step 2: Record provenance**

Create `quartz/UPSTREAM.md`:

```markdown
# Quartz upstream

- Repository: https://github.com/jackyzha0/quartz
- Version: 5.0.0
- Commit: `075afd3f712da0088a07f5284a7b3aba37dd61b6`
- Imported: 2026-08-14

The directory is a vendored build dependency. To update it, review upstream release notes, import a specific commit, then rerun `npm run check`, `npm run test:publishing`, and `npm run build:wiki` from this directory.
```

- [ ] **Step 3: Add publishing scripts without implementing adapters yet**

Add these entries to the existing `scripts` object in `quartz/package.json`:

```json
"test:publishing": "node --test scripts/*.test.mjs",
"sync:content": "node scripts/sync-vault-content.mjs",
"configure:pages": "node scripts/configure-pages.mjs",
"verify:public": "node scripts/verify-public-boundary.mjs",
"build:wiki": "npm run sync:content && npx quartz plugin install && npx quartz build"
```

Append to `quartz/.gitignore`:

```gitignore
# Generated from the repository-root wiki/ and raw/ sources.
content/
```

Remove the vendored `quartz/content/.gitkeep` from the index when staging because `content/` is generated.

- [ ] **Step 4: Install exactly locked dependencies and run upstream checks**

Run:

```bash
npm --prefix quartz ci
npm --prefix quartz run check
npm --prefix quartz test
```

Expected: npm install completes; TypeScript/Prettier and the upstream Quartz test suite exit 0.

- [ ] **Step 5: Commit the vendored dependency**

```bash
git add quartz
git commit -m "build: vendor Quartz 5 publishing runtime"
```

Expected: the commit includes the pinned Quartz tree but not `quartz/node_modules`, `quartz/content`, or `quartz/public`.

---

### Task 2: Implement whitelist content synchronization with TDD

**Files:**
- Create: `quartz/scripts/sync-vault-content.test.mjs`
- Create: `quartz/scripts/sync-vault-content.mjs`

**Interfaces:**
- Consumes: `syncVaultContent({ sourceRoot: string, contentRoot: string }): Promise<void>`.
- Produces: a clean `contentRoot` containing exactly `index.md`, `wiki/**`, and `raw/**`; CLI defaults to repository root and `quartz/content`.

- [ ] **Step 1: Write failing tests for whitelist copy and stale cleanup**

Create `quartz/scripts/sync-vault-content.test.mjs`:

```js
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
  assert.equal(await readFile(path.join(contentRoot, "raw", "assets", "evidence.txt"), "utf8"), "evidence\n")
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
```

- [ ] **Step 2: Run the test and verify RED**

Run: `cd quartz && node --test scripts/sync-vault-content.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `sync-vault-content.mjs`.

- [ ] **Step 3: Implement the minimal whitelist synchronizer**

Create `quartz/scripts/sync-vault-content.mjs`:

```js
import { cp, lstat, mkdir, opendir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const publishedDirectories = ["wiki", "raw"]
const ignoredNames = new Set([".DS_Store"])

async function rejectSymlinks(target) {
  const stat = await lstat(target)
  if (stat.isSymbolicLink()) throw new Error(`Refusing to publish symbolic link: ${target}`)
  if (!stat.isDirectory()) return
  const directory = await opendir(target)
  for await (const entry of directory) await rejectSymlinks(path.join(target, entry.name))
}

function includeSource(source) {
  return !ignoredNames.has(path.basename(source))
}

export async function syncVaultContent({ sourceRoot, contentRoot }) {
  for (const directory of publishedDirectories) {
    const source = path.join(sourceRoot, directory)
    const stat = await lstat(source)
    if (!stat.isDirectory()) throw new Error(`Missing source directory: ${source}`)
    await rejectSymlinks(source)
  }

  await rm(contentRoot, { recursive: true, force: true })
  await mkdir(contentRoot, { recursive: true })
  for (const directory of publishedDirectories) {
    await cp(path.join(sourceRoot, directory), path.join(contentRoot, directory), {
      recursive: true,
      dereference: false,
      filter: includeSource,
    })
  }
  await writeFile(
    path.join(contentRoot, "index.md"),
    "# AI Infra 知识库\n\n面向 AI infra、AI 芯片、数据服务与机器人基础设施的研究知识库。\n\n- [进入 Wiki](wiki/index.md)\n- [浏览原始资料](raw/)\n",
  )
}

const scriptPath = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  const quartzRoot = path.resolve(path.dirname(scriptPath), "..")
  await syncVaultContent({
    sourceRoot: path.resolve(quartzRoot, ".."),
    contentRoot: path.join(quartzRoot, "content"),
  })
}
```

- [ ] **Step 4: Run the tests and verify GREEN**

Run: `cd quartz && node --test scripts/sync-vault-content.test.mjs`

Expected: 3 tests pass, 0 fail.

- [ ] **Step 5: Commit the synchronizer**

```bash
git add quartz/scripts/sync-vault-content.mjs quartz/scripts/sync-vault-content.test.mjs quartz/package.json quartz/.gitignore
git commit -m "feat: sync only public wiki content"
```

---

### Task 3: Configure the Quartz site and GitHub Pages URL

**Files:**
- Create: `quartz/scripts/configure-pages.test.mjs`
- Create: `quartz/scripts/configure-pages.mjs`
- Create: `quartz/quartz.config.yaml`
- Create: `quartz/scripts/publishing-config.test.mjs`

**Interfaces:**
- Consumes: `configurePages({ configPath: string, baseUrl: string }): Promise<void>`.
- Produces: a validated protocol-free Quartz `configuration.baseUrl`; standard Chinese Quartz site configuration with search, graph, backlinks, RSS, sitemap, explorer, table of contents, and dark mode.

- [ ] **Step 1: Write failing tests for Pages URL configuration**

Create `quartz/scripts/configure-pages.test.mjs`:

```js
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
```

- [ ] **Step 2: Run the test and verify RED**

Run: `cd quartz && node --test scripts/configure-pages.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `configure-pages.mjs`.

- [ ] **Step 3: Implement the Pages configurator**

Create `quartz/scripts/configure-pages.mjs`:

```js
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

export async function configurePages({ configPath, baseUrl }) {
  if (!baseUrl || baseUrl.includes("://") || baseUrl.startsWith("/") || baseUrl.endsWith("/")) {
    throw new Error(`Invalid Quartz baseUrl: ${baseUrl}`)
  }
  const config = YAML.parse(await readFile(configPath, "utf8"))
  if (!config?.configuration) throw new Error("Quartz configuration section is missing")
  config.configuration.baseUrl = baseUrl
  await writeFile(configPath, YAML.stringify(config))
}

const scriptPath = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  const flagIndex = process.argv.indexOf("--base-url")
  const baseUrl = flagIndex >= 0 ? process.argv[flagIndex + 1] : undefined
  await configurePages({
    configPath: path.resolve(path.dirname(scriptPath), "..", "quartz.config.yaml"),
    baseUrl,
  })
}
```

- [ ] **Step 4: Run the configurator tests and verify GREEN**

Run: `cd quartz && node --test scripts/configure-pages.test.mjs`

Expected: 2 tests pass, 0 fail.

- [ ] **Step 5: Write the site configuration contract test and verify RED**

Create `quartz/scripts/publishing-config.test.mjs` with the test shown in Step 7, then run:

`cd quartz && node --test scripts/publishing-config.test.mjs`

Expected: FAIL with `ENOENT` for `quartz.config.yaml`.

- [ ] **Step 6: Create the site configuration from the upstream Obsidian template**

Copy `quartz/cli/templates/obsidian.yaml` to `quartz.config.yaml`, then make these exact configuration changes:

```yaml
configuration:
  pageTitle: AI Infra 知识库
  pageTitleSuffix: ""
  enableSPA: true
  enablePopovers: true
  analytics:
    provider: null
  locale: zh-CN
  baseUrl: localhost
  ignorePatterns:
    - .DS_Store
```

Keep these plugins enabled: `obsidian-flavored-markdown`, `github-flavored-markdown`, `table-of-contents`, `crawl-links`, `content-index` with RSS and sitemap, `content-page`, `folder-page`, `explorer`, `graph`, `search`, `backlinks`, `page-title`, `darkmode`, `breadcrumbs`, and `footer`. Disable `encrypted-pages`, `comments`, and `cname`. Replace the footer link map with:

```yaml
links:
  Wiki 首页: /wiki/index
```

- [ ] **Step 7: Run the site configuration contract test and verify GREEN**

The `quartz/scripts/publishing-config.test.mjs` file created in Step 5 contains:

```js
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
```

Run: `cd quartz && node --test scripts/publishing-config.test.mjs`

Expected: 1 test passes, 0 fail. If it fails, correct only the YAML values named by the failure.

- [ ] **Step 8: Commit site configuration**

```bash
git add quartz/quartz.config.yaml quartz/scripts/configure-pages.mjs quartz/scripts/configure-pages.test.mjs quartz/scripts/publishing-config.test.mjs
git commit -m "feat: configure Quartz for AI Infra Wiki"
```

---

### Task 4: Verify the built artifact boundary with TDD

**Files:**
- Create: `quartz/scripts/verify-public-boundary.test.mjs`
- Create: `quartz/scripts/verify-public-boundary.mjs`

**Interfaces:**
- Consumes: `verifyPublicBoundary({ publicRoot: string, requiredPaths?: string[] }): Promise<void>`.
- Produces: success only when required output exists and no output path contains a forbidden source-directory segment; CLI validates `quartz/public` with representative Wiki and Raw output.

- [ ] **Step 1: Write failing verifier tests**

Create `quartz/scripts/verify-public-boundary.test.mjs`:

```js
import assert from "node:assert/strict"
import { mkdir, mkdtemp, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import { verifyPublicBoundary } from "./verify-public-boundary.mjs"

async function publicFixture() {
  const publicRoot = await mkdtemp(path.join(tmpdir(), "quartz-public-"))
  await mkdir(path.join(publicRoot, "wiki"), { recursive: true })
  await mkdir(path.join(publicRoot, "raw", "assets"), { recursive: true })
  await writeFile(path.join(publicRoot, "index.html"), "home")
  await writeFile(path.join(publicRoot, "wiki", "index.html"), "wiki")
  await writeFile(path.join(publicRoot, "raw", "assets", "evidence.txt"), "raw")
  return publicRoot
}

test("accepts Quartz runtime output plus wiki and raw", async () => {
  const publicRoot = await publicFixture()
  await verifyPublicBoundary({
    publicRoot,
    requiredPaths: ["index.html", "wiki/index.html", "raw/assets/evidence.txt"],
  })
})

test("rejects output paths derived from private source directories", async () => {
  const publicRoot = await publicFixture()
  await mkdir(path.join(publicRoot, "local_research"))
  await writeFile(path.join(publicRoot, "local_research", "secret.html"), "secret")
  await assert.rejects(verifyPublicBoundary({ publicRoot }), /Forbidden published path/)
})

test("rejects an incomplete artifact", async () => {
  const publicRoot = await publicFixture()
  await assert.rejects(
    verifyPublicBoundary({ publicRoot, requiredPaths: ["missing.html"] }),
    /Missing required output/,
  )
})
```

- [ ] **Step 2: Run the verifier test and verify RED**

Run: `cd quartz && node --test scripts/verify-public-boundary.test.mjs`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `verify-public-boundary.mjs`.

- [ ] **Step 3: Implement the output verifier**

Create `quartz/scripts/verify-public-boundary.mjs`:

```js
import { access, opendir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const forbiddenSegments = new Set([
  "local_research",
  "Clippings",
  ".obsidian",
  ".claude",
  ".claudian",
  ".gstack",
  ".git",
  "横纵研究报告",
])

async function inspectDirectory(root, directory = root) {
  const handle = await opendir(directory)
  for await (const entry of handle) {
    const target = path.join(directory, entry.name)
    const relative = path.relative(root, target)
    if (relative.split(path.sep).some((segment) => forbiddenSegments.has(segment))) {
      throw new Error(`Forbidden published path: ${relative}`)
    }
    if (entry.isDirectory()) await inspectDirectory(root, target)
  }
}

export async function verifyPublicBoundary({ publicRoot, requiredPaths = ["index.html", "wiki/index.html"] }) {
  for (const relative of requiredPaths) {
    try {
      await access(path.join(publicRoot, relative))
    } catch {
      throw new Error(`Missing required output: ${relative}`)
    }
  }
  await inspectDirectory(publicRoot)
}

const scriptPath = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  const quartzRoot = path.resolve(path.dirname(scriptPath), "..")
  await verifyPublicBoundary({
    publicRoot: path.join(quartzRoot, "public"),
    requiredPaths: [
      "index.html",
      "wiki/index.html",
      "raw/sources/2026-08-09-oneflow-docs.html",
      "raw/assets/2026-08-12-智算云平台参考.png",
    ],
  })
}
```

- [ ] **Step 4: Run the tests and verify GREEN**

Run: `cd quartz && node --test scripts/verify-public-boundary.test.mjs`

Expected: 3 tests pass, 0 fail.

- [ ] **Step 5: Commit the verifier**

```bash
git add quartz/scripts/verify-public-boundary.mjs quartz/scripts/verify-public-boundary.test.mjs
git commit -m "test: enforce published artifact boundary"
```

---

### Task 5: Add the GitHub Pages workflow with a contract test

**Files:**
- Modify: `quartz/scripts/publishing-config.test.mjs`
- Create: `.github/workflows/deploy-pages.yml`

**Interfaces:**
- Consumes: the npm scripts and adapter CLIs from Tasks 1–4.
- Produces: automatic deployment on `main` and manual deployment; dynamic `baseUrl` and `baseDir`; only `quartz/public` uploaded.

- [ ] **Step 1: Add a failing workflow contract test**

Append to `quartz/scripts/publishing-config.test.mjs`:

```js
test("deploys only the verified Quartz public directory to GitHub Pages", async () => {
  const workflowPath = path.resolve(quartzRoot, "..", ".github", "workflows", "deploy-pages.yml")
  const workflow = await readFile(workflowPath, "utf8")
  assert.match(workflow, /branches:\s*\n\s*- main/)
  assert.match(workflow, /workflow_dispatch:/)
  assert.match(workflow, /pages: write/)
  assert.match(workflow, /id-token: write/)
  assert.match(workflow, /npm run test:publishing/)
  assert.match(workflow, /npm run sync:content/)
  assert.match(workflow, /npm run configure:pages -- --base-url/)
  assert.match(workflow, /npx quartz build --baseDir/)
  assert.match(workflow, /npm run verify:public/)
  assert.match(workflow, /path: quartz\/public/)
  assert.doesNotMatch(workflow, /path:\s*\./)
})
```

Run: `cd quartz && node --test scripts/publishing-config.test.mjs`

Expected: FAIL with `ENOENT` for `.github/workflows/deploy-pages.yml`.

- [ ] **Step 2: Create the minimal official Pages workflow**

Create `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy AI Infra Wiki to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      QUARTZ_BASE_URL: ${{ format('{0}.github.io/{1}', github.repository_owner, github.event.repository.name) }}
      QUARTZ_BASE_DIR: ${{ format('/{0}', github.event.repository.name) }}
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v6
        with:
          node-version: 24
          cache: npm
          cache-dependency-path: quartz/package-lock.json
      - name: Install dependencies
        working-directory: quartz
        run: npm ci
      - name: Test publishing boundary
        working-directory: quartz
        run: npm run test:publishing
      - name: Synchronize public knowledge
        working-directory: quartz
        run: npm run sync:content
      - name: Configure GitHub Pages URL
        working-directory: quartz
        run: npm run configure:pages -- --base-url "$QUARTZ_BASE_URL"
      - name: Install Quartz plugins
        working-directory: quartz
        run: npx quartz plugin install
      - name: Build Quartz
        working-directory: quartz
        run: npx quartz build --baseDir "$QUARTZ_BASE_DIR"
      - name: Verify built artifact
        working-directory: quartz
        run: npm run verify:public
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: quartz/public

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Run the workflow contract test and verify GREEN**

Run: `cd quartz && node --test scripts/publishing-config.test.mjs`

Expected: 2 tests pass, 0 fail.

- [ ] **Step 4: Commit the workflow**

```bash
git add .github/workflows/deploy-pages.yml quartz/scripts/publishing-config.test.mjs
git commit -m "ci: deploy Quartz site to GitHub Pages"
```

---

### Task 6: Build the complete knowledge base and resolve adapter compatibility

**Files:**
- Modify if needed: `quartz/quartz.config.yaml`
- Modify if needed: `quartz/scripts/sync-vault-content.mjs`
- Modify if needed: `quartz/scripts/verify-public-boundary.mjs`
- Test: all files under `quartz/scripts/*.test.mjs`

**Interfaces:**
- Consumes: repository-root `wiki/` and `raw/` plus Tasks 1–5.
- Produces: a locally verified `quartz/public/` artifact that behaves like the Pages build.

- [ ] **Step 1: Run all publishing tests**

Run: `npm --prefix quartz run test:publishing`

Expected: every publishing test passes with 0 failures.

- [ ] **Step 2: Synchronize the real knowledge base**

Run: `npm --prefix quartz run sync:content`

Expected: `quartz/content` has only the top-level entries `index.md`, `wiki`, and `raw`; `test ! -e quartz/content/local_research` exits 0.

- [ ] **Step 3: Install plugins and build using the eventual repository subpath**

Run:

```bash
cd quartz
npx quartz plugin install
npx quartz build --baseDir /AIInfraWiki
```

Expected: exit 0 and `quartz/public/index.html` exists. If Quartz reports a content-specific incompatibility, add a failing regression test for the smallest adapter behavior that can fix it, confirm RED, modify only the adapter/configuration, and rerun until GREEN. Do not edit `wiki/` or `raw/` semantics.

- [ ] **Step 4: Verify the real artifact**

Run: `npm --prefix quartz run verify:public`

Expected: exit 0; representative Wiki HTML, Raw Markdown HTML, and Raw image output exist; forbidden directory segments are absent.

- [ ] **Step 5: Verify project subpath references**

Run:

```bash
rg -n 'href="/AIInfraWiki/|src="/AIInfraWiki/' quartz/public/index.html quartz/public/wiki/index.html
! rg -n 'href="/(static|wiki|raw)/|src="/(static|wiki|raw)/' quartz/public/index.html quartz/public/wiki/index.html
```

Expected: the first command finds `/AIInfraWiki/` resource or navigation URLs; the second exits 0 because no unprefixed root URLs remain in the representative pages.

- [ ] **Step 6: Run upstream type, format, and test checks**

Run:

```bash
npm --prefix quartz run check
npm --prefix quartz test
```

Expected: both commands exit 0.

- [ ] **Step 7: Commit compatibility fixes, if any**

```bash
git add quartz/quartz.config.yaml quartz/scripts
git commit -m "fix: support AI Infra Wiki content in Quartz"
```

Skip this commit only if `git diff --quiet -- quartz/quartz.config.yaml quartz/scripts` exits 0.

---

### Task 7: Version the publishable knowledge sources and perform final verification

**Files:**
- Add: `wiki/**`
- Add: `raw/**`
- Verify only: all implementation and workflow files from Tasks 1–6

**Interfaces:**
- Consumes: complete local Wiki and Raw trees.
- Produces: a Git revision that GitHub Actions can check out and deploy without any local-only files.

- [ ] **Step 1: Stage only the publishable knowledge sources**

Run:

```bash
git add wiki raw
git status --short
```

Expected: `wiki/**` and `raw/**` are staged. Local-only directories may remain untracked but are not staged.

- [ ] **Step 2: Commit the knowledge source snapshot**

```bash
git commit -m "content: add public AI Infra knowledge base"
```

Expected: commit succeeds and contains `wiki/**` plus `raw/**` only.

- [ ] **Step 3: Reproduce CI from a clean tracked-file export**

Run:

```bash
verify_tmp=$(mktemp -d /tmp/aiinfra-pages-verify.XXXXXX)
git archive HEAD | tar -x -C "$verify_tmp"
npm --prefix "$verify_tmp/quartz" ci
npm --prefix "$verify_tmp/quartz" run test:publishing
npm --prefix "$verify_tmp/quartz" run sync:content
cd "$verify_tmp/quartz"
npx quartz plugin install
npx quartz build --baseDir /AIInfraWiki
npm run verify:public
```

Expected: every command exits 0 using only committed files. This proves the workflow does not depend on untracked local state.

- [ ] **Step 4: Audit committed paths**

Run:

```bash
git ls-tree -r --name-only HEAD | rg '^(local_research|Clippings|\.obsidian|\.claude|\.claudian|\.gstack|横纵研究报告)/'
```

Expected: no output and exit 1. The only knowledge-source prefixes in the commit are `wiki/` and `raw/`; implementation prefixes are `quartz/`, `.github/`, and `docs/superpowers/`.

- [ ] **Step 5: Run final local verification**

Run:

```bash
npm --prefix quartz run test:publishing
npm --prefix quartz run sync:content
cd quartz
npx quartz build --baseDir /AIInfraWiki
npm run verify:public
npm run check
npm test
```

Expected: publishing tests, build, artifact boundary, type/format check, and upstream test suite all exit 0 with zero test failures.

- [ ] **Step 6: Report the GitHub handoff**

Report the final commit, the exact GitHub Pages setup step (`Settings → Pages → Source: GitHub Actions`), and whether a remote repository/push still needs to be created. Do not create a public repository or push externally unless the user explicitly authorizes that external action.
