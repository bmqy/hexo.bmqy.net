---
date: '2016-06-03 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: |-
  使用Gravatar的HTTPS（适用于任何主题）：
  在主题目录中，找到并打开 functions.php 文件，把以下代码复制放到该文件中：
summary: ''
tags:
  - gravatar头像
  - wordpress头像
abbrlink: 1480
updated: '2016-06-03 16:00'
cover: ''
categories:
  - 燕衔春泥
urlname: 2016-06-03-wordpress头像不显示解决方法
title: wordpress头像不显示解决方法
---

使用Gravatar的HTTPS（适用于任何主题）：


在主题目录中，找到并打开 functions.php 文件，把以下代码复制放到该文件中：


| `1  
2  
3  
4  
5` | `function mywp_get_https_avatar($avatar) {  
$avatar = preg_replace('/.*\/avatar\/(.*)\?.*avatar\-([\d]+).*/','<img src="https://secure.gravatar.com/avatar/$1?s=$2" class="avatar avatar-$2" height="$2" width="$2">',$avatar);  
return $avatar;  
}  
add_filter('get_avatar', 'mywp_get_https_avatar');` |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |


参考资料 [http://www.wpyou.com/wordpress-solution-gravatar-error.html](http://www.wpyou.com/wordpress-solution-gravatar-error.html)

