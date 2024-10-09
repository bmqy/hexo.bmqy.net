---
date: '2014-10-24 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: |-
  拷贝myeclipse到新电脑后，第一次使用可以正常打开，
  但是关闭退出，再打开却弹出“An error has occurred. See the log file”报错窗口无法打开eclipse。
summary: ''
tags:
  - myeclipse
  - 无法打开
abbrlink: 1530
updated: '2014-10-24 16:00'
cover: ''
categories:
  - 洗漱必吐
urlname: 2014-10-24-myeclipse新拷贝到电脑后错误弹窗，无法打开的解决方法
title: myeclipse新拷贝到电脑后错误弹窗，无法打开的解决方法
---

拷贝myeclipse到新电脑后，第一次使用可以正常打开，


但是关闭退出，再打开却弹出“An error has occurred. See the log file”报错窗口无法打开eclipse。


![4eed32f2jw1elnplcua6uj20dc05fdg1.jpg](http://ww3.sinaimg.cn/large/4eed32f2jw1elnplcua6uj20dc05fdg1.jpg)


myeclipse无法打开


网上查到的其它方法都失败，于是想到了这个问题，就是读写权限问题，一试果然如此，so。。。


解决方法就是给myeclipse文件夹设置everyone权限。


[caption id="" align=“alignnone” width=“435”]


![4eed32f2jw1elnpldbndkj20c30g6gmn.jpg](http://ww2.sinaimg.cn/large/4eed32f2jw1elnpldbndkj20c30g6gmn.jpg)


myeclipse无法打开的解决方法[/caption]


设置权限后，再去试，ok，正常启动。。。

