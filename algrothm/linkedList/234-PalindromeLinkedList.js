// const test = require('./test')
const linkedList = require('../../dataStructure/linkedList/01-LinkedList')
const ListNode = linkedList.Node
const makeLinkedList = linkedList.makeLinkedList

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true
  }
  let s = head
  let f = head
  while (f.next && f.next.next) {
    s = s.next
    f = f.next.next
  }
  const mid = s.next
  s.next = null
  const newHead = new ListNode(null)
  let cur = mid
  let prev = null
  // 翻转链表
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  let l2 = prev
  while (head && l2) {
    if (head.val !== l2.val) {
      return false
    }
    head = head.next
    l2 = l2.next
  }
  return true
};

const test = (fn, arr, ...res) => {
  const head = makeLinkedList(arr).getHead()
  console.log(fn(head, ...res))
}

test(isPalindrome, [1])
test(isPalindrome, [1, 2])
test(isPalindrome, [1, 2, 2, 1])