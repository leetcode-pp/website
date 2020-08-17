<template>
  <div id="Rankings_container">
    <!-- 昵称 -->
    <!-- 当月打卡次数 -->
    <!-- 被精选次数 -->
    <el-table :data="rankingsData" style="width: 100%">
      <!-- <el-table-column prop="date" label="排名">
        <template slot-scope="scope">
          <span class="top" :class="topStyle(scope.row)">
            {{ scope.row.rank }}
          </span>
        </template>
      </el-table-column> -->
      <el-table-column type="index" label="排名"> </el-table-column>
      <el-table-column prop="name" label="昵称"> </el-table-column>
      <el-table-column prop="selects" label="当月打卡次数"> </el-table-column>
      <el-table-column prop="checks" label="被精选次数"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Rankings",
  props: {},
  components: {},
  data() {
    return {
      rankingsData: [
        {
          name: "lucifer",
          selects: 0,
          checks: 0
        },
        {
          name: "lucifer",
          selects: 0,
          checks: 0
        },
        {
          name: "lucifer",
          selects: 0,
          checks: 0
        },
        {
          name: "lucifer",
          selects: 0,
          checks: 0
        },
        {
          name: "lucifer",
          selects: 0,
          checks: 0
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    topStyle(top) {
      console.log(top);
      switch (top) {
        case 1:
          return "top1";
        case 2:
          return "top2";
        case 3:
          return "top3";
        default:
          return "";
      }
    }
  }
};
</script>

<style scoped lang="less">
#Rankings_container {
  /deep/ .el-table {
    // 排名数字

    th,
    td {
      text-align: center;
    }
    .top {
      display: inline-block;
      text-align: center;
      width: 10px;
      font-size: 16px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
      margin-right: 16px;
    }
    .top1 {
      color: rgba(234, 46, 46, 1);
    }
    .top2 {
      color: rgba(155, 159, 195, 1);
    }
    .top3 {
      color: rgba(246, 159, 18, 1);
    }
  }
}
</style>
