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
 * @return {number}
 */

// recursion
// Top to bottom
var maxDepth = function(root) {
  const depthHelper = (node, depth) => {
      if (node == null) return 0
      if (!node.left && !node.right) return depth
      return Math.max(depthHelper(node.left, depth+1), depthHelper(node.right, depth+1))
  }
  return depthHelper(root, 1)
};

// Bottom to top
var maxDepth1 = function(root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left)+1, maxDepth(root.right)+1)
};


// iteration - 层序遍历，最大层数就是最大深度
var maxDepth1 = function(root) {
  let depth = 0
  if (root == null) return 0
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      // don't need to store temp result, use the same queue
      const currentNode = queue.shift()
      if (currentNode.left != null) queue.push(currentNode.left)
      if (currentNode.right != null) queue.push(currentNode.right)
    }
    depth++
  }
  return depth
};
