import { defineConfig } from 'vitepress'
import { getPosts, getPostLength } from './theme/serverUtils'
// import { buildBlogRSS } from './theme/rss'

// https://vitepress.dev/reference/site-config
export default async function () {
  return defineConfig({
    title: '荣顶 - 个人博客',
    lang: 'en-US',
    description: '荣顶 - 个人博客',
    head: [
      ['link', { rel: 'icon', href: '/avatar.png' }],
      ['meta', { name: 'author', content: '荣顶' }],
      ['meta', { property: 'og:title', content: 'Home' }],
      ['meta', { property: 'og:description', content: '荣顶 - 个人博客' }],
    ],
    // 主题配置
    appearance: 'dark', // 'light' | 'dark' | 'auto'
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: '/avatar.png',
      // @ts-ignore
      avator: '/avatar.png',
      posts: await getPosts(),
      pageSize: 5,
      postLength: await getPostLength(),
      aside: false,
      // lastUpdated: false,
      // 搜索配置
      search: {
        provider: 'local',
      },
      // 页面顶部的导航栏。它包含站点标题、全局菜单链接等
      nav: [
        { text: '🏡 Home', link: '/' },
        { text: '📃 Archives', link: '/page/archives' },
        { text: '🔖 Tags', link: '/page/tags' },
        // TODO: RSS
        // { text: '🔥 RSS', link: 'https://fedtop.com/feed.xml' },
        {
          text: 'Follow me',
          items: [
            { text: 'twitter', link: 'https://twitter.com/wangrongding' },
            { text: 'github', link: 'https://github.com/wangrongding' },
          ],
        },
      ],
      // 侧边栏
      // sidebar: [{ text: '大类', items: [{ text: '快速开始', link: '/page/001-快速开始' }] }],
      // 社交网站
      socialLinks: [
        { icon: 'twitter', link: 'https://twitter.com/qingshuihe1' },
        { icon: 'github', link: 'https://github.com/wangrongding' },
      ],
      // 页脚
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2018-present <a href="https://github.com/wangrongding">Rongding</a>',
      },
    },
    // markdown 配置
    markdown: {
      lineNumbers: true, // 代码块显示行号
      theme: 'one-dark-pro', // 主题 'material-theme-palenight'
      // 自定义 markdown-it 插件
      // config: md => {
      //   md.use(require('markdown-it-mathjax3'))
      // },
    },
    // TODO: 生成 RSS
    // buildEnd: buildBlogRSS,
    // 覆盖默认的 Vite 配置
    vite: {
      server: {
        host: '0.0.0.0',
        port: 12345,
        open: false,
        hmr: true,
      },
      plugins: [],
      // 热更新时，清空控制台
      clearScreen: true,
    },
  })
}
