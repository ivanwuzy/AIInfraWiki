import { createServer } from "node:http"
import { stat } from "node:fs/promises"
import { createReadStream } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const defaultPublicDir = path.join(__dirname, "..", "public")

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
}

function isWithinRoot(root, target) {
  const relative = path.relative(root, target)
  return (
    relative === "" ||
    (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative))
  )
}

function resolveRequestPath(publicRoot, requestUrl) {
  let pathname
  try {
    pathname = decodeURIComponent(requestUrl.split(/[?#]/, 1)[0])
  } catch {
    return null
  }

  const target = path.resolve(publicRoot, `.${pathname}`)
  return isWithinRoot(publicRoot, target) ? target : null
}

export function createStaticServer({ publicRoot = defaultPublicDir } = {}) {
  const resolvedPublicRoot = path.resolve(publicRoot)

  return createServer(async (req, res) => {
    let filePath = resolveRequestPath(resolvedPublicRoot, req.url ?? "/")
    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      res.end("<h1>404</h1>")
      return
    }

    try {
      const st = await stat(filePath)
      if (st.isDirectory()) {
        filePath = path.join(filePath, "index.html")
      }
      const ext = path.extname(filePath).toLowerCase()
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" })
      createReadStream(filePath).pipe(res)
    } catch {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      res.end("<h1>404</h1>")
    }
  })
}

const scriptPath = fileURLToPath(import.meta.url)
if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  const port = process.env.PORT ? parseInt(process.env.PORT) : 8080
  createStaticServer().listen(port, "127.0.0.1", () => {
    console.log(`Serving Quartz at http://127.0.0.1:${port}`)
  })
}
