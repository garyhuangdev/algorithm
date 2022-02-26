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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  const resultList = []
  if (!root) return resultList
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
      const currentLevelSize = queue.length
      const tempResult = []
      for (let i = 0; i < currentLevelSize; i++) {
          const currentNode = queue.shift()
          tempResult.push(currentNode.val)
          if (currentNode.left)  queue.push(currentNode.left)
          if (currentNode.right) queue.push(currentNode.right)
      }
      resultList.push(tempResult)
  }
  return resultList
}