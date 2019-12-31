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
  let stack = []
  let s = head
  let f = head
  while (f.next && f.next.next) {
    s = s.next
    f = f.next
    stack.push(s)
  }
  if (!f.next) {
    stack.pop()
  }
  let cur = s.next
  while (cur) {
    const val = stack.pop()
    console.log(val)
    if (val !== cur.val) {
      return false
    }
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