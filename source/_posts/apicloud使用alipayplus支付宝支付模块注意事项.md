---
layout: post
title: apicloud使用alipayplus支付宝支付模块注意事项
tags:
  - alipay
  - aliPayPlus模块
  - 支付宝支付
  - 清学小记
abbrlink: 2130
date: 2019-11-25 00:00:00
---

<!-- wp:paragraph -->

1、参照模块文档的"config.xml"文件配置，和" payOrder "方法调用即可；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2、按照支付宝官方文档，生成签名密钥，[查看文档](https://docs.open.alipay.com/291/105971/)；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**3、创建应用并完成相关配置，此处一定要在"接口加签方式"配置中设置好商户公钥，并留意给出的支付宝公钥；**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

4、参考支付宝官方文档《[APP支付文档](https://docs.open.alipay.com/54/106370/)》中的"生成 APP支付订单"部分和《[请求参数说明](https://docs.open.alipay.com/204/105465/)》部分官方文档，完成APP端的签名步骤；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

5、参考 《[APP支付文档](https://docs.open.alipay.com/54/106370/)》 和《[通知参数说明](https://docs.open.alipay.com/204/105301/)》部分官方文档，完成服务端验签步骤；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

6、调试APP，没有代码错误的话，就完成支付宝的支付接入了；

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**7、注意区分商户私钥（APP端签名使用）、商户公钥（开发者应用中心接口配置使用）和支付宝公钥（服务端验签使用）的使用；**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

支付宝其它文档：

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

[《电脑网站支付》](https://docs.open.alipay.com/270/)  
[《手机网站支付》](https://docs.open.alipay.com/203)

<!-- /wp:paragraph -->