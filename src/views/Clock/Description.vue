<template>
  <div class="clock-desc">
    <div class="detail-info">
      <MDetails :title="title" :content="content"></MDetails>
    </div>
  </div>
</template>

<script>
import MDetails from "@/components/MDetails";
import { content } from "@/mock/clock";

export default {
  name: "Description",
  components: {
    MDetails,
  },
  data() {
    return {
      title: "这是里题目描述的mock数据-title",
      content,
    };
  },
};
</script>

<style lang="less" scope>
.clock-desc {
  position: relative;
  .detail-info {
    box-sizing: border-box;
  }
}
</style>