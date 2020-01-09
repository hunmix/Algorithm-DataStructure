const { makeLinkedList } = require('../../dataStructure/linkedList/01-LinkedList')
/**
 * 运行函数并打印链表结果
 * @param {Function} fn 需要执行的函数
 * @param {Array} arr 构建链表的数组
 * @param  {...any} res 传给函数的其他参数
 */
const test = (fn, arr, ...res) => {
  const head = makeLinkedList(arr).getHead()
  const newHead = fn(head, ...res)
  show(newHead)
}
const show = (head) => {
  let str = ''
  let node = head
  while (node) {
    str += `${node.val} -> `
    node = node.next
  }
  str += 'NULL'
  console.log(str)
}

exports.test = test
exports.show = show
