---
date: "2016-06-04 00:00"
updateTime: "2023-05-08T00:05:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  使用Gravatar的HTTPS（适用于任何主题）：
  在主题目录中，找到并打开 functions.php 文件，把以下代码复制放到该文件中：
summary: ""
_date: "2016-06-04T00:00:00.000+08:00"
tags:
  - gravatar头像
  - wordpress头像
updated: "2016-06-04 00:00"
cover: ""
categories:
  - 燕衔春泥
abbrlink: 1480
urlname: 0347726d-6fbd-40b7-b762-473e6ee0abd1
title: wordpress头像不显示解决方法
---

使用 Gravatar 的 HTTPS（适用于任何主题）：

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
