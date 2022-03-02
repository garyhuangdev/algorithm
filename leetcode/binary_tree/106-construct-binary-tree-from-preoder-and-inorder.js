/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  const inorderMap = new Map()
  inorder.forEach((value, index) => inorderMap.set(value, index))

  return helper(0,inorder.length-1, 0, postorder.length-1)

  function helper(inLeft, inRight, postLeft, postRight){

      if(postLeft>postRight){
          return null
      }

      let rootInorderIndex = inorderMap.get(postorder[postRight])

      // 左子树的node数量
      let numLeft = rootInorderIndex - inLeft
      let root = new TreeNode(postorder[postRight])

      // 左子树，在inorder中是 root index的左边，在post order中是 postLeft + nummLeft - 1
      root.left = helper(inLeft, rootInorderIndex - 1, postLeft, postLeft + numLeft - 1)

      // 右子树，在inorder中是 root index的右边，在post order中是 postLeft + nummLeft，最后一位是root node所以要减一
      root.right = helper(rootInorderIndex + 1, inRight, postLeft + numLeft, postRight - 1)
      return root
  }
};