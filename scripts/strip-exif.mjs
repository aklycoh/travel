// strip-exif.mjs — remove EXIF/XMP/IPTC metadata from web JPEGs (dependency-free)
//
// The photos published under assets/images/ must not carry EXIF metadata:
// originals shot on a phone embed precise GPS coordinates, capture time, and
// device model, and `sips` conversion preserves all of it. This script walks
// every JPEG in assets/images/*/{large,medium,thumb}/ and rewrites the file
// without APP1 (EXIF + XMP) and APP13 (IPTC/Photoshop) segments. APP0 (JFIF)
// and APP2 (ICC color profile) are kept so colors are unaffected.
//
// Safety: if a file's EXIF Orientation tag is set to anything but 1 ("normal"),
// its pixels rely on the tag for correct rotation, and stripping alone would
// make it display sideways. Such files are reported and left untouched unless
// --bake is passed, which rotates the pixels with `sips -r` and then strips in
// the same pass. (`sips -r` rotates pixels but leaves the stale tag in place,
// so rotating and stripping MUST happen together — never run `sips -r` alone.)
//
// Usage (from the repository root):
//   node scripts/strip-exif.mjs            # strip files that need no rotation
//   node scripts/strip-exif.mjs --bake     # also rotate+strip tagged portraits
//   node scripts/strip-exif.mjs --check    # report only, exit 1 if EXIF found
//
// validate-data.mjs runs the same check in CI, so shipping EXIF fails the build.

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = join(root, "assets", "images");
const checkOnly = process.argv.includes("--check");
const bake = process.argv.includes("--bake");

// Clockwise degrees needed to bake each EXIF orientation into the pixels.
// Mirrored orientations (2,4,5,7) never come out of a phone camera roll and
// are left for manual handling.
const BAKE_DEGREES = { 3: 180, 6: 90, 8: 270 };

// Parses the EXIF Orientation tag (0x0112) out of an APP1 Exif payload.
// Returns 1 when absent so callers only special-case real rotations.
function exifOrientation(payload) {
  // payload starts after the "Exif\0\0" header: a TIFF block.
  const tiff = payload.subarray(6);
  if (tiff.length < 8) return 1;
  const le = tiff[0] === 0x49; // "II" little-endian vs "MM" big-endian
  const u16 = (o) => (le ? tiff.readUInt16LE(o) : tiff.readUInt16BE(o));
  const u32 = (o) => (le ? tiff.readUInt32LE(o) : tiff.readUInt32BE(o));
  const ifd = u32(4);
  if (ifd + 2 > tiff.length) return 1;
  const count = u16(ifd);
  for (let i = 0; i < count; i++) {
    const entry = ifd + 2 + i * 12;
    if (entry + 12 > tiff.length) break;
    if (u16(entry) === 0x0112) return u16(entry + 8);
  }
  return 1;
}

// Splits a JPEG into header segments + entropy-coded tail, drops metadata
// segments, and reports what it found. Returns null for non-JPEG data.
function strip(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  const kept = [buf.subarray(0, 2)];
  let hadMeta = false;
  let orientation = 1;
  let o = 2;
  while (o + 4 <= buf.length && buf[o] === 0xff) {
    const marker = buf[o + 1];
    if (marker === 0xda) break; // SOS — entropy data follows, copy verbatim
    const len = buf.readUInt16BE(o + 2);
    const seg = buf.subarray(o, o + 2 + len);
    const isExif = marker === 0xe1 && seg.subarray(4, 10).toString("latin1") === "Exif\0\0";
    if (isExif) orientation = exifOrientation(seg.subarray(4));
    if (marker === 0xe1 || marker === 0xed) hadMeta = true; // APP1, APP13
    else kept.push(seg);
    o += 2 + len;
  }
  kept.push(buf.subarray(o));
  return { out: Buffer.concat(kept), hadMeta, orientation };
}

const dirty = [];
const rotated = [];
let cleaned = 0;
let scanned = 0;

for (const region of (await readdir(imagesDir, { withFileTypes: true })).filter((d) => d.isDirectory())) {
  for (const tier of ["large", "medium", "thumb"]) {
    const dir = join(imagesDir, region.name, tier);
    if (!existsSync(dir)) continue;
    for (const file of (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f))) {
      const path = join(dir, file);
      const rel = `${region.name}/${tier}/${file}`;
      let result = strip(await readFile(path));
      scanned += 1;
      if (!result?.hadMeta) continue;
      if (result.orientation !== 1) {
        const degrees = BAKE_DEGREES[result.orientation];
        if (!bake || checkOnly || !degrees) {
          rotated.push(`${rel} (orientation ${result.orientation})`);
          continue;
        }
        execFileSync("sips", ["-r", String(degrees), path], { stdio: "ignore" });
        result = strip(await readFile(path));
      }
      dirty.push(rel);
      if (!checkOnly) {
        await writeFile(path, result.out);
        cleaned += 1;
      }
    }
  }
}

if (rotated.length) {
  console.error(`SKIPPED — bake rotation with sips first:\n${rotated.join("\n")}`);
}

if (checkOnly) {
  if (dirty.length) {
    console.error(`EXIF metadata found in ${dirty.length} of ${scanned} images:\n${dirty.slice(0, 10).join("\n")}${dirty.length > 10 ? "\n…" : ""}`);
    process.exit(1);
  }
  console.log(`OK — ${scanned} images clean`);
} else {
  console.log(`Stripped ${cleaned} of ${scanned} images${rotated.length ? `, skipped ${rotated.length}` : ""}`);
  if (rotated.length) process.exit(1);
}
