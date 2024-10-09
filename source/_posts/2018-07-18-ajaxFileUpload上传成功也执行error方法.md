---
date: '2018-07-18 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: ''
summary: ''
tags:
  - ajaxFileUpload
  - javascript
abbrlink: 1707
updated: '2018-07-18 16:00'
cover: ''
categories:
  - 燕衔春泥
urlname: 2018-07-18-ajaxFileUpload上传成功也执行error方法
title: ajaxFileUpload上传成功也执行error方法
---

在使用“`ajaxFileUpload.js`”作上传时，发现不论上传成功与否，都是执行`error`里的方法，百度到了好多解决方法。例如：


1、改写为：`eval(“data = "” + data +“"”)`; 


2、改写为：`data = JQuery.parseJSON(JQuery(data).text())`;


最终经测试后： 使用：`data = JQuery.parseJSON(data)`;


具体内容，可参考：https://github.com/bmqy/ajaxfileupload-bmqy

