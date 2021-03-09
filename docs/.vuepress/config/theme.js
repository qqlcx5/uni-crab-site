const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname,'..', '..');
const readFile = require(utilsRoot + '/readFile');

const 组件 = readFile(docsRoot + '/组件');



const themeConfig = {
  editLinks: true,
  smoothScroll: true,
  lastUpdated: '最后更新时间',
  logo: 'https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/crab.png',
  nav: [{
        text: '指南',
        link: '/组件/10.开发指南/01.介绍',
      },
      { text: 'Github', link: 'https://github.com/qqlcx5/uni-crab' },
      { text: 'Github Pages', link: 'https://qqlcx5.github.io/uni-crab-site/' },
  ],
  
  sidebar: {
    '/组件/': 组件,
  },
};

module.exports = themeConfig;
