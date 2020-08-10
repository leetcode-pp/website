<template>
  <div>
    <el-menu :default-active="this.$route.path"
             router
             mode="horizontal"
             class="el-menu-demo"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in navList"
                    :key="i"
                    :index="item.name">
        <template slot="title">
          <span> {{ item.navItem }}</span>
        </template>
      </el-menu-item>
    </el-menu>
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
    methods: {
    }

  }
</script>

<style scoped>
</style>
