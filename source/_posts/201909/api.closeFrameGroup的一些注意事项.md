---
layout: post
title: api.closeFrameGroup的一些注意事项
tags:
  - apicloud
  - closeFrameGroup
  - 关闭framegroup
  - 清学小记
abbrlink: 55289
date: 2019-09-05 00:00:00
---

<!-- wp:paragraph -->

关于api.closeFrameGroup使用时总结的一些注意事项：

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-cyan-blue"} -->

<s>1、在本页打开的framegroup，在本页执行api.closeFrameGroup方式，将会只关闭group组，但是group组里打开的frames中的页面无法被关闭；</s>

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-cyan-blue"} -->

<s>2、在framegroup里打开的frames中的页面执行api.closeFrameGroup时，不能关闭自身所属的framegroup组；</s>

<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"vivid-cyan-blue"} -->

<s>3、与自身无关的framegroup组可以被正常关闭；</s>

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<s>4、如果可能的话，那么对指定group组设置hidden属性时与上同理；</s>

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

以上待确认

<!-- /wp:paragraph -->