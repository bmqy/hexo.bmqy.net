---
date: '2016-09-06 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: 'Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法'
summary: ''
tags:
  - WeUI
  - 安卓input获得焦点
  - 输入法遮挡住input
abbrlink: 1478
updated: '2016-09-06 16:00'
cover: ''
categories:
  - 清学小记
urlname: '2016-09-06-Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法'
title: 'Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法'
---

| `1  
2  
3  
4  
5  
6  
7  
8  
9  
10  
11  
12  
13  
14` | `// Android 手机下输入框获取焦点时, 输入法会挡住输入框// 相关 issue: https://github.com/weui/weui/issues/15// 解决方法:// 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element// Android 手机下, input 或 textarea 元素聚焦时, 主动滚动if (/Android/gi.test(navigator.userAgent)) {  
    window.addEventListener('resize', function () {  
        if (document.activeElement.tagName == 'INPUT' '' document.activeElement.tagName == 'TEXTAREA') {  
            window.setTimeout(function () {  
                document.activeElement.scrollIntoViewIfNeeded();  
            }, 0);  
        }  
    })  
}` |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


摘自： [WeUI](https://weui.io/)

