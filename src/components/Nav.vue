<template>
  <div>
    <el-menu style="text-align: center;width: 100%"
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/basic">基础篇</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">进阶篇</router-link>
      </el-menu-item>
      <el-menu-item index="3">专题篇</el-menu-item>
      <el-menu-item index="4">打卡</el-menu-item>
      <el-menu-item index="5">排行榜</el-menu-item>

    </el-menu>
  </div>

</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style scoped>
</style>
