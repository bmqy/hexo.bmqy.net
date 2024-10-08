
自定义`Intellij idea`配置和插件存放目录：


1、进入到`idea`的安装目录；


2、找到`idea.properties`文件；


3、修改：`idea.config.path=${user.home}/.IntelliJIdea/config`后的路径，为你想要使用的存放目录； 


4、修改：`idea.plugins.path=${idea.config.path}/plugins`后的路径，为你想要使用的存放目录；


5、注意取消上面两条的`#`注释符；


6、保存后，再次运行`idea`，所有配置和插件都将保存在指定的目录；


7、最后，就可以愉快的同步备份啦。

