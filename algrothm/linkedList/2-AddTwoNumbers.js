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
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(null)
  let cur = head
  let flag = 0 // 是否进位
  while (l1 || l2 || flag) {
    let val = flag
    let v1 = l1 ? l1.val : 0
    let v2 = l2 ? l2.val : 0
    val += v1 + v2
    if (val >= 10) {
      flag = 1
      val = val % 10
    } else {
      flag = 0
    }
    cur.next = new ListNode(val)
    cur = cur.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
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

test(addTwoNumbers, [2, 4, 3], [5, 6, 4])
test(addTwoNumbers, [5], [5])