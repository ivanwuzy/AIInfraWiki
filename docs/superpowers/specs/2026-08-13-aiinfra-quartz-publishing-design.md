# AI Infra 知识库 Quartz GitHub Pages 发布设计

## 目标

在当前知识库中增加一个独立的 Quartz 发布工程，并通过 GitHub Pages 自动发布。对外发布的知识内容只允许来自 `wiki/` 和 `raw/`；`local_research/`、`Clippings/`、Obsidian 配置、本地工具状态及其他目录不得进入站点内容或构建产物。

GitHub Pages 默认公开。本设计明确将 `raw/` 中的 Markdown、HTML、PDF、图片和其他附件视为可公开访问内容。

## 架构

```text
知识库根目录
├── wiki/                         # 唯一编译知识源
├── raw/                          # 唯一原始资料与附件源
├── quartz/                       # 独立 Quartz 工程
│   ├── content/                  # 同步生成，不作为知识源
│   ├── public/                   # Quartz 构建产物
│   └── scripts/
│       └── sync-vault-content.mjs
└── .github/workflows/
    └── deploy-pages.yml          # GitHub Pages 自动部署
```

`wiki/` 和 `raw/` 保持原位，不迁移、不改写。`sync-vault-content.mjs` 是发布内容的唯一入口：每次构建先清空 `quartz/content/`，随后只复制 `wiki/` 和 `raw/`。根首页由同步脚本生成，仅提供进入 `wiki/index` 和 `raw/` 的导航，不引入第三类知识内容。

Quartz 从 `content/` 生成 `public/`。GitHub Actions 只上传 `quartz/public/` 作为 Pages artifact，因此源仓库中的其他目录不会被发布。

## GitHub Pages

工作流在推送到 `main` 时自动运行，并支持手动触发。流程为：

1. 检出仓库。
2. 安装锁定的 Node.js 版本与 npm 依赖。
3. 执行内容同步和发布边界检查。
4. 执行 Quartz 构建。
5. 上传静态产物并部署到 GitHub Pages。

站点路径根据 GitHub Actions 提供的仓库信息配置，以兼容 `https://<owner>.github.io/<repo>/` 形式的项目站点。未来启用自定义域名时，只需调整 Quartz 的站点 URL 配置和 Pages 设置，不改变内容同步边界。

工作流使用 GitHub 官方 Pages Actions，并声明部署所需的最小权限：读取仓库内容、写入 Pages、获取 OIDC token。并发部署采用取消旧任务的策略，避免旧提交覆盖新版本。

## 站点功能

采用 Quartz 的标准能力，不引入与发布目标无关的定制系统：

- Markdown 页面渲染和 Obsidian 风格链接处理。
- 全文搜索、目录、反向链接、知识图谱和深色模式。
- RSS、站点地图和基础 SEO 元数据。
- `raw/` 附件的静态访问，以及 Wiki 页面到 Raw 证据的相对链接。

站点名称与首页文案使用 AI infra、AI 芯片、数据服务和机器人基础设施研究语境。

本期不包含登录、权限控制、评论、数据库、Cloudflare、Supabase、自定义后台或复杂主题开发。

## 内容与隐私边界

发布白名单严格为：

- `wiki/**`
- `raw/**`
- 同步脚本生成的根导航页
- Quartz 运行所需的样式、脚本、字体和索引等构建资产

同步脚本不跟随白名单目录中的符号链接，避免链接指向知识库外部内容。复制时排除 `.DS_Store`、版本控制元数据和临时文件。构建前后都执行路径检查；如果发现白名单外的源目录名称、意外顶层内容目录或缺失的核心入口，构建直接失败。

## 测试与验收

实现遵循测试驱动：先为内容同步边界和 Pages 配置写失败测试，再实现最小功能。

自动验收包括：

1. 同步后 `quartz/content/` 只包含 `wiki/`、`raw/` 和生成的根首页。
2. 已知的白名单外目录及其哨兵文件不会进入 `content/` 或 `public/`。
3. 重复同步会删除上一次遗留的文件，且不会修改根目录的 `wiki/`、`raw/`。
4. Quartz 构建成功并生成 `public/index.html`、`wiki/index`、至少一个 Wiki 页面和至少一个 Raw 资源。
5. GitHub Actions 工作流具备 Pages 构建、上传和部署步骤，并能正确处理项目站点子路径。
6. Markdown 内部链接和 Wiki 到 Raw 的代表性证据链接在构建结果中可解析。

本地提供与 CI 相同的检查命令，方便发布前复现失败。

## 失败处理

- 同步发现源目录缺失、符号链接或白名单越界时立即失败，不静默跳过安全问题。
- Quartz 无法处理某个文件名、链接或附件时，记录具体路径；优先修复发布适配层，不改变原始资料语义。
- 构建或测试失败时不部署 Pages，现有线上版本保持不变。
- 若仓库尚未配置 GitHub Pages，工作流文件仍可提交；首次推送后由仓库管理员在 Pages 设置中选择 GitHub Actions 作为发布源。

## 非目标

- 不移动、重命名或批量改写现有知识页面。
- 不发布 `local_research/` 或任何白名单外目录。
- 不建立访问控制；需要私密发布时必须改用支持鉴权的托管方案。
- 不在本期配置自定义域名。
