import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import router from './routers'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/element-dark.scss'
import './styles/index.scss'
import './permission'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
