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
    ],
  })
}