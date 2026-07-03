const data = window.TRAVEL_DATA || { regions: [], themes: {}, photos: {} };
const page = document.body.dataset.page;
const base = document.body.dataset.base || "./";

const $ = (selector) => document.querySelector(selector);

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
    large: asset(`assets/images/${regionId}/large/${item.file}`),
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

function renderImg(item, alt, options = {}) {
  const {
    className = "",
    loading = "lazy",
    fetchpriority = "auto",
    thumbMedia = "(max-width: 560px)"
  } = options;
  const classAttr = className ? ` class="${className}"` : "";
  const fetchAttr = fetchpriority === "auto" ? "" : ` fetchpriority="${fetchpriority}"`;
  return `<picture><source media="${thumbMedia}" srcset="${item.thumb}"><img${classAttr} src="${item.large}" alt="${alt}" loading="${loading}" decoding="async"${fetchAttr}${imageStyle(item)}></picture>`;
}

function renderHeroFigure(item, alt) {
  return `
    <figure class="hero-figure">
      ${renderImg(item, alt, {
        loading: "eager",
        fetchpriority: "high"
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
      const open = header.classList.toggle("is-nav-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "关闭地区导航" : "打开地区导航");
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
      header?.classList.remove("is-nav-open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "打开地区导航");
    });
    nav.dataset.menuBound = "true";
  }
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
                  ${renderImg(cover, item.name)}
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
    .map((themeId) => {
      const theme = data.themes[themeId];
      const cover = photo(theme.hero);
      return `
        <a class="story-card" href="${themePath(region, theme)}">
          <article>
            ${renderImg(cover, theme.title)}
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
          <figure>
            ${renderImg(item, item.title)}
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
        <figure>
          ${renderImg(item, item.title)}
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
      <nav>${otherThemes}</nav>
    </section>
  `;
}

try {
  if (page === "home") renderIndex();
  else if (page === "region") renderRegion();
  else if (page === "theme") renderTheme();
  else throw new Error(`Unknown page type: ${page || "(empty)"}`);
  renderFooter();
} catch (error) {
  renderError(error);
}
