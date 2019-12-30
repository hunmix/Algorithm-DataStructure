const test = require('./test')
const linkedList = require('../../dataStructure/linkedList/01-LinkedList')
const ListNode = linkedList.Node

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function(head) {
//   let prev = null
//   let cur = head
//   let next
//   let len = 0
//   // 拆分成两个链表
//   while (cur) {
//     const node = new ListNode(cur.val)
//     next = cur.next
//     node.next = prev
//     prev = node
//     cur = next
//     len++
//   }
//   let newHead = new ListNode(null)
//   let l1 = head
//   let l2 = prev
//   cur = newHead
//   // 链接两个链表, 到原有的长度len时停止合并, 并加上尾巴
//   for (let i = 0, j = 0; i + j < len;) {
//     if (i <= j) {
//       cur.next = l1
//       l1 = l1.next
//       i++
//     } else {
//       cur.next = l2
//       l2 = l2.next
//       j++
//     }
//     cur = cur.next
//   }
//   // 断尾
//   cur.next = null
//   return newHead.next
// };
// 改进, 从中间断开, 不过跑的结果来看好像更慢了..惊了
var reorderList = function(head) {
  if (!head || !head.next) {
    return head
  }
  // 找到中点并切断
  let s = head
  let f = head
  while (f.next && f.next.next) {
    s = s.next
    f = f.next.next
  }
  let prev = null
  let l2 = s.next
  s.next = null
  // 倒叙切断的链表
  while (l2) {
    const next = l2.next
    l2.next = prev
    prev = l2
    l2 = next
  }
  let l1 = head
  l2 = prev
  const ret = new ListNode(null)
  cur = ret
  while (l1 || l2) {
    if (l1) {
      cur.next = l1
      cur = cur.next
      l1 = l1.next
    }
    if (l2) {
      cur.next = l2
      cur = cur.next
      l2 = l2.next
    }
  }
  return ret.next
};
test(reorderList, [1, 2, 3, 4, 5], 2)
test(reorderList, [0, 1, 2], 4)
