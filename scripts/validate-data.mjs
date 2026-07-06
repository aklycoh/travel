import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";

const MAX_LARGE_DIM = 1800;

// Pure-Node JPEG dimension reader (no `sips`, so it also runs on Linux CI).
// Scans marker segments for a Start-Of-Frame (SOFn) and reads width/height.
function longestSide(path) {
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
      return Math.max(width, height);
    }
    off += len;
  }
  return null;
}

global.window = {};

const require = createRequire(import.meta.url);
require("../assets/js/site-data.js");

const data = window.TRAVEL_DATA;
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

  for (const size of ["large", "medium", "thumb"]) {
    const path = `assets/images/${photo.region}/${size}/${photo.file}`;
    if (!existsSync(path)) {
      missing.push(`missing file ${id}:${path}`);
      continue;
    }
    if (size === "large") {
      const side = longestSide(path);
      if (side > MAX_LARGE_DIM) {
        missing.push(`oversize large ${id}:${path} is ${side}px (> ${MAX_LARGE_DIM}px)`);
      }
    }
  }
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log("OK");
