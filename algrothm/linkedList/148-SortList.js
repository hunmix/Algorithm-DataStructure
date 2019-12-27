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
var sortList = function(head) {
  if (!head) {
    return head
  }
  return split(head)
}
// 归并
const split = function (head) {
  if (!head.next) {
    return head
  }
  let tempHead = head
  let s = head
  let q = head.next
  // 在慢指针处断开链接, 并分别归并左右链表
  while (q && q.next) {
    s = s.next
    q = q.next.next
  }
  const next = s.next
  s.next = null
  let l1 = split(tempHead)
  let l2 = split(next)
  const dummy = new ListNode(null)
  let cur = dummy
  // 合并链表l1, l2
  while (l1 || l2) {
    const v1 = l1 ? l1.val : Number.MAX_SAFE_INTEGER
    const v2 = l2 ? l2.val : Number.MAX_SAFE_INTEGER
    let v = v1 < v2 ? l1 : l2
    cur.next = v
    cur = cur.next
    if (v1 < v2) {
      l1 = l1.next
    } else {
      l2 = l2.next
    }
  }
  return dummy.next
}

test(sortList, [1, 2, 3, 4, 5])
test(sortList, [2, 1, 3, 5, 6, 4, 7])
test(sortList, [4, 2, 1, 3])
test(sortList, [-1, 5, 3, 4, 0])