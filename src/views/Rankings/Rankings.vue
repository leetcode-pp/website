<template>
  <div id="Rankings_container">
    <el-table :data="rankings" style="width: 100%">
      <el-table-column prop="rank" label="排名" width="80">
        <template slot-scope="scope">
          <span class="top" :class="topStyle(scope.row.rank)">
            {{ scope.row.rank }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="昵称"> </el-table-column>
      <el-table-column prop="selects" label="当月打卡次数"> </el-table-column>
      <el-table-column prop="checks" label="被精选次数"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { queryRankings } from "@/api/rankings.js";
export default {
  name: "Rankings",
  props: {},
  components: {},
  data() {
    return {
      rankings: []
    };
  },
  created() {
    this.getRankings();
  },
  mounted() {},
  methods: {
    topStyle(top) {
      if (top <= 3) {
        return "top" + top;
      }
    },
    getRankings() {
      queryRankings().then(res => {
        res.data.forEach((cur, i) => [(cur.rank = i + 1)]);
        this.rankings = res.data;
      });
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
      text-align: center;
      font-size: 16px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.45);
    }
    .top1 {
      font-weight: 700;
      color: rgba(234, 46, 46, 1);
    }
    .top2 {
      font-weight: 700;
      color: rgba(155, 159, 195, 1);
    }
    .top3 {
      font-weight: 700;
      color: rgba(246, 159, 18, 1);
    }
  }
}
</style>
