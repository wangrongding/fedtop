// console.log('🌸Hello World')
// setTimeout(console.log, 0, '🌸🌸Hello World')
// console.log('🌸🌸🌸Hello World')
// setTimeout(setTimeout, 0, "console.log('🌸🌸🌸🌸Hello World')", 1000)

// ========================================

function test() {
  let start = Date.now()
  let times = []
  setTimeout(function run() {
    times.push(Date.now() - start) // 保存前一个调用的延时

    if (start + 100 < Date.now()) {
      // 100 毫秒之后，显示延时信息
      console.log(times)
    } else {
      // 否则重新调度
      setTimeout(run)
    }
  })
}
test()













// Chrome 中的输出示例：
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100

// Node 中的输出示例：
// 2,3,3,4,6,7,8,9,9,10,12,13,14,15,16,18,19,20,21,22,23,24,26,27,
