(window.webpackJsonp = window.webpackJsonp || []).push([
    [61],
    {
        466: function(s, t, a) {
            "use strict";
            a.r(t);
            var n = a(18),
                e = Object(n.a)(
                    {},
                    function() {
                        var s = this,
                            t = s.$createElement,
                            a = s._self._c || t;
                        return a(
                            "ContentSlotsDistributor",
                            { attrs: { "slot-key": s.$parent.slotKey } },
                            [
                                a("div", { staticClass: "custom-block tip" }, [
                                    a(
                                        "p",
                                        { staticClass: "custom-block-title" },
                                        [s._v("说明")]
                                    ),
                                    s._v(" "),
                                    a("ul", [
                                        a("li", [
                                            s._v("以下记录均针对于vue-cli"),
                                        ]),
                                        s._v(" "),
                                        a("li", [
                                            s._v(
                                                "本页所整理的关于Vuex的知识点并不完整，目的在于让开发者快速熟悉Vuex的系统知识，详情请移步"
                                            ),
                                            a(
                                                "a",
                                                {
                                                    attrs: {
                                                        href:
                                                            "https://vuex.vuejs.org/zh/",
                                                        target: "_blank",
                                                        rel:
                                                            "noopener noreferrer",
                                                    },
                                                },
                                                [
                                                    s._v("Vuex官网"),
                                                    a("OutboundLink"),
                                                ],
                                                1
                                            ),
                                        ]),
                                    ]),
                                ]),
                                s._v(" "),
                                a("h2", { attrs: { id: "state" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#state" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" State"),
                                ]),
                                s._v(" "),
                                a("div", { staticClass: "custom-block tip" }, [
                                    a("p", [s._v("获取状态")]),
                                ]),
                                s._v(" "),
                                a("h4", { attrs: { id: "_1-组件中获取" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#_1-组件中获取" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" 1.组件中获取"),
                                ]),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javacript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v(
                                                        "const app = new Vue({\n  el: '#app',\n  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件\n  store,\n  components: { Counter },\n  template: `\n    <div class=\"app\">\n      <counter></counter>\n    </div>\n  `\n})\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [s._v("使用：")]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" Counter "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  template"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token template-string",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token template-punctuation string",
                                                                    },
                                                                },
                                                                [s._v("`")]
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token string",
                                                                    },
                                                                },
                                                                [
                                                                    s._v(
                                                                        "<div>{{ count }}</div>"
                                                                    ),
                                                                ]
                                                            ),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token template-punctuation string",
                                                                    },
                                                                },
                                                                [s._v("`")]
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("count")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("this")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("$store"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    { attrs: { id: "_2-mapstate-辅助函数" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_2-mapstate-辅助函数",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 2.mapState 辅助函数"),
                                    ]
                                ),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "使用 mapState 辅助函数帮助我们生成计算属性"
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 在单独构建的版本中辅助函数为 Vuex.mapState"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" mapState "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'vuex'")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("export")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("default")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapState")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 箭头函数可使代码更简练"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function-variable function",
                                                            },
                                                        },
                                                        [s._v("count")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 传字符串参数 'count' 等同于 `state => state.count`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    countAlias"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'count'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 为了能够使用 `this` 获取局部状态，必须使用常规函数"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "countPlusLocalState"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("+")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("this")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("localCount\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。"
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapState")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 映射 this.count 为 store.state.count"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'count'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    { attrs: { id: "_3-对象展开运算符" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href: "#_3-对象展开运算符",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 3.对象展开运算符"),
                                    ]
                                ),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 computed 属性。"
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("localComputed")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("/* ... */")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 使用对象展开运算符将此对象混入到外部对象中"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapState")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id: "_4-组件仍然保有局部状态",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_4-组件仍然保有局部状态",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 4.组件仍然保有局部状态"),
                                    ]
                                ),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。"
                                    ),
                                ]),
                                s._v(" "),
                                a("h2", { attrs: { id: "getter" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#getter" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Getter"),
                                ]),
                                s._v(" "),
                                a("div", { staticClass: "custom-block tip" }, [
                                    a("p", [
                                        s._v(
                                            "可以获取状态，也可以获取状态的衍生结果"
                                        ),
                                    ]),
                                ]),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("doneTodosCount")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("this")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("$store"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("todos"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("filter")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("todo")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" todo"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("done"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("length\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "如果有多个组件需要用到此属性，我们要么复制这个函数，这是一件很无聊的事。"
                                    ),
                                ]),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。"
                                    ),
                                ]),
                                s._v(" "),
                                a("h4", { attrs: { id: "_1-通过属性访问" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#_1-通过属性访问" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" 1.通过属性访问"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" store "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [
                                                            s._v("Vuex"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(".")]
                                                            ),
                                                            s._v("Store"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    todos"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" id"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" text"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'...'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" done"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token boolean",
                                                            },
                                                        },
                                                        [s._v("true")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" id"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" text"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'...'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" done"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token boolean",
                                                            },
                                                        },
                                                        [s._v("false")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  getters"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// Getter 接受 state 作为其第一个参数："
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function-variable function",
                                                            },
                                                        },
                                                        [s._v("doneTodos")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("todos"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("filter")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("todo")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" todo"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("done"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "我们可以很容易地在任何组件中使用它："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("doneTodosCount")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("this")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("$store"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("getters"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("doneTodosCount\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h4", { attrs: { id: "_2-通过方法访问" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#_2-通过方法访问" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" 2.通过方法访问"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("getters"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function-variable function",
                                                            },
                                                        },
                                                        [s._v("getTodoById")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("id")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("todos"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("find")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("todo")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" todo"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("id "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("===")]
                                                    ),
                                                    s._v(" id"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("store"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("getters"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("getTodoById")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("2")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// -> { id: 2, text: '...', done: false }"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("ol", [
                                    a("li", [s._v("mapGetters 辅助函数")]),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" mapGetters "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'vuex'")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("export")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("default")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  computed"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 使用对象展开运算符将 getter 混入 computed 对象中"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapGetters")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'doneTodosCount'"
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'anotherGetter'"
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "如果你想将一个 getter 属性另取一个名字，使用对象形式："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapGetters")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n  doneCount"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'doneTodosCount'"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "mutation" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#mutation" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Mutation"),
                                ]),
                                s._v(" "),
                                a("div", { staticClass: "custom-block tip" }, [
                                    a("p", [
                                        s._v("切记是同步的，通过commit提交"),
                                    ]),
                                ]),
                                s._v(" "),
                                a(
                                    "h4",
                                    { attrs: { id: "_1-普通commit提交" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href: "#_1-普通commit提交",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 1.普通commit提交"),
                                    ]
                                ),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" store "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [
                                                            s._v("Vuex"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(".")]
                                                            ),
                                                            s._v("Store"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    count"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  mutations"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("increment")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// 变更状态")]
                                                    ),
                                                    s._v("\n      state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("++")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\nstore"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    { attrs: { id: "_2-提交载荷-payload" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_2-提交载荷-payload",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 2.提交载荷（Payload）"),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" store "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [
                                                            s._v("Vuex"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(".")]
                                                            ),
                                                            s._v("Store"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    count"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  mutations"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("increment")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            s._v("state"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(",")]
                                                            ),
                                                            s._v(" n"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("+=")]
                                                    ),
                                                    s._v(" n\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\nstore"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("10")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" store "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [
                                                            s._v("Vuex"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(".")]
                                                            ),
                                                            s._v("Store"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    count"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  mutations"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("increment")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            s._v("state"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(",")]
                                                            ),
                                                            s._v(" payload"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("count "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("+=")]
                                                    ),
                                                    s._v(" payload"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    s._v("amount\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\nstore"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  amount"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("10")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// 或者是")]
                                                    ),
                                                    s._v("\n\nstore"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  type"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  amount"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("10")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id:
                                                "_3-使用常量替代-mutation-事件类型",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_3-使用常量替代-mutation-事件类型",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(
                                            " 3.使用常量替代 Mutation 事件类型"
                                        ),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// mutation-types.js"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("export")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token constant",
                                                            },
                                                        },
                                                        [s._v("SOME_MUTATION")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'SOME_MUTATION'"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// store.js")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" Vuex "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'vuex'")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token constant",
                                                            },
                                                        },
                                                        [s._v("SOME_MUTATION")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'./mutation-types'"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("const")]
                                                    ),
                                                    s._v(" store "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [
                                                            s._v("Vuex"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(".")]
                                                            ),
                                                            s._v("Store"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  state"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  mutations"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token constant",
                                                            },
                                                        },
                                                        [s._v("SOME_MUTATION")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [s._v("state")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// mutate state"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id: "_4-mutation-必须是同步函数",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_4-mutation-必须是同步函数",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 4.Mutation 必须是同步函数"),
                                    ]
                                ),
                                s._v(" "),
                                a("p", [
                                    s._v(
                                        "一条重要的原则就是要记住 mutation 必须是同步函数。"
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id: "_5-在组件中提交-mutation",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_5-在组件中提交-mutation",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 5.在组件中提交 Mutation"),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" mapMutations "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'vuex'")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("export")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("default")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  methods"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapMutations")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.increment()` 映射为 `this.$store.commit('increment')`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// `mapMutations` 也支持载荷："
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'incrementBy'")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapMutations")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      add"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.add()` 映射为 `this.$store.commit('increment')`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "action" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#action" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Action"),
                                ]),
                                s._v(" "),
                                a("div", { staticClass: "custom-block tip" }, [
                                    a("p", [
                                        s._v("切记是异步的，通过dispatch提交"),
                                    ]),
                                ]),
                                s._v(" "),
                                a("ul", [
                                    a("li", [
                                        s._v(
                                            "Action 提交的是 mutation，而不是直接变更状态。"
                                        ),
                                    ]),
                                    s._v(" "),
                                    a("li", [
                                        s._v("Action 可以包含任意异步操作。"),
                                    ]),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javscript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v(
                                                        "const store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment (state) {\n      state.count++\n    }\n  },\n  actions: {\n    increment (context) {\n      context.commit('increment')\n    },\n    // 异步操作\n    incrementAsync ({ commit }) {\n      setTimeout(() => {\n        commit('increment')\n      }, 1000)\n    }\n  }\n})\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id:
                                                "_1-actions-支持同样的载荷方式和对象方式进行分发",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_1-actions-支持同样的载荷方式和对象方式进行分发",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(
                                            " 1.Actions 支持同样的载荷方式和对象方式进行分发："
                                        ),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javscript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v(
                                                        "// 以载荷形式分发\nstore.dispatch('incrementAsync', {\n  amount: 10\n})\n\n// 以对象形式分发\nstore.dispatch({\n  type: 'incrementAsync',\n  amount: 10\n})\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    {
                                        attrs: {
                                            id:
                                                "_2-来看一个更加实际的购物车示例-涉及到调用异步-api-和分发多重-mutation",
                                        },
                                    },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_2-来看一个更加实际的购物车示例-涉及到调用异步-api-和分发多重-mutation",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(
                                            " 2.来看一个更加实际的购物车示例，涉及到调用异步 API 和分发多重 mutation："
                                        ),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javscript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class: "language-text",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v(
                                                        "actions: {\n  checkout ({ commit, state }, products) {\n    // 把当前购物车的物品备份起来\n    const savedCartItems = [...state.cart.added]\n    // 发出结账请求，然后乐观地清空购物车\n    commit(types.CHECKOUT_REQUEST)\n    // 购物 API 接受一个成功回调和一个失败回调\n    shop.buyProducts(\n      products,\n      // 成功操作\n      () => commit(types.CHECKOUT_SUCCESS),\n      // 失败操作\n      () => commit(types.CHECKOUT_FAILURE, savedCartItems)\n    )\n  }\n}\n"
                                                    ),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a(
                                    "h4",
                                    { attrs: { id: "_3-在组件中分发-action" } },
                                    [
                                        a(
                                            "a",
                                            {
                                                staticClass: "header-anchor",
                                                attrs: {
                                                    href:
                                                        "#_3-在组件中分发-action",
                                                },
                                            },
                                            [s._v("#")]
                                        ),
                                        s._v(" 3.在组件中分发 Action"),
                                    ]
                                ),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("import")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v(" mapActions "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("from")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'vuex'")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("export")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("default")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  methods"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapActions")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("[")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// `mapActions` 也支持载荷："
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'incrementBy'")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("]")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("...")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("mapActions")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      add"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'increment'")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 将 `this.add()` 映射为 `this.$store.dispatch('increment')`"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h4", { attrs: { id: "_4-组合-action" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#_4-组合-action" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" 4.组合 Action"),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    s._v("actions"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("actionA")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("{")]
                                                            ),
                                                            s._v(" commit "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("}")]
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("new")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token class-name",
                                                            },
                                                        },
                                                        [s._v("Promise")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            s._v("resolve"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(",")]
                                                            ),
                                                            s._v(" reject"),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("setTimeout")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n        "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'someMutation'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n        "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("resolve")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token number",
                                                            },
                                                        },
                                                        [s._v("1000")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// 现在可以")]
                                                    ),
                                                    s._v("\nstore"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("dispatch")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'actionA'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 在另外一个 action 中也可以："
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\nactions"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [s._v("// ...")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("actionB")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("{")]
                                                            ),
                                                            s._v(" dispatch"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(",")]
                                                            ),
                                                            s._v(" commit "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("}")]
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("return")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("dispatch")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'actionA'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(".")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("then")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v("=>")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n      "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "'someOtherMutation'"
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("12")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("13")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("14")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("15")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("16")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("17")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("18")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("19")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("20")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("21")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("22")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("23")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("24")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("25")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("p", [
                                    s._v(
                                        "最后，如果我们利用 async / await，我们可以如下组合 action："
                                    ),
                                ]),
                                s._v(" "),
                                a(
                                    "div",
                                    {
                                        staticClass:
                                            "language-javascript line-numbers-mode",
                                    },
                                    [
                                        a(
                                            "pre",
                                            {
                                                pre: !0,
                                                attrs: {
                                                    class:
                                                        "language-javascript",
                                                },
                                            },
                                            [
                                                a("code", [
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 假设 getData() 和 getOtherData() 返回的是 Promise"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n\nactions"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token operator",
                                                            },
                                                        },
                                                        [s._v(":")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("async")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("actionA")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("{")]
                                                            ),
                                                            s._v(" commit "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("}")]
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'gotData'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("await")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("getData")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("async")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("actionB")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token parameter",
                                                            },
                                                        },
                                                        [
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("{")]
                                                            ),
                                                            s._v(" dispatch"),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v(",")]
                                                            ),
                                                            s._v(" commit "),
                                                            a(
                                                                "span",
                                                                {
                                                                    pre: !0,
                                                                    attrs: {
                                                                        class:
                                                                            "token punctuation",
                                                                    },
                                                                },
                                                                [s._v("}")]
                                                            ),
                                                        ]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("{")]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("await")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("dispatch")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'actionA'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token comment",
                                                            },
                                                        },
                                                        [
                                                            s._v(
                                                                "// 等待 actionA 完成"
                                                            ),
                                                        ]
                                                    ),
                                                    s._v("\n    "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("commit")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token string",
                                                            },
                                                        },
                                                        [s._v("'gotOtherData'")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(",")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token keyword",
                                                            },
                                                        },
                                                        [s._v("await")]
                                                    ),
                                                    s._v(" "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token function",
                                                            },
                                                        },
                                                        [s._v("getOtherData")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("(")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v(")")]
                                                    ),
                                                    s._v("\n  "),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                    a(
                                                        "span",
                                                        {
                                                            pre: !0,
                                                            attrs: {
                                                                class:
                                                                    "token punctuation",
                                                            },
                                                        },
                                                        [s._v("}")]
                                                    ),
                                                    s._v("\n"),
                                                ]),
                                            ]
                                        ),
                                        s._v(" "),
                                        a(
                                            "div",
                                            {
                                                staticClass:
                                                    "line-numbers-wrapper",
                                            },
                                            [
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("1")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("2")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("3")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("4")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("5")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("6")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("7")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("8")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("9")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("10")]
                                                ),
                                                a("br"),
                                                a(
                                                    "span",
                                                    {
                                                        staticClass:
                                                            "line-number",
                                                    },
                                                    [s._v("11")]
                                                ),
                                                a("br"),
                                            ]
                                        ),
                                    ]
                                ),
                                a("h2", { attrs: { id: "module" } }, [
                                    a(
                                        "a",
                                        {
                                            staticClass: "header-anchor",
                                            attrs: { href: "#module" },
                                        },
                                        [s._v("#")]
                                    ),
                                    s._v(" Module"),
                                ]),
                                s._v(" "),
                                a("p", [a("strong", [s._v("未完待续")])]),
                                s._v(" "),
                                a("p", [
                                    s._v("个人博客："),
                                    a(
                                        "a",
                                        {
                                            attrs: {
                                                href: "www.fedtop.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                        },
                                        [
                                            a("strong", [s._v("汪荣顶")]),
                                            a("OutboundLink"),
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
            t.default = e.exports;
        },
    },
]);
