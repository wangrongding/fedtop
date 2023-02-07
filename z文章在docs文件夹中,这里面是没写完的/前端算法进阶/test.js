// 快速排序
function quickSort(arr) {
  // 终结条件
  if (arr.length <= 1) return arr

  // 定义左右数组和中间值
  let left = []
  let right = []
  let mid = arr.splice(Math.floor(arr.length / 2, 1))[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 递归调用
  return quickSort(left).concat(mid, quickSort(right))
}

console.log(quickSort([2, 6, 8, 3, 4, 1, 7, 5]))

// // 二分查找
// function binarySearch(arr, target) {
//   // 定义左右指针
//   let left = 0
//   let right = arr.length - 1

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)

//     if (arr[mid] === target) {
//       return mid
//     } else if (arr[mid] < target) {
//       right = mid - 1
//     } else {
//       left = mid + 1
//     }
//   }
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
