---
layout: post
title: apicloud用tortoisesvn管理代码，实现按不同分支编译打包app
tags:
  - apicloud
  - apicloud按分支编译打包
  - TortoiseSVN
  - 打包APP
categories:
  - 清学小记
abbrlink: 2144
date: 2020-01-06 00:00:00
---

<!-- wp:paragraph -->

apicloud目前只有企业版才支持按指定分支编译，所以这里借助TortoiseSVN提供的版本控制功能实现按不同分支编译打包APP。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

先做好以下准备工作：

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

1、准备好项目代码，并上传到默认分支；

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

2、用TortoiseSVN工具创建项目所需分支：**最好单独建立一个master的主分支，用来存放主分支代码，然后建立其余需要的分支，留下默认的代码分支用来切换不同的分支代码进行编译打包**（ 其余的分支创建方式可以自行研究）；

<!-- /wp:paragraph -->

<!-- more -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150100.png)</figure>
<!-- /wp:image -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150059.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

确认准备好需要编译打包的分支代码后，接下来就准备合并分支到项目默认分支中进行编译打包，步骤如下：

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

**1、先切换项目至系统默认的主分支中，否则合并时会有文件冲突；**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2、项目根目录中右键打开 TortoiseSVN 菜单→选择"合并"；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150034.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

3、合并类型面板中选择第二项"合并两个不同的树"；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150040.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

4、合并树面板中，起始地址栏填写项目默认的分支路径，结束地址栏填写需要打包的分支路径；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150049.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

5、最后的合并选项面板，一定勾选下边两项："忽略根源"、"强制合并"；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150053.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

6、合并之前最好坐一次测试合并，注意查看文件是否正确同步到项目默认的分支上；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

7、合并分支到项目默认分支后，本地需要再提交一次代码到服务器上；

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-red"} -->

8、在apicloud控制台→云编译打包界面中，确认右上角最新代码记录的时间是否为刚刚提交代码的时间；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150102.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

9、确认后即刻正常编译打包；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

10、本地可通过 TortoiseSVN 管理菜单切换不同分支，进行代码更新维护操作；

<!-- /wp:paragraph -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150101.png)</figure>
<!-- /wp:image -->

<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">![](http://image.bmqy.net/upload/20200106150103.png)</figure>
<!-- /wp:image -->

<!-- wp:paragraph -->

11、如有其它好方法，可在此留言告知。

<!-- /wp:paragraph -->