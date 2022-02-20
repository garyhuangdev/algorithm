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
 var inorderTraversal = function(root) {
  const resultList = []
  const recursiveTraversal = (currentNode, resultList) => {
      if (!currentNode) return
      recursiveTraversal(currentNode.left, resultList)
      resultList.push(currentNode.val)
      recursiveTraversal(currentNode.right, resultList)
  }
  recursiveTraversal(root, resultList)
  return resultList
};

// iteration
 var inorderTraversal1 = function(root) {
  const resultList = []
  const stack = []
  if (!root) return resultList

  let currentNode = root
  while (currentNode || stack.length > 0) {
      while (currentNode) {
          stack.push(currentNode)
          currentNode = currentNode.left
      }
      currentNode = stack.pop()
      resultList.push(currentNode.val)
      currentNode = currentNode.right
  }
  return resultList
};