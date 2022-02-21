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
 * @return {boolean}
 */

// Recursion - construct a top node that contains two root, each subtree should be symmetric
 var isSymmetric = function(root) {

  const symmetricHelper = (leftNode, rightNode) => {

      // both are leaf nodes
    if (!leftNode && !rightNode) return true

    if (!leftNode || !rightNode) return false
      
    return leftNode.val === rightNode.val && symmetricHelper(leftNode.left, rightNode.right) && symmetricHelper(rightNode.left, leftNode.right)
  }

  return symmetricHelper(root.left, root.right)
};

// Iteration - 将要对比的点 两个一起推进queue，下一个循环拿出来对比
var isSymmetric1 = function(root) {
  if (!root) return false

  const symmetricHelper = (leftNode, rightNode) => {
    const queue = [leftNode, rightNode]

    while (queue.length > 0) {
      let node1 = queue.shift()
      let node2 = queue.shift()
      if (!node1 && !node2) continue
      if (!node1 || !node2 || node1.val !== node2.val) return false
  
      // push two nodes as a pair and compare them
      queue.push(node1.left)
      queue.push(node2.right)
      queue.push(node1.right)
      queue.push(node2.left)
    }
  return true
  }

  return symmetricHelper(root.left, root.right)
}
