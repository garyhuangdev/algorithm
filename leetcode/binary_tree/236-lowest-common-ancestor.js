// 如果一个节点 它自己是target 且 左子树或者右子树含有target 则满足条件
// 如果一个节点 它的左子树和右子树都含有target 则满足条件
var lowestCommonAncestor = function(root, p, q) {
  let result
  const dfs = (node, p, q) => {
      if (node === null) return false
      const leftSubtree = dfs(node.left, p, q)
      const rightSubtree = dfs(node.right, p, q)
      if ((leftSubtree && rightSubtree) || ((node.val === p.val || node.val === q.val) && (leftSubtree || rightSubtree))) {
          result = node
      }

      // 只要左或右子树满足，就可以将true值向上传递
      return leftSubtree || rightSubtree || (node.val === p.val || node.val === q.val)
  }
  dfs(root, p, q)
  return result
}
