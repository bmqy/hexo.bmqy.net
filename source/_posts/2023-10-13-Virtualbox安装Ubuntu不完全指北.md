
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

