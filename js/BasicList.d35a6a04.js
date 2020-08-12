(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BasicList"],{"72ff":function(t,e,i){"use strict";var a=i("7cb9"),n=i.n(a);n.a},"7cb9":function(t,e,i){},ec82:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.solutionData},on:{"row-click":t.handleClick}},[i("el-table-column",{attrs:{prop:"title",label:"题目"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{class:["title",{"icon-new":e.row.isNew}]},[t._v(t._s(e.row.title))])]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getComList}})]],2)},n=[],s=[{title:"《前缀树》专题",isNew:!0,url:"/thinkings/trie.md",summary:"截止目前（2020-02-04） 前缀树（字典树） 在 LeetCode 一共有 17 道题目。其中 2 道简单，8 个中等，7 个困难。这里总结了四道题，弄懂这几道， 那么前缀树对你应该不是大问题， 希望这个专题可以帮到正在学习前缀树 的你。"},{title:"《贪婪策略》专题",isNew:!0,url:"/thinkings/greedy.md",summary:"贪婪策略是一种常见的算法思想，具体是指，在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，他所做出的是在某种意义上的局部最优解。贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择，选择的贪心策略必须具备无后效性，即某个状态以前的过程不会影响以后的状态，只与当前状态有关，这点和动态规划一样。贪婪策略和动态规划类似，大多数情况也都是用来处理极值问题。"},{title:"《深度优先遍历》专题",isNew:!0,url:"/thinkings/DFS.md",summary:"深度优先搜索算法（英语：Depth-First-Search，DFS）是一种用于遍历或搜索树或图的算法。沿着树的深度遍历树的节点，尽可能深的搜索树的分支。当节点 v 的所在边都己被探寻过，搜索将回溯到发现节点 v 的那条边的起始节点。这一过程一直进行到已发现从源节点可达的所有节点为止。如果还存在未被发现的节点，则选择其中一个作为源节点并重复以上过程，整个进程反复进行直到所有节点都被访问为止。属于盲目搜索。"},{title:"滑动窗口（思路 + 模板)",isNew:!0,url:"/thinkings/slide-window.md",summary:"笔者最早接触滑动窗口是滑动窗口协议，滑动窗口协议（Sliding Window Protocol），属于 TCP 协议的一种应用，用于网络数据传输时的流量控制，以避免拥塞的发生。 发送方和接收方分别有一个窗口大小 w1 和 w2。窗口大小可能会根据网络流量的变化而有所不同，但是在更简单的实现中它们是固定的。窗口大小必须大于零才能进行任何操作。我们算法中的滑动窗口也是类似，只不过包括的情况更加广泛。实际上上面的滑动窗口在某一个时刻就是固定窗口大小的滑动窗口，随着网络流量等因素改变窗口大小也会随着改变。接下来我们讲下算法中的滑动窗口。"},{title:"位运算",isNew:!0,url:"/thinkings/bit.md",summary:"我这里总结了几道位运算的题目分享给大家，分别是 136和137， 260 和 645， 总共加起来四道题。 四道题全部都是位运算的套路，如果你想练习位运算的话，不要错过哦～～"},{title:"设计题",url:"/thinkings/design.md",summary:"系统设计是一个没有标准答案的open-end问题，所以关键在于对于特定问题的设计选择,俗称trade-off。这也是较能考察面试者知识水平的一种题型。"},{title:"小岛问题",url:"/thinkings/island.md",summary:"LeetCode 上有很多小岛题，虽然官方没有这个标签， 但是在我这里都差不多。不管是思路还是套路都比较类似，大家可以结合起来练习。"},{title:"最大公约数",url:"/thinkings/GCD.md",summary:"关于最大公约数有专门的研究。 而在 LeetCode 中虽然没有直接让你求解最大公约数的题目。但是却有一些间接需要你求解最大公约数的题目。"},{title:"数据结构",url:"/thinkings/basic-data-structure.md",summary:"这篇文章不是讲解数据结构的文章，而是结合现实的场景帮助大家理解和复习数据结构与算法， 如果你的数据结构基础很差，建议先去看一些基础教程，再转过来看。本篇文章的定位是侧重于前端的，通过学习前端中实际场景的数据结构，从而加深大家对数据结构的理解和认识。"},{title:"基础算法",url:"/thinkings/basic-algorithm.md",summary:"时间复杂度分析,贪心算法,分治,动态规划,回溯法,枚举法,元算法,"},{title:"二叉树的遍历",url:"/thinkings/binary-tree-traversal.md",summary:"二叉树作为一个基础的数据结构，遍历算法作为一个基础的算法，两者结合当然是经典的组合了。 很多题目都会有 ta 的身影，有直接问二叉树的遍历的，有间接问的。你如果掌握了二叉树的遍历，那么也许其他复杂的树对于你来说也并不遥远了"},{title:"动态规划",url:"/thinkings/dynamic-programming.md",summary:"动态规划可以理解为是查表的递归。那么什么是递归？"},{title:"哈夫曼编码和游程编码",url:"/thinkings/run-length-encode-and-huffman-encode.md",summary:"Huffman encode(哈夫曼编码) Huffman 编码的基本思想就是用短的编码表示出现频率高的字符，用长的编码来表示出现频率低的字符，这使得编码之后的字符串的平均长度、长度的期望值降低，从而实现压缩的目的。 因此 Huffman 编码被广泛地应用于无损压缩领域。"},{title:"布隆过滤器",url:"/thinkings/bloom-filter.md",summary:"假设你现在要处理这样一个问题，你有一个网站并且拥有很多访客，每当有用户访问时，你想知道这个ip是不是第一次访问你的网站。"},{title:"字符串问题",url:"/thinkings/string-problems.md",summary:"字符串问题有很多，从简单的实现substr，识别回文，到复杂一点的公共子串/子序列。其实字符串本质上也是字符数组，因此 很多数据的思想和方法也可以用在字符串问题上，并且在有些时候能够发挥很好的作用。专门处理字符串的算法也很多，比如trie，马拉车算法，游程编码，huffman树等等。"}],r=s,l="https://api.github.com/repos/azl397985856/leetcode/contents",u={name:"BasicList",data:function(){return{solutionData:r,queryParams:{pageNum:1,pageSize:20},total:0}},created:function(){this.total=this.solutionData.length},methods:{handleClick:function(t){this.$router.push({path:"basicDetail",query:{url:l+t.url}})}}},m=u,o=(i("72ff"),i("2877")),d=Object(o["a"])(m,a,n,!1,null,"2f9eae99",null);e["default"]=d.exports}}]);
//# sourceMappingURL=BasicList.d35a6a04.js.map