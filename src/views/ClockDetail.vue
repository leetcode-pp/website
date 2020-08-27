<template>
  <div class="container">
    <div class="clock">
      <div class="left">
        <el-tabs class="tabs">
          <el-tab-pane label="题目描述">题目描述</el-tab-pane>
          <el-tab-pane label="官方题解">官方题解</el-tab-pane>
          <el-tab-pane label="精选题解">精选题解</el-tab-pane>
          <el-tab-pane label="我的题解">我的题解</el-tab-pane>
        </el-tabs>
      </div>
      <div class="line"></div>
      <div class="right">
        <Editor v-if="type === 'editor'"></Editor>
        <Detail v-if="type === 'detail'"></Detail>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./Clock/Editor";
import Detail from "./Clock/Detail";

export default {
  name: "ClockDetail",
  components: {
    Editor,
    Detail
  },
  data() {
    return {
      type: 'editor'
    };
  },
  computed: {},
  mounted() {
    console.log(this.$route)
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.container {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: left;
}
.container * {
  box-sizing: border-box;
}

.clock {
  max-width: 1280px;
  margin: 0px auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  padding: 20px 0;
  .left {
    flex: 1;
    .tabs {
      height: 100%;
    }
  }
  .line {
    height: 100;
    width: 1px;
    background: #ccc;
  }
  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 0px;
    position: relative;
  }
}
</style>
