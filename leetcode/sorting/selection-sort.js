// in-place stable sorting algorithm
const selectionSort = (arr) => {
  let minIndex, temp
  for (let i = 0, len = arr.length; i < len; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex == i) continue

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}