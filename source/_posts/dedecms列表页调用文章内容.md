---
date: "2014-12-11 00:00"
updateTime: "2023-05-08T00:12:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  dedecms在列表页调用文章内容的方法如下：
  1、依次打开“核心”→“频道模型”→“内容模型管理”；
  2、打开你需要调用文章内容的模型分类，例如“分类信息”；
summary: ""
_date: "2014-12-11T00:00:00.000+08:00"
tags:
  - dedecms
  - 列表附加字段
  - 列表页调用文章内容
  - 模型字段配置
updated: "2014-12-11 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1527
urlname: ded97995-d167-486a-a559-52c0f6f36a1e
title: dedecms列表页调用文章内容
---

dedecms 在列表页调用文章内容的方法如下：

1、依次打开“核心”→“频道模型”→“内容模型管理”；

2、打开你需要调用文章内容的模型分类，例如“分类信息”；

3、点开后默认显示的是“基本设置”页面，里面有一行显示的是“列表附加字段”请注意；

4、接下来点开“字段管理”页面，其中有一条“信息内容”的字段配置信息，复制其数据字段名；

[caption id="" align=“alignnone” width=“1195”]

![](https://image.bmqy.net/upload/Fu9qHG2aPZ5C05vL1Rx1aFJD11wT.jpg)

dedecms 字段管理字段配置[/caption]

4、复制字段名后再返回“基本设置”页面，在“列表附加字段”的输入框里添加上那个字段名，之后就可以像调用标题一样调用文章内容了；

[caption id="" align=“alignnone” width=“1196”]

![](https://image.bmqy.net/upload/FgaBo2CbpbbFa0tzmyly5bn-VhMS.jpg)

dedecms 内容模型管理列表附加字段[/caption]
5、需要控制显示字数的话，可以使用此代码：

```text
[field:body function="cn_substr(html2text(@me),30)"/]
```
