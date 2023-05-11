---
date: "2018-07-19 00:00"
updateTime: "2023-05-08T00:18:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: ""
summary: ""
_date: "2018-07-19T00:00:00.000+08:00"
tags:
  - ajaxFileUpload
  - javascript
updated: "2018-07-19 00:00"
cover: ""
categories:
  - 燕衔春泥
abbrlink: 1707
urlname: 2018-07-19-ajaxFileUpload上传成功也执行error方法
title: ajaxFileUpload上传成功也执行error方法
---

在使用“ajaxFileUpload.js”作上传时，发现不论上传成功与否，都是执行 error 里的方法，百度到了好多解决方法。例如：

1、改写为：eval(“data = "” + data +“"”); 2、改写为：data = JQuery.parseJSON(JQuery(data).text());

最终经测试后： 使用：data = JQuery.parseJSON(data);

具体内容，可参考：https://github.com/bmqy/ajaxfileupload-bmqy
