---
date: "2015-07-28 00:00"
updateTime: "2023-05-08T00:07:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: 设为首页、添加收藏的javascript代码
summary: ""
_date: "2015-07-28T00:00:00.000+08:00"
tags:
  - javascript
  - 设为首页
  - 添加收藏
updated: "2015-07-28 00:00"
cover: ""
categories:
  - 清学小记
abbrlink: 1492
urlname: 2015-07-28-设为首页、添加收藏的javascript代码
title: 设为首页、添加收藏的javascript代码
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
14  
15  
16  
17  
18  
19  
20  
21  
22  
23  
24  
25` | `//加入收藏 function AddFavorite() {  
sTitle = window.location.href;  
sURL = encodeURI(window.location.href);  
try{  
window.external.addFavorite(sURL, sTitle);  
}catch(e) {  
try{  
window.sidebar.addPanel(sTitle, sURL, "");  
}catch (e) {  
alert("加入收藏失败，请使用 Ctrl+D 进行添加,或手动在浏览器里进行设置.");  
}  
}  
}

//设为首页 function SetHome(){  
var url = window.location.href;  
if (document.all) {  
document.body.style.behavior='url(#default#homepage)';  
document.body.setHomePage(url);  
}else{  
alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");  
}  
}` |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| `1  
2  
3` | `<a class="shou" onclick="AddFavorite();">添加收藏 a>

| <a class="home" onclick="SetHome();">设为首页 a>` |
| ------------------------------------------------- |
