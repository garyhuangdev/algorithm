/**
 * @param {number} n
 * @return {number}
 */

// 最简单但是容易超空间的
var fib = function(n) {
  if (n <= 1) return n
  return fib(n-1) + (n-2)
}

// dynamic programming
 var fib = function (n) {
  if (n <= 1) return n

  let dp = [0, 1]

  // 因此只需要存储两个值，所以只需要2的位置即可
  for (let i = 2; i <= n; i++) {
    let temp = dp[0]
    dp[0] = dp[1]
    dp[1] = (dp[1] + temp)
  }
  return dp[1]
}
