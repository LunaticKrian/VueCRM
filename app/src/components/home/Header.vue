<template>
  <div class="container-header">
    <div class="left-context">
      <el-button icon="Menu" @click="changeCollapse" style="margin-right: 20px"/>
      <span class="firstPage">首页</span>
    </div>

    <div class="right-context">
      <el-dropdown :hide-on-click="false">
        <img class="avatar" src="../../assets/avatar.png" alt="个人账户">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账户信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {

    }
  },
  methods: {
    changeCollapse() {
      this.$store.commit("changeCollapse")
    }
  }
}
</script>

<style scoped>

.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-context {

}

.right-context {
  display: flex;
  align-items: center;
}

.firstPage {
  color: #fff;
  font-weight: 500;
  font-size: 16px;
}

.avatar {
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
}

</style>