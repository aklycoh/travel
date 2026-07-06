// process-images.mjs — responsive image tier generator (dependency-free)
//
// Generates the three web image tiers used by the site from the canonical
// `large` master JPEGs (which are themselves produced from `_raw_photos/` per
// AGENTS.md). For every `assets/images/<region>/large/<file>.jpeg` it produces:
//
//   large   ≤1800px longest side  (source of truth, left untouched here)
//   medium  ≤ 900px longest side  → assets/images/<region>/medium/<file>
//   thumb   ≤ 640px longest side  → assets/images/<region>/thumb/<file>
//
// It shells out to macOS `sips` (no npm deps). Existing tier files are skipped
// so runs are deterministic and cause no churn; pass --force to rebuild them
// from the current large masters.
//
// If `cwebp` is installed it ALSO emits a `.webp` sibling for every JPEG in all
// three tiers. If `cwebp` is absent, WebP generation is skipped silently — no
// tool is installed. (`avifenc` is detected too but only cwebp output is wired
// into app.js.)
//
// Usage:
//   node scripts/process-images.mjs            # all regions
//   node scripts/process-images.mjs chengdu    # one or more specific regions
//   node scripts/process-images.mjs --force    # ignore up-to-date checks
//
// Run from the repository root.

import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFile, execFileSync } from "node:child_process";
import { promisify } from "node:util";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const run = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "assets", "images");

const TIERS = {
  medium: 900,
  thumb: 640
};

function has(bin) {
  try {
    // `which` exits 0 when the binary is found on PATH.
    execFileSync("which", [bin], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

const HAS_CWEBP = has("cwebp");
const HAS_AVIFENC = has("avifenc");

const args = process.argv.slice(2);
const force = args.includes("--force");
const regionArgs = args.filter((a) => !a.startsWith("--"));

// A destination is (re)built only when it is missing, or when --force is set.
// This keeps runs deterministic and avoids re-encoding (churning) tiers that
// already exist. Use --force to regenerate everything from the current large
// masters after replacing source images.
function needsBuild(dest) {
  return force || !existsSync(dest);
}

async function makeJpeg(src, dest, maxDim) {
  await run("sips", ["-s", "format", "jpeg", "-Z", String(maxDim), src, "--out", dest]);
}

async function makeWebp(src, dest) {
  // src is an already-sized JPEG tier, so encode 1:1 at quality 82.
  await run("cwebp", ["-quiet", "-q", "82", src, "-o", dest]);
}

async function processRegion(region) {
  const largeDir = join(imagesDir, region, "large");
  if (!existsSync(largeDir)) return { region, done: 0, skipped: 0 };

  const files = (await readdir(largeDir)).filter((f) => f.toLowerCase().endsWith(".jpeg"));
  let done = 0;
  let skipped = 0;

  for (const tier of Object.keys(TIERS)) {
    await mkdir(join(imagesDir, region, tier), { recursive: true });
  }

  for (const file of files) {
    const src = join(largeDir, file);

    for (const [tier, maxDim] of Object.entries(TIERS)) {
      const dest = join(imagesDir, region, tier, file);
      if (needsBuild(dest)) {
        await makeJpeg(src, dest, maxDim);
        done++;
      } else {
        skipped++;
      }
    }

    // WebP siblings for all three tiers (large included) when cwebp exists.
    if (HAS_CWEBP) {
      const tierSources = {
        large: src,
        medium: join(imagesDir, region, "medium", file),
        thumb: join(imagesDir, region, "thumb", file)
      };
      for (const [tier, tierSrc] of Object.entries(tierSources)) {
        const dest = join(imagesDir, region, tier, file.replace(/\.jpeg$/i, ".webp"));
        if (needsBuild(dest)) {
          await makeWebp(tierSrc, dest);
          done++;
        } else {
          skipped++;
        }
      }
    }
  }

  return { region, done, skipped };
}

const regions = regionArgs.length
  ? regionArgs
  : (await readdir(imagesDir, { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name);

console.log(`Tools: cwebp=${HAS_CWEBP ? "yes" : "no"} avifenc=${HAS_AVIFENC ? "yes" : "no"}`);
if (!HAS_CWEBP) console.log("cwebp not found — generating JPEG tiers only (no WebP).");

for (const region of regions) {
  const { done, skipped } = await processRegion(region);
  console.log(`${region}: ${done} generated, ${skipped} up to date`);
}

console.log("Done.");
