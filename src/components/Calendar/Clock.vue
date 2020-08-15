<template>
  <div class="clock-container">
    <div class="clock-header">
      <div class="left" @click="handlePrev">
        <slot name="prev" v-if="$slots.prev"></slot>
        <i class="el-icon-caret-left" v-if="!$slots.prev"></i>
      </div>
      <div class="title">
        <slot name="title" v-if="$slots.title"></slot>
        <div v-if="!$slots.title">每日一题｜{{nowDate.year}} - {{nowDate.month}}</div>
      </div>
      <div class="right" @click="handleNext">
        <slot name="next" v-if="$slots.next"></slot>
        <i class="el-icon-caret-right" v-if="!$slots.next"></i>
      </div>
    </div>
    <div class="clock-calendar">
      <el-row type="flex" class="clock-row" justify="space-around" align="middle">
        <el-col v-for="item in header.en" :key="item">{{item}}</el-col>
      </el-row>
      <el-row
        type="flex"
        class="clock-row"
        justify="space-around"
        align="middle"
        v-for="(column,index) in ColumnList"
        :key="index"
      >
        <el-col v-for="item in column" :key="item.key" align="center">
          <el-tooltip
            class="item"
            effect="dark"
            :content="`${item.value && item.value.format('YYYYMMDD')}的每日一题`"
            placement="top"
            :disabled="defaultMoment.isBefore(item.value)"
          >
            <el-button
              v-if="item.value"
              circle
              class="circle"
              :type="type[item.state]"
              :icon="icon[item.state]"
              @click="() => handleClickMoment(item)"
            >{{!item.value.isBefore(defaultMoment) ? item.value.get('date') : ''}}</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import moment from "moment";
const nowMoment = moment().startOf("day");

export default {
  name: "Clock",
  props: {
    // 是否显示其他几个月的
    showOther: {
      type: Boolean | String,
      default: false,
    },
  },
  data() {
    return {
      header: {
        cn: ["日", "一", "二", "三", "四", "五", "六"],
        en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      type: ["danger", "success", "primary"], // 打卡失败，打卡成功，今天未打卡
      icon: ["el-icon-close", "el-icon-check"],
      // 当前显示的日期
      nowMoment,
      // 当前点击的日期
      clickMoment: nowMoment,
      // 默认日期
      defaultMoment: nowMoment,
    };
  },
  computed: {
    showOtherMonth() {
      return `${this.showOther}` === "true";
    },
    // 日历的moment数据
    ColumnList() {
      let endMoment = moment(this.nowMoment).startOf("month");
      return this.getColumn(endMoment);
    },
    // 当前时间
    nowDate() {
      return {
        year: this.nowMoment.get("year"),
        month: this.nowMoment.get("month") + 1,
        date: this.nowMoment.get("date"),
        hour: this.nowMoment.get("hour"),
        minute: this.nowMoment.get("minute"),
        second: this.nowMoment.get("second"),
        millisecond: this.nowMoment.get("millisecond"),
      };
    },
  },
  mounted() {
    // table
    // - tbody 7列 0123456 0->7
    // - tbody 6行
  },
  methods: {
    getColumn(momentValue) {
      const Column = [];
      Column.length = 6;
      let endMoment = momentValue;

      for (let i = 0; i < Column.length; i++) {
        let key = i !== 0 ? -1 : endMoment.get("day");
        Column[i] = this.getOneColumn(key, endMoment);
        endMoment = Column[i][6].value;
        if (i !== 0) {
          delete Column[i][key];
        }
      }

      return Column;
    },
    getOneColumn(key, momentValue) {
      const data = [];
      data.length = 7;
      // 当前显示的月份
      const nowMonth = this.nowMoment.get("month");
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const itemMoment = moment(momentValue).add(i - key, "days");
        data[i] = {
          key: i,
          state: 3,
        };
        if (!this.showOtherMonth && nowMonth !== itemMoment.get("month")) {
          continue;
        }
        data[i].value = itemMoment.weekday(i).startOf("day");
        data[i].state = data[i].value.isBefore(this.defaultMoment)
          ? 0
          : data[i].state; //TODO: 待和接口匹配
        if (
          data[i].value.unix() === this.defaultMoment.unix() &&
          data[i].state === 3
        ) {
          data[i].state = 2;
          console.log("now");
        }
      }
      return data;
    },
    // 上月
    handlePrev() {
      this.nowMoment = moment(this.nowMoment).subtract(1, "month");
      this.$emit("handlePrev");
    },
    // 下月
    handleNext() {
      if (
        this.nowMoment.get("year") === this.defaultMoment.get("year") &&
        this.nowMoment.get("month") >= this.defaultMoment.get("month")
      )
        return;
      this.nowMoment = moment(this.nowMoment).add(1, "month");
      this.$emit("handleNext");
    },
    // 点击日期
    handleClickMoment(item) {
      this.$emit("handleClick", { ...item });
    },
  },
};
</script>

<style lang="less" scoped>
.clock-container {
  min-width: 350px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.clock-calendar {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.clock-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
  overflow: hidden;
  .title {
    flex: 1;
  }
}
.circle {
  width: 40px;
  height: 40px;
}
// .clock-td {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// }
// .clock-td-red {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   background: red;
//   color: black;
//   min-width: 25px;
//   min-height: 25px;
// }
.clock-row {
  flex: 1;
}
</style>
