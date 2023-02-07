// 快速排序
function quickSort(arr) {
  // 递归出口,终结条件
  if (arr.length <= 1) return arr
  // 取数组的中间值
  let midIndex = Math.floor(arr.length / 2)
  // 取中间值
  let midValue = arr.splice(midIndex, 1)[0]
  // 定义左右数组
  let left = []
  let right = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  // 递归
  return quickSort(left).concat(midValue, quickSort(right))
}

// 测试
let arr = [12, 12, 11, 12, 32, 13, 24, 15, 62, 17, 8, 11, 10]
let newArr = quickSort(arr)

console.log(newArr)
