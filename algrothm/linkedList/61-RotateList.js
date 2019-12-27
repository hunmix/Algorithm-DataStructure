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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let count = 1
  let cur = head
  let tail = cur
  while (cur.next) {
    cur = cur.next
    tail = cur
    count++
  }
  tail.next = head
  // 绕圈的把完整的圈去掉
  const step = count - k % count
  cur = head
  count = 1
  // 移动step - 1次
  while (count < step) {
    cur = cur.next
    count++
  }
  
  const ret = cur.next
  cur.next = null
  return ret
};

test(rotateRight, [1, 2, 3, 4, 5], 2)
test(rotateRight, [0, 1, 2], 4)
