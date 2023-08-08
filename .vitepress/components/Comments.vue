<script setup lang="ts">
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<template>
  <div>
    <Giscus
      id="comments"
      repo="wangrongding/fedtop"
      repo-id="MDEwOlJlcG9zaXRvcnkzNTU5Njg4ODg="
      category="Announcements"
      category-id="DIC_kwDOFTeneM4CPoEA"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      lang="zh-CN"
      :theme="isDark ? 'dark_dimmed' : 'noborder_light'"
    />
  </div>
</template>
