<template>
  <sub-list :list="answerList"></sub-list>
</template>

<script>
import subList from "@/components/subList";
import { queryAnswerList } from "@/api/exercises.js";
export default {
  name: "answerListPage",
  props: {},
  components: { subList },
  data() {
    return {
      subjectId: null,
      answerList: []
    };
  },
  created() {
    this.subjectId = this.$route.query.subjectId;
    this.getAnswerList();
  },
  mounted() {},
  methods: {
    getAnswerList() {
      queryAnswerList({ subjectId: this.subjectId }).then(res => {
        console.log(res);
        this.answerList = res;
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
