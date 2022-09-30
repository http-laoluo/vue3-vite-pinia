import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "@/utils/rem"
import '@/permission' // permission control
import './assets/main.css'
// 引入 Vconsole
import Vconsole from 'vconsole'
// 在 development 环境才使用
import.meta.env.VITE_MODE_NAME === 'development' ? new Vconsole : ''


const app = createApp(App)
import nut from "@/nutui/nutui"
nut(app)

// 采用按需加载时  此全局css样式，需要删除
// import "@nutui/nutui/dist/style.css";

app.config.globalProperties.$text = '全局挂载'

app.use(createPinia())
app.use(router)

app.mount('#app')
