const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define () {
    const { icon, customStyle, visibilityHeight } = options
    return {
      ICON: icon || 'nine-up',
      CUSTOM_STYLE: customStyle || {
        right: '1rem',
        bottom: '6rem',
        width: '2.5rem',
        height: '2.5rem',
        'border-radius': '.25rem',
        'line-height': '2.5rem',
        backgroundColor: 'rgba(231, 234, 241,.5)'
      },
      VISIBILITY_HEIGHT: visibilityHeight || 400
    }
  },
  name: '@nines/plugin-back-to-top',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: 'BackToTop'
})