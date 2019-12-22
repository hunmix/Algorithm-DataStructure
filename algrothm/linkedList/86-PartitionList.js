const test = require('./test')
// 本地没有这个类, 写个临时的用一下
class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 解1: 直接将小于x的节点移动到最前端, 并使用指针l记录小于x节点的边界(题解里好像没人写这个, 大概是弟弟写法)
var partition = function(head, x) {
  // [0...l] < x, 将所有 < x的节点移动到[0...l]中
  let ret = new ListNode(null) // 哑节点, 避免每次都判断l.next是否存在
  ret.next = head
  let cur = head
  let l = ret // 小于x节点的最右端
  let prev = null
  while (cur) {
    if (cur.val < x) {
      // val < x 且 前面节点的值 >= x时, 说明当前节点的值 < x
      if (prev && prev.val >= x) {
        prev.next = cur.next
        cur.next = l.next
        l.next = cur
      }
      l = cur
    }
    prev = cur
    cur = cur.next
  }
  return ret.next
};
// 解2: 创建两个链表分别记录 < x的节点和 >= x的节点, 最后合并
var partition = function(head, x) {
  // 节点值 < x的链表头节点(哑节点)
  const leftHead = new ListNode(null)
  // 节点值 >= x的链表头节点(哑节点)
  const rightHead = new ListNode(null)
  // 当前指针
  let left = leftHead
  let right = rightHead
  // 源链表当前指针
  let cur = head
  while (cur) {
    if (cur.val < x) {
      left.next = cur
      left = left.next
    } else {
      right.next = cur
      right = right.next
    }
    cur = cur.next
  }
  // 合并链表
  left.next = rightHead.next
  right.next = null
  return leftHead.next
};
test(partition, [1, 4, 3, 2, 5, 2], 3)
test(partition, [2, 1], 3)