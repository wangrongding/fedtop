<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #doc-after>
      <div>
        <button @click="back">返回</button>
      </div>
      <Comments />
    </template>
    <!-- Home slot-->
    <template #home-hero-before><HomeHero /></template>
    <template #home-features-after><Page /></template>
  </Layout>
  <!-- copywright -->
  <CopyWright />
</template>
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import HomeHero from './HomeHero.vue'
import CopyWright from './CopyWright.vue'
import Comments from './Comments.vue'
import Page from './Page.vue'
import Category from './Category.vue'
import Title from './Title.vue'
const { Layout } = DefaultTheme
const back = () => {
  history.back()
}
</script>
<style scoped lang="scss">
button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-brand-dark);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-brand-dark);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.dark {
  button {
    color: var(--vp-c-brand-light);
  }
  button::after {
    background-color: var(--vp-c-brand-light);
  }
}

button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
