<template>
  <div>
    <template>
      <el-table :data="solutionData"
                @row-click="handleClick"
                style="width: 100%">
        <el-table-column prop="title"
                         label="题目">
          <template slot-scope="scope">
            <span :class="['title', { 'icon-new': scope.row.isNew }]">{{scope.row.title}}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination v-show="total>0"
                  :total="total"
                  :page.sync="queryParams.pageNum"
                  :limit.sync="queryParams.pageSize"
                  @pagination=""/>
    </template>
  </div>
</template>

<script>
  import solutionData from './solutionData'

  const REPO_URL = 'https://api.github.com/repos/azl397985856/leetcode/contents'
  export default {
    name: 'BasicList',
    data() {
      return {
        solutionData: solutionData,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 20
        },
        total: 0
      }
    },
    created() {
      this.total = this.solutionData.length
    },
    methods: {
      handleClick(row) {
        this.$router.push({
          path: 'solutionDetails',
          query: {
            url: REPO_URL + row.url
          }
        })
      }
    }
  }
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
