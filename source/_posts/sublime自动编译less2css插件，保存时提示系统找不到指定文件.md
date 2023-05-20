---
date: "2016-11-22 00:00"
updateTime: "2023-05-08T00:04:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  sublime自动编译less2css插件，保存时提示系统找不到指定文件
  重新安装sublime并装好所有需要的插件后，编译less文件，保存时竟然提示“系统找不到指定文件”，
summary: ""
_date: "2016-11-22T00:00:00.000+08:00"
tags:
  - less2css
  - sublime
  - 系统找不到指定文件
updated: "2016-11-22 00:00"
cover: ""
categories:
  - 清学小记
  - 燕衔春泥
abbrlink: 1476
urlname: 0c7961cc-f9f1-4269-ad6f-998e641ba337
title: sublime自动编译less2css插件，保存时提示系统找不到指定文件
---

重新安装 sublime 并装好所有需要的插件后，编译 less 文件，保存时竟然提示“系统找不到指定文件”，

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

QQ 截图 20161122114816.png

解决方如下：

1、下载 [less.js-windows](https://github.com/duncansmart/less.js-windows)，放到你本地磁盘中；

2、在系统变量 path 中添加“less.js-windows”的文件目录（可参考 [Sublime Text 3 的 Less2Css 插件介绍与安装](http://www.daqianduan.com/6033.html)）；

3、如果以上步骤成功，问题解决。
