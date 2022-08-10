---
layout: post
title: vscode软件窗口标题栏显示文件完整路径
tags:
  - vscode
  - 标题栏完整路径
categories:
  - 燕衔春泥
abbrlink: 1451
date: 2018-05-23 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

vscode编辑器窗口标题默认就显示个文件名字，按以下设置即可显示文件完整路径：

1.  菜单栏："文件"→"首选项"→"设置"，进入用户配置界面；
2.  在软件默认的配置界面搜索关键字 "window.title"，将这一行配置复制到右边的用户配置界面中，并将 "activeEditorShort" 修改为 "activeEditorLong"；
3.  保存后，再编辑文件时，软件窗口的标题栏上就可以看到当前文件的完整路径了。> 摘自： [http://iot-fans.xyz/2017/10/23/vscode/long-title/](http://iot-fans.xyz/2017/10/23/vscode/long-title/)<!-- rebuild by neat -->