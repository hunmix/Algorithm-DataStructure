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
  let cur = head.next
  let tail = head
  while (cur) {
    let node = dummy
    const next = cur.next
    const val = cur.val
    if (cur.val < tail.val) {
      // [dummy...tail)中寻找 < val的node
      while (node.next !== tail && val > node.next.val) {
        node = node.next
      }
      // 移动节点到node节点之后
      tail.next = cur.next
      cur.next = node.next
      node.next = cur
    } else {
      // 如果val > tail.val, 则cur在正确的位置, 后移tail指针
      tail = cur
    }
    // 继续遍历下一个node
    cur = next
  }
  return dummy.next
}

test(insertionSortList, [4, 1, 2, 3])
test(insertionSortList, [-1, 5, 3, 4, 0])
test(insertionSortList, [2, 3, 2, 1])
test(insertionSortList, [3, 2, 4])
test(insertionSortList, [1, 2, 3, 4])
test(insertionSortList, [-84, 142, 41, -17, -71, 170, 186])