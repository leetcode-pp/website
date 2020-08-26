<template>
  <div>
    <div class="list_item__title">
      <div class="is_official tag" v-if="item.isOfficial">官方</div>
      <div class="is_selected tag" v-if="item.isSelected">精选</div>
      <div class="title">{{ item.title }}</div>
    </div>
    <div class="list_item__content">{{ item.content }}</div>
    <div class="list_item__meta">
      <span class="user_name">{{ item.userName }}</span>
      <div class="like"><i class="iconfont icon-zan"></i>{{ item.likes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
@import url("//at.alicdn.com/t/font_2020691_o0kfwltbh2l.css");

.list_item__title {
  font-weight: 700;
  color: #333;
  font-size: 16px;
  margin: 12px 0;
  line-height: 24px;
  cursor: default;
  .title {
    cursor: pointer;
    display: inline-block;
    border-bottom: 1px solid transparent;
    &:hover {
      border-color: rgba(0, 0, 0, 0.85);
    }
  }
  // 官方和精选标签
  .tag {
    display: inline-block;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
    margin-right: 10px;
    &.is_official {
      background: #fdecd1;
      color: #f1920e;
      border: 1px solid #f5dbb2;
    }
    &.is_selected {
      background: #67c23a;
      color: #fff;
    }
  }
}
.list_item__content {
  cursor: default;
  text-indent: 2em;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  min-height: 66px;
  line-height: 24px;
  color: #999;
  margin: 0 0 8px;
}
.list_item__meta {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #b4b4b4;

  .user_name:hover {
    cursor: pointer;
    color: #787878;
  }
  .like {
    margin-left: 10px;
    display: inline-block;
    i {
      font-size: 14px;
      margin-right: 5px;
    }
  }
}
</style>
