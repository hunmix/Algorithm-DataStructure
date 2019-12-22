// 随便写一下, 方便本地调试链表题
class LinkedList {
  constructor () {
    this.head = null
  }
  insert (node) {
    if (!this.head) {
      this.head = node
      return
    }
    let cur = this.head
    while (cur.next) {
      cur = cur.next
    }
    cur.next = node
  }
  getHead () {
    return this.head
  }
  show () {
    let str = ''
    let node = this.head
    while (node) {
      str += `${node.val} -> `
      node = node.next
    }
    str += 'NULL'
    console.log(str)
  }
}

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const makeLinkedList = (arr) => {
  const linkedList = new LinkedList()
  for (let i =0; i < arr.length; i++) {
    linkedList.insert(new Node(arr[i]))
  }
  return linkedList
}

module.exports = {
  makeLinkedList
}
