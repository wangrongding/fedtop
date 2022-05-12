const { defaultTheme } = require("vuepress");
import navBar from "./config/navBar";
import head from "./config/head";
module.exports = {
  base: "/", //部署站点的基础路径。
  lang: "zh-CN", //站点的语言。
  title: "荣顶 - 编程博客", //站点的标题。
  description: "Hey,you are the only one worthwhile!", //站点的描述。
  dest: "dist", //指定 vuepress build 命令的输出目录。
  head, // html head 标签
  theme: defaultTheme({
    navBar, // 导航栏配置。
    subSidebar: "auto",
    repo: "https://github.com/wangrongding", //项目仓库的 URL。
    docsRepo: "https://github.com/wangrongding/fedtop",
    docsBranch: "fedtop",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    editLinkText: "编辑此页",
    logo: "https://assets.fedtop.com/picbed/logo.jpg", //Logo
    logoDark: "https://assets.fedtop.com/picbed/darklogo.jpg", //暗黑Logo
  }),
};
