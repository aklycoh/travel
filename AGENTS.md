# AGENTS.md

## Project
Travel Notes is a dependency-free static travel photo site. Keep it file-based: HTML page shells + `assets/js/site-data.js` data + `assets/js/app.js` renderer + `assets/css/styles.css` styles. Do not add frameworks, bundlers, or runtime dependencies unless explicitly requested.

## Structure
- `index.html`: home shell.
- `<region>/index.html`: region shell.
- `<region>/<theme>/index.html`: theme/article shell.
- `assets/js/site-data.js`: source of truth for regions, themes, photos, copy, captions.
- `assets/js/image-widths.js`: generated actual JPEG widths for responsive `srcset`; never edit by hand.
- `assets/js/app.js`: renders pages from `body` data attributes.
- `assets/css/styles.css`: shared visual system.
- `assets/images/<region>/{large,medium,thumb}/`: web JPEGs (≤1800 / ≤900 / ≤640 px longest side).
- `_raw_photos/<region>/`: original photos, ignored by Git.
- `404.html`: self-contained GitHub Pages 404, styled to match the site.
- `scripts/process-images.mjs`: refreshes stale `medium` + `thumb` tiers and regenerates `image-widths.js` (`--force` to redo all).
- `scripts/strip-exif.mjs`: removes EXIF/XMP/IPTC (GPS!) from all web JPEGs; `--bake` also bakes EXIF rotation, `--check` is the CI guard.
- `scripts/build-meta.mjs`: regenerates per-page `<title>`/description/OG tags and sitemap; `--check` detects drift. Never edit the managed meta block by hand.
- `scripts/bump-version.mjs <version>`: bumps `?v=` cache-busting params in all shells.
- `scripts/validate-data.mjs`: data integrity + image tier/dimension checks; runs in CI (`.github/workflows/validate.yml`) on every push.
- `style-review.html`: local reference only, not production.

## Data
`window.TRAVEL_DATA` contains `home`, `regions`, `themes`, and `photos`.

`home`: `hero` (photo id), `title` (use `\n` for line breaks), `deck`. Pick a hero that is not already a region-card cover.

Photo records require `region`, `file`, `title`, `location`, `date`, `text`; `file` must exist in `large`, `medium`, and `thumb`. Optional `objectPosition` controls the crop focus.

Region records: `id`, `name`, `eyebrow`, `title`, `deck`, `dates`, `location`, `hero`, `featurePhotos`, `themes`.

Theme records: `id`, optional `path`, `name`, `kicker`, `title`, `deck`, `hero`, `intro`, `photoIds`. Use `path` when the route folder differs from the theme id.

## Page Shells
Use correct `data-base`:

```html
<body data-page="home" data-base="./">
<body data-page="region" data-region="<region>" data-base="../">
<body data-page="theme" data-region="<region>" data-theme="<theme-id>" data-base="../../">
```

When shared CSS/JS/data changes, bump cache versions:

```sh
node scripts/bump-version.mjs <version>
```

Version strings follow `YYYYMMDD` plus a letter (e.g. `20260706b`). When verifying in a browser afterwards, hard-reload (cmd+shift+r) — the cached HTML otherwise keeps loading old `?v=` assets and fixes appear not to work.

Everything inside `<!-- meta:start -->…<!-- meta:end -->` in a shell's `<head>` is owned by `scripts/build-meta.mjs`; change titles/descriptions by editing `site-data.js` and re-running the script.

## Images
- Never commit original photo dumps; keep originals in `_raw_photos/`.
- Web images are JPEG triples with matching filenames in `large`, `medium`, and `thumb`.
- Prefer lowercase ASCII filenames for new generated web images.
- Keep referenced photo ids stable.
- Do not guess exact locations from visuals or Chinese filenames alone. Use GPS/time metadata when available; if uncertain, write a broader caption or ask.

Workflow: create and strip the `large` file first, then derive clean responsive tiers and their width manifest.

```sh
sips -s format jpeg -Z 1800 "_raw_photos/<region>/<source>" --out "assets/images/<region>/large/<name>.jpeg"
node scripts/strip-exif.mjs --bake  # remove EXIF/GPS; bakes EXIF rotation into pixels
node scripts/process-images.mjs     # refreshes medium + thumb and image-widths.js
node scripts/strip-exif.mjs --check
```

Privacy: originals embed precise GPS coordinates, capture time, and device model, and `sips` preserves all of it — published images must be stripped. If you need the capture date for the photo's `date` field, read it from EXIF (`mdls -name kMDItemContentCreationDate`, UTC — convert to local) BEFORE stripping. Never run `sips -r` by itself: it rotates pixels but leaves the stale Orientation tag, which double-rotates in browsers; `strip-exif.mjs --bake` does both atomically.

`validate-data.mjs` fails if any `large` file exceeds 1800px, a tier or shell is missing, the width manifest is stale, asset versions disagree, or a published image still carries EXIF.

## Adding a Region (or Theme)

Navigation, footer, home region cards, photo counts, the cross-region "下一段旅程" link, and SEO meta are all derived from `site-data.js` — none of them need manual edits. The full flow:

1. **Images**: put originals in `_raw_photos/<region>/`, convert to `assets/images/<region>/large/` (≤1800px), capture needed metadata, run `strip-exif.mjs --bake`, then `process-images.mjs`.
2. **Data** in `assets/js/site-data.js`:
   - Add `photos` entries (id → record) for every image.
   - Add `themes` entries and a `regions` entry listing those theme ids. Region order in the `regions` array controls nav order and the "下一段旅程" chain.
3. **Shells** (the only manual copy step): create `<region>/index.html` plus one `<region>/<theme-path>/index.html` per theme. Copy an existing shell of the same page type and change only the `<body>` attributes (`data-page`, `data-region`, `data-theme`) — `data-base` and asset paths depend on folder depth, so copy from a shell at the same depth. The `<head>` meta block will be overwritten by the next step; don't edit it.
4. **Generate + verify**:

   ```sh
   node scripts/build-meta.mjs      # per-page title/description/OG tags
   node scripts/validate-data.mjs   # must print OK
   node scripts/build-meta.mjs --check
   node scripts/bump-version.mjs <version>
   ```

5. **Browser check** (hard-reload): the new region page, one theme page, and the home page (new card + updated counts appear automatically).

The validator checks shell existence and attributes, but still click through every new page once to catch visual or copy issues.

Adding a theme to an existing region is steps 1–5 minus the region record: add photos + theme entry, append the theme id to the region's `themes` array, create one shell.

## Style
Match the existing editorial photo-essay style: large photography, restrained text, serif Chinese headings, line-based cards, shared components, mobile single-column layouts. Avoid one-off palettes, page-specific CSS, nested cards, and dashboard-like decoration.

For long Chinese headings, prefer deliberate `\n` breaks in `site-data.js` at phrase boundaries and render them through `app.js`.

## Validate
After content, image, CSS, or JS changes:

```sh
node scripts/validate-data.mjs
python3 -m http.server 8765
```

Then inspect affected pages at `http://127.0.0.1:8765/` on desktop and mobile widths (hard-reload after version bumps). The validator checks theme/photo references, all three image tiers, and large-image dimensions; the same check runs in CI on push.

## Git Safety
Check `git status --short` before editing. Do not revert unrelated user changes. Avoid broad formatting churn in `site-data.js`. Do not move/rename images unless all references are updated. Do not edit `_raw_photos/` except to read metadata or when explicitly asked.
