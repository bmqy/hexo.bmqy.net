---
layout: post
title: windows不能在本地计算机启动apache服务的解决方法
tags:
  - 80端口
  - Apache
  - 不能在本地计算机启动Apache
  - 清学小记
abbrlink: 45545
date: 2015-03-12 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">用PhpStudy时，把网站目录指定了U盘上的文件夹，然后重启Apache服务，弹出"windows不能在本地计算机启动Apache服务"，然后就以为是端口被占用了，或者文件夹没有给everyone权限，结果都尝试了之后，发现还不行。</span>

<span style="color:#00f">网上搜索也大多都说是由于以下几个原因：</span>

<span style="color:#00f">1、Apache所用80端口被占用；</span>

<span style="color:#00f">2、Apache安装目录不能有中文；</span>

<span style="color:#00f">3、修改"httpd.conf"文件中的网站目录保持一致；</span>

<span style="color:#00f">但是，以上这几项我都没有错误，最后被我发现，原来是因为，我的U盘中的网站目录有中文导致的。</span>

<span style="color:#00f">现总结如下，当启用Apache服务时出现"windows不能在本地计算机启动Apache服务"的错误，请检查以下4项：</span>

<span style="color:#00f">1、Apache所用80端口被占用；</span>

<span style="color:#00f">2、Apache安装目录不能有中文；</span>

<span style="color:#00f">3、"httpd.conf"文件中的网站目录保持一致；</span>

<span style="color:#00f">4、指定的网站目录不能出现中文；</span>

**<span style="color:#00f">原创文章转载请注明出处，thankyou！</span>**
<!-- rebuild by neat -->