---
date: '2023-10-13 14:14:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: Virtualbox安装Ubuntu不完全指北
summary: ''
tags:
  - virtualbox
  - ubuntu
  - virtualbox增强功能
  - virtualbox双向粘贴
  - virtualbox拖拽文件
abbrlink: 2658
updated: '2023-10-13 18:39:00'
cover: ''
categories:
  - 清学小记
urlname: 2023-10-13-Virtualbox安装Ubuntu不完全指北
title: Virtualbox安装Ubuntu不完全指北
---

# 安装增强功能

- 找到窗口菜单
- 点击设备菜单
- 点击安装增强功能
- 运行安装软件

如果上述无效，打开光驱文件后，无反应，请尝试命令行安装方式：


`sudo sh ./VBoxLinuxAdditions.run`


如果安装完后，还是不能双向复制粘贴，尝试执行以下命令：


`apt-get install virtualbox-guest-utils`


`apt-get install virtualbox-guest-ext-pack`


`apt-get install virtualbox-guest-dkms`


# 拖放文件


开启了增强功能还不能双向拖放文件：

- 执行命令`sudo gedit /etc/gdm3/custom.conf`
- 修改`/etc/gdm3/custom.conf`文件
- 把`#WaylandEnable=false`的井号删掉去掉注释
- 重启`reboot`

> 以上内容摘自：[https://blog.csdn.net/qq_45200829/article/details/128639369](https://blog.csdn.net/qq_45200829/article/details/128639369)  
> 原因：可能是窗口系统的问题，`ubuntu`默认使用的窗口系统是`wayland`

