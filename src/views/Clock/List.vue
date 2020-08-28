<template>
  <div class="ClockList" ref="ClockList">
    <List :list="list" @handleClick="clickItem"></List>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import List from "@/components/subList";
import { queryOfficialList, querySelectedList } from "@/api/clock";
import { content } from "@/mock/clock";

// type：0缺省 1官方 2精选 3我的
const QUERYFC = [null, queryOfficialList, querySelectedList];

export default {
  name: "ClockList",
  components: {
    List,
  },
  props: {
    type: String,
    id: String, // subjectId
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let loadingInstance = Loading.service({
        target: this.$refs.ClockList,
        fullscreen: false,
      });
      const FC = QUERYFC[this.type];
      if (!FC) {
        loadingInstance.close();
        return;
      }
      FC({ subjectId: this.id }).then((res) => {
        this.list = Array.isArray(res)
          ? res
          : [
              { title: "1", content },
              { title: "2", content },
            ];
        loadingInstance.close();
      });
    },
    clickItem(item) {
      this.$emit("ClickItem", item);
    },
  },
};
</script>

<style lang="less" scope>
.ClockList {
  height: 100%;
  overflow: auto;
}
</style>