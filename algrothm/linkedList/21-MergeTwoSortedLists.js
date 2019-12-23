const { makeLinkedList } = require('../../dataStructure/linkedList/01-LinkedList')
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

    }
  }
};
const test = (fn, arr, arr2) => {
  const l1 = makeLinkedList(arr).getHead()
  const l2 = makeLinkedList(arr2).getHead()
  const newHead = fn(l1, l2)
  show(newHead)
}
const show = (head) => {
  let str = ''
  let node = head
  while (node) {
    str += `${node.val} -> `
    node = node.next
  }
  str += 'NULL'
  console.log(str)
}

test(mergeTwoLists, [1, 2, 4], [1, 3, 4])