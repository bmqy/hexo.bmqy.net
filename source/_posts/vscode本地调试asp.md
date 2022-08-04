---
layout: post
title: vscode本地调试asp
tags:
  - asp
  - vscode
  - 本地调试
categories:
  - 清学小记
abbrlink: 1711
date: 2018-08-02 00:00:00
---

<!-- wp:paragraph -->

vscode本地调试asp，需要的准备工作如下：

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

1、安装"IIS&nbsp;Express"扩展，成功会有提示帮你安装好"IIS&nbsp;Express"程序；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2、打开"IIS&nbsp;Express"程序的"applicationhost.config"文件，路径为：C:\Users\{{用户名}}\Documents\IISExpress\config；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

3、找到以下内容，设置默认首页

<!-- /wp:paragraph -->

<!-- wp:code -->

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

<!-- /wp:code -->

<!-- wp:paragraph -->

4、找到以下内容，开启目录浏览

<!-- /wp:paragraph -->

<!-- wp:code -->

    <directoryBrowse enabled="false" />

<!-- /wp:code -->

<!-- wp:paragraph -->

5、在"<system.webServer>"节点中，加入以下红色代码，启用父级路径

<!-- /wp:paragraph -->

<!-- wp:code -->

    <asp enableParentPaths="true" scriptErrorSentToBrowser="true">
    <cache diskTemplateCacheDirectory="" />
    <limits />
    </asp>

<!-- /wp:code -->

<!-- wp:paragraph -->

6、基本设置完成，按下"Ctrl+Shift+P"，输入"IIS Express: Start Website"，即可运行，并进行调试了；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

7、据说还可以支持PHP调试，请自行参考[IIS-Express-Code](https://github.com/warrenbuckley/IIS-Express-Code)尝试。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->