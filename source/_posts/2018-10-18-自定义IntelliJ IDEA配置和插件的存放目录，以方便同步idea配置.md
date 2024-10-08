---
date: '2018-10-18 16:00'
updateTime: '2024-06-05T06:47:00.000Z'
sort: ''
catalog: []
status: 已发布
insertTime: '2023-04-28T14:04:00.000Z'
recommend: ''
_updated: '2018-10-19 00:00:00'
excerpt: |-
  自定义Intellij idea配置和插件存放目录：
  1、进入到idea的安装目录；
  2、找到“idea.properties”文件；
summary: ''
_date: '2018-10-19 00:00:00'
ID:
  prefix: null
  number: 565
tags:
  - idea
  - idea配置文件目录
  - 同步idea配置
abbrlink:
  type: number
  number: 1773
updated: '2024-06-05 06:47'
cover: ''
categories:
  - 清学小记
_abbrlink: 1773
urlname: 2018-10-18-自定义IntelliJ IDEA配置和插件的存放目录，以方便同步idea配置
title: 自定义IntelliJ IDEA配置和插件的存放目录，以方便同步idea配置
---

自定义`Intellij idea`配置和插件存放目录：


1、进入到`idea`的安装目录；


2、找到`idea.properties`文件；


3、修改：`idea.config.path=${user.home}/.IntelliJIdea/config`后的路径，为你想要使用的存放目录； 


4、修改：`idea.plugins.path=${idea.config.path}/plugins`后的路径，为你想要使用的存放目录；


5、注意取消上面两条的`#`注释符；


6、保存后，再次运行`idea`，所有配置和插件都将保存在指定的目录；


7、最后，就可以愉快的同步备份啦。

