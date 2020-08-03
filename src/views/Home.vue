<template>
  <div class="content">
    <el-container>
      <el-header> <Nav/></el-header>
      <el-main> <router-view/></el-main>
      <el-footer>91算法 官网</el-footer>
    </el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
.content{
  width: 80%;
  text-align: center;
  margin:auto;
}
</style>
