---
date: "2016-12-01 00:00"
updateTime: "2023-05-08T00:03:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  idea配置less自动编译：
  1、电脑安装node.js环境；
  2、打开“idea”→“settings”→“plugins”安装：“nodejs”插件，并按以下步骤进行配置：
summary: ""
_date: "2016-12-01T00:00:00.000+08:00"
tags:
  - idea
  - LESS
  - 自动编译less
updated: "2016-12-01 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1473
urlname: 748ec5cf-8bc3-4d4b-9e9a-fd46ecd4d190
title: idea配置less自动编译
---

idea 配置 less 自动编译：

1、电脑安装 node.js 环境；

2、打开“idea”→“settings”→“plugins”安装：“nodejs”插件，并按以下步骤进行配置：

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

QQ 截图 20161201180843.png

1）打开“idea”→“settings”→“Languages & Frameworks”→“Node.js and NPM”；

2）在打开的面板中点击右侧“+”加号按钮添加需要的“less”组件（如果此处不能添加，请使用 npm 命令进行全局安装）。

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

QQ 截图 20161201181901.png

3、打开“idea”→“settings”→“plugins”安装：“file watchers”插件，并按以下步骤进行设置：

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

QQ 截图 20161201180935.png

1）打开“idea”→“settings”→“tools”→“file watchers”；

2）在打开的面板中点击右侧加号按钮添加 less 配置，貌似插件自动就配置好了，如无配置，请参考《 [webstorm10 配置 less 编译环境](http://www.bmqy.net/362.html) 》。

3、安装 [LESS CSS Compiler](http://www.bmqy.net/430.html) 插件，安装完成后无需进行任何配置；

4、以上步骤成功后，编辑 less 文件即可自动编译成 css 文件。
