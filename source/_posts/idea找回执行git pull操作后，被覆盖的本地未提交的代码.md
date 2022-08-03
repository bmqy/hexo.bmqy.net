---
layout: post
title: idea找回执行git pull操作后，被覆盖的本地未提交的代码
tags:
  - git stash
  - idea
  - 清学小记
  - 燕坊清作
abbrlink: 5421
date: 2020-09-16 00:00:00
---

<!-- wp:paragraph -->

使用git难免做一些骚操作，比如：还未commit提交本地修改的文件，就执行了git pull操作。如此一来，你就需要这颗后悔药丸，来使自己辛苦敲了几百、甚至上千行的代码重新回到你的眼前。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

1、idea打开项目；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2、项目文件上点击右键，看下图一次选择：git→repository→UnStash changes；  
![](http://image.bmqy.net/wp-content/uploads/2020/09/QQ截图20200916095424.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

3、点击UnStash changes，稍等片刻，就能看到下图面板，显示本地所有未提交状态的文件（每次更新时，本地修改还未提交的那些文件都会保存一份stash）；  
![](http://image.bmqy.net/wp-content/uploads/2020/09/QQ截图20200916095627.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

4、选择其中一条stash，点击view按钮，可以查看具体的本地未提交文件有哪些，双击文件还可以查看代码；  
![](http://image.bmqy.net/wp-content/uploads/2020/09/QQ截图20200916095820.png)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

5、如果需要恢复某次stash的所有本地未提交文件，可以在第三步图中所示列表中，选中那条stash，点击Apply Stash，即可恢复；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6、你还可以找到某次stash中的某个文件，拷贝代码来恢复；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

7、其它的功能自行研究吧；

<!-- /wp:paragraph -->