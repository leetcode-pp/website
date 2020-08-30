<template>
  <div class="wrapper">
    <div v-loading="loading" class="container">
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

import { fetchTeachingById } from "@/api/teachings";

import "highlight.js/styles/github.css";

const md = new MarkdownIt();
const URL_REGEX = /(\s+)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
const LINK_REGRX = /\[(.*)\]\(\.\.\/(.*)\)/g;
const REPO = "https://github.com/azl397985856/leetcode/raw/master/";
const ERROR_MSG_DISPLAY_DURATION = 5000;

export default {
  data() {
    return {
      loading: true,
      hasError: false,
      desc: "",
      title: "",
      prettified: false,
      labels: [],
      id: null
    };
  },
  props: {},
  methods: {
    showError() {
      this.hasError = true;
      setTimeout(() => {
        this.hasError = false;
      }, ERROR_MSG_DISPLAY_DURATION);
    },
    async getSolution() {
      try {
        const res = await fetchTeachingById(this.$route.query.id);
        this.loading = false;
        this.desc = md.render(this.addLinkMarkdown(Base64.decode(res.content)));

        this.title = res.title;
      } catch (error) {
        this.showError();
        this.loading = false;
      }
    },
    addLinkMarkdown(content) {
      return content
        .replace(URL_REGEX, "<$2>")
        .replace(LINK_REGRX, `[$1](${REPO}$2)`);
    }
  },
  async mounted() {
    await this.getSolution();
    hljs.configure({ useBR: false });
    document.querySelectorAll("code").forEach(block => {
      hljs.highlightBlock(block);
    });
    document.querySelectorAll("img").forEach(block => {
      block.style.maxWidth = "340px";
      block.style.width = "100%";
    });
    document
      .getElementsByClassName("wrapper")[0]
      .querySelectorAll("a")
      .forEach(block => {
        block.target = "_blank";
      });
  }
};
</script>

<style lang="less" scoped>
p > code {
  display: inline;
}
.wrapper {
  width: 100%;
  h2.subtitle {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
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
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
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
