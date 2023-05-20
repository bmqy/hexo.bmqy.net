---
date: "2020-09-16 00:00"
updateTime: "2023-05-09T00:33:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: 使用git难免做一些骚操作，比如：还未commit提交本地修改的文件，就执行了git pull操作。如此一来，你就需要这颗后悔药丸，来使自己辛苦敲了几百、甚至上千行的代码重新回到你的眼前。
summary: ""
_date: "2020-09-16T00:00:00.000+08:00"
tags:
  - git
  - idea
updated: "2020-09-16 00:00"
cover: ""
categories:
  - 清学小记
  - 燕坊清作
abbrlink: 2274
urlname: 1b58643d-aa12-41c6-b9a2-344b21b5076b
title: idea找回执行git pull操作后，被覆盖的本地未提交的代码
---

使用 git 难免做一些骚操作，比如：还未 commit 提交本地修改的文件，就执行了 git pull 操作。如此一来，你就需要这颗后悔药丸，来使自己辛苦敲了几百、甚至上千行的代码重新回到你的眼前。

1、idea 打开项目；

2、项目文件上点击右键，看下图一次选择：git→repository→UnStash changes；

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

3、点击 UnStash changes，稍等片刻，就能看到下图面板，显示本地所有未提交状态的文件（每次更新时，本地修改还未提交的那些文件都会保存一份 stash）；

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

4、选择其中一条 stash，点击 view 按钮，可以查看具体的本地未提交文件有哪些，双击文件还可以查看代码；

![](https://image.bmqy.net/upload/Fto5o-5ea0sNMlW_75VgGJCv2AcJ.png)

5、如果需要恢复某次 stash 的所有本地未提交文件，可以在第三步图中所示列表中，选中那条 stash，点击 Apply Stash，即可恢复；

6、你还可以找到某次 stash 中的某个文件，拷贝代码来恢复；

7、其它的功能自行研究吧；
