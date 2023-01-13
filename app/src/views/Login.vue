<template>
  <div id="background">
    <!--logo-->
    <div id="logo">MySystem</div>

    <!--登录框-->
    <div id="login">
      <el-card class="box-card">
        <div id="login_header" class="card-header">
          WellCome
        </div>
        <div id="form">
          <!-- 数据双向绑定 -->
          <el-input size="large" v-model="username" placeholder="请输入账号"/>
          <el-input size="large" v-model="password" type="password" placeholder="请输入密码" show-password/>
          <el-button size="large" type="primary" v-on:click="userLogin">登录</el-button>
          <el-button size="large" type="primary">注册</el-button>
        </div>
      </el-card>
    </div>

    <!--时间-->
    <div id="clock">
      <!-- 使用{{}}进行插值 -->
      <div id="date">{{ date }}</div>
      <div id="time">{{ time }}</div>
    </div>

    <!-- 版权声明 -->
    <div id="copyright">
      Copyright © 2022 Krian. All RIGHT RESERVED.
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  // 使用函数式 data，进行数据双向绑定：
  data() {
    return {
      username: "",
      password: "",
      time: "",
      date: "",
    }
  },
  // 使用 Vue 钩子函数，每秒触发 update_clock 函数：
  mounted() {
    this.$nextTick(() => {
      setInterval(this.update_clock, 1000)
    })
  },
  methods: {
    // 日期时间计算函数：
    update_clock: function (e) {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      month++;  // 月默认是从0开始所以要+1
      if (month < 10) month = "0" + month;
      let day = d.getDay();
      if (day < 10) day = "0" + day;
      let hour = d.getHours();
      if (hour < 10) hour = "0" + hour;
      let minute = d.getMinutes();
      if (minute < 10) minute = "0" + minute;
      let second = d.getSeconds();
      if (second < 10) second = "0" + second
      this.time = hour + ":" + minute + ":" + second;
      this.date = year + "/" + month + "/" + day;
    },

    // 登录函数：
    userLogin: function (e) {
      let data = {
        "name": this.username,
        "password": this.password
      }
      this.$http.post("http://127.0.0.1:8080/login", data).then((res) => {
        // 实现路由跳转：
        this.$router.push("/index")
      }).catch((err) => {
        alert(err)
      });
    }
  }
}
</script>

<!--scoped css 样式生效作用域，指定为当前组件-->
<style scoped>

#background {
  /*
  position:fixed 固定定位，元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动
  */
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  /*
  设置渐变背景：linear-gradient 设置颜色渐变
  */
  background-image: linear-gradient(90deg, cyan, purple);
  background-size: 400%;

  /*
  设置动画效果
  infinite：动画循环
  */
  animation: myAnimation 10s infinite;
}

/*
设置动画的关键帧
*/
@keyframes myAnimation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

#logo {
  color: aliceblue;
  font-size: 25px;
  font-weight: 800;
  /*设置文本字母大写*/
  text-transform: uppercase;

  position: absolute;
  top: 15%;
  left: 15%;
}

#login {
  position: absolute;
  top: 30%;
  left: 40%;
}

/*修改 ElementUI 默认的样式*/
.el-card {
  width: 500px;
  height: 280px;
  background-color: rgba(255, 255, 255, 0.4);
  /* 设置圆角边框 */
  border-radius: 15px;
}

#form {
  /*设置行高*/
  line-height: 60px;
  padding-left: 15px;
  padding-right: 15px;
}

#login_header {
  color: aliceblue;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
}

#clock {
  color: aliceblue;
  position: absolute;
  top: 70%;
  left: 15%;
  text-align: left;
}

#date {
  font-size: 50px;
  font-weight: 600;
}

#time {
  margin-top: 30px;
  font-size: 25px;
  font-weight: 500;
}

#copyright {
  color: aliceblue;
  position: absolute;
  top: 93%;
  left: 40%;
}

</style>