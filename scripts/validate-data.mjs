import { existsSync } from "node:fs";
import { createRequire } from "node:module";

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

  for (const size of ["large", "thumb"]) {
    const path = `assets/images/${photo.region}/${size}/${photo.file}`;
    if (!existsSync(path)) missing.push(`missing file ${id}:${path}`);
  }
}

if (missing.length) {
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log("OK");
