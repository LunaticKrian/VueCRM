import {createRouter, createWebHistory} from "vue-router";

// 引入的组件：
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import CustomerList from "../components/customer/CustomerList.vue";
import MyOrderList from "../components/order/MyOrderList.vue";
import OrderList from "../components/order/OrderList.vue";
import Index from "../components/home/Index.vue";


const routes = [
    {
        // 主路由：
        path: "/",
        // 重定向：
        redirect: Index
    },
    {
        // 主路由：
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        // 使用children配置嵌套子路由：
        children: [
            {
                path: "/index",
                name: "Index",
                component: Index,
            },
            {
                // 主路由：
                path: "/CustomerList",
                name: "CustomerList",
                component: CustomerList,
            },
            {
                // 主路由：
                path: "/MyOrderList",
                name: "MyOrderList",
                component: MyOrderList,
            },
            {
                // 主路由：
                path: "/OrderList",
                name: "OrderList",
                component: OrderList,
            },
        ]
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;