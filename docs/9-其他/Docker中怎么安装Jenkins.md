---
title: Docker中怎么安装Jenkins
date: 2020-02-05
tags:
  - 其他
categories:
  - 其他
---

1.  执行命令(没装 Docker 的自行百度噢~):

    ```
    docker pull jenkins/jenkins:lts
    ```

    ![](https://img-blog.csdnimg.cn/20210321180025349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70)

2.  如上图所示,下载完成后再执行命令:

    ```
    docker run -u root -d --name myjenkins -p 8080:8080 -p 50000:50000 -v /var/jenkins\_node:/var/jenkins\_home jenkins/jenkins:lts
    ```

    ![](https://img-blog.csdnimg.cn/2021032118022590.png)    如图所示,就已经好啦~就是这么简单

3.  找到  /var/jenkins_node/secrets    路径中的  initialAdminPassword 复制里面的密码出来

![](https://img-blog.csdnimg.cn/20210321180825438.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70)填写到里面就好啦,安装推荐模块后创建用户,就 ok 了

![](https://img-blog.csdnimg.cn/20210321180956426.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjAzODI0NQ==,size_16,color_FFFFFF,t_70)

**####最后要注意的是:服务器对应的端口要记得打开噢**
