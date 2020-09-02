# @nine-theme/vuepress-plugin-back-to-top
![GitHub last commit](https://img.shields.io/github/last-commit/nine-theme/vuepress-plugin-back-to-top) 
![npm (scoped)](https://img.shields.io/npm/v/@nine-theme/vuepress-plugin-back-to-top) 
![npm](https://img.shields.io/npm/dt/@nine-theme/vuepress-plugin-back-to-top) 
![NPM](https://img.shields.io/npm/l/@nine-theme/vuepress-plugin-back-to-top)

---
> Back-to-top plugin for vuepress

## 使用

|使用位置|值|
|-|-|
|plugin name|@nine-theme/vuepress-plugin-back-to-top|
|component name|BackToTop（主题开发时使用）|

```sh
npm i @nine-theme/vuepress-plugin-back-to-top
```

## 参数

|name|类型|默认值|
|----|----|----|
|icon|String|nine-up|
|customStyle|Object|*customStyle* |
|visibilityHeight|number|400|

```vue
<BackToTop ></BackToTop>
```

customStyle: 
  ```js
  customStyle = {
    right: '1rem',
    bottom: '6rem',
    width: '2.5rem',
    height: '2.5rem',
    'border-radius': '.25rem',
    'line-height': '2.5rem',
    backgroundColor: 'rgba(231, 234, 241,.5)'
  }
  ```
