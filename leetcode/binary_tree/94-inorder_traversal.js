// 中序遍历
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
  const recursiveTraversal = (currentNode) => {
      if (!currentNode) return
      recursiveTraversal(currentNode.left)
      resultList.push(currentNode.val)
      recursiveTraversal(currentNode.right)
  }
  recursiveTraversal(root)
  return resultList
}

// iteration
 var inorderTraversal1 = function(root) {
  const resultList = []
  const stack = []
  if (!root) return resultList

  let currentNode = root
  while (currentNode || stack.length > 0) {

      // push all left nodes in stack
      while (currentNode) {
          stack.push(currentNode)
          currentNode = currentNode.left
      }

      // for every left node -> mid node -> right node, push their values
      currentNode = stack.pop()
      resultList.push(currentNode.val)
      currentNode = currentNode.right
  }
  return resultList
}