<template>
  <div class="header">
    <div class="header-nav">
      <a class="logo" @click="$router.push('/basic')">
        <img
          src="https://tva1.sinaimg.cn/large/007S8ZIlly1gi9038a4xpj30u009zab5.jpg"
          alt="leetcode-pp-91"
        />
      </a>
      <div style="width: 100%">
        <el-menu
          :default-active="this.$route.path"
          router
          mode="horizontal"
          class="el-menu-demo"
          background-color="#fff"
          text-color="#545c64"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="(item, i) in navList"
            :key="i"
            :index="item.name"
          >
            <template slot="title">
              <span> {{ item.navItem }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      navList: [
        { name: "/basic", navItem: "基础篇" },
        { name: "/advance", navItem: "进阶篇" },
        { name: "/topic", navItem: "专题篇" },
        { name: "/clock", navItem: "打卡" },
        { name: "/rankings", navItem: "排行榜" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  justify-content: center;
  background-color: #fff;

  .header-nav {
    margin: auto;
    width: 70%;
    display: flex;

    .logo {
      display: inline-block;
      width: 160px;
      height: 60px;
      cursor: pointer;

      img {
        height: 60px;
      }
    }

    .el-menu {
      width: 50%;
    }

    /deep/ .el-menu-item {
      width: 20%;
    }
  }
}
</style>
