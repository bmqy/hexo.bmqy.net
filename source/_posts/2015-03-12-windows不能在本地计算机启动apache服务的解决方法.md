---
date: "2015-03-12 00:00"
updateTime: "2023-05-08T00:09:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: >-
  用PhpStudy时，把网站目录指定了U盘上的文件夹，然后重启Apache服务，弹出“windows不能在本地计算机启动Apache服务”，然后就以为是端口被占用了，或者文件夹没有给everyone权限，结果都尝试了之后，发现还不行。
summary: ""
_date: "2015-03-12T00:00:00.000+08:00"
tags:
  - 80端口
  - Apache
  - 不能在本地计算机启动Apache
updated: "2015-03-12 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1508
urlname: 2015-03-12-windows不能在本地计算机启动apache服务的解决方法
title: windows不能在本地计算机启动apache服务的解决方法
---

用 PhpStudy 时，把网站目录指定了 U 盘上的文件夹，然后重启 Apache 服务，弹出“windows 不能在本地计算机启动 Apache 服务”，然后就以为是端口被占用了，或者文件夹没有给 everyone 权限，结果都尝试了之后，发现还不行。

网上搜索也大多都说是由于以下几个原因：

1、Apache 所用 80 端口被占用；

2、Apache 安装目录不能有中文；

3、修改“httpd.conf”文件中的网站目录保持一致；

但是，以上这几项我都没有错误，最后被我发现，原来是因为，我的 U 盘中的网站目录有中文导致的。

现总结如下，当启用 Apache 服务时出现“windows 不能在本地计算机启动 Apache 服务”的错误，请检查以下 4 项：

1、Apache 所用 80 端口被占用；

2、Apache 安装目录不能有中文；

3、“httpd.conf”文件中的网站目录保持一致；

4、指定的网站目录不能出现中文；

**原创文章转载请注明出处，thankyou！**
