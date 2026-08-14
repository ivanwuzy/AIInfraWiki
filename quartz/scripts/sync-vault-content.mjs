import { cp, lstat, mkdir, opendir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const publishedDirectories = ["wiki", "raw"]
const ignoredNames = new Set([".DS_Store", ".gitkeep"])

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