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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(null)
  dummy.next = head
  let l = dummy
  let count = 0
  let r = l
  while (count < n) {
    r = r.next
    count++
  }
  while (r.next) {
    l = l.next
    r = r.next
  }
  l.next = l.next.next
  return dummy.next
};

test(removeNthFromEnd, [1, 2, 3, 4, 5], 2)
test(removeNthFromEnd, [1, 2, 3, 4, 5], 5)
