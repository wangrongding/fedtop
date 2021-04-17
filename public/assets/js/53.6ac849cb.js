(window.webpackJsonp = window.webpackJsonp || []).push([
    [53],
    {
        503: function(t, a, e) {
            "use strict";
            e.r(a);
            var r = e(18),
                o = Object(r.a)(
                    {},
                    function() {
                        var t = this,
                            a = t.$createElement,
                            e = t._self._c || a;
                        return e(
                            "ContentSlotsDistributor",
                            { attrs: { "slot-key": t.$parent.slotKey } },
                            [
                                e("h2", { attrs: { id: "原因" } }, [
                                    e(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#原因" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 原因"),
                                ]),
                                t._v(" "),
                                e("p", [
                                    t._v(
                                        "vue的路由是由js来控制的，但是，当你刷新浏览器的时候，是向服务器发送请求的一个过程，当访问不到的时候必然会返回404。"
                                    ),
                                ]),
                                t._v(" "),
                                e("h2", { attrs: { id: "解决办法" } }, [
                                    e(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#解决办法" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 解决办法"),
                                ]),
                                t._v(" "),
                                e("h3", { attrs: { id: "后台配合" } }, [
                                    e(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#后台配合" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 后台配合"),
                                ]),
                                t._v(" "),
                                e("p", [t._v("将请求同意指向一个有效地址。")]),
                                t._v(" "),
                                e("p", [
                                    t._v("比如，你的首页请求地址为 "),
                                    e("code", [t._v("www.aaa.com/go.html")]),
                                    t._v(" ，但是路由变为"),
                                    e("code", [t._v("www.aaa.com/main")]),
                                    t._v("，这时候你可以与后端人员商量，将 "),
                                    e("code", [t._v("www.aaa.com/...")]),
                                    t._v(" 统统指向 "),
                                    e("code", [t._v("www.aaa.com/go.html")]),
                                    t._v(" ，这样就解决了404问题。"),
                                ]),
                                t._v(" "),
                                e("h3", { attrs: { id: "仿真路由" } }, [
                                    e(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#仿真路由" },
                                        },
                                        [t._v("#")]
                                    ),
                                    t._v(" 仿真路由"),
                                ]),
                                t._v(" "),
                                e("p", [t._v("路由后带.html后缀。")]),
                                t._v(" "),
                                e("p", [
                                    t._v(
                                        "我遇到一个问题，就是页面初次加载时是携带参数的， "
                                    ),
                                    e("code", [
                                        t._v("www.aaa.com/go.html?p=123"),
                                    ]),
                                    t._v(
                                        " ，根据参数p决定是跳转路由A还是路由B，加入跳转到了路由A，也就是 "
                                    ),
                                    e("code", [t._v("www.aaa.com/routerA")]),
                                    t._v(
                                        " ，这时候刷新，就会出现404问题，这时候后端人员帮忙解释解决不了的，因为还需要携带参数。\n我的解决办法是："
                                    ),
                                ]),
                                t._v(" "),
                                e("ol", [
                                    e("li", [
                                        t._v("先将路由仿真：也就是将 "),
                                        e("code", [t._v("/routerA")]),
                                        t._v(" 变为 "),
                                        e("code", [t._v("/routerA.html")]),
                                        t._v(" ，冰袋跳转时谢丹参数，"),
                                        e("code", [
                                            t._v(
                                                "this.$router.push({path: /routerA.html${this.$router.query.p}})"
                                            ),
                                        ]),
                                        t._v("，所以刷新时，会向服务端请求 "),
                                        e("code", [t._v("routerA.html")]),
                                        t._v(" ，并且携带参数p；"),
                                    ]),
                                    t._v(" "),
                                    e("li", [
                                        t._v("这时在 "),
                                        e("code", [t._v("www.aaa.com")]),
                                        t._v(" 下真的存放一个 "),
                                        e("code", [t._v("routerA.html")]),
                                        t._v(
                                            " ，在文件里面获取参数p，然后跳转 "
                                        ),
                                        e("code", [
                                            t._v(
                                                "window.location.href='www.aaa.com/go.html?p=123'"
                                            ),
                                        ]),
                                        t._v("。"),
                                    ]),
                                ]),
                                t._v(" "),
                                e("p", [
                                    t._v("个人博客："),
                                    e(
                                        "a",
                                        {
                                            attrs: {
                                                href: "www.fedtop.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [
                                            e("strong", [t._v("汪荣顶")]),
                                            e("OutboundLink"),
                                        ],
                                        1
                                    ),
                                ]),
                            ]
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            a.default = o.exports;
        },
    },
]);
