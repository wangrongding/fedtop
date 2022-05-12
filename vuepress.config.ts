const { defaultTheme } = require("vuepress");
module.exports = {
  base: "/", //部署站点的基础路径。
  lang: "zh-CN", //站点的语言。
  title: "荣顶 - 编程博客", //站点的标题。
  description: "Hey,you are the only one worthwhile!", //站点的描述。
  dest: "dist", //指定 vuepress build 命令的输出目录。
  head: [
    //自定义的 favicon
    [
      "link",
      {
        rel: "icon",
        href: "https://assets.fedtop.com/picbed/46ce2780c8651d55ec3ae11b423d7f1.png",
      },
    ],
  ],
  theme: defaultTheme({
    repo: "https://github.com/wangrongding", //项目仓库的 URL。
    logo: "https://assets.fedtop.com/picbed/logo.jpg", //Logo
    logoDark: "https://assets.fedtop.com/picbed/darklogo.jpg", //暗黑Logo
    // 导航栏配置。
    navbar: [
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
    ],
  }),
};
