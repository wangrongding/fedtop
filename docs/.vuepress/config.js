const themeConfig = require("./config/theme/");

module.exports = {
    themeConfig,
    theme: "reco",
    base: "/",
    title: "荣顶 - 个人博客",
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
        ["script", { src: "/custom.js" }],
    ],
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        "@vuepress/medium-zoom",
        "flowchart",
        [
            "@vuepress-reco/vuepress-plugin-bulletin-popover",
            {
                width: "300px", // 默认 260px
                title: "消息提示",
                body: [
                    {
                        type: "title",
                        content:
                            "如果你也非常热爱前端相关技术！欢迎加入我的小密圈~ 🦄",
                        style:
                            "text-align:left;font-size:16px;line-height:30px;",
                    },
                    {
                        type: "image",
                        src:
                            "https://gitee.com/wangrongding/image-house/raw/master/2021-9-9/1631165421779-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210818170639.jpg",
                    },
                    {
                        type: "text",
                        content:
                            "微信扫描二维码，拉你进前端技术交流群，每日精选好文~ 😉",
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
};
