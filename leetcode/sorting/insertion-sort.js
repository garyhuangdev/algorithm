const insertionSort = (arr) => {
  for (let i = 1, len = arr.length; i < len; i++) {
    let currentNumber = arr[i]
    let j = i - 1

    // 将比currentNumber小的从后到前往后移动 - 腾位置
    // 当到底了或者currentNumber小于当前值的时候
    while (j >= 0 && currentNumber < arr[j]) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = currentNumber
  }
}
