---
title: tomcat服务器上utf8编码的文件乱码解决方法
tags:
  - tomcat乱码
  - utf8乱码
  - utf8-bom
categories:
  - 清学小记
abbrlink: 2639
---

对于tomcat服务器上的utf8文件乱码的问题，找到以下解决方法，特此记之：

## 问题表现

- jsp文件不乱码；
- 只有html等静态资源文件乱码；
- html文件charset设置正确；
- 需要转为utf-8-bom编码才可以正常访问；

## 解决方法
具体设置如下，其他非```tomcat```应用服务器也应该是一样的原理：

### Linux

可以通过设置```export LANG=zh_CN.UTF-8```设置环境变量

### Windows：

- 如果通过```startup.bat```启动，则需要在```catalina.bat```中设置```set JAVA_OPTS=-Xms256m -Xmx2048m -Dfile.encoding=utf-8```

- 如果是通过```windows```服务启动```tomcat```，则需要执行```tomcatw.exe```进行配置，增加```-Dfile.encoding=utf-8```
![tomcatw.exe设置](https://bmqy-image-1254016607.cos.ap-beijing.myqcloud.com/upload%2F20160701175412123.jpg)


## 引用

> 出现这个问题，应该跟```SiteMesh```过滤器有关系，也和操作系统初始值有关系，在过滤器中没有取到字符集后选择了```ISO8859-1```导致的。所以在操作系统中制定字符集就可以解决。

本文内容整理自：https://blog.csdn.net/winderain/article/details/51803440，感谢网友分享。