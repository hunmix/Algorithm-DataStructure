// 二分搜索树
class BST {
  constructor () {
    this.root = null
    this._count = 0
  }
  // 插入节点
  insert (key, value) {
    this.root = this._insert(this.root, key, value)
  }
  // 所有节点, 返回节点的引用
  search (key) {
    return this._search(this.root, key)
  }
  // 找到最小值
  minimum () {
    if (this.root === null) {
      return null
    }
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  // 找到最大值
  maximum () {
    if (this.root === null) {
      return null
    }
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  // 获取最小节点
  getMinNode (root) {
    const node = root
    while (node.left) {
        node = node.left
    }
    return node
  }
  // 删除最小值
  removeMin () {
    if (this.root) {
      this.root = this._removeMin(this.root)
    }
  }
  // 删除最大值
  removeMax () {
    if (this.root) {
      this.root = this._removeMax(this.root)
    }
  }
  // 根据key删除节点
  remove (key) {
    return this._remove(this.root, key)
  }
  // 前序遍历
  preOrder () {
    this._preOrder(this.root)
  }
  // 中序遍历
  inOrder () {
    this._inOrder(this.root)
  }
  // 后序遍历
  postOrder () {
    this._postOrder(this.root)
  }
  // 层序遍历
  level () {
    const queue = [this.root]
    while (queue.length > 0) {
      const node = queue.shift()
      if (node === null) {
        continue
      }
      console.log(node.value)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }

  // 检查是否包含节点
  contain (key) {
    return this._contain(this.root, key)
  }
  // 节点个数
  size () {
    return this._count
  }
  // 是否为空
  isEmpty () {
    return this._count === 0
  }
  _insert (node, key, value) {
    if (node === null) {
      this._count++
      return new Node(key, value)
    }
    if (key === node.key) {
      node.value = value
    } else if (key < node.key) {
      node.left = this._insert(node.left, key, value)
    } else if (key > node.key) {
      node.right = this._insert(node.right, key, value)
    }
    return node
  }
  _contain (node, key) {
    if (node === null) {
      return false
    }
    if (node.key === key) {
      return true
    } else if (node.key > key) {
      return this._contain(node.right, key)
    } else if (node.key < key) {
      return this._contain(node.left, key)
    }
  }
  _search (node, key) {
    if (node === null) {
      return -1
    }
    if (key === node.key) {
      return node
    } else if (key > node.key) {
      return this._search(node.right, key)
    } else {
      return this._search(node.left, key)
    }
  }
  _preOrder (node) {
    if (node === null) {
      return
    }
    console.log(node.value)
    node.left && this._preOrder(node.left)
    node.right && this._preOrder(node.right)
  }

  _inOrder (node) {
    if (node === null) {
      return
    }
    node.left && this._inOrder(node.left)
    console.log(node.value)
    node.right && this._inOrder(node.right)
  }
  _postOrder (node) {
    if (node === null) {
      return
    }
    node.left && this._postOrder(node.left)
    node.right && this._postOrder(node.right)
    console.log(node.value)
  }
  _removeMin (node) {
    // 左子树不存在, 删除当前节点, 返回右子树
    if (node.left === null) {
      const rightNode = node.right
      this._count--
      return rightNode
    }
    node.left = this._removeMin(node.left)
    return node
  }
  _removeMax (node) {
    if (node.right === null) {
      const leftNode = node.left
      this._count--
      return leftNode
    }
    node.right = this._removeMax(node.right)
    return node
  }
  _remove (node, key) {
    // 找到当前值
    if (node === null) {
      return null
    } else if (key > node.key) {
      node.right = this._remove(node.right, key)
      return node
    } else if (key < node.key) {
      node.left = this._remove(node.left, key)
    } else {
      // 当前节点没有左子树, 返回右子树替代当前节点
      if (node.left === null) {
        this._count--
        return node.right
      // 当前节点没有右子树, 返回左子树替代当前节点
      } else if (node.right === null) {
        this._count--
        return node.left
      }
      // hubbard deletion, 找到右子树中的最小值作为后继, 代替当前节点。all left nodes > successor > all right nodes
      const rightRoot = node.right
      const minNode = this.getMinNode(rightRoot)
      const successor = new Node(minNode.key, minNode.value)
      successor.left = node.left
      // 删除右子树中后继位置的节点, 后继与当前节点互换
      successor.right = this._removeMin(rightRoot)
      return successor
    }
  }
}
// 节点
class Node {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}
const bst = new BST()
// bst.insert(2, 2)
// bst.insert(1, 1)
// bst.insert(3, 3)
bst.insert(5, 5)
bst.insert(3, 3)
bst.insert(4, 4)
bst.insert(2, 2)
// bst.insert(4, 4)
// bst.insert(1, 1)
// bst.insert(6, 6)
// bst.insert(7, 7)
// console.log(bst.contain(2))
// bst.preOrder()
// console.log(bst.search(2))
// bst.inOrder()
// bst.postOrder()
// bst.level()
// console.log(bst.minimum())
// console.log(bst.maximum())
// bst.removeMin()
// bst.removeMax()
// console.log(bst.minimum())
// console.log(bst.maximum())
// console.log(bst.minimum())
bst.remove(3)
console.log(bst.root)
console.log(bst._count)
module.exports = BST
