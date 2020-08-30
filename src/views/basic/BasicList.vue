<template>
  <div style="width: 60%;margin: auto">
    <template>
      <el-table
        v-loading="isloading"
        :data="teachings"
        @row-click="handleClick"
        style="width: 100%"
      >
        <el-table-column prop="title" label="">
          <template slot-scope="scope">
            <span :class="['title', { 'icon-new': scope.row.isNew }]">{{
              scope.row.title
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
import { fetchTeachings } from "@/api/teachings";

export default {
  name: "teaching-basic",
  data() {
    return {
      isloading: true,
      teachings: []
    };
  },
  created() {
    this.getBasicTeachings();
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        path: "teachingDetails",
        query: {
          id: row._id
        }
      });
    },

    async getBasicTeachings() {
      // 0: 基础篇
      this.isloading = true;
      await fetchTeachings(0).then(teachings => {
        this.teachings = teachings;
      });
      this.isloading = false;
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
