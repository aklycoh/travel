# Travel Notes

一个静态旅行照片展示站。当前完成了成都及周边、重庆、云南、甘肃等旅行板块，后续可以继续按地区加入新的记录。

## 目录结构

- `index.html`：网站首页。
- `chengdu/`、`chongqing/`、`yunnan/`、`gansu/`：各城市或地区的页面目录。
- `assets/css/`、`assets/js/`：网站样式和脚本。
- `assets/images/<city>/large/`：网页使用的大图。
- `assets/images/<city>/thumb/`：网页使用的缩略图。
- `_raw_photos/<city>/`：本地原始照片归档，不纳入 Git。

## 添加新城市

1. 在 `_raw_photos/<city>/` 放入原始照片。
2. 将网页要用的展示图生成到 `assets/images/<city>/large/` 和 `assets/images/<city>/thumb/`。
3. 在项目根目录新建 `<city>/index.html`，主题页放在 `<city>/<theme>/index.html`。
4. 在 `assets/js/site-data.js` 里添加地区、主题和照片数据。

原则：城市页面目录只放网页，`assets/images/` 只放网页展示图，原始照片统一放在 `_raw_photos/`。
