<template>
  <div class="asideContainer">
    <!-- 导航菜单 -->
    <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-size"
        :collapse="this.$store.state.isCollapse"

        active-text-color="#74b9ff"
        background-color="#636e72"
        text-color="#fff"
    >
      <div class="aside-logo">{{this.$store.state.asideLogo}}</div>
      <!-- 导航栏菜单 -->
      <el-menu-item v-for="item in noChildren"
                    :key="item.name"
                    :index="item.name"
                    @click="clickMenu(item)">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.label }}</template>
      </el-menu-item>

      <!-- 导航栏菜单 -->
      <el-sub-menu v-for="item in hasChildren" :key="item.name" :index="item.name">
        <!-- 导航栏标题 -->
        <template #title>
          <!-- 导航栏图标 -->
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.label }}</span>
        </template>

        <!-- 菜单项 -->
        <el-menu-item v-for="subItem in item.children"
                      :key="subItem.name"
                      :index="subItem.name"
                      @click="clickMenu(subItem)">
          <el-icon>
            <component :is="subItem.icon"></component>
          </el-icon>
          <template #title>{{ subItem.label }}</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",

  data() {
    return {
      // 默认选中菜单栏：
      defaultActive: "main",
      // 导航栏菜单数据（动态从后端数据库中获取）：
      menuData: [
        {
          path: '/index',
          name: 'main',
          label: '首页',
          icon: 'House',
          url: 'Home/Home'
        },
        {
          label: '客户管理',
          icon: 'UserFilled',
          name: 'customer',
          children: [
            {
              path: '/CustomerList',
              name: 'customerList',
              label: '客户列表',
              icon: 'HelpFilled',
              url: 'customer/customerList'
            }
          ]
        },
        {
          label: '订单管理',
          icon: 'Histogram',
          name: 'order',
          children: [
            {
              path: '/OrderList',
              name: 'allOrder',
              label: '全部订单',
              icon: 'Grid',
              url: 'order/allOrder'
            },
            {
              path: '/MyOrderList',
              name: 'myOrder',
              label: '我的订单',
              icon: 'Setting',
              url: 'order/myOrder'
            }
          ]
        }
      ],
    };
  },

  computed: {
    // 判断是否有子节点：
    hasChildren() {
      // 数据过滤：
      return this.menuData.filter(item => item.children)
    },
    noChildren() {
      return this.menuData.filter(item => !item.children)
    }
  },

  methods: {
    clickMenu(item) {
      this.$router.push(item.path)
    }
  },

  components: {}

}
</script>

<style scoped>
/* 设置侧边栏样式 */
.el-menu-vertical-size {
  height: 100vh;
}

.aside-logo {
  height: 70px;
  line-height: 70px;
  color: #E9EEF3;
  font-size: 20px;
  font-weight: 800;
  overflow: hidden;
}

.el-menu {
  border-right: none;
}
</style>