export default [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端",
    link: "/frontend",
  },
  "/about.md",
  {
    text: "联系我",
    link: "/contact",
    children: [
      {
        text: "GitHub",
        link: "https://github.com/wangrongding",
        icon: "reco-github",
      },
      {
        text: "掘金",
        link: "https://juejin.cn/user/2858385963749223",
        icon: "reco-juejin",
      },
      {
        text: "知乎",
        link: "https://www.zhihu.com/people/rongding",
        icon: "reco-zhihu",
      },

      {
        text: "微博",
        link: "https://weibo.com/wangrongding",
        icon: "reco-weibo",
      },
      {
        text: "NPM",
        link: "https://www.npmjs.com/~wangrongding",
        icon: "reco-npm",
      },
    ],
  },
];
