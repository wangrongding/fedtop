const themeConfig = require("./config/theme/");

module.exports = {
    themeConfig,
    theme: "reco",
    base: "/",
    title: "汪荣顶的个人博客",
    description: "Hey,you are the only one worthwhile!",
    dest: "public",
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ],
        [
            "meta",
            {
                
                name: "description",
                content:
                    "汪荣顶,汪荣顶的个人博客,在这里,我会分享一些前端开发知识.",
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content: "汪荣顶,荣顶,wangrongding,rongding",
            },
        ],
        [
            "meta",
            {
                name: "author",
                content: "汪荣顶,wangrongding@qq.com,htpps://www.fedtop.com",
            },
        ],
    ],
    markdown: {
        lineNumbers: true,
    },
    plugins: ["@vuepress/medium-zoom", "flowchart"],
};
