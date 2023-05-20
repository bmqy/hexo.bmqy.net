---
date: "2020-03-25 00:00"
updateTime: "2023-05-05T10:34:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  1、准备有公网IP地址的服务器
  首先准备一台有公网IP地址的服务器，可选阿里云或者腾讯云等服务商。
  2、下载frp软件
  前往github下载frp软件，建议按照自己电脑情况下载最新版本。
summary: ""
_date: "2020-03-25T00:00:00.000+08:00"
tags:
  - frp内网穿透
  - winsw微软服务
  - 微软远程桌面
updated: "2020-03-25 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 2174
urlname: 132cfe00-3798-4178-82a7-d67ee71c292b
title: 利用frp实现微软远程桌面管理内网电脑之不完全指北
---

## 1、准备有公网 IP 地址的服务器

首先准备一台有公网 IP 地址的服务器，可选[阿里云](https://www.aliyun.com/minisite/goods?userCode=qmdrct9z)或者[腾讯云](https://url.cn/5UPrjHG)等服务商。

## 2、下载 frp 软件

前往[github](https://github.com/fatedier/frp)下载[frp](https://github.com/fatedier/frp/releases)软件，建议按照自己电脑情况下载最新版本。

## 3、配置服务器端设置

3.1、打开 frps.ini 文件，加入以下内容

```text
[common]
bind_addr = 0.0.0.0
bind_port = 7000
```

3.2、打开 cmd 命令窗口，输入“.-c frps.ini”，即可启动成功。

3.3、其它更多配置，可参考[frp 中文文档](https://github.com/fatedier/frp/blob/master/README_zh.md)

## 4、配置内网电脑设置

4.1、打开 frpc.ini 文件，加入以下内容

```text
[common]
server_addr = 服务器ip地址
server_port = 7000
http_proxy =

[remote_pc]
type = tcp
local_ip = 127.0.0.1
local_port = 3389
remote_port = 3389
```

4.2、打开 cmd 命令窗口，输入“.-c frpc.ini”，即可启动成功。

4.3、win+R 输入 mstsc 启动远程桌面，输入“服务器 ip 地址:remote_port 端口号”。

4.4、之后和正常连接远程桌面一样，输入被控电脑用户名密码，即可成功连接。

4.5、其它更多配置，可参考上述中文文档。

## 5、测试连接服务器端

如果经过以上设置，不能正常连接远程电脑，请按以下问题排查：

5.1、所设置的“bind_port”和“remote_port”等端口是否在服务器安全设置中启用放行。

5.2、防火墙是否放行 frp 程序和相关端口。

5.3、内网电脑控制面板中是否开启启用远程桌面功能。

5.4、内网电脑是否使用账号密码登录，pin 登录不受支持，远程连接时会失败。

## 6、利用 bat 增加开机自启

6.1、新建 run.bat 文件， 将以下内容拷贝到.bat 文件中。

```text
start cmd /k "cd/d 此处为frp所在目录 &&.\frpc -c frpc.ini "
```

6.2、win+R 打开运行窗口输入“shell:startup”打开启动目录。

6.3、发送“run.bat”文件快捷方式到启动目录即可。

6.4、完成后即可开机自启，但是会弹出 cmd 窗口。

## 7、利用 winsw 增加 windows 服务

7.1、前往[github](https://github.com/winsw/winsw)下载[winsw](https://github.com/winsw/winsw/releases)软件，只下载" WinSW.NET4.exe “和” sample-minimal.xml "两个文件即可。

7.2、将两个文件拷贝到 frp 同目录中，为方便使用，将两个文件名都改为“winsw”。

7.3、将以下内容拷贝覆盖到 winsw.xml 中：

> frpfrp 用 frp 发布本地电脑网站到外网 frpc-c frpc.inireset

7.4、打开管理员权限的 cmd 窗口，执行“winsw install”会添加成功“frp 服务”。之后可以通过任务管理器打开“服务”面板，启动“frp 服务”，并设置“服务自启”和“失败后重新启动服务”等配置，保证服务能开机自启。

7.5、完成后即可开机自启，并且没有 cmd 窗口弹出，推荐。

## 8、MAC 端运行 frp

8.1、下载 mac 端 frp 最新版，名字中带" _darwin_"的就是。

8.2、配置好“frpc.ini”文件。

8.3、打开 mac 终端，运行“./frpc -c ./frpc.ini”。

8.4、 如果提示“permission denied”，就在终端中执行：sudo chmod -R 777 要操作的目录地址，此时会要求输入密码。

8.5、添加开启启动（待续。。。）
