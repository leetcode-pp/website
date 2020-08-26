<template>
  <sub-list :list="projectList"> </sub-list>
</template>

<script>
import subList from "@/components/subList";
import { queryAnswerList } from "@/api/exercises.js";
export default {
  name: "answerList",
  props: {},
  components: { subList },
  data() {
    return {
      subjectId: null,
      projectList: []
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
        this.projectList = res;
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
