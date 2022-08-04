---
layout: post
title: wordpress添加twentysixteen子主题
tags:
  - twentysixteen
  - wordpress
  - 子主题
categories:
  - 清学小记
abbrlink: 1472
date: 2016-12-05 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#0070c0">1、自定义标签云显示：</span>

<span style="color:#0070c0">将以下代码粘贴到对应子主题的"function.php"中，代码亦可参考原主题"function.php"文件中代码。</span>

<span style="color:#0070c0">对应属性作用可百度找到</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">/*&nbsp;自定义标签云&nbsp;*/</span></span>  
<span class="line"><span class="function"><span class="keyword">function</span>&<span class="title">nbsp</span></span>;bmqy_widget_tag_cloud_args(&nbsp;$args&nbsp;)&nbsp;&#123;</span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;$args[&<span class="comment">#39;largest&#39;]&nbsp;=&nbsp;1;</span></span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;$args[&<span class="comment">#39;smallest&#39;]&nbsp;=&nbsp;1;</span></span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;$args[&<span class="comment">#39;unit&#39;]&nbsp;=&nbsp;&#39;em&#39;;</span></span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;$args[&<span class="comment">#39;orderby&#39;]&nbsp;=&nbsp;&#39;id&#39;;</span></span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;$args[&<span class="comment">#39;order&#39;]&nbsp;=&nbsp;&#39;RAND&#39;;</span></span>  
<span class="line">&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span>&nbsp;$args;</span>  
<span class="line">&#125;</span>  
<span class="line">add_filter(&nbsp;&<span class="comment">#39;widget_tag_cloud_args&#39;,&nbsp;&#39;bmqy_widget_tag_cloud_args&#39;&nbsp;);</span></span>  
</pre></td></tr></table></figure>

<span style="color:red">PS：如有其它需要，本篇可能会不定期更新</span>
<!-- rebuild by neat -->