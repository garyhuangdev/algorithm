// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  if (s.length <= 1) return s
  let i = 0, j = s.length - 1
  while (i < j) {
      const temp = s[i]
      s[i] = s[j]
      s[j] = temp
      i++
      j--
  }
  return s
};