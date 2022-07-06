# docker

```sh
PS C:\Users\wangr> docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
Unable to find image 'alpine/git:latest' locally
latest: Pulling from alpine/git
2408cc74d12b: Pull complete
1ff41652313e: Pull complete
e99112876459: Pull complete
Digest: sha256:23dcd3edfd1d9c7cbb14f7823d07a4934716cfa4d4dbc402d37ee011c440a685
Status: Downloaded newer image for alpine/git:latest
Cloning into 'getting-started'...
PS C:\Users\wangr> docker cp repo:/git/getting-started/ .docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
unknown flag: --name
See 'docker cp --help'.
PS C:\Users\wangr> docker cp repo:/git/getting-started/ .
```

## build the image

```sh
PS C:\Users\wangr> cd getting-started
PS C:\Users\wangr\getting-started> docker build -t docker101tutorial .
```

![](https://assets.fedtop.com/picbed/20220706022513.png)

## Run your first container

基于上一步中构建的映像启动容器。运行容器将使用私有资源启动应用程序，该私有资源与机器的其他部分安全隔离。

```sh
docker run -d -p 80:80 --name docker-tutorial docker101tutorial
```

![](https://assets.fedtop.com/picbed/20220706022445.png)

## 保存并分享您的图像

```sh
PS> docker tag docker101tutorial wangrongding/docker101tutorial
PS> docker push wangrongding/docker101tutorial
```

![](https://assets.fedtop.com/picbed/20220706022810.png)

## 常用命令

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
