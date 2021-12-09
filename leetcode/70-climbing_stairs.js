/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?\

 * @param {number} n
 * @return {number}
 */

// iteration 1
// time complexity: O(n)
// space complexity: O(1)
var climbStairs = function(n) {
  let n1 = 0, n2=0, n3=1
  for (let i = 1; i <= n; i++) {
    [n1, n2, n3] = [n2, n3, n2+n3]
  }
  return n3
};

// iteration 2
// time complexity: O(n)
// space complexity: O(n)
var climbStairs = function(n) {
  const res = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    res[i] = res[i-1] + res[i-2]
  }
  return res[n]
};


// recursion
// time complexity: O(n**2) 严重超标
// space complexity: O(n)
var climbStairs = function(n) {
  if (n == 0) return 0
  else if (n == 1) return 1
  else if (n == 2) return 2
  return climbStairs(n-1) + climbStairs(n-2)
};