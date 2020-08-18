<template>
  <div class="layout">
    <login-panel
      v-show="loginPanelShow"
      :loginPanelShow.sync="loginPanelShow"
    ></login-panel>
    <el-container>
      <el-header>
        <Nav />
        <div class="login_btn">
          <el-button type="text" @click="loginPanelShow = true">登录</el-button>
        </div>
      </el-header>
      <el-main class="content">
        <router-view />
      </el-main>
      <el-footer>一个努力做西湖区最好的算法题解的团队</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import loginPanel from "@/components/login/index.vue";
export default {
  name: "Home",
  components: {
    Nav,
    loginPanel
  },
  data() {
    return {
      loginPanelShow: false // 是否显示登录面板
    };
  }
};
</script>
<style lang="less" scoped>
.layout {
  width: 80%;
  text-align: center;
  margin: auto;
  justify-content: center;

  .content {
    min-height: 85vh;
  }
  .el-header {
    position: relative;
  }
  /deep/ .login_btn {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    .el-button {
      color: #fff;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      border: 1px solid #ffd04b;
      &:hover {
        color: #ffd04b;
      }
    }
  }
}
</style>
