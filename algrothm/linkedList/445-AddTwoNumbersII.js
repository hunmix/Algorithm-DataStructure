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
  let head1 = null
  let head2 = null
  let newHead = null
  let cur = null // 新链表的尾巴
  let flag = 0
  // 反转链表, 个位数放前面 
  while (l1) {
    const next = l1.next
    l1.next = head1
    head1 = l1
    l1 = next
  }
  while (l2) {
    const next = l2.next
    l2.next = head2
    head2 = l2
    l2 = next
  }
  while (head1 || head2 || flag) {
    let val = flag
    let v1 = head1 ? head1.val : 0
    let v2 = head2 ? head2.val : 0
    val += v1 + v2
    if (val >= 10) {
      flag = 1
      val = val % 10
    } else {
      flag = 0
    }
    const newNode = new ListNode(val)
    newNode.next = cur
    cur = newNode
    newHead = newNode
    head1 = head1 ? head1.next : head1
    head2 = head2 ? head2.next : head2
  }
  return newHead
};
const test = (fn, arr, arr2) => {
  const l1 = makeLinkedList(arr).getHead()
  const l2 = makeLinkedList(arr2).getHead()
  const newHead = fn(l1, l2)
  show(newHead)
}

// test(addTwoNumbers, [2, 4, 3], [5, 6, 4])
test(addTwoNumbers, [7, 2, 4, 3], [5, 6, 4])
test(addTwoNumbers, [5], [5])