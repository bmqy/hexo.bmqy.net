---
date: '2015-07-17 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: ''
summary: ''
tags:
  - ping检测工具
  - wordpress主题缩略图
  - wordpress添加主题
abbrlink: 1495
updated: '2015-07-17 16:00'
cover: ''
categories:
  - 燕衔春泥
urlname: 2015-07-17-解决wordpress添加主题时列表中缩略图不显示的问题
title: 解决wordpress添加主题时列表中缩略图不显示的问题
---

近一段时间都是这样，添加主题的时候，主题缩略图不显示，下面是百度到的方法，整理下：


1、右键审查元素，找到缩略图的地址；


2、复制缩略图地址的域名，如：ts.w.org；


3、使用站长工具里的超级ping，点这里进入 [ping检测工具](http://ping.chinaz.com/)，


4、粘贴上边复制的域名，只勾选海外检测点，然后查询到的ping值低的一个IP复制；


5、打开电脑中的hosts文件，在最后添加一行，例如：0.0.0.0 ts.w.org，域名前边的数字为上一步复制的IP地址，注意与域名间有空格；


摘自： [百度贴吧](http://tieba.baidu.com/p/3490359699)

