import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import { createReadStream } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, "..", "public")
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080

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

createServer(async (req, res) => {
  let filePath = path.join(publicDir, req.url === "/" ? "index.html" : req.url.slice(1))
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
}).listen(port, () => {
  console.log(`Serving Quartz at http://localhost:${port}`)
})