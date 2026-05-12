const data = window.TRAVEL_DATA;
const page = document.body.dataset.page;
const base = document.body.dataset.base || "./";

const $ = (selector) => document.querySelector(selector);

function asset(path) {
  return `${base}${path}`;
}

function photo(id) {
  const item = data.photos[id];
  const regionId = item.region || "chengdu";
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

function renderHeader(activeRegion) {
  const nav = $("#site-nav");
  if (!nav) return;
  const regions = data.regions
    .map((region) => {
      const active = activeRegion === region.id ? "is-active" : "";
      return `<a class="${active}" href="${regionPath(region)}">${region.name}</a>`;
    })
    .join("");
  nav.innerHTML = `<a href="${asset("index.html")}">旅行记录</a>${regions}`;
}

function renderImage(id, className = "") {
  const item = photo(id);
  return `<img class="${className}" src="${item.large}" alt="${item.title}" loading="lazy">`;
}

function renderIndex() {
  renderHeader();
  const region = data.regions[0];
  const hero = photo(region.hero);
  $("#app").innerHTML = `
    <section class="home-hero">
      <img src="${hero.large}" alt="${region.title}">
      <div class="home-hero__content">
        <p class="eyebrow">Travel Notes</p>
        <h1>把旅行整理成可以回看的地方</h1>
        <p>${region.deck}</p>
        <a class="button" href="${regionPath(region)}">进入${region.name}</a>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Destinations</p>
        <h2>地区</h2>
      </div>
      <div class="region-grid">
        ${data.regions
          .map((item) => {
            const cover = photo(item.hero);
            return `
              <a class="region-card" href="${regionPath(item)}">
                <img src="${cover.large}" alt="${item.name}">
                <span>${item.eyebrow}</span>
                <h3>${item.name}</h3>
                <p>${item.location}</p>
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
  renderHeader(region.id);
  const hero = photo(region.hero);
  const themeCards = region.themes
    .map((themeId) => {
      const theme = data.themes[themeId];
      const cover = photo(theme.hero);
      return `
        <a class="story-card" href="${themePath(region, theme)}">
          <img src="${cover.large}" alt="${theme.title}">
          <div>
            <span>${theme.kicker}</span>
            <h3>${theme.title}</h3>
            <p>${theme.deck}</p>
          </div>
        </a>
      `;
    })
    .join("");

  const featured = region.featurePhotos
    .map((id) => {
      const item = photo(id);
      return `
        <article class="photo-story">
          <img src="${item.large}" alt="${item.title}" loading="lazy">
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
      <img src="${hero.large}" alt="${region.title}">
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
      <div class="section-heading">
        <p class="eyebrow">Stories</p>
        <h2>${region.name}主题</h2>
      </div>
      <div class="story-grid">${themeCards}</div>
    </section>
    <section class="section section--dark">
      <div class="section-heading">
        <p class="eyebrow">Selected</p>
        <h2>几张先记住的照片</h2>
      </div>
      <div class="featured-list">${featured}</div>
    </section>
  `;
}

function renderTheme() {
  const region = data.regions.find((item) => item.id === document.body.dataset.region);
  const theme = data.themes[document.body.dataset.theme];
  renderHeader(region.id);
  const hero = photo(theme.hero);
  const photos = theme.photoIds.map((id) => photo(id));
  const cards = photos
    .map((item, index) => `
      <article class="theme-photo ${index % 3 === 0 ? "theme-photo--wide" : ""}">
        <img src="${item.large}" alt="${item.title}" loading="lazy">
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
      <img src="${hero.large}" alt="${theme.title}">
      <div>
        <a class="back-link" href="${regionPath(region)}">返回${region.name}</a>
        <p class="eyebrow">${theme.kicker}</p>
        <h1>${theme.title}</h1>
        <p>${theme.intro}</p>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${region.name}</p>
        <h2>${theme.deck}</h2>
      </div>
      <div class="theme-grid">${cards}</div>
    </section>
    <section class="next-section">
      <p>继续看</p>
      <nav>${otherThemes}</nav>
    </section>
  `;
}

if (page === "home") renderIndex();
if (page === "region") renderRegion();
if (page === "theme") renderTheme();
