<template>
  <div class="content">
    <img :src="avator" width="135" height="135" class="avator" />
  </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData<{ avator: string }>()
const avator = theme.value.avator
</script>
<style scoped>
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
</style>
