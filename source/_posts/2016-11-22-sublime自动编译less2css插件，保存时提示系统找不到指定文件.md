---
date: '2016-11-22 00:00'
updateTime: '2024-05-23T08:33:00.000Z'
sort: ''
catalog: []
status: 已发布
insertTime: '2023-04-28T14:04:00.000Z'
recommend: ''
_updated: ''
excerpt: |-
  sublime自动编译less2css插件，保存时提示系统找不到指定文件
  重新安装sublime并装好所有需要的插件后，编译less文件，保存时竟然提示“系统找不到指定文件”，
summary: ''
_date: '2016-11-22 00:00:00'
tags:
  - less2css
  - sublime
  - 系统找不到指定文件
updated: '2016-11-22 00:00'
cover: ''
categories:
  - 清学小记
abbrlink: 1476
urlname: 2016-11-22-sublime自动编译less2css插件，保存时提示系统找不到指定文件
title: sublime自动编译less2css插件，保存时提示系统找不到指定文件
---

重新安装sublime并装好所有需要的插件后，编译less文件，保存时竟然提示“系统找不到指定文件”，


![1479788521967412.png](https://image.bmqy.net/upload/1bc0588a8ecde73974ecd1a5d6c9b94b.png)


QQ截图20161122114816.png


解决方如下：


1、下载 [less.js-windows](https://github.com/duncansmart/less.js-windows)，放到你本地磁盘中；


2、在系统变量path中添加“less.js-windows”的文件目录（可参考 [Sublime Text 3的Less2Css插件介绍与安装](http://www.daqianduan.com/6033.html)）；


3、如果以上步骤成功，问题解决。

