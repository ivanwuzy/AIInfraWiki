import assert from "node:assert/strict"
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises"
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
  await writeFile(path.join(publicRoot, "raw", "index.html"), "raw")
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

test("requires raw index output by default", async () => {
  const publicRoot = await publicFixture()
  await rm(path.join(publicRoot, "raw", "index.html"))

  await assert.rejects(
    verifyPublicBoundary({ publicRoot }),
    /Missing required output: raw\/index.html/,
  )
})
