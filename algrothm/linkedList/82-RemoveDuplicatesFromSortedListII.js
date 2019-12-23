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
var deleteDuplicates = function(head) {
  if (!head) {
    return null
  }
  const tempHead = new ListNode(null)
  tempHead.next = head
  let cur = head // 当前节点, 与cur.next比较
  let prev = tempHead // 记录重复之前的节点
  while (cur.next) {
    // 重复节点
    if (cur.val === cur.next.val) {
      cur = cur.next
    // 重复段结束
    } else if (prev.next !== cur) {
      prev.next = cur.next
      cur = cur.next
    // 非重复节点正常推进
    } else {
      prev = cur
      cur = cur.next
    }
  }
  // cur.next会跳过最后的一个判断, 补上
  if (prev.next !== cur) {
    prev.next = cur.next
  }
  return tempHead.next
};

test(deleteDuplicates, [1, 2, 3, 3, 4, 4, 5])
test(deleteDuplicates, [1, 1, 1, 2, 3])
test(deleteDuplicates, [1, 1, 1, 2, 3, 3])
test(deleteDuplicates, [1, 1])