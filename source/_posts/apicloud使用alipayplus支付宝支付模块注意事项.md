---
date: "2019-11-25 00:00"
updateTime: "2023-05-05T10:34:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  1、参照模块文档的“config.xml”文件配置，和" payOrder "方法调用即可；
  2、按照支付宝官方文档，生成签名密钥，查看文档；
summary: ""
_date: "2019-11-25T00:00:00.000+08:00"
tags:
  - alipay
  - aliPayPlus模块
  - 支付宝支付
updated: "2019-11-25 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 2130
urlname: c523ce41-11a0-4da7-adf5-cdf5f3730f4f
title: apicloud使用alipayplus支付宝支付模块注意事项
---

1、参照模块文档的“config.xml”文件配置，和" payOrder "方法调用即可；

2、按照支付宝官方文档，生成签名密钥，[查看文档](https://docs.open.alipay.com/291/105971/)；

**3、创建应用并完成相关配置，此处一定要在“接口加签方式”配置中设置好商户公钥，并留意给出的支付宝公钥；**

4、参考支付宝官方文档《[APP 支付文档](https://docs.open.alipay.com/54/106370/)》中的“生成 APP 支付订单”部分和《[请求参数说明](https://docs.open.alipay.com/204/105465/)》部分官方文档，完成 APP 端的签名步骤；

5、参考 《[APP 支付文档](https://docs.open.alipay.com/54/106370/)》 和《[通知参数说明](https://docs.open.alipay.com/204/105301/)》部分官方文档，完成服务端验签步骤；

6、调试 APP，没有代码错误的话，就完成支付宝的支付接入了；

**7、注意区分商户私钥（APP 端签名使用）、商户公钥（开发者应用中心接口配置使用）和支付宝公钥（服务端验签使用）的使用；**

支付宝其它文档：

[《电脑网站支付》](https://docs.open.alipay.com/270/)

[《手机网站支付》](https://docs.open.alipay.com/203)
