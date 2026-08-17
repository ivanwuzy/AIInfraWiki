# AIInfraWiki 同仓库公开 Pages 设计

## 目标

在现阶段使用单一公开仓库 `ivanwuzy/AIInfraWiki` 承载完整知识库，并由该仓库的 GitHub Actions 直接构建并部署 Quartz 到 GitHub Pages，供完整功能测试。

## 已确认的边界

- `AIInfraWiki` 保持公开；已提交的 `raw/`、`wiki/`、附件、Quartz 源码和 Git 历史均可公开访问。
- Quartz 构建继续同步 `wiki/` 和 `raw/`，保留 `Raw:` 证据链接和原始资料浏览能力。
- `local_research/` 继续由根目录 `.gitignore` 排除，不进入 Git 或 Pages 构建。
- 不再向 `ivanwuzy/aiinfra-wiki-pages` 推送，也不使用 `PAGES_DEPLOY_TOKEN`。

## 架构

```text
AIInfraWiki/main (公开)
  └─ GitHub Actions
      ├─ npm ci、发布边界测试、同步 wiki + raw
      ├─ Quartz 构建，base URL = ivanwuzy.github.io/AIInfraWiki
      └─ 官方 GitHub Pages artifact 部署
          └─ https://ivanwuzy.github.io/AIInfraWiki/
```

工作流将使用 `actions/upload-pages-artifact` 和 `actions/deploy-pages`，并授予 `contents: read`、`pages: write`、`id-token: write`。Pages 设置为 GitHub Actions 构建类型。

## 变更范围

- 修改 `.github/workflows/deploy-pages.yml`：移除外部仓库、个人访问令牌及 orphan 推送；改为官方 Pages artifact 部署。
- 修改 `quartz/scripts/publishing-config.test.mjs`：断言同仓库 Pages 部署契约，而非外部发布仓库。
- 保留 `quartz/scripts/sync-vault-content.mjs` 的 `wiki + raw` 当前行为，作为本阶段的明确公开测试策略。
- 将现有 7 个待推送的 Quartz 提交与本次变更一并推送；仅纳入与 Quartz 运行相关的 `quartz/package.json`、`quartz/package-lock.json`，不提交 `.obsidian/` 本地状态。

## 验收标准

1. 发布测试通过，且验证工作流不引用 `aiinfra-wiki-pages`、`peaceiris/actions-gh-pages` 或 `PAGES_DEPLOY_TOKEN`。
2. 工作流在 `main` 上成功运行并部署 Pages。
3. Pages URL 返回站点首页，`/wiki/` 与 `/raw/` 均能访问。
4. Git 工作树中 `.obsidian/graph.json` 和 `.obsidian/workspace.json` 仍保持未提交。

## 后续迁移

引入 Cloudflare 访问控制前，必须先将仓库改回私有或将敏感资料从公开 Git 历史中迁移/重写；仅给 GitHub Pages 加一层访问控制不能撤回已公开的 Git 内容。
