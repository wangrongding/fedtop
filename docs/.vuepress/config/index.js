const sidebar = require('./sidebar/')
const nav = require('./nav/')

module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类', // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签', // 默认 “标签”
    },
  },
  // 最后更新时间
  lastUpdated: false, // string | boolean
  // 作者
  author: '荣顶',
  authorAvatar: '/avatar.jpg',
  // 备案号
  record: '赣ICP备19003256号-2',
  recordLink: 'https://beian.miit.gov.cn',
  // 项目开始时间
  startYear: '2018',
  socialLinks: [
    // 信息栏展示社交信息
    { icon: 'reco-github', link: 'https://github.com/recoluan' },
    { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' },
  ],
  // 导航栏
  nav,
  logo: '/avatar.jpg',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 15,
  // 自动形成侧边导航
  sidebar: 'auto',
  themeConfig: {
    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    noFoundPageByTencent: false,
    mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    // modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
  },
  codeTheme: 'tomorrow', // default 'tomorrow', 'default', 'funky', 'okaidia', 'solarizedlight'
}
