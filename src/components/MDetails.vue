<template>
  <div class="MDetails wrapper">
    <div class="container">
      <div class="max-width-800"></div>
      <h2 class="subtitle">{{ title }}</h2>
      <div class="desc text-align-left" v-html="desc"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Base64 } from "js-base64";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const md = new MarkdownIt();
const URL_REGEX = /(\s+)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
const LINK_REGRX = /\[(.*)\]\(\.\.\/(.*)\)/g;
const REPO = "https://github.com/azl397985856/leetcode/raw/master/";

export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "题解详情",
    },
    content: {
      type: String,
      default: "",
    },
  },
  computed: {
    desc() {
      return md.render(this.content);
    },
  },
  methods: {
    addLinkMarkdown(content) {
      return content
        .replace(URL_REGEX, "<$2>")
        .replace(LINK_REGRX, `[$1](${REPO}$2)`);
    },
    handleStyle() {
      hljs.configure({ useBR: false });
      document.querySelectorAll("code").forEach((block) => {
        console.log(block);
        hljs.highlightBlock(block);
      });
      document.querySelectorAll("img").forEach((block) => {
        block.style.maxWidth = "340px";
        block.style.width = "100%";
      });
      document
        .getElementsByClassName("wrapper")[0]
        .querySelectorAll("a")
        .forEach((block) => {
          block.target = "_blank";
        });
    },
  },
  mounted() {},
  watch: {
    content() {
      setTimeout(() => {
        this.handleStyle();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  box-sizing: border-box;
  h2.subtitle {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
  .max-width-800 {
    max-width: 800px;
    margin: 30px auto;
  }
  .text-align-left {
    text-align: left;
  }
  .container {
    max-width: 1080px;
    margin: 30px auto;
  }
  .desc {
    margin: 20px 10px;
  }
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .tags {
    margin-bottom: 30px;
  }
}
</style>
<style lang="less">
.MDetails {
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>