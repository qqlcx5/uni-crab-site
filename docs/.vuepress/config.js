const plugins = require('./config/plugins');
const themeConfig = require('./config/theme');
module.exports = {
  base: '/uni-crab-site/',
  title: 'uni-crab UI',
  description: 'uni-crab、uni-crab UI、前端、微信小程序、uni-app、小程序',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/polar_bear.jpg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown'},
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
    ['script', { async: 'async', src: 'https://hm.baidu.com/hm.js?27c61fbfe7c9201c97b53d619459c89d' }],
  ],
  
  themeConfig,
  plugins
};