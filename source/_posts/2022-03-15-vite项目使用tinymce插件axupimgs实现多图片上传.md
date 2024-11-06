---
date: '2022-03-15 13:00:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: 在vite项目中使用tinymce富文本编辑器实现多图片上传，目前方案方案是使用axupimgs插件实现，在此记录下实现过程。
summary: ''
tags:
  - vite
  - tinymce
  - axupimgs
  - tinymce多图上传
abbrlink: 2642
updated: '2022-03-15 13:00:00'
cover: ''
categories:
  - 清学小记
urlname: 2022-03-15-vite项目使用tinymce插件axupimgs实现多图片上传
title: vite项目使用tinymce插件axupimgs实现多图片上传
---

## 简介


在`vite`项目中使用`tinymce`富文本编辑器实现多图片上传，目前方案方案是使用`axupimgs`插件实现，在此记录下实现过程。


## 参考文档


本文主要参考：[TinyMCE中文文档中文手册](http://tinymce.ax-z.cn/more-plugins/axupimgs.php)、[在vue3.0+中使用tinymce及实现多图上传，文件上传，公式编辑等功能](https://www.cnblogs.com/huihuihero/p/13877589.html)两篇文档思路实现。


## 实现方法

- 前往上方文档里下载多图上传插件[axupimgs](http://tinymce.ax-z.cn/more-plugins/axupimgs.zip)
- 将解压后的多图上传插件`axupimgs`复制到`public/tinymce`文件夹下
- 在`components/Editor.vue`里引入多图上传插件,并在`plugins`和`toolbar`里注册该插件

```text
import '/public/tinymce/axupimgs/plugin'  //多图上传
```

- 刷新或重启项目即可
