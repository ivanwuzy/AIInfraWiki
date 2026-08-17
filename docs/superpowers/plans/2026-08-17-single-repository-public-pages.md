# Single-Repository Public Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish complete `wiki/` and `raw/` from public `AIInfraWiki` through the same repository's GitHub Pages site.

**Architecture:** A `main` push runs Quartz in `ivanwuzy/AIInfraWiki`, uploads `quartz/public` as a Pages artifact, and deploys it through GitHub's official Pages actions. It has no external deployment repository or personal access token.

**Tech Stack:** Quartz 5, Node 24, npm, GitHub Actions, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`, GitHub CLI.

## Global Constraints

- During testing, all committed `raw/`, `wiki/`, assets, and Pages content are intentionally public.
- `local_research/` remains excluded; never stage `.obsidian/graph.json` or `.obsidian/workspace.json`.
- Preserve the current `wiki + raw` sync behavior.
- Set Quartz `baseUrl` to `ivanwuzy.github.io/AIInfraWiki` and use `--baseDir /AIInfraWiki`.
- Do not reference `aiinfra-wiki-pages`, `peaceiris/actions-gh-pages`, `external_repository`, or `PAGES_DEPLOY_TOKEN`.

---

### Task 1: Define the new deployment contract with a failing test

**Files:**
- Modify: `quartz/scripts/publishing-config.test.mjs`
- Test: `quartz/scripts/publishing-config.test.mjs`

**Interfaces:**
- Consumes: `.github/workflows/deploy-pages.yml` text.
- Produces: a test that requires official same-repository Pages actions.

- [ ] **Step 1: Replace the external-repository test with this failing test**

```js
test("deploys the complete generated site from AIInfraWiki through GitHub Pages", async () => {
  const workflowPath = path.resolve(quartzRoot, "..", ".github", "workflows", "deploy-pages.yml")
  const workflow = await readFile(workflowPath, "utf8")
  assert.match(workflow, /branches:\s*\n\s*- main/)
  assert.match(workflow, /pages: write/)
  assert.match(workflow, /id-token: write/)
  assert.match(workflow, /QUARTZ_BASE_URL: ivanwuzy\.github\.io\/AIInfraWiki/)
  assert.match(workflow, /QUARTZ_BASE_DIR: \/AIInfraWiki/)
  assert.match(workflow, /npm run sync:content/)
  assert.match(workflow, /npx quartz build --baseDir/)
  assert.match(workflow, /actions\/upload-pages-artifact@v3/)
  assert.match(workflow, /path: quartz\/public/)
  assert.match(workflow, /actions\/deploy-pages@v4/)
  assert.doesNotMatch(workflow, /aiinfra-wiki-pages|peaceiris\/actions-gh-pages|PAGES_DEPLOY_TOKEN|external_repository/)
})
```

- [ ] **Step 2: Verify red**

Run: `cd quartz && node --test scripts/publishing-config.test.mjs`

Expected: FAIL because the current workflow still contains the external repository and personal-token deployment.

- [ ] **Step 3: Commit the red test**

```bash
git add quartz/scripts/publishing-config.test.mjs
git commit -m "test: require same-repository Pages deployment"
```

### Task 2: Implement official Pages artifact deployment

**Files:**
- Modify: `.github/workflows/deploy-pages.yml`
- Test: `quartz/scripts/publishing-config.test.mjs`

**Interfaces:**
- Consumes: `quartz/public` produced by `npm run sync:content` and Quartz.
- Produces: a Pages artifact and Pages deployment for `ivanwuzy/AIInfraWiki`.

- [ ] **Step 1: Set workflow-level permissions and concurrency**

```yaml
permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false
```

- [ ] **Step 2: Retain build steps with same-repository URL settings**

```yaml
env:
  QUARTZ_BASE_URL: ivanwuzy.github.io/AIInfraWiki
  QUARTZ_BASE_DIR: /AIInfraWiki
```

Keep the existing `npm ci`, publishing test, sync, configuration, plugin install, Quartz build, and boundary verification steps. Replace the final `peaceiris` step with:

```yaml
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: quartz/public
```

Add a `deploy` job:

```yaml
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

- [ ] **Step 3: Verify green and build the public artifact**

```bash
cd quartz
node --test scripts/publishing-config.test.mjs
npm run test:publishing
npm run sync:content
npx quartz plugin install
npx quartz build --baseDir /AIInfraWiki
npm run verify:public
test -f public/wiki/index.html
test -f public/raw/index.html
test ! -e public/local_research
```

Expected: all tests pass; wiki and raw output exist; no local research output exists.

- [ ] **Step 4: Commit implementation and the Quartz theme dependency files**

```bash
git add .github/workflows/deploy-pages.yml quartz/package.json quartz/package-lock.json
git commit -m "ci: deploy AIInfraWiki through GitHub Pages"
```

### Task 3: Publish and activate Pages

**Files:**
- Modify: GitHub Pages setting for `ivanwuzy/AIInfraWiki`.
- Test: GitHub Actions run and public HTTP endpoints.

**Interfaces:**
- Consumes: pushed `main` and `deploy-pages.yml`.
- Produces: `https://ivanwuzy.github.io/AIInfraWiki/` with public wiki and raw paths.

- [ ] **Step 1: Verify the exact staged and unstaged set**

```bash
git status --short
git log --oneline origin/main..main
git diff --cached --name-only
```

Expected: `.obsidian/graph.json` and `.obsidian/workspace.json` are the only unstaged changes.


- [ ] **Step 2: Set GitHub Pages to GitHub Actions**

Run: `gh api --method POST repos/ivanwuzy/AIInfraWiki/pages -f build_type=workflow`

Expected: a Pages-site response. If it reports an existing site, run `gh api --method PUT repos/ivanwuzy/AIInfraWiki/pages -f build_type=workflow`.

- [ ] **Step 3: Push main**

Run: `git push origin main`

Expected: the seven existing Quartz commits, design/plan documents, test, workflow, and theme dependency changes reach the now-public repository. Pages is already configured before this push, so the first workflow can deploy successfully.

- [ ] **Step 4: Verify the remote deployment**

```bash
gh run watch --repo ivanwuzy/AIInfraWiki --exit-status
gh api repos/ivanwuzy/AIInfraWiki/pages --jq '{html_url,build_type,https_enforced}'
curl --fail --location --output /dev/null https://ivanwuzy.github.io/AIInfraWiki/
curl --fail --location --output /dev/null https://ivanwuzy.github.io/AIInfraWiki/wiki/
curl --fail --location --output /dev/null https://ivanwuzy.github.io/AIInfraWiki/raw/
```

Expected: successful run, `build_type` is `workflow`, and all three URLs return HTTP 200.

- [ ] **Step 5: Confirm local-state preservation**

Run: `git status --short`

Expected: only `.obsidian/graph.json` and `.obsidian/workspace.json` remain modified.

## Plan Self-Review

- Spec coverage: Tasks 1–2 remove external deployment and retain complete raw/wiki publishing; Task 3 publishes, enables Pages, and verifies the site and local-state boundary.
- Placeholder scan: every code change and command is explicit.
- Interface consistency: Task 1's workflow assertions match Task 2's workflow output, which Task 3 deploys.
