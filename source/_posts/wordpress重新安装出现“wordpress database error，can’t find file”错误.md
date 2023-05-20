---
date: "2015-04-05 00:00"
updateTime: "2023-05-08T00:08:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: wordpress重新安装出现“wordpress database error，can’t find file”错误
summary: ""
_date: "2015-04-05T00:00:00.000+08:00"
tags:
  - can
  - wordpress
updated: "2015-04-05 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1505
urlname: a6bc2cb2-132d-44e7-88bc-8a2d7b421d44
title: wordpress重新安装出现“wordpress database error，can’t find file”错误
---

![](https://image.bmqy.net/upload/Fvu3KY0ChoIO0NEEd6qgZLw75oKM.jpg)

wordpress database error.can

今天心血来潮，重新安装了 wordpress，结果安装时候各种报错，最头疼的就是这个“wordpress database error，can’t find file”。

网上各种搜罗，就是没说 wordpress 怎么搞定的，后来发现一篇关于 mysql 什么什么错误的文章，里边有一句说到重启 mysql 服务的。

然后一想，这个错误就是跟数据库有关，也就是和 mysql 有关系，而且它也有个服务项，于是关掉“mysql 服务”，为了保险还重启了电脑，再重新安装 wordpress，好了，整个世界终于清静了。
