<template>
  <div class="header">

    <div class="header-nav">
      <div class="logo" >
        <img src="../assets/logo2.png" alt="">
      </div>
      <div style="width: 100%">
        <el-menu :default-active="this.$route.path"
                 router
                 mode="horizontal"
                 class="el-menu-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
        >
          <el-menu-item v-for="(item,i) in navList"
                        :key="i"
                        :index="item.name">
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
    name: 'nav',
    data() {
      return {
        navList: [
          {name: '/basic', navItem: '基础篇'},
          {name: '/about', navItem: '进阶篇'},
          {name: '/topic', navItem: '专题篇'},
          {name: '/clock', navItem: '打卡'},
          {name: '/rankings', navItem: '排行榜'},
        ]
      }
    },
    methods: {}

  }
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    justify-content: center;
    text-align: center;
    background-color: #545c64;

    .header-nav {
      .logo {
        display: inline-block;
        width: 160px;
        height: 60px;
        img {
          /*width: 100px;*/
          height: 60px;
        }
      }

      margin: auto;
      width: 70%;
      position: relative;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0px 20px;

      .el-menu {
        width: 50%;
      }

      /deep/ .el-menu-item {
        width: 20%;
      }
    }
  }

</style>
