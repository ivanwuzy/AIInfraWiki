import assert from "node:assert/strict"
import { mkdtemp, mkdir, writeFile } from "node:fs/promises"
import { request } from "node:http"
import { tmpdir } from "node:os"
import path from "node:path"
import test from "node:test"
import { createStaticServer } from "./serve.mjs"

async function serverFixture() {
  const root = await mkdtemp(path.join(tmpdir(), "quartz-serve-"))
  const publicRoot = path.join(root, "public")
  await mkdir(path.join(publicRoot, "docs"), { recursive: true })
  await writeFile(path.join(publicRoot, "index.html"), "home")
  await writeFile(path.join(publicRoot, "docs", "index.html"), "docs")
  await writeFile(path.join(publicRoot, "secret.txt"), "public")
  await writeFile(path.join(root, "secret.txt"), "private")

  const server = createStaticServer({ publicRoot })
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
  const { port } = server.address()

  return {
    root,
    server,
    url: `http://127.0.0.1:${port}`,
  }
}

function getRawPath(url, requestPath) {
  const target = new URL(url)
  return new Promise((resolve, reject) => {
    const req = request(
      {
        hostname: target.hostname,
        port: target.port,
        path: requestPath,
      },
      (res) => {
        let body = ""
        res.setEncoding("utf8")
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => resolve({ body, status: res.statusCode }))
      },
    )
    req.on("error", reject)
    req.end()
  })
}

test("serves in-root files and directory indexes", async (t) => {
  const { server, url } = await serverFixture()
  t.after(() => server.close())

  const home = await fetch(`${url}/`)
  assert.equal(home.status, 200)
  assert.equal(await home.text(), "home")

  const docs = await fetch(`${url}/docs/`)
  assert.equal(docs.status, 200)
  assert.equal(await docs.text(), "docs")
})

test("rejects traversal attempts including encoded traversal", async (t) => {
  const { server, url } = await serverFixture()
  t.after(() => server.close())

  for (const requestPath of ["/../secret.txt", "/%2e%2e/secret.txt", "/%2e%2e%2fsecret.txt"]) {
    const response = await getRawPath(url, requestPath)
    assert.equal(response.status, 404, requestPath)
    assert.notEqual(response.body, "private", requestPath)
    assert.notEqual(response.body, "public", requestPath)
  }
})
