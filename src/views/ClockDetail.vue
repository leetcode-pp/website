<template>
  <div class="clock">
    <div class="left">
      <el-tabs type="border-card">
        <el-tab-pane label="题目描述">题目描述</el-tab-pane>
        <el-tab-pane label="官方题解">官方题解</el-tab-pane>
        <el-tab-pane label="精选题解">精选题解</el-tab-pane>
        <el-tab-pane label="我的题解">我的题解</el-tab-pane>
      </el-tabs>
    </div>
    <div class="line"></div>
    <div class="right">
      <div class="editor-handle">
        <el-select v-model="selected" placeholder="请选择">
          <el-option
            v-for="item in modes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="editor">
        <codemirror ref="jsonEditor" v-model="code" :options="cmOptions" style="height: 600px;" />
      </div>
      <el-button type="primary">打卡</el-button>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
// require styles
import "codemirror/lib/codemirror.css";
// require more codemirror resource...
import "codemirror/mode/meta"; // 这js模式必须引入的
import "codemirror/mode/javascript/javascript"; // 这js模式必须引入的
import "codemirror/mode/python/python"; // 这js模式必须引入的
import "codemirror/mode/php/php"; // 这js模式必须引入的
import "codemirror/mode/go/go"; // 这js模式必须引入的
import "codemirror/mode/clike/clike"; // 这js模式必须引入的

import "codemirror/addon/selection/active-line"; //光标行背景高亮，配置里面也需要styleActiveLine设置为true
import "codemirror/keymap/sublime"; //sublime编辑器效果

import "codemirror/theme/base16-dark.css";
import "codemirror/theme/monokai.css"; //编辑器主题样式，配置里面theme需要设置monokai

//下面这几个引入的主要是验证提示类的,配置里的lint需要设置true,gutters: ['CodeMirror-lint-markers']
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/lint.css";

export default {
  name: "ClockDetail",
  components: {
    codemirror,
  },
  data() {
    return {
      code: "//code",
      selected: "C",
      modes: [
        {
          value: "text/x-csrc",
          label: "C",
        },
        {
          value: "text/x-c++src",
          label: "C++",
        },
        {
          value: "text/x-java",
          label: "Java",
        },
        {
          value: "text/x-csharp",
          label: "C#",
        },
        {
          value: "text/x-objectivec",
          label: "Objective-C",
        },
        {
          value: "text/javascript",
          label: "JavaScript",
        },
        {
          value: "text/x-php",
          label: "PHP",
        },
        {
          value: "text/x-go",
          label: "Go",
        },
        {
          value: "text/x-python",
          label: "Python",
        },
      ],
    };
  },
  computed: {
    codemirror() {
      return this.$refs.jsonEditor.codemirror;
    },
    cmOptions() {
      return {
        tabSize: 4,
        mode: this.selected,
        theme: "monokai",
        lineNumbers: true,
        line: true,
      };
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.clock {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  .left {
    flex: 1;
  }
  .line {
    height: 100;
    width: 1px;
    background: #ccc;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0;
    padding: 0 10px;
    .editor-handle {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 10px;
    }
    .editor {
      text-align: left;
      word-break: break-all;
    }
  }
}
</style>
