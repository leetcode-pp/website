<template>
  <div class="project_list_container">
    <div class="project_item" v-for="item in projectList" :key="item.id">
      <div class="project_item__title">
        <div class="is_official tag" v-if="item.isOfficial">官方</div>
        <div class="is_selected tag" v-if="item.isSelected">精选</div>
        <div class="title">{{ item.title }}</div>
      </div>
      <div class="project_item__content">{{ item.content }}</div>
      <div class="project_item__meta">
        <span class="user_name">{{ item.userName }}</span>
        <div class="like">
          <i class="iconfont icon-zan"></i>{{ item.likes }}
        </div>
      </div>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getComList"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: "",
  props: {},
  components: { Pagination },
  data() {
    return {
      projectList: [
        {
          title: "从起点开始 DFS / BFS 遍历一遍即可",
          content:
            "🙋 今日打卡！一、题目分析给定初始二维数组和起点，返回修改后的二维数组。若起点处是雷，即 ‘M’，直接将其修改为 'X'，游戏结束；若起点处是空，即 ‘E’，则从起点开始向 8 邻域中的空地搜索，直到到达邻接💥的空地停止。和二叉树从根结点开始搜索，直到达到叶子节点停止，是几乎一样的，所以会写二叉树的 BFS/DFS，那么这题也就写出来了。🙋 今日打卡！一、题目分析给定初始二维数组和起点，返回修改后的二维数组。若起点处是雷，即 ‘M’，直接将其修改为 'X'，游戏结束；若起点处是空，即 ‘E’，则从起点开始向 8 邻域中的空地搜索，直到到达邻接💥的空地停止。和二叉树从根结点开始搜索，直到达到叶子节点停止，是几乎一样的，所以会写二叉树的 BFS/DFS，那么这题也就写出来了。🙋 今日打卡！一、题目分析给定初始二维数组和起点，返回修改后的二维数组。若起点处是雷，即 ‘M’，直接将其修改为 'X'，游戏结束；若起点处是空，即 ‘E’，则从起点开始向 8 邻域中的空地搜索，直到到达邻接💥的空地停止。和二叉树从根结点开始搜索，直到达到叶子节点停止，是几乎一样的，所以会写二叉树的 BFS/DFS，那么这题也就写出来了。",
          category: "nisi et volupta",
          likes: 5,
          isSelected: false,
          isOfficial: true,
          _id: "in incididunt reprehenderit consectetur",
          createAt: "enim",
          subjectId: -23923364.37806879,
          userName: "lucifer",
          __v: 38405331.69183749
        },
        {
          title: "DFS 和 BFS 两种解法",
          content:
            "思路点开一个点，要么是雷，要么不是：点到 M，踩雷了，更新为X，游戏结束。点到 E，空地，分两种情况：周围 8 个格子有雷，更新为雷数。周围 8 个格子没有雷，更新为 B，并继续探测这 8 个格子。关键就是这个继续探测，就是一种搜索，有 DFS、BFS 两种实现方式。DFS无论是 DFS 还是 BFS，都要避免重复访问，这里怎么避免呢？我们每访问一个 E，都会更新标记，不再是 E，下次再访问就直接返回。不用再开辟空间去存访问过的节点，已经把访问信息就地存储了。",
          category: "magna proident nisi",
          likes: 3,
          isSelected: true,
          isOfficial: false,
          _id: "ex reprehenderit consequat",
          createAt: "in",
          subjectId: 70369775.87042895,
          userName: "小然子",
          __v: 70418621.83125883
        },
        {
          title: "此处无雷三百颗",
          content:
            "思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则思路看这个题目什么意思看了很久很久，理解好题意才能做题鸭首先是本题就是点击一个位置之后，把输入的图变成输出该有的样子，列出四点规则",
          category: "ea culpa dolor ",
          likes: 0,
          isSelected: false,
          isOfficial: false,
          _id: "ea sunt Duis voluptate",
          createAt: "Duis dolore in ut aliqua",
          subjectId: 69190083.65473548,
          userName: "时光",
          __v: -12126952.931664154
        },
        {
          title: "扫雷游戏 - 深度优先搜索DFS",
          content: "解题思路解释起来太困难，从B站搬运了视频",
          category: "ea culpa dolor ",
          likes: 2,
          isSelected: false,
          isOfficial: false,
          _id: "ea sunt Duis voluptate",
          createAt: "Duis dolore in ut aliqua",
          subjectId: 69190083.65473548,
          userName: "蜗牛",
          __v: -12126952.931664154
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
@import url("//at.alicdn.com/t/font_2020691_o0kfwltbh2l.css");
.project_item {
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
  padding: 18px 0;
  text-align: left;
  .project_item__title {
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
  .project_item__content {
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
  .project_item__meta {
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
}
</style>
