---
layout: post
title: Active Server Pages 错误 &#39;ASP 0107&#39;解决办法
tags:
  - ASP 0107
  - 数据大小允许限制
  - 数据太大
  - 清学小记
abbrlink: 11910
date: 2015-01-01 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->> Active Server Pages 错误 'ASP 0107'
> 
> 数据太大
> 
> /index.asp
> 
> 请求中发送的数据大小超过了允许的限制。
> 
> Microsoft VBScript 运行时错误 错误 '800a0e7f'
> 
> 未知的运行时错误
> 
> /inc/AspCms_MainClass.asp，行 180

<span style="color:#00f">这个错误着实让我郁闷了好几天，现总结解决方法如下：</span>

<span style="color:#00f">1、保证站点所有文件在本地电脑存储，以方便排查问题所在；</span>

<span style="color:#00f">2、如果遇到数据库存在".ldb"文件导致锁死，并且无法下载数据库与访问网站的情况，可在服务器控制面板选择"重启服务器"，之后便可删除ldb文件和下载服务器上文件到本地，不要轻易刷新网站以免问题重现还要重启服务器。</span>

<span style="color:#00f">3、如果本地测试时出现这种情况，可启动任务管理器结束掉"w3wp.exe"进程，之后便可删除ldb文件和备份数据库操作。</span>

<span style="color:#00f">4、出现这种问题除了程序本身问题之外，还有一个原因也是最让我感到意外的情况，就是数据库中的数据错误导致这种情况，所以遇到这种问题可先还原出现问题之前的操作，以保证数据库中数据正常。不然只能像我一样找个会出现这样问题的结构简单的页面进行逐步排查</span>

<span style="color:#00f">5、如果没有其它问题，应该经过以上步骤就可以解决了。啊哦。。。</span>

**<span style="color:#00f">注：原创文章，转载请注明出处，thankyou！</span>**
<!-- rebuild by neat -->