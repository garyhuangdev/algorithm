const bubbleSort = (arr) => {
  const result = [...arr]

  // 一个控制是否有swap的flag，要是某个循环没有swap证明已经排好序了
  let swap = true
  for (let i = 0, len = result.length; i < len - 1; i++) {
    if (!swap) break
    swap = false

    // 已知最后一个元素最大，不再进行比较
    for (let j = 0, len = result.length; j < len - 1 - i; j++) {
      if (result[j] > result[j+1]) {
        const temp = result[j]
        result[j] = result[j+1]
        result[j+1] = temp
        swap = true
      }
    }
  }

  return result
}