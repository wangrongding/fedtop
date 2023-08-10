<template>
  <div class="content">
    <img :src="avator" width="135" height="135" class="avator" />
  </div>
  <div class="shareCard">
    <h1 class="title">👋 Hi there! I'm Rongding~</h1>
    <p class="description">A passionate web developer based in Beijing.</p>
    <h2 class="blog-title text-center text-lg font-bold">在键帽与字符上横跳，于代码和程序中穿梭。</h2>
  </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData<{ avator: string }>()
const avator = theme.value.avator
</script>
<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
}
.avator {
  border-radius: 50%;
  border: 5px solid var(--vp-avator-border);
}

@keyframes avator-transform {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.avator:hover {
  animation: 5s linear 0s infinite avator-transform;
}

.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}
.blog-title {
  color: var(--vp-c-brand-dark);
}
.dark {
  .blog-title {
    color: var(--vp-c-brand-light);
  }
}
.description {
  margin: 1em 0;
}
</style>
