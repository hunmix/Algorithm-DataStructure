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
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(null)
  let cur = head
  let flag = 0 // 是否进位
  while (l1 || l2 || flag) {
    let val = 0
    if (!l1 && !l2) {
    } else if (!l1) {
      val = l2.val
      l2 = l2.next
    } else if (!l2) {
      val = l1.val
      l1 = l1.next
    } else {
      val = l1.val + l2.val
      l1 = l1.next
      l2 = l2.next
    }
    val += flag
    if (val >= 10) {
      val = val % 10
      flag = 1
    } else {
      flag = 0
    }
    cur.next = new ListNode(val)
    cur = cur.next
  }
  cur = null
  return head.next
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

// test(addTwoNumbers, [2, 4, 3], [5, 6, 4])
test(addTwoNumbers, [5], [5])