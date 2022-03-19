// 给定一个有序数组，将重复项移除，返回不重复的items数量n，并使得数组的前n项为不重复的数字
// 解释：输入为[1,2,2,2]，函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (!nums || nums.length <= 1) return nums.length

  let uniqueIndex = 0, currentIndex = 1
  while (currentIndex < nums.length) {

    if (nums[currentIndex] != nums[uniqueIndex]) {
      // 新的Unique number，左指针右移并赋值
      uniqueIndex++
      nums[uniqueIndex] = nums[currentIndex]
    }
    // 左指针总是向右移动
    currentIndex++
  }

  return uniqueIndex+1
}