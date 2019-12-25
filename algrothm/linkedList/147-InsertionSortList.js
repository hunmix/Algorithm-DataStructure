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
var insertionSortList = function(head) {
  if (!head) {
    return head
  }
  const dummy = new ListNode(Number.MIN_SAFE_INTEGER)
  dummy.next = head
}

test(insertionSortList, [4, 1, 2, 3])
test(insertionSortList, [-1, 5, 3, 4, 0])