/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// recursion
 var postorderTraversal = function(root) {
  const resultList = []
  const recursiveTraversal = (currentNode) => {
      if (!currentNode) return resultList
      if (currentNode.left) recursiveTraversal(currentNode.left)
      if (currentNode.right) recursiveTraversal(currentNode.right)
      resultList.push(currentNode.val)
  }
  recursiveTraversal(root)
  return resultList
};

// iteration
// 取巧: change part of preorder traversal and reverse the result
var postorderTraversal = function(root) {
  const resultList = []
  if (!root) return resultList

  const stack = []
  stack.push(root)

  while (stack.length > 0) {
    let currentNode = stack.pop()
    resultList.push(currentNode.val)
    // left subnode first, then right subnode
    if (currentNode.left) stack.push(currentNode.left)
    if (currentNode.right) stack.push(currentNode.right)
  }
  resultList.reverse()

  return resultList
};

// iteration2
var postorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let cur = root;
  let prev;
  while (cur || stack.length) {
      while (cur) {
          stack.push(cur);
          cur = cur.left;
      }
      cur = stack.pop();
      if (cur.right === null || cur.right === prev) {
          result.push(cur.val);
          prev = cur;
          cur = null;
      } else {
          stack.push(cur);
          cur = cur.right;
      }

  }
  return result;
};