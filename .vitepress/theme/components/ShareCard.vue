<template>
  <div class="shareCard">
    <h1 class="title">
      <span>Hi there! I'm Rongding~ 👋</span>
    </h1>
    <p class="description">A passionate web developer based in Beijing.</p>
    <h2 class="blog-title text-center font-bold text-xl mt-4">在键帽与字符上横跳，于代码和程序中穿梭。</h2>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
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
  color: var(--vp-c-brand-light);
}
.description {
  margin: 1em 0;
}
</style>
