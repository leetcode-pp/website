<template>
  <div class="detail">
    <div class="detail-button">
      <el-button @click="close" size="mini">关闭</el-button>
    </div>
    <div class="detail-info">
      <MDetails :title="info.title" :content="info.content"></MDetails>
    </div>
  </div>
</template>

<script>
import MDetails from "@/components/MDetails";

export default {
  name: "Detail",
  components: {
    MDetails,
  },
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      input: ``,
      loading: false,
    };
  },
  computed: {},
  mounted() {
    // console.log(this.info);
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  height: 100%;
  padding: 0 20px;
  position: relative;
  .detail-button {
    background: white;
    position: relative;
    z-index: 2;
    height: 40px;
  }
  .detail-info {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 40px 20px 20px;
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>