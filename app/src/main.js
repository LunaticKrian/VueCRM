import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// 引入 ElementUI 组件库：
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入路由：
import router from './router';

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')