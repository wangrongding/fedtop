<template>
  <footer>
    Powered by
    <a href="https://github.com/wangrongding" target="_blank" title="作者">荣顶</a>
    | Copyright © 2018-{{ date }} | MIT License
  </footer>
</template>
<script lang="ts" setup>
const date = new Date().getFullYear()
</script>
<style scoped>
footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 20px;
  padding: 0 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text);
}
a {
  color: var(--vp-c-brand);
  font-weight: bold;
}
a:hover {
  text-decoration: none;
  color: var(--vp-c-hover);
}
</style>
