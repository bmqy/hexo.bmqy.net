---
layout: post
title: webstorm10配置less编译环境
tags:
  - webstorm10
  - webstorm配置less
  - 编译less
categories:
  - 清学小记
abbrlink: 1487
date: 2015-12-24 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

webstorm10配置less编译环境

纯记录、非教程，

1、下载 [node.js](https://nodejs.org/en/)，并安装；

2、node.js命令行输入"npm install -g less"，安装less；

3、打开webstorm，File→Settings→Tools→File Watchers,点击右侧绿色"+"号：

[![file watchers中添加less](http://image.bmqy.net/uploads/2015/12/2015122415184697-108x300.png)](http://www.bmqy.net/uploads/2015/12/2015122415184697.png)

4、继续按下图中填写

[![file watchers中添加less](http://image.bmqy.net/uploads/2015/12/2015122415215272-300x260.png)](http://www.bmqy.net/uploads/2015/12/2015122415215272.png)

5、在webstorm中编写less，保存时自动编译css。
<!-- rebuild by neat -->