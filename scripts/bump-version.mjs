import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const version = process.argv[2];

if (!version) {
  console.error("Usage: node scripts/bump-version.mjs <version>");
  process.exit(1);
}

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "_raw_photos") continue;

    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await htmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith(".html") && entry.name !== "style-review.html") {
      files.push(path);
    }
  }

  return files;
}

const files = await htmlFiles(".");
const versionPattern = /(\b(?:styles\.css|site-data\.js|app\.js)\?v=)[^"']+/g;

for (const file of files) {
  const before = await readFile(file, "utf8");
  const after = before.replace(versionPattern, `$1${version}`);
  if (after !== before) {
    await writeFile(file, after);
    console.log(file);
  }
}
