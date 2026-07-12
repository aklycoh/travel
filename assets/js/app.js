const data = window.TRAVEL_DATA || { regions: [], themes: {}, photos: {} };
const imageWidths = window.TRAVEL_IMAGE_WIDTHS || {};
const page = document.body.dataset.page;
const base = document.body.dataset.base || "./";

const $ = (selector) => document.querySelector(selector);

// Skip-link: first focusable element, visually hidden until focused (styles.css).
(function addSkipLink() {
  if (document.querySelector(".skip-link")) return;
  const link = document.createElement("a");
  link.className = "skip-link";
  link.href = "#app";
  link.textContent = "跳到正文";
  document.body.insertBefore(link, document.body.firstChild);
  const main = document.getElementById("app");
  if (main && !main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
})();

function asset(path) {
  return `${base}${path}`;
}

function photo(id) {
  const item = data.photos[id];
  if (!item) throw new Error(`Missing photo: ${id}`);
  if (!item.region) throw new Error(`Missing region for photo: ${id}`);
  if (!item.file) throw new Error(`Missing file for photo: ${id}`);
  const regionId = item.region;
  return {
    id,
    ...item,
    widths: imageWidths[`${regionId}/${item.file}`] || {},
    large: asset(`assets/images/${regionId}/large/${item.file}`),
    medium: asset(`assets/images/${regionId}/medium/${item.file}`),
    thumb: asset(`assets/images/${regionId}/thumb/${item.file}`)
  };
}

function regionPath(region) {
  return asset(`${region.id}/index.html`);
}

function themePath(region, theme) {
  return asset(`${region.id}/${theme.path || theme.id}/index.html`);
}

function readMinutes(theme) {
  return Math.max(3, Math.round((theme.photoIds?.length || 4) * 0.7));
}

function byline(minutes) {
  return `Travel Notes · ${minutes} min read`;
}

function captionLine(item) {
  return `摄影: Travel Notes · ${item.location} · ${item.date}`;
}

function lineBreaks(text) {
  return String(text).replace(/\n/g, "<br>");
}

function imageStyle(item) {
  return item.objectPosition ? ` style="object-position: ${item.objectPosition}"` : "";
}

// Rendered widths of the tiers, used to build a real srcset so the browser can
// pick thumb (≤640px) / medium (≤900px) / large (≤1800px) by layout width.
const IMG_WIDTHS = { thumb: 640, medium: 900, large: 1800 };

// Per-slot `sizes` values mirroring the CSS grid spans (12-col grid inside a
// min(1180px, 100vw - 40px) container, single column under 860px). Keeping
// these accurate is what lets high-DPI screens fetch medium instead of large.
const SIZES = {
  regionCard: "(max-width: 860px) 100vw, min(45vw, 280px)",
  storyWide: "(max-width: 860px) 100vw, min(66vw, 780px)",
  storyNarrow: "(max-width: 860px) 100vw, min(33vw, 380px)",
  featured: "(max-width: 860px) 100vw, min(48vw, 575px)",
  themeWide: "(max-width: 860px) 100vw, min(55vw, 650px)",
  themeHalf: "(max-width: 860px) 100vw, min(50vw, 580px)"
};

// True when the story card at `index` spans 8 of 12 columns (see the
// .story-card:nth-child rules and count-based :has overrides in styles.css).
function storyCardIsWide(index, count) {
  if (count === 3) return false;
  if (count === 5) return index === 0;
  return index === 0 || index === 3;
}

function srcsetFor(item) {
  return [
    `${item.thumb} ${item.widths.thumb || IMG_WIDTHS.thumb}w`,
    `${item.medium} ${item.widths.medium || IMG_WIDTHS.medium}w`,
    `${item.large} ${item.widths.large || IMG_WIDTHS.large}w`
  ].join(", ");
}

function renderImg(item, alt, options = {}) {
  const {
    className = "",
    loading = "lazy",
    fetchpriority = "auto",
    // Default: cards/photos render roughly half the viewport on wide screens and
    // full width on phones. Heroes override with a wider `sizes`.
    sizes = "(max-width: 860px) 100vw, 50vw"
  } = options;
  const classAttr = className ? ` class="${className}"` : "";
  const fetchAttr = fetchpriority === "auto" ? "" : ` fetchpriority="${fetchpriority}"`;
  // On small screens high-DPR math would otherwise pull the 1800px large file;
  // this source caps phones at the medium tier (900px is plenty there).
  const phoneSource = `<source media="(max-width: 560px)" srcset="${item.thumb} ${item.widths.thumb || IMG_WIDTHS.thumb}w, ${item.medium} ${item.widths.medium || IMG_WIDTHS.medium}w" sizes="100vw">`;
  return `<picture>${phoneSource}<img${classAttr} src="${item.medium}" srcset="${srcsetFor(item)}" sizes="${sizes}" alt="${alt}" loading="${loading}" decoding="async"${fetchAttr}${imageStyle(item)}></picture>`;
}

function renderHeroFigure(item, alt) {
  return `
    <figure class="hero-figure" data-photo="${item.id}">
      ${renderImg(item, alt, {
        loading: "eager",
        fetchpriority: "high",
        sizes: "100vw"
      })}
      <figcaption>${captionLine(item)}</figcaption>
    </figure>
  `;
}

function renderError(error) {
  console.error(error);
  renderHeader();
  $("#app").innerHTML = `
    <section class="render-error">
      <p class="eyebrow">Travel Notes</p>
      <h1>这个页面暂时没有渲染出来</h1>
      <p>${error.message}</p>
    </section>
  `;
}

function renderHeader(activeRegion) {
  const nav = $("#site-nav");
  if (!nav) return;
  const header = nav.closest(".site-header");
  let menuButton = header?.querySelector(".site-menu-toggle");
  const mobileNav = window.matchMedia("(max-width: 860px)");

  function setNavOpen(open, focusTarget = "") {
    const active = mobileNav.matches && open;
    header?.classList.toggle("is-nav-open", active);
    menuButton?.setAttribute("aria-expanded", String(active));
    menuButton?.setAttribute("aria-label", active ? "关闭地区导航" : "打开地区导航");
    nav.inert = mobileNav.matches && !active;
    if (mobileNav.matches) nav.setAttribute("aria-hidden", String(!active));
    else nav.removeAttribute("aria-hidden");
    if (focusTarget === "menu") menuButton?.focus();
    if (focusTarget === "first") nav.querySelector("a")?.focus();
  }

  if (header && !menuButton) {
    menuButton = document.createElement("button");
    menuButton.className = "site-menu-toggle";
    menuButton.type = "button";
    menuButton.setAttribute("aria-controls", "site-nav");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开地区导航");
    menuButton.innerHTML = "<span></span><span></span><span></span>";
    header.insertBefore(menuButton, nav);
    menuButton.addEventListener("click", () => {
      const open = !header.classList.contains("is-nav-open");
      setNavOpen(open, open ? "first" : "menu");
    });
  }
  const regions = data.regions
    .map((region) => {
      const active = activeRegion === region.id ? "is-active" : "";
      const current = active ? ` aria-current="page"` : "";
      return `<a class="${active}" href="${regionPath(region)}"${current}>${region.name}</a>`;
    })
    .join("");
  const homeCurrent = page === "home" ? ` aria-current="page"` : "";
  nav.innerHTML = `<a href="${asset("index.html")}"${homeCurrent}>旅行记录</a>${regions}`;
  if (!nav.dataset.menuBound) {
    nav.addEventListener("click", () => {
      setNavOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && header?.classList.contains("is-nav-open")) {
        setNavOpen(false, "menu");
      }
    });
    document.addEventListener("click", (event) => {
      if (header?.classList.contains("is-nav-open") && !header.contains(event.target)) {
        setNavOpen(false);
      }
    });
    mobileNav.addEventListener("change", () => setNavOpen(false));
    nav.dataset.menuBound = "true";
  }
  setNavOpen(false);
}

function renderImage(id, className = "") {
  const item = photo(id);
  return renderImg(item, item.title, { className });
}

function regionPhotoCount(regionId) {
  return Object.values(data.photos).filter((item) => item.region === regionId).length;
}

function renderFooter() {
  if (document.querySelector(".site-footer")) return;
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  const links = data.regions
    .map((region) => `<a href="${regionPath(region)}">${region.name}</a>`)
    .join("");
  footer.innerHTML = `
    <div>
      <p class="brand-line">Travel Notes</p>
      <nav aria-label="地区">${links}</nav>
      <small>用照片把旅行整理成可以回看的地方</small>
    </div>
  `;
  document.body.appendChild(footer);
}

function renderIndex() {
  renderHeader();
  const home = data.home || data.regions[0];
  const hero = photo(home.hero);
  const photoTotal = Object.keys(data.photos).length;
  $("#app").innerHTML = `
    <section class="home-hero">
      ${renderHeroFigure(hero, "旅行记录")}
      <div class="home-hero__content">
        <p class="eyebrow">Travel Notes</p>
        <h1>${lineBreaks(home.title || "把旅行整理成\n可以回看的地方")}</h1>
        <p>${home.deck}</p>
        <p class="hero-meta">${data.regions.length} 段旅程 · ${photoTotal} 张照片</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading section-heading--label">
        <p class="eyebrow">Destinations</p>
        <h2>地区</h2>
      </div>
      <div class="region-grid">
        ${data.regions
          .map((item) => {
            const cover = photo(item.hero);
            return `
              <a class="region-card" href="${regionPath(item)}">
                <article>
                  ${renderImg(cover, item.name, { sizes: SIZES.regionCard })}
                  <span>${item.eyebrow}</span>
                  <h3>${item.name}</h3>
                  <p>${item.location}</p>
                  <small>${item.themes.length} 个主题 · ${regionPhotoCount(item.id)} 张照片</small>
                </article>
              </a>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderRegion() {
  const region = data.regions.find((item) => item.id === document.body.dataset.region);
  if (!region) throw new Error(`Unknown region: ${document.body.dataset.region}`);
  renderHeader(region.id);
  const hero = photo(region.hero);
  const themeCards = region.themes
    .map((themeId, index) => {
      const theme = data.themes[themeId];
      const cover = photo(theme.hero);
      const sizes = storyCardIsWide(index, region.themes.length) ? SIZES.storyWide : SIZES.storyNarrow;
      return `
        <a class="story-card" href="${themePath(region, theme)}">
          <article>
            ${renderImg(cover, theme.title, { sizes })}
            <div>
              <span>${theme.kicker}</span>
              <h3>${theme.title}</h3>
              <p>${theme.deck}</p>
              <small>${byline(readMinutes(theme))}</small>
            </div>
          </article>
        </a>
      `;
    })
    .join("");

  const featured = region.featurePhotos
    .map((id) => {
      const item = photo(id);
      return `
        <article class="photo-story">
          <figure data-photo="${item.id}">
            ${renderImg(item, item.title, { sizes: SIZES.featured })}
            <figcaption>${captionLine(item)}</figcaption>
          </figure>
          <div>
            <p class="meta">${item.location} · ${item.date}</p>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `;
    })
    .join("");

  $("#app").innerHTML = `
    <section class="destination-hero">
      ${renderHeroFigure(hero, region.title)}
      <div>
        <p class="eyebrow">${region.eyebrow}</p>
        <h1>${region.title}</h1>
        <p>${region.deck}</p>
        <dl>
          <div><dt>时间</dt><dd>${region.dates}</dd></div>
          <div><dt>地点</dt><dd>${region.location}</dd></div>
        </dl>
      </div>
    </section>
    <section class="section">
      <div class="section-heading section-heading--label">
        <p class="eyebrow">Stories</p>
        <h2>${region.name}主题</h2>
      </div>
      <div class="story-grid">${themeCards}</div>
    </section>
    <section class="section section--featured">
      <div class="section-heading section-heading--label">
        <p class="eyebrow">Selected</p>
        <h2>几张先记住的照片</h2>
      </div>
      <div class="featured-list">${featured}</div>
    </section>
  `;
}

function renderTheme() {
  const region = data.regions.find((item) => item.id === document.body.dataset.region);
  if (!region) throw new Error(`Unknown region: ${document.body.dataset.region}`);
  const theme = data.themes[document.body.dataset.theme];
  if (!theme) throw new Error(`Unknown theme: ${document.body.dataset.theme}`);
  renderHeader(region.id);
  const hero = photo(theme.hero);
  const photos = theme.photoIds.map((id) => photo(id));
  const cards = photos
    .map((item, index) => `
      <article class="theme-photo ${index % 3 === 0 ? "theme-photo--wide" : ""}">
        <figure data-photo="${item.id}">
          ${renderImg(item, item.title, { sizes: index % 3 === 0 ? SIZES.themeWide : SIZES.themeHalf })}
          <figcaption>${captionLine(item)}</figcaption>
        </figure>
        <div>
          <p class="meta">${item.location} · ${item.date}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `)
    .join("");

  const otherThemes = region.themes
    .filter((id) => id !== theme.id)
    .map((id) => {
      const item = data.themes[id];
      return `<a href="${themePath(region, item)}">${item.name}</a>`;
    })
    .join("");

  const regionIndex = data.regions.findIndex((r) => r.id === region.id);
  const nextRegion = data.regions[(regionIndex + 1) % data.regions.length];
  const nextJourney = `<a class="next-journey" href="${regionPath(nextRegion)}">下一段旅程 → ${nextRegion.name}</a>`;

  $("#app").innerHTML = `
    <section class="article-hero">
      ${renderHeroFigure(hero, theme.title)}
      <div>
        <a class="back-link" href="${regionPath(region)}">返回${region.name}</a>
        <p class="eyebrow">${theme.kicker}</p>
        <h1>${theme.title}</h1>
        <p>${theme.intro}</p>
        <p class="story-byline">${byline(readMinutes(theme))}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading section-heading--deck">
        <p class="eyebrow">${region.name}</p>
        <h2>${lineBreaks(theme.deck)}</h2>
      </div>
      <div class="theme-grid">${cards}</div>
    </section>
    <section class="next-section">
      <p>继续看</p>
      <nav>${otherThemes}${nextJourney}</nav>
    </section>
  `;
}

function initLightbox() {
  const figures = Array.from(document.querySelectorAll("#app figure[data-photo]"));
  if (!figures.length) return;
  const sequence = figures.map((fig) => fig.dataset.photo);

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "照片查看");
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="lightbox__backdrop" data-close></div>
    <div class="lightbox__stage">
      <button class="lightbox__nav lightbox__nav--prev" type="button" aria-label="上一张">‹</button>
      <figure class="lightbox__figure">
        <img class="lightbox__img" alt="">
        <figcaption class="lightbox__caption"></figcaption>
      </figure>
      <button class="lightbox__nav lightbox__nav--next" type="button" aria-label="下一张">›</button>
    </div>
    <button class="lightbox__close" type="button" aria-label="关闭">×</button>
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector(".lightbox__img");
  const caption = overlay.querySelector(".lightbox__caption");
  const prevBtn = overlay.querySelector(".lightbox__nav--prev");
  const nextBtn = overlay.querySelector(".lightbox__nav--next");
  const closeBtn = overlay.querySelector(".lightbox__close");
  const focusable = [closeBtn, prevBtn, nextBtn];

  let index = 0;
  let lastFocused = null;

  function show(i) {
    index = (i + sequence.length) % sequence.length;
    const item = photo(sequence[index]);
    img.src = item.large;
    img.srcset = srcsetFor(item);
    img.sizes = "100vw";
    img.alt = item.title || "";
    img.style.objectPosition = item.objectPosition || "";
    caption.innerHTML = `<strong>${item.title || ""}</strong><span>${captionLine(item)}</span>`;
    const single = sequence.length < 2;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
  }

  function open(i, trigger) {
    lastFocused = trigger || document.activeElement;
    show(i);
    overlay.hidden = false;
    document.body.classList.add("lightbox-open");
    requestAnimationFrame(() => overlay.classList.add("is-open"));
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove("is-open");
    overlay.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  prevBtn.addEventListener("click", () => show(index - 1));
  nextBtn.addEventListener("click", () => show(index + 1));
  closeBtn.addEventListener("click", close);
  overlay.querySelector(".lightbox__backdrop").addEventListener("click", close);

  overlay.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowLeft") {
      show(index - 1);
    } else if (event.key === "ArrowRight") {
      show(index + 1);
    } else if (event.key === "Tab") {
      // Minimal focus trap across the visible controls.
      const visible = focusable.filter((el) => !el.hidden);
      const first = visible[0];
      const last = visible[visible.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  figures.forEach((fig, i) => {
    fig.classList.add("is-zoomable");
    fig.setAttribute("role", "button");
    fig.setAttribute("tabindex", "0");
    fig.setAttribute("aria-label", "放大查看照片");
    fig.addEventListener("click", () => open(i, fig));
    fig.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(i, fig);
      }
    });
  });
}

try {
  if (page === "home") renderIndex();
  else if (page === "region") renderRegion();
  else if (page === "theme") renderTheme();
  else throw new Error(`Unknown page type: ${page || "(empty)"}`);
  renderFooter();
  if (page === "region" || page === "theme") initLightbox();
} catch (error) {
  renderError(error);
}
