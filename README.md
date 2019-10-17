# plugin-back-to-top
![GitHub last commit](https://img.shields.io/github/last-commit/NineSwordsMonster/vuepress-plugin-back-to-top)

![NPM](https://img.shields.io/npm/l/@nines/vuepress-plugin-back-to-top)
![npm (scoped)](https://img.shields.io/npm/v/@nines/vuepress-plugin-back-to-top)
![npm](https://img.shields.io/npm/dt/@nines/vuepress-plugin-back-to-top)

nine's Back-to-top plugin

## 使用
```sh
npm i @nines/vuepress-plugin-back-to-top
```

> component name | **BackToTop**

```vue
<BackToTop></BackToTop>
```
## 配置

|name|类型|默认值|
|----|----|----|
|icon|String|nine-up|
|customStyle|Object|*customStyle* |
|visibilityHeight|number|400|

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