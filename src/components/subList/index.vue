<template>
  <div class="list" :style="style">
    <div class="list_item" v-for="item in list" :key="item.id" @click="handleClick(item)">
      <list-item :item="item"></list-item>
    </div>
  </div>
</template>

<script>
import listItem from "@/components/subList/listItem";

export default {
  name: "subList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: { listItem },
  data() {
    return {
      style: "",
    };
  },
  created() {
    this.style = `width:${this.$attrs.width || "100%"};`;
  },
  mounted() {},
  methods: {
    handleClick(item) {
      this.$emit('handleClick', item)
    },
  },
};
</script>

<style scoped lang="less">
.list {
  margin: 0 auto;
  max-width: 1344px;
  width: 100%;
}
.list_item {
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding: 18px 0;
  text-align: left;
}
</style>
