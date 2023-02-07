# docker

## docker desktop 安装

https://www.docker.com/

## 一个 简单的 docker 入门示例

### 克隆一个存储库

The Getting Started project is a simple GitHub repository which contains everything you need to build an image and run it as a container.

入门项目是一个简单的 GitHub 仓库，它包含了你构建镜像并作为容器运行所需的一切。

Clone the repository by running Git in a container.

通过在容器中运行 Git 来克隆存储库。

```sh
docker run --name repo alpine/git clone https://github.com/docker/getting-started.git

docker cp repo:/git/getting-started/ .
```

### 打包成镜像

A Docker image is a private file system just for your container. It provides all the files and code your container needs.

Docker 镜像是一个专属于你的容器的私有文件系统。它提供了你的容器需要的所有文件和代码。

```sh
cd getting-started

docker build -t docker101tutorial .
```

> Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them  
> 使用 "docker scan "对图像进行 Snyk 测试，以发现漏洞并学习如何修复它们。

![](https://assets.fedtop.com/picbed/20220706022513.png)

### 运行你的第一个容器

Start a container based on the image you built in the previous step. Running a container launches your application with private resources, securely isolated from the rest of your machine.

基于上一步中构建的映像启动容器。运行容器将使用私有资源启动应用程序，该私有资源与机器的其他部分安全隔离。

```sh
docker run -d -p 80:80 --name docker-tutorial docker101tutorial
```

![](https://assets.fedtop.com/picbed/20220706022445.png)

### 保存并分享你的镜像

Save and share your image on Docker Hub to enable other users to easily download and run the image on any destination machine.

在 Docker Hub 上保存和分享你的镜像，使其他用户能够轻松下载并在任何目标机器上运行该镜像。

```sh
docker tag docker101tutorial wangrongding/docker101tutorial

docker push wangrongding/docker101tutorial
```

![](https://assets.fedtop.com/picbed/20220706022810.png)

## docker 常用命令

### 管理镜像命令—image

```sh
docker image --help
# 查看镜像列表
docker image ls
# 查看镜像详情
docker image inspect <image_id>
# 查看镜像的标签
docker image tag <image_id> <repository>:<tag>
# 删除镜像
docker image rm <image_id>
# 删除镜像的标签
docker image rmi <image_id>
```

### 管理网络命令—network

```sh
docker network --help
# 查看网络列表
docker network ls
# 查看网络详情
docker network inspect <network_id>
# 创建网络
docker network create <network_name>
# 删除网络
docker network rm <network_id>
```

### 管理容器命令—container

```sh
docker container --help
# 查看容器列表
docker container ls
# 查看容器详情
docker container inspect <container_id>
```

### 管理插件命令—plugin

```sh
docker plugin --help
# 查看插件列表
docker plugin ls
```

### 管理 Docker 命令—system

```sh
docker system --help
# 查看Docker状态
docker system df
# 查看Docker版本
docker system version
# 显示整个系统的信息
docker system info
```

### 管理 docker 账户

```sh
# 登录docker仓库命令
docker login --help
# 登出账户
docker logout

```

### 使用 Dockerfile 构建一个镜像—build

```sh
docker build --help
```

### 搜索命令—search

```sh
docker search --help

```

### 下载镜像命令—pull

```sh
docker pull --help
docker pull <image_name>
```

### 上传命令—push

```sh
docker push --help
```

### 删除镜像命令—rmi

```sh
docker rmi --help
```

### 删除容器命令—rm

```sh
docker rm --help
```

### 运行容器命令—run

```sh
docker run --help
docker run -d -p 80:80 --name docker-tutorial docker101tutorial
```

### 启动容器—start

```sh
docker start <container_id>
```

### 重启容器命令—restart

```sh
docker restart <container_id>
```

### 停止运行容器命令—stop

```sh
docker stop <container_id>
```

### 标签命令—tag

```sh
docker tag <image_id> <repository>:<tag>
```

### 显示容器资源使用情况—stats

```sh
docker stats --help
```

### 容器重命名—rename

```sh
docker rename <container_id> <new_container_name>
```

### 其他命令

```sh
# 避免出现Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?错误
# 开机自启动
systemctl enable docker
```
