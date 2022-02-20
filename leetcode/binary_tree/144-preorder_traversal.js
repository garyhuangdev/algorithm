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
const preorderTraversal = function(root) {
  const resultList = []
  if (!root) {
      return resultList
  }

  const recursiveTraversal = (currentNode) => {
    if (!currentNode) return
    resultList.push(currentNode.val)
    recursiveTraversal(currentNode.left)
    recursiveTraversal(currentNode.right)
  };
  
  recursiveTraversal(root)
  return resultList
};


// iteration
// use stack to store nodes
const preorderTraversal1 = function(root) {
  const resultList = []
  const stack = []
  if (!root) {
      return resultList
  }
  stack.push(root)
  while (stack.length > 0) {
    const currentNode = stack.pop()
    if (currentNode) {
      resultList.push(currentNode.val)
      if (currentNode.right) stack.push(currentNode.right)
      if (currentNode.left) stack.push(currentNode.left)
    }
  }
  return resultList
};
