<template>
  <div class="nav_bar">
    <el-menu
      style="text-align: center;width: 100%"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/basic">基础篇</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">进阶篇</router-link>
      </el-menu-item>
      <el-menu-item index="3">专题篇</el-menu-item>
      <el-menu-item index="4">打卡</el-menu-item>
      <el-menu-item index="5">
        <router-link to="/rankings">排行榜</router-link>
      </el-menu-item>
    </el-menu>
    <div class="login_btn">
      <el-button type="text" @click="loginPanelShow = true">登录</el-button>
    </div>
    <div class="login_panel" v-show="loginPanelShow">
      <el-card class="login_card">
        <i class="close el-icon-close" @click="loginPanelShow = false"></i>
        <h4 class="title">
          <a :class="{ active: active == 'login' }" @click="active = 'login'"
            >登录</a
          >
          <b>·</b>
          <a :class="{ active: active == 'signUp' }" @click="active = 'signUp'"
            >注册</a
          >
        </h4>
        <el-form :rules="rules" ref="ruleForm" class="login_form">
          <el-form-item>
            <el-input
              class="user_name_input"
              v-model="loginForm.userName"
              prefix-icon="el-icon-user"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              class="password_input"
              type="password"
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <button class="login_button" @click="login()">登录</button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      activeIndex: "1",
      loginPanelShow: false, // 是否显示登录面板
      active: "login",
      loginForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {}
  }
};
</script>

<style scoped lang="less">
.nav_bar {
  position: relative;
  /deep/ .login_btn {
    position: absolute;
    right: 20px;
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
.login_panel {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000;
  /deep/ .login_card {
    position: relative;
    width: 400px;
    margin: 60px auto 0;
    padding-top: 46px;
    padding-bottom: 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
    display: inline-block;
    transform: translateY(-30%);
    .el-card__body {
      padding-top: 0;
    }
    .login_form {
      padding: 0 40px;
      .login_button {
        background: #3194d0;
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
        outline: none;
        display: block;
        margin-top: 30px;
        &:hover {
          background: #187cb7;
        }
      }
      .el-form-item {
        margin-bottom: 0;
      }
      .el-form-item__content {
        line-height: 37px;
      }
      .el-input__inner:focus {
        border-color: #c0c4cc;
      }
      .el-input__inner {
        border-color: #c0c4cc;
      }
      input {
        background-color: hsla(0, 0%, 71%, 0.1);
        outline: none;
      }
      .user_name_input > input {
        border-radius: 4px 4px 0 0;
        border-bottom: 0;
      }
      .password_input > input {
        border-radius: 0 0 4px 4px;
      }
    }

    .close {
      position: absolute;
      font-size: 36px;
      right: 10px;
      top: 10px;
      &:hover {
        color: #ffd04b;
      }
    }
    .title {
      margin: 0 auto 40px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      a {
        // cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        padding: 10px;
        color: #969696;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid #ffd04b;
        }
        &.active {
          color: #ffd04b;
          border-bottom: 2px solid #ffd04b;
        }
        b {
          padding: 10px;
        }
      }
    }
  }
}
</style>
