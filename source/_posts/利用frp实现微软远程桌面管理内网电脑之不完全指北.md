---
layout: post
title: 利用frp实现微软远程桌面管理内网电脑之不完全指北
tags:
  - frp内网穿透
  - winsw微软服务
  - 微软远程桌面
  - 清学小记
abbrlink: 2174
date: 2020-03-25 00:00:00
---

<!-- wp:heading -->

## 1、准备有公网IP地址的服务器

<!-- /wp:heading -->

<!-- wp:paragraph -->

首先准备一台有公网IP地址的服务器，可选[阿里云](https://www.aliyun.com/minisite/goods?userCode=qmdrct9z)或者[腾讯云](https://url.cn/5UPrjHG)等服务商。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 2、下载frp软件

<!-- /wp:heading -->

<!-- wp:paragraph -->

前往[github](https://github.com/fatedier/frp)下载[frp](https://github.com/fatedier/frp/releases)软件，建议按照自己电脑情况下载最新版本。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 3、配置服务器端设置

<!-- /wp:heading -->

<!-- wp:paragraph -->

3.1、打开frps.ini文件，加入以下内容

<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">[common]
bind_addr = 0.0.0.0
bind_port = 7000</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->

3.2、打开cmd命令窗口，输入".\frps -c frps.ini"，即可启动成功。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

3.3、其它更多配置，可参考[frp中文文档](https://github.com/fatedier/frp/blob/master/README_zh.md)

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 4、配置内网电脑设置

<!-- /wp:heading -->

<!-- wp:paragraph -->

4.1、打开frpc.ini文件，加入以下内容

<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">[common]
server_addr = 服务器ip地址
server_port = 7000
http_proxy =

[remote_pc]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 3389</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->

4.2、打开cmd命令窗口，输入".\frpc -c frpc.ini"，即可启动成功。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

4.3、win+R输入mstsc启动远程桌面，输入"服务器ip地址:remote_port端口号"。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

4.4、之后和正常连接远程桌面一样，输入被控电脑用户名密码，即可成功连接。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

4.5、其它更多配置，可参考上述中文文档。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 5、测试连接服务器端

<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

如果经过以上设置，不能正常连接远程电脑，请按以下问题排查：

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

5.1、所设置的"bind_port"和"remote_port"等端口是否在服务器安全设置中启用放行。

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

5.2、防火墙是否放行frp程序和相关端口。

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

5.3、内网电脑控制面板中是否开启启用远程桌面功能。

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

5.4、内网电脑是否使用账号密码登录，pin登录不受支持，远程连接时会失败。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 6、利用bat增加开机自启

<!-- /wp:heading -->

<!-- wp:paragraph -->

6.1、新建run.bat文件， 将以下内容拷贝到.bat文件中。

<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">start cmd /k "cd/d 此处为frp所在目录 &&.\frpc -c frpc.ini "</pre>
<!-- /wp:preformatted -->

<!-- wp:paragraph -->

6.2、win+R打开运行窗口输入"shell:startup"打开启动目录。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6.3、发送"run.bat"文件快捷方式到启动目录即可。

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

6.4、完成后即可开机自启，但是会弹出cmd窗口。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 7、利用winsw增加windows服务

<!-- /wp:heading -->

<!-- wp:paragraph -->

7.1、前往[github](https://github.com/winsw/winsw)下载[winsw](https://github.com/winsw/winsw/releases)软件，只下载" WinSW.NET4.exe "和" sample-minimal.xml "两个文件即可。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

7.2、将两个文件拷贝到frp同目录中，为方便使用，将两个文件名都改为"winsw"。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

7.3、将以下内容拷贝覆盖到winsw.xml中：

<!-- /wp:paragraph -->

> <pre> <service>  
>     <id>frp</id>  
>     <name>frp</name>  
>     <description>用frp发布本地电脑网站到外网</description>  
>     <executable>frpc</executable>  
>     <arguments>-c frpc.ini</arguments>  
>     <logmode>reset</logmode>  
> </service>
> </pre>

<!-- wp:paragraph -->

7.4、打开管理员权限的cmd窗口，执行"winsw install"会添加成功"frp服务"。之后可以通过任务管理器打开"服务"面板，启动"frp服务"，并设置"服务自启"和"失败后重新启动服务"等配置，保证服务能开机自启。

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

7.5、完成后即可开机自启，并且没有cmd窗口弹出，推荐。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 8、MAC端运行frp

<!-- /wp:heading -->

<!-- wp:paragraph -->

8.1、下载mac端frp最新版，名字中带" _darwin_"的就是。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

8.2、配置好"frpc.ini"文件。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

8.3、打开mac终端，运行"./frpc -c ./frpc.ini"。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

8.4、 如果提示"permission denied"，就在终端中执行：sudo chmod -R 777 要操作的目录地址，此时会要求输入密码。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

8.5、添加开启启动（待续。。。）

<!-- /wp:paragraph -->