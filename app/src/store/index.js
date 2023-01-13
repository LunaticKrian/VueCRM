import {createStore} from "vuex";

// 创建store实例：
const store = createStore({
    // 存储的单一状态（存储共享数据）
    state() {
        return {
            isCollapse: true,
            asideLogo: "Krian"
        }
    },
    mutations:{
        changeCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
    }
})

// 导出store：
export default store