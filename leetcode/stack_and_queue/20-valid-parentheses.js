// 有效的括号
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 2:

// Input: s = "()[]{}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length % 2 != 0) return false

  // 存对应的括号
  const map = {
      '(': ')',
      '[': ']',
      '{': '}',
  }

  const stack = []

  for (const c of s) {
      // 存在的话就推反括号进stack
      if (c in map) {
          stack.push(map[c])
      } else {

          // 不存在的话，如果长度为0，不能推，则false
          if (stack.length == 0) return false
          const validChar = stack.pop()
          if (validChar != c) return false
      }
  }

  // 遍历完且stack长度为0，才返回true
  if (stack.length == 0) return true
  return false
};