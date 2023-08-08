<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../theme/utils'

const { theme } = useData()
const data = computed(() => useYearSort(theme.value.posts))
</script>
<template>
  <div class="main">
    <div v-for="yearList in data" class="yearItem">
      <div class="year">
        {{ yearList[0].frontMatter.date.split('-')[0] }}
      </div>
      <a :href="withBase(article.regularPath)" v-for="(article, index) in yearList" :key="index" class="article">
        <div class="title">
          <div class="title-o"></div>
          {{ article.frontMatter.title }}
        </div>
        <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 48rem;
}
.yearItem {
  border-bottom: 1px dashed #c7c7c7;
  padding: 0 0 16px 0;
}
.yearItem:last-child {
  border: none;
}
.year {
  padding: 16px 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.article {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  color: var(--vp-c-text-2);
  transition: border 0.3s ease, color 0.3s ease;
}
.article:hover {
  text-decoration: none;
  color: var(--vp-c-brand);
}
.date {
  font-family: Georgia, sans-serif;
  min-width: 48px;
}
.dark {
  .article:hover {
    text-decoration: none;
    color: var(--vp-c-brand-lighter);
    background-color: var(--vp-c-brand-dim);
  }
}
</style>
