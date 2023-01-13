import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

// 引入 ElementUI 组件库：
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 ElementUI 图标：
import * as ElIcons from '@element-plus/icons-vue'
// 引入路由：
import router from './router';
// 引入store数据仓库：
import store from "./store";

const app = createApp(App)

// 全局注册el-icon
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')