/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.list = nestedList
  this.stack = []
  for (let i = this.list.length - 1; i >= 0; i--) {
    this.stack.push(this.list[i])
  }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.stack.length > 0
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  const val = this.stack.pop()
  if (Array.isArray(val)) {
    const head = val.shift()
    for (let i = val.length - 1; i >= 0; i--) {
      this.stack.push(val[i])
    }
    return head
  } else {
    return val
  }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

const test = (arr) => {
  var i = new NestedIterator(arr), a = []
  while (i.hasNext()) a.push(i.next())
  console.log(a)
}
// test([[1,1],2,[1,1]])
// test([1,[4,[6]]])
test([[3],[4,5,6]])
