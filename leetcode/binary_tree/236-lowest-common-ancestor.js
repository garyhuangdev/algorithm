var lowestCommonAncestor = function(root, p, q) {
  let result
  const dfs = (node, p, q) => {
      if (node === null) return false
      const leftSubtree = dfs(node.left, p, q)
      const rightSubtree = dfs(node.right, p, q)
      if ((leftSubtree && rightSubtree) || ((node.val === p.val || node.val === q.val) && (leftSubtree || rightSubtree))) {
          result = node
      }

      // 将值向上传递
      return leftSubtree || rightSubtree || (node.val === p.val || node.val === q.val)
  }
  dfs(root, p, q)
  return result
}
