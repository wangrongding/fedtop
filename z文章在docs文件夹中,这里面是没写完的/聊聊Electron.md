# electron

https://mp.weixin.qq.com/s/-SkNURk7OTqc7O7g1hhwRg

当然，Electron 也并不是全无缺陷的，一些常受诟病的缺点有：

- 打包体积过大，由于捆绑了 Chromium 内核等大量依赖，导致 Electron 的打包体积普遍在 100M+，这一点我们可以使用 asar 压缩、动态链接库等方式进行优化。
- 内存占用高，同样的由于捆绑了 Chromium 内核，Electron 的内存占用普遍也较高。
- UI 层视觉渲染效率低，这一点也可以通过优化手段，如多进程处理任务、甚至利用视觉假象来提升用户体验。
