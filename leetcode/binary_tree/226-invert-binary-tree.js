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
 * @return {TreeNode}
 */

// recursion
 var invertTree = function(root) {
  if (root == null) return null

  // 交换当前结点的左右子结点
  const tempNode = root.left
  root.left = root.right
  root.right = tempNode

  // 分别翻转左右子树
  invertTree(root.left)
  invertTree(root.right)

  return root
};

// iteration
var invertTree = function(root) {
  if (root == null) return null
  const queue = [root]
  while (queue.length > 0) {
      const currentNode = queue.shift()
      if (!currentNode) continue
      const temp = currentNode.left
      currentNode.left = currentNode.right
      currentNode.right = temp
      queue.push(currentNode.left)
      queue.push(currentNode.right)
  }
  return root
};