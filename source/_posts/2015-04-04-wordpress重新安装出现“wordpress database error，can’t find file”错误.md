---
date: '2015-04-04 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: wordpress重新安装出现“wordpress database error，can’t find file”错误
summary: ''
tags:
  - can
  - wordpress
abbrlink: 1505
updated: '2015-04-04 16:00'
cover: ''
categories:
  - 清学小记
urlname: 2015-04-04-wordpress重新安装出现“wordpress database error，can’t find file”错误
title: wordpress重新安装出现“wordpress database error，can’t find file”错误
---

![4eed32f2jw1equpzcieakj20l60jmair.jpg](http://ww4.sinaimg.cn/large/4eed32f2jw1equpzcieakj20l60jmair.jpg)


wordpress database error.can


今天心血来潮，重新安装了wordpress，结果安装时候各种报错，最头疼的就是这个“wordpress database error，can’t find file”。


网上各种搜罗，就是没说wordpress怎么搞定的，后来发现一篇关于mysql什么什么错误的文章，里边有一句说到重启mysql服务的。


然后一想，这个错误就是跟数据库有关，也就是和mysql有关系，而且它也有个服务项，于是关掉“mysql服务”，为了保险还重启了电脑，再重新安装wordpress，好了，整个世界终于清静了。

