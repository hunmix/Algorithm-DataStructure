const test = require('./test')
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let count = 1
  let prev = null
  let cur = head
  // 找到开始反转的节点
  while (count < m) {
    prev = cur
    cur = cur.next
    count++
  }
  // 反转前一个节点
  const reverseHead = prev
  // 反转后的最后一个节点
  const reverseTail = cur
  while (count <= n) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
    count++
  }
  // 右边断掉的部分相接
  reverseTail.next = cur
  // 左边断掉的部分相接, 如果是从第一个结点开始反转的返回反转链表的最后一个节点
  if (!reverseHead) {
    return prev
  } {
    reverseHead.next = prev
    return head
  }
};

test(reverseBetween, [1, 2, 3, 4, 5, 6], 1, 1)