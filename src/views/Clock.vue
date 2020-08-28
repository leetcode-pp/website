<template>
  <div class="clock">
    <div class="calendar">
      <Calendar
        showOther="false"
        @goPrev="goPrev"
        @goNext="goNext"
        @clock-click="goDetail"
      >
        <div slot="prev" class="clock-prev">
          <i class="el-icon-caret-left"></i>
        </div>
        <div slot="next" class="clock-next">
          <i class="el-icon-caret-right"></i>
        </div>
      </Calendar>
    </div>
    <div class="CardWrapper">
      <div class="left">
        <span>我的补卡券： 0</span>
        <span class="RedeemButton">兑换</span>
      </div>
      <span class="RuleText" @click="showRule">
        活动规则
        <i class="el-icon-arrow-right"></i>
      </span>
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
    // 显示活动规则
    showRule() {
      alert("活动规则");
    },
    // 上月
    goPrev() {
      // console.log("goPrev");
    },
    // 下月
    goNext() {
      // console.log("goNext");
    },
    // 点击日期跳转到详情页面
    goDetail({_id}) {
      this.$router.push({
        path: `/clock/detail/${_id}`
      });
    },
  },
};
</script>

<style lang="less" scoped>
.clock {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 1280px;
  margin: 0 auto;
  .calendar {
    width: 100%;
    height: 500px;

    .clock-prev {
      margin-left: 8vw;
      cursor: pointer;
    }
    .clock-next {
      margin-right: 8vw;
      cursor: pointer;
    }
  }
  .CardWrapper {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    margin-top: 8px;
    background: rgb(236, 240, 241);
    padding: 0px 12px;
    border-radius: 5px 5px 10px 10px;
    .RedeemButton {
      margin-left: 10px;
      color: rgb(45, 181, 93);
      cursor: pointer;
    }
    .RuleText {
      cursor: pointer;
    }
  }
}
</style>
