---
date: '2019-11-24 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: |-
  1、参照模块文档的“config.xml”文件配置，和" payOrder "方法调用即可；
  2、按照支付宝官方文档，生成签名密钥，查看文档；
summary: ''
tags:
  - alipay
  - aliPayPlus模块
  - 支付宝支付
abbrlink: 2130
updated: '2019-11-24 16:00'
cover: ''
categories:
  - 清学小记
urlname: 2019-11-24-apicloud使用alipayplus支付宝支付模块注意事项
title: apicloud使用alipayplus支付宝支付模块注意事项
---

1、参照模块文档的“config.xml”文件配置，和" payOrder "方法调用即可；


2、按照支付宝官方文档，生成签名密钥，[查看文档](https://docs.open.alipay.com/291/105971/)；


**3、创建应用并完成相关配置，此处一定要在“接口加签方式”配置中设置好商户公钥，并留意给出的支付宝公钥；**


4、参考支付宝官方文档《[APP支付文档](https://docs.open.alipay.com/54/106370/)》中的“生成 APP支付订单”部分和《[请求参数说明](https://docs.open.alipay.com/204/105465/)》部分官方文档，完成APP端的签名步骤；


5、参考 《[APP支付文档](https://docs.open.alipay.com/54/106370/)》 和《[通知参数说明](https://docs.open.alipay.com/204/105301/)》部分官方文档，完成服务端验签步骤；


6、调试APP，没有代码错误的话，就完成支付宝的支付接入了；


**7、注意区分商户私钥（APP端签名使用）、商户公钥（开发者应用中心接口配置使用）和支付宝公钥（服务端验签使用）的使用；**


支付宝其它文档：


[《电脑网站支付》](https://docs.open.alipay.com/270/)


[《手机网站支付》](https://docs.open.alipay.com/203)

