import {createApp} from 'vue'
import {ElButton,ElInput } from 'element-plus'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
import router from './router'
const app=createApp(App)
// app.use(ElementPlus)
app.component(ElButton.name,ElButton)
app.component(ElInput.name,ElInput)
app.use(router).mount('#app')