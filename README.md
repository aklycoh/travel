# Travel Notes

一个静态旅行照片展示站。当前完成了成都及周边、重庆、云南、甘肃等旅行板块，后续可以继续按地区加入新的记录。

## 目录结构

- `index.html`：网站首页。
- `chengdu/`、`chongqing/`、`yunnan/`、`gansu/`：各城市或地区的页面目录。
- `assets/css/`、`assets/js/`：网站样式和脚本。
- `assets/images/<city>/{large,medium,thumb}/`：网页使用的三档响应式图片。
- `assets/js/image-widths.js`：自动生成的真实图片宽度清单。
- `_raw_photos/<city>/`：本地原始照片归档，不纳入 Git。

## 添加新城市

1. 在 `_raw_photos/<city>/` 放入原始照片。
2. 将展示图生成到 `assets/images/<city>/large/`，清除 EXIF 后运行 `node scripts/process-images.mjs` 生成其余图片档位。
3. 在项目根目录新建 `<city>/index.html`，主题页放在 `<city>/<theme>/index.html`。
4. 在 `assets/js/site-data.js` 里添加地区、主题和照片数据。

原则：城市页面目录只放网页，`assets/images/` 只放网页展示图，原始照片统一放在 `_raw_photos/`。

## 校验

改完照片或 `assets/js/site-data.js` 后运行：

```sh
node scripts/validate-data.mjs
```

脚本会检查数据引用、页面壳、三档图片、真实宽度清单、缓存版本和 EXIF 隐私信息。
