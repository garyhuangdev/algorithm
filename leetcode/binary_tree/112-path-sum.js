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
 * @param {number} targetSum
 * @return {boolean}
 */

// recursion
 var hasPathSum = function(root, targetSum) {
  if (!root) return false

  // leaf node
  if (!root.left && !root.right) return root.val == targetSum
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

// iteration - 可以选择操作节点的值来保存当前路径的sum 或者 使用一个额外stack来存值
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  const nodeStack = [root]
  const pathSumStack = [0]

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop()
    const currentPathSum = pathSumStack.pop()
    if (!currentNode) continue
    if (!currentNode.left && !currentNode.right && currentPathSum + currentNode.val == targetSum) return true
    if (currentNode.left) {
      nodeStack.push(currentNode.left)
      pathSumStack.push(currentPathSum + currentNode.val)
    }
    if (currentNode.right) {
      nodeStack.push(currentNode.right)
      pathSumStack.push(currentPathSum + currentNode.val)
    }
  }
  return false
};

