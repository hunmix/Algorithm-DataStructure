排序(sorting)
- 01-选择排序 O(n²)
- 02-插入排序 O(n²) 对近乎有序的数组效率非常高
- 03-归并排序, 归并自底向上 O(nlogn)
- 04-快速排序
- 05-双路快速排序 避免数组几乎有序时效率变低
- 06-三路快速排序 避免数组中有大量重复元素时效率变低

数据结构(dataStructure)
- 堆(heap)
  - 01-最大二叉堆 父节点的值总是大于子节点的值, 动态数据维护
  - 02-最大索引堆
  - 03-最大索引堆优化 增加堆索引数组
  - 04-最小二叉堆
  - 04-最小索引堆
- 树(tree)
  - 01-二分搜索树 数据近乎有序的情况下可能退化成链表, 解决: 平衡二叉树(红黑树, 2-3 tree, AVL tree, splay tree...)。todo: 拓展问题
- 集合(set)
  - 01-并查集 操作时间复杂度近乎O(1)
- 图(graph)
  - 01-稠密图 邻接矩阵
  - 02-稀疏图 邻接表
  - 03-最小生成树 lazy prim
  - 04-最小生成树 prim
  - 05-最小生成树 kruskal
  - 06-单源最短路径 dijkstra
  - 07-单源最短路径 bellman ford 判断是否含负权环
