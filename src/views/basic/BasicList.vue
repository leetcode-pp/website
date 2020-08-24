<template>
  <div style="width: 60%;margin: auto">
    <template>
      <el-table
        :data="solutionData"
        @row-click="handleClick"
        style="width: 100%"
      >
        <el-table-column prop="title" label="讲义">
          <template slot-scope="scope">
            <span :class="['title', { 'icon-new': scope.row.isNew }]">{{
              scope.row.title
            }}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
      />
    </template>
  </div>
</template>

<script>
import { allExercises } from "@/api/exercises";
import solutionData from "./solutionData";

const REPO_URL = "https://api.github.com/repos/azl397985856/leetcode/contents";
const PAGE_NUM = 1;
const PAGE_SIZE = 20;
const FROM = "2020-08-01";
const TO = "2020-09-10";
export default {
  name: "BasicList",
  data() {
    return {
      solutionData: solutionData,
      // 查询参数
      queryParams: {
        pageNum: PAGE_NUM,
        pageSize: PAGE_SIZE
      },
      total: 0,
      date: {
        from: FROM,
        to: TO
      }
    };
  },
  created() {
    this.total = this.solutionData.length;
    this.getAllExercises();
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: "solutionDetails",
        query: {
          url: REPO_URL + row.url
        }
      });
    },

    getAllExercises() {
      allExercises().then(response => {});
    }
  }
};
</script>

<style scoped>
.title {
  color: #3a8ee6;
}

.icon-new {
  position: relative;
}

.icon-new::after {
  content: "new";
  position: absolute;
  top: -10px;
  right: -24px;
  font-size: 12px;
  font-weight: bold;
  color: red;
}

.el-table td {
  padding: 8px 0;
}
</style>
