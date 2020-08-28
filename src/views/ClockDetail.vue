<template>
  <div class="container">
    <div class="clock">
      <div class="left">
        <el-tabs class="tabs">
          <el-tab-pane
            v-for="({value, name, ComponentName}) in TabList"
            :key="value"
            :label="name"
            lazy
          >
            <components :is="ComponentName" :type="value" :id="id" @clickItem="checkDetail"></components>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="line"></div>
      <div class="right">
        <Editor v-show="type === 'editor'" :id="id"></Editor>
        <Detail v-show="type === 'detail'" :id="id" :info="info" @close="checkEditor"></Detail>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./Clock/Editor";
import Detail from "./Clock/Detail";
import Description from "./Clock/Description";
import ClockList from "./Clock/List";

const TYPE = ["editor", "detail"];

const LIST_TYPE = [
  {
    name: "官方题解",
    value: "1",
  },
  {
    name: "精选题解",
    value: "2",
  },
  {
    name: "我的题解",
    value: "3",
  },
];

export default {
  name: "ClockDetail",
  components: {
    Editor,
    Detail,
    Description,
    ClockList,
  },
  data() {
    return {
      id: "",
      type: TYPE[0],
      info: {},
      TabList: [
        {
          name: "题目描述",
          value: "0",
          ComponentName: Description,
        },
        ...LIST_TYPE.map((item) => ({ ...item, ComponentName: ClockList })),
      ],
    };
  },
  computed: {},
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    checkDetail(item) {
      this.type = TYPE[1];
      this.info = item;
    },
    checkEditor() {
      this.type = TYPE[0];
      this.info = {};
    },
  },
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
      /deep/ .el-tabs__content {
        height: calc(100% - 56px);
        overflow: auto;
        position: relative;
      }
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
