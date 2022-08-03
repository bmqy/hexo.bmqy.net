---
layout: post
title: 万网空间服务器上传网站后出现HTTP500.19错误
tags:
  - 500.19错误
  - 万网空间服务器
  - 唯一密钥属性value设置
  - 燕衔春泥
abbrlink: 1523
date: 2014-12-26 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

在配置IIS7.5时，会出现在唯一密钥属性"value"设置为"default.aspx"（或者index.asp等）时，无法添加类型为"add"的重复集合项

1、报错情况

[![HTTP错误500.19](http://image.bmqy.net/uploads/2014/12/e1fe9925bc315c60bfb853a68eb1cb134954774d.jpg)](http://jingyan.baidu.com/article/20095761a4e051cb0721b41c.html)

2、添加了默认文档依然无妨正常访问网站

3、通过ftp工具，找到网站根目录的"web.config"文件，进行修改编辑：
<div class="content-list-text">  
> 在<files>与</files>之间加入代码  
>  
>  
> <clear />  
>  
>  
> <add value="index.php" />  
>  
>  
> <add value="Default.htm" />  
>  
>  
> <add value="index.htm" />  
>  
>  
> <add value="index.html" />  
>  
>  
> <add value="iisstart.htm" />  
>  
>  
> <add value="default.aspx" />  
>  
>  
> （注意：上面的代码可根据你的网站首页文档类型来自己添加）  
</div>

[![编辑"web.config"](http://image.bmqy.net/uploads/2014/12/bf096b63f6246b603b29893de8f81a4c510fa257.jpg)](http://jingyan.baidu.com/article/20095761a4e051cb0721b41c.html)

4、然后刷新就可以正常访问了。

通过 [唯一密钥属性"value"设置...无法添加类型为add_百度经验](http://jingyan.baidu.com/article/20095761a4e051cb0721b41c.html).
<!-- rebuild by neat -->