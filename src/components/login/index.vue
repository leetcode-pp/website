<template>
  <div id="login_container" class="login_panel">
    <el-card class="login_card">
      <i class="close el-icon-close" @click="close()"></i>
      <h4 class="title">
        <a :class="{ active: active == 'login' }" @click="active = 'login'"
          >登录</a
        >
        <b>·</b>
        <a :class="{ active: active == 'signUp' }" @click="active = 'signUp'"
          >注册</a
        >
      </h4>
      <el-form :model="loginForm" ref="ruleForm" class="login_form">
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
          <button
            class="login_button"
            @click="handleLogin()"
            v-show="active == 'login'"
          >
            登录
          </button>
          <button
            class="login_button signUp"
            @click="handleSignUp()"
            v-show="active == 'signUp'"
          >
            注册
          </button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login, signUp } from "@/api/login.js";
import { setToken } from "@/utils/auth.js";
export default {
  name: "login",
  props: {},
  components: {},
  data() {
    return {
      active: "login", //登录or注册
      loginForm: {
        userName: "",
        password: ""
      },
      userName: "", //登录接口返回得用户名
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    close() {
      this.$emit("update:loginPanelShow", false);
    },
    handleLogin() {
      if (!this.loginForm.userName || !this.loginForm.password) {
        return this.$message.warning("用户名或密码不能为空！");
      }
      login({
        name: this.loginForm.userName,
        password: this.loginForm.password
      }).then(res => {
        if (res.code == 200) {
          console.log(res);
          this.userName = res.data.name;
          setToken(res.token);
          this.close();
          return this.$message.success("登录成功！");
        }
      });
    },
    handleSignUp() {
      if (!this.loginForm.userName || !this.loginForm.password) {
        return this.$message.warning("用户名或密码不能为空！");
      }
      signUp({
        name: this.loginForm.userName,
        password: this.loginForm.password
      }).then(res => {
        if (res.code == 200) {
          this.close();
          return this.$message.success("注册成功！");
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.login_panel {
  position: absolute;
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
        &.signUp {
          background: #42c02e;
          &:hover {
            background: #3db922;
          }
        }
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
      cursor: pointer;
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
        cursor: pointer;
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
