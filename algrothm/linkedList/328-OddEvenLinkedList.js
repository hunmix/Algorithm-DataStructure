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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // 节点计数
  let count = 1
  // 奇数链表
  const oddHead = new ListNode(null)
  // 偶数链表
  const evenHead = new ListNode(null)
  let odd = oddHead
  let even = evenHead
  while (head) {
    if (count % 2 === 1) {
      odd.next = head
      odd = odd.next
    } else {
      even.next = head
      even = even.next
    }
    head = head.next
    count++
  }
  odd.next = evenHead.next
  even.next = null
  return oddHead.next
};
test(oddEvenList, [1, 2, 3, 4, 5])
test(oddEvenList, [2, 1, 3, 5, 6, 4, 7])