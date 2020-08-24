<template>
  <div class="layout">
    <el-container>
      <el-header>
        <Nav />
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

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  text-align: center;
  margin: auto;
  justify-content: center;

  .content {
    min-height: 85vh;
  }
  .el-header {
    padding: 0;
  }
}
</style>
