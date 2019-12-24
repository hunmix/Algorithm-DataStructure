const { makeLinkedList } = require('../../dataStructure/linkedList/01-LinkedList')
const linkedList = require('../../dataStructure/linkedList/01-LinkedList')
const ListNode = linkedList.Node
const show = linkedList.show
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const tempHead = new ListNode(null)
  let cur = tempHead
  while (l1 || l2) {
    const v1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER
    const v2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER
    if (v1 < v2) {
      cur.next = l1
      l1 = l1 ? l1.next : l1
    } else {
      cur.next = l2
      l2 = l2 ? l2.next : l2
    }
    cur = cur.next
  }
  return tempHead.next
};
const test = (fn, arr, arr2) => {
  const l1 = makeLinkedList(arr).getHead()
  const l2 = makeLinkedList(arr2).getHead()
  const newHead = fn(l1, l2)
  show(newHead)
}

test(mergeTwoLists, [1, 2, 4], [1, 3, 4])