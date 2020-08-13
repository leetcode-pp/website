<template>
  <div class="clock">
    <div class="calendar">
      <Calendar showOther="false" @handlePrev="handlePrev" @handleNext="handleNext">
        <div slot="prev">上个月</div>
        <div slot="next">下个月</div>
      </Calendar>
    </div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar/Clock";

export default {
  name: "Clock",
  components: {
    Calendar,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // 上月
    handlePrev() {
      console.log("handlePrev");
    },
    // 下月
    handleNext() {
      console.log("handleNext");
    },
  },
};
</script>

<style lang="less" scoped>
.clock {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .calendar {
    width: 100%;
    height: 500px;
  }
}
</style>
