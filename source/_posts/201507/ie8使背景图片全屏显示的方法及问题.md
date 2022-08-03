---
layout: post
title: ie8使背景图片全屏显示的方法及问题
tags:
  - background-size
  - IE8背景全屏
  - sizingMethod
  - 清学小记
abbrlink: 57021
date: 2015-07-23 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

IE8。。。

悲剧的，不支持css3的background-size属性，

通过网络，找到两种方法：

1、使用css滤镜  

<figure class="highlight"><table><tr><td class="gutter"><pre><span class="line">1</span>  
</pre></td><td class="code"><pre><span class="line">filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=``'bg.jpg'``, sizingMethod=``'scale'``);</span>  
</pre></td></tr></table></figure>

这个滤镜用的很纠结，当时用了一个div的嵌套，然后背景设置在顶层div上，结果用了这个滤镜后，将里层的a链接标签统统都挡住了，不能点击，连文字都不能选取，设置了z-index没用， <span style="color:#00f">或许有其它解决方法，望各位高手告知</span>，有时间也会继续尝试其它方法。

2、使用img标签添加背景

这个方法虽然觉得不美观，但是用起来没有什么大麻烦，推荐使用：  

<figure class="highlight html"><table><tr><td class="gutter"><pre><span class="line">1</span>  
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">img</span> <span class="attr">class</span>=<span class="string">"bg"</span> <span class="attr">src</span>=<span class="string">"bg.png"</span>/></span>;</span>  
</pre></td></tr></table></figure><figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
</pre></td><td class="code"><pre><span class="line"><span class="selector-class">.bg</span>&#123;</span>  
<span class="line"><span class="attribute">position</span>: <span class="string">"absolute"</span>;</span>  
<span class="line"><span class="attribute">top</span>:<span class="number">0</span>;</span>  
<span class="line"><span class="attribute">left</span>:<span class="number">0</span>;</span>  
<span class="line"><span class="attribute">z-index</span>:-<span class="number">1</span>;</span>  
<span class="line"><span class="attribute">width</span>: <span class="number">100%</span>;</span>  
<span class="line"><span class="attribute">height</span>:<span class="number">150px</span>;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure><!-- rebuild by neat -->