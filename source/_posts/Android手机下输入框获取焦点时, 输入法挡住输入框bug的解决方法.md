---
date: "2016-09-07 00:00"
updateTime: "2023-05-08T00:04:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: "Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法"
summary: ""
_date: "2016-09-07T00:00:00.000+08:00"
tags:
  - WeUI
  - 安卓input获得焦点
  - 输入法遮挡住input
updated: "2016-09-07 00:00"
cover: ""
categories:
  - 清学小记
  - 燕衔春泥
abbrlink: 1478
urlname: 3ad68032-d5ea-4e83-9371-8283b31bd8e9
title: "Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法"
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
