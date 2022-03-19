// 方便理解和写的方法
const quickSort = (arr) => {

  // 边界条件
  if (arr.length <= 1) {
    return arr
  }

  // 选中间点作为pivot
  let pivotIndex = Math.floor(arr.length / 2)

  // 获取pivot的值 并将它切割出来
  let pivot = arr.splice(pivotIndex, 1)[0]

  // 左半边和右半边
  let left = []
  let right = []

  // 和pivot对比，大的放右边小的放左边
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 对左右进行递归
  return [...quickSort(left), pivot, ...quickSort(right)]
}
