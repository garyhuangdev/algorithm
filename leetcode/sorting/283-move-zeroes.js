/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 快慢指针 - 一个指针将非0的数字往前移 另外一个指针的左边全是非0数
var moveZeroes = function(nums) {
  const swap = (arr, num1, num2) => {
    const temp = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = temp
  }
  let left = 0, right = 0
  const len = nums.length
  
  while (right < len) {
    if (!nums[right] == 0) {
      swap(nums, left, right)
      left++
    }
    right++
  }
}