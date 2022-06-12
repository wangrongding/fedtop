const themeConfig = require('./config/')

module.exports = {
  themeConfig,
  theme: 'reco',
  base: '/',
  title: '荣顶 - 个人博客',
  description: 'Hey,you are the only one worthwhile!',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content: '荣顶,汪荣顶的个人博客,在这里,我会分享一些前端开发知识.',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: '汪荣顶,荣顶,wangrongding,rongding',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: '汪荣顶,wangrongding@qq.com,htpps://www.fedtop.com',
      },
    ],
    ['script', { src: '/custom.js' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/medium-zoom',
    'flowchart',
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover',
      {
        width: '300px', // 默认 260px
        title: '消息提示',
        body: [
          {
            type: 'title',
            content:
              '如果你也非常热爱前端相关技术！欢迎加入千人前端技术交流群~ 🦄',
            style: 'text-align:left;font-size:16px;line-height:30px;',
          },
          {
            type: 'image',
            src: 'https://assets.fedtop.com/picbed/1655029924164.jpg',
          },
        ],
        footer: [
          /* {
            type: "button",
            text: "打赏",
            link: "/donate",
            }, */
        ],
      },
    ],
  ],
}
