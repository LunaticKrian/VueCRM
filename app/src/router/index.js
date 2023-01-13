import {createRouter, createWebHistory} from "vue-router";

// 引入的组件：
import Login from "../views/Login.vue";


const routes = [
    // 主路由：
    {
        path: "/login",
        name: "Login",
        component: Login,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;