---
date: '2024-06-07 02:26'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: serv00使用手动安装的方式部署FreshRSS
summary: ''
tags:
  - FreshRSS
  - serv00
abbrlink: 2667
updated: '2024-06-07 03:11'
cover: ''
categories:
  - 清学小记
urlname: 2024-06-07-serv00部署FreshRSS
title: serv00部署FreshRSS
---

## 安装


采用手动安装的方式，参考[官方文档](https://github.com/FreshRSS/FreshRSS?tab=readme-ov-file#manual-install)：


> 使用 git 或[下载档案获取 FreshRSS](https://github.com/FreshRSS/FreshRSS/archive/latest.zip)

	1. 将应用程序放在服务器上的某个位置（仅将`./p/`文件夹公开到 Web）
	2. `./data/`为 Web 服务器用户添加对文件夹的写访问权限
	3. 使用浏览器访问 FreshRSS 并按照安装过程进行或使用[命令行界面](https://github.com/FreshRSS/FreshRSS/blob/edge/cli/README.md)
	4. 一切都应该正常工作：）如果您遇到任何问题，请随时[联系我们](https://github.com/FreshRSS/FreshRSS/issues)。
	5. 高级配置设置可以在`config.default.php`中找到并在`data/config.php`中进行修改。
	6. 当使用 Apache 时，启用该选项[`AllowEncodedSlashes`](https://httpd.apache.org/docs/trunk/mod/core.html#allowencodedslashes)可以更好地兼容移动客户端。

	有关安装和服务器配置的更多详细信息请参阅[我们的文档](https://freshrss.github.io/FreshRSS/en/admins/03_Installation.html)。


## 自动刷新订阅源


通过上述源码安装的方式，有个严重的缺点就是不能自动刷新订阅源，需要自己动手刷新，推荐下面的方法，下文摘自[官方文档](https://freshrss.github.io/FreshRSS/en/users/09_refreshing_feeds.html#automatic-update-with-cron)：


**使用 cron 自动更新**


自动更新脚本名为`actualize_script.php`，位于`app`文件夹中。这里不解释计划任务的语法。不过，这里有[一个关于 crontab 的快速介绍](http://www.adminschoice.com/crontab-quick-reference/)，可能会对你有所帮助。


这是一个每小时触发文章更新的示例，`xxx`的部分自行替换。


```text
*/30 * * * * php /usr/home/xxx/domains/xxx/public_html/app/actualize_script.php > /tmp/FreshRSS.log 2>&1 > /tmp/FreshRSS.log 2>&1
```


**PS：**还可以在官方文档里查看其它刷新订阅的方法，这里推荐`cron`的方式


## 其它


docker方式的部署，请参考：[docker部署freshrss](https://www.bmqy.net/2648.html)

