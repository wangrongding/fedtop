---
title: mongoDB设置权限配置
date: 2018-11-01
tags:
  - 其他
categories:
  - 后端相关
---

## 方法介绍

1. 启动 MongoDB 服务（禁用访问权限控制）

```bash
mongod --port 27017 --dbpath d:/file/mongo
```

2. 连接至 MongoDB 实例

```bash
mongo --port 27017
```

3. 添加管理员账号

```bash
use admin
db.createUser({user: "username1", pwd: "123456", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})
```

4. 重启 MongoDB 实例，并启用访问权限控制

```bash
mongod --auth --port 27017 --dbpath d:/file/mongo
```

5. 连接至 MongoDB 实例

```bash
mongo --port 27017
```

6. 切换至 admin 库，并登陆

```bash
use admin
db.auth("username1","123456")
```

7. 添加普通用户账号

```bash
use dbName
db.createUser({user: "username2", pwd: "123456", roles: [{role: "readWrite", db: "dbName"}]})
```

8. 使用普通用户账号登陆

```bash
mongo --port 27017
use dbName
db.auth("username2","123456")
```

9. **_切记_** 登陆或创建 mongo 连接实例的时候需要用创建的普通账户及其所在数据库的名字

```bash
mongodb://username2:123456@host:port/dbName'
```
