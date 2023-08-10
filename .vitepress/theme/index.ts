import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { onMounted } from 'vue'

import '../style/index.scss'
import 'element-plus/dist/index.css'

import Projects from '../components/Projects.vue'
import Timeline from '../components/Timeline.vue'
import Tags from '../components/Tags.vue'
import MyLayout from '../components/MyLayout.vue'

import dynamicBackground from './background'

export default {
  extends: DefaultTheme,
  Layout: MyLayout, // 注入到 layout 的组件
  async enhanceApp({ app }: { app: App }) {
    // 注册全局组件
    app.component('Projects', Projects)
    app.component('Timeline', Timeline)
    app.component('Tags', Tags)

    const elementPlus = await import('element-plus')
    app.use(elementPlus)
  },
  setup() {
    onMounted(() => {
      dynamicBackground()
    })
  },
}
