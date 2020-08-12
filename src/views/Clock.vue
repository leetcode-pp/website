<template>
  <div>
    <div>title - clock</div>
    <div class="clock-title">
      <button @click="handlePrev">上一个月</button>
      <div class="title">每日一题｜{{nowDate.year}} - {{nowDate.month}}</div>
      <button @click="handleNext">下一个月</button>
    </div>
    <table class="clock-calendar" border="1" cellpadding="0" cellspacing="0">
      <thead>
        <th v-for="item in header.cn" :key="item">{{item}}</th>
      </thead>
      <tbody>
        <tr v-for="(column,index) in ColumnList" :key="index">
          <td v-for="item in column" :key="item.key" align="center">
            <div
              :class="[
                'clock-td',
                {
                  'clock-td-red': item.value.format('YYYYMMDD') === clickMoment.format('YYYYMMDD')
                }
              ]"
            >{{item.value.get('date')}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
const nowMoment = moment();

export default {
  name: "Clock",
  data() {
    return {
      header: {
        cn: ["日", "一", "二", "三", "四", "五", "六"],
        en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      // 当前现实的日期
      nowMoment,
      // 当前点击的日期
      clickMoment: nowMoment,
      // 默认日期
      defaultMoment: nowMoment,
    };
  },
  computed: {
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
      }
    }
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
      console.log(endMoment);

      for (let i = 0; i < Column.length; i++) {
        console.log(i, endMoment);
        let key = i !== 0 ? -1 : endMoment.get("day");
        Column[i] = this.getOneColumn(key, endMoment);
        console.log(Column[i]);
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
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        data[i] = {
          key: i,
          value: moment(momentValue)
            .add(i - key, "days")
            .weekday(i),
        };
      }
      return data;
    },
    // 上月
    handlePrev() {
      this.nowMoment = moment(this.nowMoment).subtract(1, "month");
    },
    // 下月
    handleNext() {
      this.nowMoment = moment(this.nowMoment).add(1, "month");
    },
  },
};
</script>

<style lang="less" scoped>
.clock-calendar {
  width: 100%;
}
.clock-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 60px;
  button {
    height: 30px;
    cursor: pointer;
  }
}
.clock-td {
  width: 60px;
  height: 60px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clock-td-red {
  border-radius: 100%;
  background: red;
  color: black;
}
</style>
