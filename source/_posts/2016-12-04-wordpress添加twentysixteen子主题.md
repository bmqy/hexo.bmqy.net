---
date: '2016-12-04 16:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: |-
  1、自定义标签云显示：
  将以下代码粘贴到对应子主题的“function.php”中，代码亦可参考原主题“function.php”文件中代码。
summary: ''
tags:
  - twentysixteen
  - wordpress
  - 子主题
abbrlink: 1472
updated: '2016-12-04 16:00'
cover: ''
categories:
  - 清学小记
urlname: 2016-12-04-wordpress添加twentysixteen子主题
title: wordpress添加twentysixteen子主题
---

1、自定义标签云显示：


将以下代码粘贴到对应子主题的“function.php”中，代码亦可参考原主题“function.php”文件中代码。


对应属性作用可百度找到


```php
/* 自定义标签云 */function&nbsp;bmqy_widget_tag_cloud_args( $args ) {  
    $args[&#39;largest'] = 1;    $args[&#39;smallest'] = 1;    $args[&#39;unit'] = 'em';    $args[&#39;orderby'] = 'id';    $args[&#39;order'] = 'RAND';    return $args;  
}  
add_filter( &#39;widget_tag_cloud_args', 'bmqy_widget_tag_cloud_args' );
```


PS：如有其它需要，本篇可能会不定期更新

