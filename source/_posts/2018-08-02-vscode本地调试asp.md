---
date: "2018-08-02 00:00"
updateTime: "2023-11-17T09:27:00.000Z"
sort: ""
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
recommend: ""
_updated: ""
excerpt: "vscode本地调试asp，需要的准备工作如下：\n1、安装“IIS\_Express”扩展，成功会有提示帮你安装好“IIS\_Express”程序；\n2、打开“IIS\_Express”程序的“applicationhost.config”文件，路径为：C:{{用户名}}；\n3、找到以下内容，设置默认首页"
summary: ""
_date: "2018-08-02T00:00:00.000+08:00"
tags:
  - ASP
  - vscode
  - 本地调试
updated: "2018-08-02 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1711
urlname: 2018-08-02-vscode本地调试asp
title: vscode本地调试asp
---

vscode 本地调试 asp，需要的准备工作如下：

1、安装“IIS Express”扩展，成功会有提示帮你安装好“IIS Express”程序；

2、打开“IIS Express”程序的“applicationhost.config”文件，路径为：C:{{用户名}}；

3、找到以下内容，设置默认首页

```text
<defaultDocument enabled="true">
<files>
<add value="index.asp" />
<add value="Default.htm" />
<add value="index.htm" />
<add value="index.html" />
<add value="iisstart.htm" />
<add value="default.aspx" />
</files>
</defaultDocument>
```

4、找到以下内容，开启目录浏览

```text
<directoryBrowse enabled="false" />
```

5、在“<system.webServer>”节点中，加入以下红色代码，启用父级路径

```text
<asp enableParentPaths="true" scriptErrorSentToBrowser="true">
<cache diskTemplateCacheDirectory="" />
<limits />
</asp>
```

6、基本设置完成，按下“Ctrl+Shift+P”，输入“IIS Express: Start Website”，即可运行，并进行调试了；

7、据说还可以支持 PHP 调试，请自行参考[IIS-Express-Code](https://github.com/warrenbuckley/IIS-Express-Code)尝试。
