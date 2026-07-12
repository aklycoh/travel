import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";

const MAX_LARGE_DIM = 1800;

// Pure-Node JPEG dimension reader (no `sips`, so it also runs on Linux CI).
// Scans marker segments for a Start-Of-Frame (SOFn) and reads width/height.
function jpegDimensions(path) {
  const buf = readFileSync(path);
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null; // not JPEG
  let off = 2;
  while (off < buf.length) {
    if (buf[off] !== 0xff) {
      off++;
      continue;
    }
    let marker = buf[off + 1];
    while (marker === 0xff) {
      off++;
      marker = buf[off + 1];
    }
    off += 2;
    // Standalone markers carry no length field.
    if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) {
      continue;
    }
    if (off + 2 > buf.length) break;
    const len = buf.readUInt16BE(off);
    // SOF0..SOF15 (0xC0-0xCF) except DHT(C4), JPG(C8), DAC(CC).
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const height = buf.readUInt16BE(off + 3);
      const width = buf.readUInt16BE(off + 5);
      return { width, height };
    }
    off += len;
  }
  return null;
}

global.window = {};

const require = createRequire(import.meta.url);
require("../assets/js/site-data.js");
require("../assets/js/image-widths.js");

const data = window.TRAVEL_DATA;
const imageWidths = window.TRAVEL_IMAGE_WIDTHS || {};
const missing = [];
const photoIds = new Set(Object.keys(data.photos || {}));

if (data.home?.hero && !photoIds.has(data.home.hero)) {
  missing.push(`missing home hero ${data.home.hero}`);
}

for (const region of data.regions || []) {
  for (const themeId of region.themes || []) {
    if (!data.themes?.[themeId]) missing.push(`missing theme ${region.id}:${themeId}`);
  }

  for (const id of [region.hero, ...(region.featurePhotos || [])]) {
    if (!photoIds.has(id)) missing.push(`missing region photo ${region.id}:${id}`);
  }
}

for (const [themeId, theme] of Object.entries(data.themes || {})) {
  if (theme.hero && !photoIds.has(theme.hero)) missing.push(`missing theme hero ${themeId}:${theme.hero}`);

  for (const id of theme.photoIds || []) {
    if (!photoIds.has(id)) missing.push(`missing photo ${themeId}:${id}`);
  }
}

for (const [id, photo] of Object.entries(data.photos || {})) {
  if (!photo.region) {
    missing.push(`missing region ${id}`);
    continue;
  }

  if (!photo.file) {
    missing.push(`missing file name ${id}`);
    continue;
  }

  const widthKey = `${photo.region}/${photo.file}`;
  const recordedWidths = imageWidths[widthKey];
  if (!recordedWidths) missing.push(`missing image width manifest entry ${id}:${widthKey}`);

  for (const size of ["large", "medium", "thumb"]) {
    const path = `assets/images/${photo.region}/${size}/${photo.file}`;
    if (!existsSync(path)) {
      missing.push(`missing file ${id}:${path}`);
      continue;
    }
    const dimensions = jpegDimensions(path);
    if (!dimensions) {
      missing.push(`invalid JPEG ${id}:${path}`);
      continue;
    }
    if (recordedWidths && recordedWidths[size] !== dimensions.width) {
      missing.push(`stale image width ${id}:${size} manifest=${recordedWidths[size]} actual=${dimensions.width}`);
    }
    if (size === "large") {
      const side = Math.max(dimensions.width, dimensions.height);
      if (side > MAX_LARGE_DIM) {
        missing.push(`oversize large ${id}:${path} is ${side}px (> ${MAX_LARGE_DIM}px)`);
      }
    }
  }
}

const expectedWidthKeys = new Set(Object.values(data.photos || {}).map((photo) => `${photo.region}/${photo.file}`));
for (const key of Object.keys(imageWidths)) {
  if (!expectedWidthKeys.has(key)) missing.push(`orphan image width manifest entry ${key}`);
}

// Page shells: every region/theme in the data must have an HTML shell with the
// right body data attributes, and all shells must share one ?v= asset version.
// (The renderer 404s silently on a missing shell, so this is the only guard.)
function shellCheck(path, page, regionId, themeId) {
  if (!existsSync(path)) {
    missing.push(`missing shell ${path}`);
    return null;
  }
  const html = readFileSync(path, "utf8");
  const body = html.match(/<body[^>]*>/)?.[0] || "";
  const attr = (name) => body.match(new RegExp(`data-${name}="([^"]*)"`))?.[1];
  if (attr("page") !== page) missing.push(`${path}: data-page should be "${page}"`);
  if (regionId && attr("region") !== regionId) missing.push(`${path}: data-region should be "${regionId}"`);
  if (themeId && attr("theme") !== themeId) missing.push(`${path}: data-theme should be "${themeId}"`);
  const depth = path.split("/").length - 1;
  const base = depth === 0 ? "./" : "../".repeat(depth);
  if (attr("base") !== base) missing.push(`${path}: data-base should be "${base}"`);
  if (!html.includes("<!-- meta:start")) missing.push(`${path}: missing meta block (run scripts/build-meta.mjs)`);
  for (const asset of ["styles.css", "site-data.js", "image-widths.js", "app.js"]) {
    if (!html.includes(`${asset}?v=`)) missing.push(`${path}: missing versioned ${asset}`);
  }
  return [...html.matchAll(/\?v=([\w.-]+)/g)].map((m) => m[1]);
}

const versions = new Set();
for (const shell of [
  { path: "index.html", page: "home" },
  ...(data.regions || []).flatMap((region) => [
    { path: `${region.id}/index.html`, page: "region", regionId: region.id },
    ...(region.themes || []).map((themeId) => {
      const theme = data.themes?.[themeId];
      return {
        path: `${region.id}/${theme?.path || themeId}/index.html`,
        page: "theme",
        regionId: region.id,
        themeId
      };
    })
  ])
]) {
  for (const v of shellCheck(shell.path, shell.page, shell.regionId, shell.themeId) || []) {
    versions.add(v);
  }
}
if (versions.size > 1) {
  missing.push(`inconsistent asset versions: ${[...versions].join(", ")} (run scripts/bump-version.mjs)`);
}

// Published images must not carry EXIF/GPS metadata.
try {
  execFileSync(process.execPath, ["scripts/strip-exif.mjs", "--check"], { stdio: "pipe" });
} catch (error) {
  missing.push(String(error.stderr || "strip-exif --check failed").trim());
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log("OK");
