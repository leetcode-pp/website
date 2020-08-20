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
import { queryRankings } from "@/api/rankings";
export default {
  name: "Rankings",
  props: {},
  components: {},
  data() {
    return {
      rankings: [
        {
          name: "lucifer",
          selects: 0,
          checks: 0,
          rank: 1
        },
        {
          name: "lucifer1",
          selects: 0,
          checks: 0,
          rank: 2
        },
        {
          name: "lucifer2",
          selects: 0,
          checks: 0,
          rank: 3
        },
        {
          name: "lucifer3",
          selects: 0,
          checks: 0,
          rank: 4
        },
        {
          name: "lucifer4",
          selects: 0,
          checks: 0,
          rank: 5
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    topStyle(top) {
      if (top <= 3) {
        return "top" + top;
      }
    },
    getRankings() {
      this.rankings = queryRankings();
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
