const { makeLinkedList, Node } = require('../../dataStructure/linkedList/01-LinkedList')
const { show } = require('../linkedList/test')
const ListNode = Node
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// O(nlogk), k为链表数量
var mergeKLists = function(lists) {
  const minHeap = new MinHeap()
  // 将每条链表的第一个节点推入堆中
  for (let i = 0; i < lists.length; i++) {
    // 链表不为空
    if (lists[i]) {
      minHeap.insert(lists[i])
    }
  }
  const dummy = new ListNode(null)
  let cur = dummy
  // 拼接最小的节点并将该节点之后的节点推入堆中
  while (!minHeap.isEmpty()) {
    const node = minHeap.extractMin()
    const next = node.next
    node.next = null
    cur.next = node
    cur = cur.next
    if (next) {
      minHeap.insert(next)
    }
  }
  return dummy.next
};
class MinHeap {
  constructor (arr = []) {
    this.data = []
    this._count = 0
    this._heapify(arr)
  }
  getMin () {
    return this.data[0]
  }
  // 获取最小值
  extractMin () {
    const min = this.data[0]
    this.data[0] = this.data[--this._count]
    this._shiftDown(0)
    return min
  }
  insert (v) {
    this.data[this._count] = v
    this._shiftUp(this._count)
    this._count++
  }
  size () {
    return this._count
  }
  isEmpty () {
    return this._count === 0
  }
  _heapify (arr) {
    this.data = [...arr]
    this._count = arr.length
    if (this._count <= 1) {
      return
    }
    let k
    for (let k = Math.floor((this._count - 1) / 2); k >= 0; k--) {
      this._shiftDown(k)
    }
  }
  _shiftDown (k) {
    const temp = this.data[k]
    while (k * 2 + 1 < this._count) {
      let j = k * 2 + 1
      // 获取子节点数值较小的节点
      if (j + 1 < this._count && this.data[j + 1].val < this.data[j].val ) {
        j += 1
      }
      if (temp.val < this.data[j].val) {
        break
      }
      this.data[k] = this.data[j]
      k = j
    }
    this.data[k] = temp
  }
  _shiftUp (k) {
    const temp = this.data[k]
    while (k > 0 && temp.val < this.data[Math.floor((k - 1) / 2)].val) {
      this.data[k] = this.data[Math.floor((k - 1) / 2)]
      k = Math.floor((k - 1) / 2)
    }
    this.data[k] = temp
  }
}

const test = (fn, list) => {
  const newHead = fn(list.map(arr => makeLinkedList(arr).getHead()))
  show(newHead)
}

test(mergeKLists, [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6]
])
test(mergeKLists, [[]])