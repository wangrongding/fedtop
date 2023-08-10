<script setup lang="ts">
import projects from '../theme/projects'

function openRepo(repoName: string) {
  window.open(`https://github.com/wangrongding/${repoName}`)
}
</script>
<template>
  <div class="project-page p-8">
    <p class="mb-8 text-center">这里汇总我做的一些有趣以及实用的开源项目🌸</p>
    <div class="project-list">
      <div v-for="item in projects" class="project bg-slate-700" @click="openRepo(item.name)">
        <div class="flex w-full justify-between">
          <h2 class="text-2xl font-bold">{{ item.name }}</h2>
          <div class="flex items-center justify-end gap-2">
            <img :src="`https://img.shields.io/github/stars/wangrongding/${item.name}`" :alt="`${item.name}`" />
            <img
              v-if="item.npm"
              :src="`https://img.shields.io/npm/dt/${item.name}?style=flat&label=downloads&color=cb3837&labelColor=cb0000&logo=npm`"
              :alt="`${item.name}`"
            />
            <img v-if="item.vscode" :src="`https://badgen.net/vs-marketplace/i/wangrongding.${item.name}`" :alt="`${item.name}`" />
          </div>
        </div>
        <p class="project-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project-list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
  justify-content: space-around;
  align-content: space-around;
  .project {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
    background-color: #b4a79c81;
    cursor: pointer;
    &:hover {
      background-color: #b4a79c;
    }

    .project-description {
      font-size: 16px;
      font-weight: normal;
      color: #000000;
      // 多行省略
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
    }
  }
}
.dark {
  .project {
    color: var(--vp-c-brand-light);
  }
}
</style>
