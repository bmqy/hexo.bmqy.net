---
layout: post
title: idea配置less自动编译
tags:
  - idea
  - less
  - 清学小记
  - 自动编译less
abbrlink: 1473
date: 2016-12-01 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#0070c0">idea配置less自动编译：</span>

<span style="color:#0070c0">1、电脑安装node.js环境；  
</span>

<span style="color:#0070c0">2、打开"idea"→"settings"→"plugins"安装："nodejs"插件，并按以下步骤进行配置：</span>

![QQ截图20161201180843.png](http://image.bmqy.net/uploads/2016/12/1480587751120337.png "1480587751120337.png")

<span style="color:#0070c0">&nbsp;&nbsp;&nbsp;&nbsp;1）打开"idea"→"settings"→"Languages & Frameworks"→"Node.js and NPM"；</span>

<span style="color:#0070c0">&nbsp;&nbsp;&nbsp;&nbsp;2）在打开的面板中点击右侧"+"加号按钮添加需要的"less"组件（如果此处不能添加，请使用npm命令进行全局安装）。</span>

![QQ截图20161201181901.png](http://image.bmqy.net/uploads/2016/12/1480587698818312.png "1480587698818312.png")

<span style="color:#0070c0">3、打开"idea"→"settings"→"plugins"安装："file watchers"插件，并按以下步骤进行设置：</span>

![QQ截图20161201180935.png](http://image.bmqy.net/uploads/2016/12/1480587731788935.png "1480587731788935.png")

<span style="color:#0070c0">&nbsp;&nbsp;&nbsp;&nbsp;1）打开"idea"→"settings"→"tools"→"file watchers"；</span>

<span style="color:#0070c0">&nbsp;&nbsp;&nbsp;&nbsp;2）在打开的面板中点击右侧加号按钮添加less配置，貌似插件自动就配置好了，如无配置，请参考《</span> [webstorm10配置less编译环境](http://www.bmqy.net/362.html "http://www.bmqy.net/362.html") <span style="color:#0070c0">》。  
</span>

<span style="color:#0070c0">3、安装</span> [LESS CSS Compiler](http://www.bmqy.net/430.html "LESS CSS Compiler") <span style="color:#0070c0">插件，安装完成后无需进行任何配置；</span>

<span style="color:#0070c0">4、以上步骤成功后，编辑less文件即可自动编译成css文件。</span>
<!-- rebuild by neat -->