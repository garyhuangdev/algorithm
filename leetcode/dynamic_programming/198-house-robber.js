/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const n = nums.length

  if (n == 0) return 0
  if (n == 1) return nums[0]

  const gains = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < n; i++) {
      gains[i] = Math.max(gains[i-1], nums[i]+gains[i-2])
  }
  return gains[n-1]
}