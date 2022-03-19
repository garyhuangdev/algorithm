/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return ''
  if (strs.length == 1) return strs[0]

  let str = ''

  // 因为是公共前缀，所以数组中最短的字符串其实都满足要求，选第一个即可
  for (let i=0; i<strs[0].length; i++) {
    for (let j=1; j<strs.length; j++) {

      // 和第一个字符串的这个字符作对比
      if (strs[0][i] != strs[j][i]) {
        return str
      }
    }

    // 纵向扫一次，全部一样才添加这个字符
    str += strs[0][i]
  }

  return str
}
