---
layout: post
title: ajaxFileUpload上传成功也执行error方法
tags:
  - ajaxFileUpload
  - ajaxFileUpload.js
  - javascript
  - 燕衔春泥
abbrlink: 1707
date: 2018-07-19 00:00:00
---

在使用"ajaxFileUpload.js"作上传时，发现不论上传成功与否，都是执行error里的方法，百度到了好多解决方法。例如：

1、改写为：eval("data = \"" + data +"\"");
2、改写为：data = JQuery.parseJSON(JQuery(data).text());

<span style="color: #3366ff">最终经测试后：</span>
<span style="color: #3366ff">使用：</span><span style="color: #3366ff">data = JQuery.parseJSON(data);</span>

<span style="color: #3366ff">具体内容，可参考：</span><span style="color: #3366ff">https://github.com/bmqy/ajaxfileupload-bmqy</span>