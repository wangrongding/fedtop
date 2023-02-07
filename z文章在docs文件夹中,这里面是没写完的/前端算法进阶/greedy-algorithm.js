// 贪心算法
function greedyAlgorithm(arr) {
  // 1.对数组进行排序
  arr.sort((a, b) => a[1] - b[1])
  // 2.定义一个新数组,将第一个元素放进去
  let newArr = [arr[0]]
  // 3.遍历数组,将符合条件的元素放进新数组
  for (let i = 1; i < arr.length; i++) {
    // 3.1 判断新数组中的最后一个元素的结束时间是否小于当前元素的开始时间
    if (newArr[newArr.length - 1][1] <= arr[i][0]) {
      newArr.push(arr[i])
    }
  }
  // 4.返回新数组
  return newArr
}

// 测试
let arr = [
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 8],
]
let newArr = greedyAlgorithm(arr)
console.log(newArr)
