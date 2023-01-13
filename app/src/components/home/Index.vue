<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- 用户信息 -->
        <el-card class="box-card">
         <div class="user">
           <img class="avatar" src="../../assets/avatar.png" alt="krian">
           <div class="info">
             <p class="name">Admin</p>
             <p class="access">超级管理员</p>
           </div>
         </div>
        </el-card>
      </el-col>


      <el-col :span="16">
        <!-- 用户信息 -->
        <div class="userInfo">
          <el-card class="box-card">
            用户信息
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
.el-card {
  margin: 10px;
}

.userInfo-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
}

.user img {
  width: 150px;
  border-radius: 50%;
  margin-right: 15px;
}

.user .name {
  font-size: 40px;
  font-weight: 600;
}

.user .access {
  margin-top: 10px;
  font-size: 18px;
}

</style>