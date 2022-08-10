---
layout: post
title: “idea已连接上ftp但看不到文件”的解决办法
tags:
  - ftp不显示文件
  - idea
  - idea ftp
categories:
  - 清学小记
abbrlink: 1453
date: 2017-12-13 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

1.  菜单"Tools"→"Deployment"→"Configuration"，打开"ftp配置信息"界面；
!["Tools"菜单](http://image.bmqy.net/uploads/2017/12/20171213133523.png)
2.  确认ftp用户名、密码等信息无误后；
!["ftp配置信息"界面](http://image.bmqy.net/uploads/2017/12/20171213133413.png)
3.  点击ftp配置界面的"Advanced options"按钮，打开"Advanced Options"面板；
!["Advanced Options"面板](http://image.bmqy.net/uploads/2017/12/20171213133442.png)
4.  勾选"Passive mode(被动模式)"，确定后即可看到ftp服务器的中文件了。<!-- rebuild by neat -->