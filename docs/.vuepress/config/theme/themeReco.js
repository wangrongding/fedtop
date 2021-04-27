module.exports = {
    type: "blog",
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: "Category", // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: "Tag", // 默认 “标签”
        },
    },
    // 最后更新时间
    lastUpdated: false, // string | boolean
    // lastUpdated: "Last Updated", // string | boolean
    // 作者
    author: "汪荣顶",
    // 备案号
    record: "赣ICP备19003256号-2",
    recordLink: "https://beian.miit.gov.cn",
    // 项目开始时间
    startYear: "2017",
    socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/recoluan" },
        { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
    ],
};
