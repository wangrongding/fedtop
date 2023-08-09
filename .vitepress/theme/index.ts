import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { onMounted } from 'vue'

import '../style/index.scss'
import 'element-plus/dist/index.css'

import Archives from '../components/Archives.vue'
import Tags from '../components/Tags.vue'
import MyLayout from '../components/MyLayout.vue'

import dynamicBackground from './background'

export default {
  extends: DefaultTheme,
  Layout: MyLayout, // 注入到 layout 的组件
  async enhanceApp({ app }: { app: App }) {
    // 注册全局组件
    app.component('Archives', Archives)
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
