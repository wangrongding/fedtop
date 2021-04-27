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
    ],
    markdown: {
        lineNumbers: true,
    },
    plugins: ["@vuepress/medium-zoom", "flowchart"],
};
