---
date: "2015-07-18 00:00"
updateTime: "2023-05-05T00:37:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: ""
summary: ""
_date: "2015-07-18T00:00:00.000+08:00"
tags:
  - ping检测工具
  - wordpress主题缩略图
  - wordpress添加主题
updated: "2015-07-18 00:00"
cover: ""
categories:
  - 燕衔春泥
abbrlink: 1495
urlname: 2015-07-18-解决wordpress添加主题时列表中缩略图不显示的问题
title: 解决wordpress添加主题时列表中缩略图不显示的问题
---

近一段时间都是这样，添加主题的时候，主题缩略图不显示，下面是百度到的方法，整理下：

1、右键审查元素，找到缩略图的地址；

2、复制缩略图地址的域名，如：ts.w.org；

3、使用站长工具里的超级 ping，点这里进入 [ping 检测工具](http://ping.chinaz.com/)，

4、粘贴上边复制的域名，只勾选海外检测点，然后查询到的 ping 值低的一个 IP 复制；

5、打开电脑中的 hosts 文件，在最后添加一行，例如：0.0.0.0 ts.w.org，域名前边的数字为上一步复制的 IP 地址，注意与域名间有空格；

摘自： [百度贴吧](http://tieba.baidu.com/p/3490359699)
