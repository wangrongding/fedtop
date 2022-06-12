---
title: mongoDB设置权限登陆后，在keystonejs中创建新的数据库连接实例
date: 2018-11-01
tags:
  - 其他
categories:
  - 后端相关
---

## 问题

mongoDB 的默认登陆时无密码登陆的，为了安全起见，需要给 mongoDB 设置权限登录，但是 keystoneJS 默认是无密码登陆的，这是需要修改配置来解决问题

## 解决

在 keystone.js 中找到配置初始化方法，添加一个[mongo](http://keystonejs.com/zh/docs/configuration/#options-database)对象来设置 mongoDB 连接实例，

```javascript
keystone.init({
  name: 'wangrongding',
  brand: 'wangrongding',
  mongo: 'mongodb://user:password@host:port/dbName',
})
```

这里需要注意的是，mongoDB 在设置权限登录的时候，首先必须设置一个权限最大的主账户，它用来增删其他普通账户，记住，这个主账户时 **_无法_** 用来设置 mongo 对象的，你需要用这个主账户创建一个数据库（下面称“dbName”），然后在这个 dbName 上再创建一个可读写 dbName 的普通账户，这个普通账户的 user 和 password 和 dbName 用来配置 mongo 对象

个人博客：[**汪荣顶**](www.fedtop.com)
