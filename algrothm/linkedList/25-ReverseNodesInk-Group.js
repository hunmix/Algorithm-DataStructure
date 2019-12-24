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
  const tempHead = new ListNode(null)
  tempHead.next = head
  let cur = tempHead.next
  let prev = tempHead
  let l = cur
  let r = null
  let count = 0
  while (cur) {
    if (count >= k) {
      r = cur
      while (cur.next !== r) {
        const next = cur.next
        next.next = cur
        cur = next
      }
      prev.next = r
      l.next = cur.next
      count = 0
      prev = cur
      cur = cur.next
      l = cur
    } else {
      cur = cur.next
      count++
    }
  }
  return tempHead.next
};

test(reverseKGroup, [1, 2, 3, 4, 5], 2)
test(reverseKGroup, [1, 2, 3, 4, 5], 3)