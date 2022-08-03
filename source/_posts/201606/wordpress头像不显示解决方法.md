---
layout: post
title: wordpress头像不显示解决方法
tags:
  - gravatar头像
  - wordpress头像
  - 燕衔春泥
abbrlink: 58290
date: 2016-06-04 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

使用Gravatar的HTTPS（适用于任何主题）：

在主题目录中，找到并打开 functions.php 文件，把以下代码复制放到该文件中：
<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
</pre></td><td class="code"><pre><span class="line"><span class="function"><span class="keyword">function</span> <span class="title">mywp_get_https_avatar</span><span class="params">($avatar)</span> </span>&#123;</span>  
<span class="line">$avatar = preg_replace(<span class="string">'<span style="color: #0000ff;">/.*\/avatar\/(.*)\?.*avatar\-([\d]+).*/</span>'</span>,<span class="string">'&lt;img src="https://secure.gravatar.com/avatar/$1?s=$2" class="avatar avatar-$2" height="$2" width="$2"&gt;'</span>,$avatar);</span>  
<span class="line"><span class="keyword">return</span> $avatar;</span>  
<span class="line">&#125;</span>  
<span class="line">add_filter(<span class="string">'get_avatar'</span>, <span class="string">'mywp_get_https_avatar'</span>);</span>  
</pre></td></tr></table></figure>

参考资料 [http://www.wpyou.com/wordpress-solution-gravatar-error.html](http://www.wpyou.com/wordpress-solution-gravatar-error.html)
<!-- rebuild by neat -->