---
layout: post
title: 自定义IntelliJ IDEA配置和插件的存放目录，以方便同步idea配置
tags:
  - idea
  - idea配置文件目录
  - 同步idea配置
  - 清学小记
abbrlink: 29181
date: 2018-10-19 00:00:00
---

<!-- wp:paragraph {"textColor":"vivid-red"} -->

自定义Intellij idea配置和插件存放目录：

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-cyan-blue"} -->

1、进入到idea的安装目录；  
2、找到"idea.properties"文件；  
3、修改："idea.config.path=${user.home}/.IntelliJIdea/config"后的路径，为你想要使用的存放目录；  
4、修改："idea.plugins.path=${idea.config.path}/plugins"后的路径，为你想要使用的存放目录；  
5、注意取消上面两条的"#"注释符；  
6、保存后，再次运行idea，所有配置和插件都将保存在指定的目录；  
7、最后，就可以愉快的同步备份啦。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->