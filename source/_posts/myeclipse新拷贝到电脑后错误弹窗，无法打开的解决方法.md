---
layout: post
title: myeclipse新拷贝到电脑后错误弹窗，无法打开的解决方法
tags:
  - myeclipse
  - 无法打开
  - 洗漱必吐
abbrlink: 1530
date: 2014-10-25 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">拷贝myeclipse到新电脑后，第一次使用可以正常打开，</span>

<span style="color:#00f">但是关闭退出，再打开却弹出"An error has occurred. See the log file"报错窗口无法打开eclipse。</span>

<span style="color:#00f">![myeclipse无法打开](http://ww3.sinaimg.cn/large/4eed32f2jw1elnplcua6uj20dc05fdg1.jpg)</span>

<span style="color:#333">myeclipse无法打开</span>

&nbsp;

<span style="color:#00f">网上查到的其它方法都失败，于是想到了这个问题，就是读写权限问题，一试果然如此，so。。。</span>

<span style="color:#00f">解决方法就是给myeclipse文件夹设置everyone权限。</span>

[caption id="" align="alignnone" width="435"] <span style="color:#00f">![myeclipse无法打开的解决方法](http://ww2.sinaimg.cn/large/4eed32f2jw1elnpldbndkj20c30g6gmn.jpg) </span><span style="color:#333">myeclipse无法打开的解决方法</span>[/caption]

&nbsp;

<span style="color:#00f">设置权限后，再去试，ok，正常启动。。。</span>
<!-- rebuild by neat -->