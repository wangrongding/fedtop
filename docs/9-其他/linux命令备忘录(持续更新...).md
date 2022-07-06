---
title: linux命令备忘录(持续更新...)
tags:
  - 其他
categories:
  - 后端相关
date: 2021-07-23
---

## linux 命令

### Linux 查看端口占用情况

```sh
# lsof -i:端口号
lsof -i:8000
```

```sh
lsof -i:8080：查看8080端口占用
lsof abc.txt：显示开启文件abc.txt的进程
lsof -c abc：显示abc进程现在打开的文件
lsof -c -p 1234：列出进程号为1234的进程所打开的文件
lsof -g gid：显示归属gid的进程情况
lsof +d /usr/local/：显示目录下被进程开启的文件
lsof +D /usr/local/：同上，但是会搜索目录下的目录，时间较长
lsof -d 4：显示使用fd为4的进程
lsof -i -U：显示所有打开的端口和UNIX domain文件
```

netstat -tunlp 用于显示 tcp，udp 的端口和进程等相关情况。

```sh
# netstat -tunlp | grep 端口号
netstat -tunlp | grep 8000
```

kill 在查到端口占用的进程后，如果你要杀掉对应的进程可以使用 kill 命令：

```sh
kill -9 PID
# 如上实例，我们看到 8000 端口对应的 PID 为 26993，使用以下命令杀死进程：
kill -9 26993
```

<details open>
    <summary>点击查看详情:</summary>

- `find / -name tnsnames.ora`

  > 查到： /opt/app/oracle/product/10.2/network/admin/tnsnames.ora /opt/app/oracle/product/10.2/network/admin/samples/tnsnames.ora

- `locate tnsnames.ora`

  > 结果是： /opt/app/oracle/product/10.2/hs/admin/tnsnames.ora.sample /opt/app/oracle/product/10.2/network/admin/tnsnames.ora /opt/app/oracle/product/10.2/network/admin/samples/tnsnames.ora

</details>

##### 不定期更新中...
