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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return head
  }
  const tempHead = new ListNode(null)
  tempHead.next = head
  let cur = head
  let prev = tempHead
  while (cur && cur.next) {
    const next = cur.next
    cur.next = next.next
    prev.next = next
    next.next = cur
    prev = cur
    cur = cur.next
  }
  return tempHead.next
};
test(swapPairs, [1, 2, 3, 4])
test(swapPairs, [2, 1, 3, 5, 6, 4, 7])