---
date: "2015-07-23 00:00"
updateTime: "2023-05-08T00:07:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  IE8。。。
  悲剧的，不支持css3的background-size属性，
  通过网络，找到两种方法：
summary: ""
_date: "2015-07-23T00:00:00.000+08:00"
tags:
  - background
  - IE8背景全屏
  - sizingMethod
updated: "2015-07-23 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1494
urlname: 93942c21-d88a-413b-b602-bb256a312ae9
title: ie8使背景图片全屏显示的方法及问题
---

IE8。。。

悲剧的，不支持 css3 的 background-size 属性，

通过网络，找到两种方法：

1、使用 css 滤镜

| `1` | ` filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=``'bg.jpg'``, sizingMethod=``'scale'``); ` |
| --- | ----------------------------------------------------------------------------------------------------------- |

这个滤镜用的很纠结，当时用了一个 div 的嵌套，然后背景设置在顶层 div 上，结果用了这个滤镜后，将里层的 a 链接标签统统都挡住了，不能点击，连文字都不能选取，设置了 z-index 没用， 或许有其它解决方法，望各位高手告知，有时间也会继续尝试其它方法。

2、使用 img 标签添加背景

这个方法虽然觉得不美观，但是用起来没有什么大麻烦，推荐使用：

| `1` | `<img class="bg" src="bg.png"/>;` |
| --- | --------------------------------- |

| `1  
2  
3  
4  
5  
6  
7  
8` | `.bg{  
position: "absolute";  
top:0;  
left:0;  
z-index:-1;  
width: 100%;  
height:150px;  
}` |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
