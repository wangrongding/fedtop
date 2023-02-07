// 二分查找
function binarySearch(arr, target) {
  // 定义左右指针
  let left = 0
  let right = arr.length - 1
  // 循环
  while (left <= right) {
    // 取中间值
    let mid = Math.floor((left + right) / 2)
    // 判断
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  // 没找到
  return -1
}

// 测试
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let index = binarySearch(arr, 7)
console.log(index)

// 二分查找的递归实现
function binarySearch2(arr, target, left, right) {
  // 定义左右指针
  left = left || 0
  right = right || arr.length - 1
  // 取中间值
  let mid = Math.floor((left + right) / 2)
  // 判断
  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    return binarySearch2(arr, target, left, mid - 1)
  } else {
    return binarySearch2(arr, target, mid + 1, right)
  }
}

// 测试
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let index2 = binarySearch2(arr2, 2)
console.log(index2)
