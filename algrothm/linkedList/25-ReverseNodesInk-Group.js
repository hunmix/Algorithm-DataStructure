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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k === 1) {
    return head
  }
  const tempHead = new ListNode(null)
  tempHead.next = head
  let cur = tempHead.next
  let prev = tempHead // 原链表断开的地方
  let l = cur // 要反转的链表头部
  let count = 1
  while (cur) {
    // [l...r] 需要反转的部分
    if (count >= k) {
      const next = cur.next
      cur.next = null
      const subHead = reverse(l) // 翻转[l...r]部分链表
      prev.next = subHead
      // 翻转链表与源链表相连
      l.next = next
      prev = l
      cur = next
      l = cur
      count = 1
    } else {
      cur = cur.next
      count++
    }
  }
  return tempHead.next
};
// 翻转链表
const reverse = (head) => {
  let prev = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

test(reverseKGroup, [1, 2, 3, 4, 5], 2)
test(reverseKGroup, [1, 2, 3, 4, 5], 3)
test(reverseKGroup, [1, 2, 3, 4, 5], 1)