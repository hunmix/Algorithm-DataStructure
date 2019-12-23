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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let retHead = new ListNode()
  retHead.next = head
  let cur = retHead
  while (cur.next) {
    // 下一个值与val相等时删除cur.next节点
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return retHead.next
};

test(removeElements, [6, 2, 3, 6, 4, 5, 6], 6)