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
}
test(sortList, [1, 2, 3, 4, 5])
test(sortList, [2, 1, 3, 5, 6, 4, 7])