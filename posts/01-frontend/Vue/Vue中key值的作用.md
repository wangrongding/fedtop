---
title: Vue中key值的作用
date: 2018-11-13
tags:
  - vue
categories:
  - 前端
---

:::tip 出错缘由：<br> `Vue` 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。<br> 这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` 属性即可。见[详情](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0) :::

<!-- more -->

## 错误代码

```html
<!-- 代码块1 -->
<el-table-column label="授信申请状态" v-if="type">
  <template slot-scope="scope">{{ scope.row.data2 | format }}</template>
</el-table-column>
<!-- 代码块2 -->
<el-table-column prop="data1" label="联系人手机" v-else></el-table-column>
```

## 报错分析

 如果优先显示代码块 1，然后改变 type 值，显示代码块 2，这时 Vue 为了快速渲染页面，会优先拿代码 1 的代码渲染到代码块 2 的位置，但是代码块 2 并没有定义 `slot-scope` ，这时就会报标题错误。

## 解决方案

1. 给使用 `v-if` 和 `v-else` 的地方加上 `key`
2. 将  `v-if` 和 `v-else`  换成 `v-show`
