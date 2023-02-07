// 调试，逐渐让 CPU 高负载, 用于测试性能。
// 在工作进程中执行一个 CPU 密集型任务
function runCpuIntensiveTask() {
  let i = 0;
  while (i < 1000000000) {
    if (i % 1000 === 0) {
      console.log('runCpuIntensiveTask', i);
    }
    i++;
  }
}

// 每隔 1 秒执行一次 CPU 密集型任务
setInterval(runCpuIntensiveTask, 1000);
