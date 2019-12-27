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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 删除传入的节点, 懒得写测试用例了, leetcode上跑一下
var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};
