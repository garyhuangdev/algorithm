/**
 * @param {number[]} nums
 * @return {number}
 */

// 字符串切割，通过map获取长度并用max获取最大值
 var findMaxConsecutiveOnes = function(nums) {

  // 用map和Math.max
  // return Math.max(...nums.join('').split('0').map(item => item.length))

  // 用reduce
  return nums.join('').split('0').reduce((prevValue, currentValue)=> {
    const curLength = currentValue.length
    return prevValue > curLength ? prevValue : curLength
  }, 0)
}

// 当有连续2个1时，(1 + 1)*1 = 2，遇到 (0+2)*0 = 0 就会清0
 var findMaxConsecutiveOnes = function(nums) {
  let index = 0, result = 0, sum = 0

  while (index < nums.length) {
      sum = (sum+nums[index]) * nums[index]
      index++
      if (sum > result) result = sum
  }
  return result
};