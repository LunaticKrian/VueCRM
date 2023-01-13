<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto">
        <Aside/>
      </el-aside>

      <!-- 容器 -->
      <el-container>
        <!-- 头部导航栏 -->
        <el-header>
          <Header/>
        </el-header>

        <!-- 主体内容区 -->
        <el-main>
          <!-- 路由出口 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Aside from "../components/home/Aside.vue";
import Header from "../components/home/Header.vue";

export default {
  name: "Home",
  components: {Aside, Header}
}
</script>

<style scoped>
.el-header {
  height: 60px;
  line-height: 60px;
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  margin: 20px;
  border-radius: 10px;
}
</style>