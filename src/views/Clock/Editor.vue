<template>
  <div class="editor">
    <textarea
      :value="input"
      @input="update"
      class="editor-text"
      placeholder="在这里输入你的题解， Markdown格式"
    ></textarea>
    <!-- <div v-html="compiledMarkdown" class="editor-html"></div> -->
    <el-button type="primary" :loading="loading" @click="onSubmit" class="submit">打卡</el-button>
  </div>
</template>

<script>
import { debounce } from "lodash";
import { saveExercise } from "@/api/clock";
// import marked from "marked";
// let renderMD = new marked.Renderer();

// marked.setOptions({
//   renderer: renderMD,
//   gfm: true,
//   tables: true,
//   breaks: false,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
// });

export default {
  name: "Editor",
  data() {
    return {
      input: ``,
      loading: false,
    };
  },
  computed: {
    // compiledMarkdown: function () {
    //   return marked(this.input, { sanitize: true });
    // },
  },
  mounted() {},
  methods: {
    update: debounce(function (e) {
      this.input = e.target.value;
    }, 300),

    onSubmit() {
      this.loading = true;
      // console.log(this.input);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.editor {
  flex: 1;
  display: flex;
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  position: relative;
  .editor-text {
    flex: 1;
    border: none;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    padding: 20px;
  }
  .editor-html {
    flex: 1;
    display: inline-block;
    width: 49%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .submit {
    position: absolute;
    right: 20px;
    bottom: 10px;
    width: 100px;
    height: 42px;
    padding: 0;
    cursor: pointer;
  }
}
</style>
<style lang="less">
.editor-html {
  pre {
    color: #333;
    background: #f8f8f8;
    padding: 10px;
  }
  code {
    color: #f66;
  }
}
</style>
