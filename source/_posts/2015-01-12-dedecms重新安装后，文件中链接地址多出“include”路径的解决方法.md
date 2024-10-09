---
date: '2015-01-12 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: ''
summary: ''
tags:
  - dedecms
  - dedecms重新安装
  - url多出include
abbrlink: 1516
updated: '2024-06-04 01:15'
cover: ''
categories:
  - 清学小记
urlname: 2015-01-12-dedecms重新安装后，文件中链接地址多出“include”路径的解决方法
title: dedecms重新安装后，文件中链接地址多出“include”路径的解决方法
---

`dedecms`重新安装后，再打开页面，部分页面显示不正常，某些文件的链接地址中多出了`include/`，导致页面无法正常被引用并显示。


解决方法为：在后台系统基本参数-核心设置里把`DedeCMS`安装目录设置为空，或者改为`/`。一般问题就解决了。


如果还没解决，打开`data`目录找到`config.cache.inc.php`文件，检查`$cfg_cmspath`的值是否为空，如果不是则设置为：`$cfg_cmspath = ’’;`

