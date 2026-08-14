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