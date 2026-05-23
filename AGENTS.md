# AGENTS.md

## Project Overview

Travel Notes is a static travel photo site. It has no build step and no package manager dependency. Each page is a small HTML shell, while `assets/js/site-data.js` provides all destinations, themes, photo metadata, titles, captions, and story copy. `assets/js/app.js` reads `body` data attributes and renders the home, region, and theme pages into `<main id="app">`.

Keep the project simple and file-based. Prefer extending the existing data model and page shell pattern over adding a framework, bundler, or runtime dependency.

## Repository Layout

- `index.html`: home page shell.
- `<region>/index.html`: destination shell, for example `chengdu/index.html`, `yunnan/index.html`, `gansu/index.html`.
- `<region>/<theme>/index.html`: theme/article shell, for example `gansu/nature/index.html`.
- `assets/js/site-data.js`: source of truth for destination data, theme data, and photo metadata.
- `assets/js/app.js`: shared renderer for all pages.
- `assets/css/styles.css`: shared visual system and responsive layout.
- `assets/images/<region>/large/`: web-ready large JPEGs.
- `assets/images/<region>/thumb/`: web-ready thumbnail JPEGs.
- `_raw_photos/<region>/`: local original photos. This directory is intentionally ignored by Git.
- `style-review.html`: local design/reference page; do not assume it is part of the production route.

## Content Model

`window.TRAVEL_DATA` has three main sections:

- `regions`: ordered list of destinations shown in navigation and on the home page.
- `themes`: keyed theme/article records. A region points to these keys through its `themes` array.
- `photos`: keyed photo metadata. A theme points to these keys through `photoIds`.

Photo records should include:

- `region`: required for every photo record. Do not rely on a renderer fallback.
- `file`: filename inside both `assets/images/<region>/large/` and `assets/images/<region>/thumb/`.
- `title`, `location`, `date`, `text`: displayed in cards/articles.

Region records should include:

- `id`, `name`, `eyebrow`, `title`, `deck`, `dates`, `location`, `hero`, `featurePhotos`, `themes`.

Theme records should include:

- `id`, `path`, `name`, `kicker`, `title`, `deck`, `hero`, `intro`, `photoIds`.

Use `path` when the route folder differs from the theme id or when the id has a prefix such as `gs-nature`.

## Adding A Destination

1. Put original photos under `_raw_photos/<region>/`.
2. Select only web-display photos and generate JPEGs into:
   - `assets/images/<region>/large/`
   - `assets/images/<region>/thumb/`
3. Create `<region>/index.html` using the existing region shell.
4. Create one folder and `index.html` per theme, using the existing theme shell.
5. Add the destination to `regions` in `assets/js/site-data.js`.
6. Add its theme records to `themes`.
7. Add all used photo records to `photos`.
8. Verify every `hero`, `featurePhotos`, and `photoIds` entry points to an existing photo record and image file.

For cache busting, keep the query versions on HTML links/scripts in sync when changing shared CSS or JS data. Use the current project date-style version and bump it consistently across all page shells, for example `?v=20260523j`. Prefer the helper script instead of hand-editing every HTML file:

```sh
node scripts/bump-version.mjs 20260523j
```

## Image Guidelines

- Do not commit original full-resolution photo dumps. `_raw_photos/` is ignored and should remain the raw archive.
- Web images should be JPEGs in matching `large` and `thumb` folders with the same filename.
- Prefer lowercase ASCII filenames for generated web assets, even if the original file has Chinese labels.
- Preserve user-provided filename labels as content clues when writing titles/captions.
- Keep photo ids stable once referenced by themes or regions.
- Do not infer exact locations from visual impression alone. Before writing location labels for a new travel set, inspect original-photo GPS/time metadata where available and group photos into place clusters.
- Treat Chinese filenames as hints, not proof of location. A filename may identify a brand, dish, shop, or memory note rather than the city where the photo was taken. For example, `古浪面皮子` was a food/brand label, but the photo location belonged to 武威.
- If several adjacent photos share close GPS coordinates and timestamps, use that cluster to correct captions and surrounding copy. This avoids missing stops such as 武威 when the visible theme seems dominated by larger destinations like 兰州、张掖、嘉峪关、敦煌.
- Prefer specific place labels when evidence supports them, such as `武威白塔寺`, `武威鸠摩罗什寺`, `武威凉州城区`, `张掖平山湖大峡谷`, or `敦煌莫高窟相关展陈`, instead of broad labels like `甘肃餐桌` or guessed city names.

A practical local conversion pattern is:

```sh
sips -s format jpeg -Z 1800 "_raw_photos/<region>/<source>" --out "assets/images/<region>/large/<name>.jpeg"
sips -s format jpeg -Z 640 "_raw_photos/<region>/<source>" --out "assets/images/<region>/thumb/<name>.jpeg"
```

Useful macOS metadata check:

```sh
for f in _raw_photos/<region>/*; do
  [ -f "$f" ] || continue
  printf '%s\t' "${f#_raw_photos/<region>/}"
  mdls -raw -name kMDItemContentCreationDate -name kMDItemLatitude -name kMDItemLongitude "$f" 2>/dev/null | paste -sd '\t' -
done
```

When metadata is missing or ambiguous, make the caption less specific rather than guessing. Ask the user to confirm uncertain place names if the exact location affects the story.

## Page Shell Pattern

Region page body:

```html
<body data-page="region" data-region="<region>" data-base="../">
```

Theme page body:

```html
<body data-page="theme" data-region="<region>" data-theme="<theme-id>" data-base="../../">
```

Home page body:

```html
<body data-page="home" data-base="./">
```

The `data-base` value is important because `app.js` builds all links and image paths from it.

## Style And UX

- Match the existing editorial travel-photo style: large photography, restrained text, serif Chinese headlines, simple line-based cards.
- Keep colors close to the current palette in `:root`; avoid introducing a new one-off theme per region.
- Prefer improving shared components in `assets/css/styles.css` instead of adding page-specific CSS.
- Maintain responsive behavior in the existing breakpoints, especially the mobile single-column layout.
- Avoid nested cards or decorative UI. The site should feel like a clean photo essay, not a dashboard or marketing page.

## Chinese Heading Typography

- Do not leave long Chinese editorial headings entirely to browser auto-wrapping. Browser line breaks can split phrases such as `一顿`, `那一天`, `黄河边`, or `大学门口`, which makes the title feel subtly wrong even when the words are correct.
- For long `deck`, `title`, or section heading copy, choose deliberate line breaks at semantic boundaries: punctuation, clause boundaries, or complete short phrases. Avoid breaking between a numeral and classifier, demonstrative and noun, place-name components, or closely bound verb-object phrases.
- If a heading feels visually heavy, first fix the line breaks, then adjust typography. Heavy serif Chinese headings need more breathing room when they span multiple lines; use a slightly looser line-height, usually around `1.18` to `1.25`, before reaching for broad layout changes.
- For a two-line block, prefer a natural punctuation break when it fits. If it does not fit at the current column width, use a three-line block where every line ends at a phrase boundary. For example:

```text
江边的天光、大学门口的
树影和一顿热饭，把正式
进入云南之前的那一天也留了下来。
```

- When manual line breaks are needed in data copy, store them as `\n` in `assets/js/site-data.js` and render them intentionally, for example by converting `\n` to `<br>` in `assets/js/app.js`. Do not hard-code page-specific HTML shells for one heading.
- After changing heading typography, inspect the affected page at desktop and mobile widths. Confirm the heading does not split words awkwardly, does not become a dense block of ink, and does not overlap nearby photography or text.

## Validation Checklist

Run these checks after content or image changes:

```sh
node - <<'NODE'
global.window = {};
require('./assets/js/site-data.js');
const data = window.TRAVEL_DATA;
const fs = require('fs');
const photoIds = new Set(Object.keys(data.photos));
const missing = [];
for (const region of data.regions) {
  for (const themeId of region.themes) {
    if (!data.themes[themeId]) missing.push(`missing theme ${region.id}:${themeId}`);
  }
}
for (const [themeId, theme] of Object.entries(data.themes)) {
  for (const id of theme.photoIds || []) {
    if (!photoIds.has(id)) missing.push(`missing photo ${themeId}:${id}`);
  }
}
for (const [id, photo] of Object.entries(data.photos)) {
  if (!photo.region) missing.push(`missing region ${id}`);
  const region = photo.region;
  for (const size of ['large', 'thumb']) {
    const path = `assets/images/${region}/${size}/${photo.file}`;
    if (!fs.existsSync(path)) missing.push(`missing file ${id}:${path}`);
  }
}
console.log(missing.length ? missing.join('\n') : 'OK');
NODE
```

For visual verification, serve the site locally and inspect the changed destination and theme pages:

```sh
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/`.

## Git And Safety Notes

- This repository often has user changes in progress. Check `git status --short` before editing and do not revert unrelated changes.
- Avoid broad formatting churn in `assets/js/site-data.js`; keep additions close to the relevant region/theme/photo blocks.
- Do not move or rename existing image files unless updating all references in `site-data.js`.
- Do not edit `_raw_photos/` except to read from it or when the user explicitly asks to reorganize raw photos.
