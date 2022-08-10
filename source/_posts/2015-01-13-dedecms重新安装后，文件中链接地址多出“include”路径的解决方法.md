---
layout: post
title: dedecms重新安装后，文件中链接地址多出“include”路径的解决方法
tags:
  - dedecms
  - dedecms重新安装
  - url多出include/
categories:
  - 清学小记
abbrlink: 1516
date: 2015-01-13 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">dedecms重新安装后，再打开页面，部分页面显示不正常，某些文件的链接地址中多出了"include/"，导致页面无法正常被引用并显示。</span>

<span style="color:#00f">解决方法为：在后台系统基本参数-核心设置里把DedeCMS安装目录设置为空，或者改为"/"。一般问题就解决了。</span>

<span style="color:#00f">如果还没解决，打开data目录找到"config.cache.inc.php"文件，检查"$cfg_cmspath"的值是否为空，如果不是则设置为：$cfg_cmspath = '';</span>
<!-- rebuild by neat -->