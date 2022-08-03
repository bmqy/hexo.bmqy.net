---
layout: post
title: 'Android手机下输入框获取焦点时, 输入法挡住输入框bug的解决方法'
tags:
  - WeUI
  - 安卓input获得焦点
  - 清学小记
  - 燕衔春泥
  - 输入法遮挡住input
abbrlink: 1478
date: 2016-09-07 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) --><figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
<span class="line">11</span>  
<span class="line">12</span>  
<span class="line">13</span>  
<span class="line">14</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">// Android 手机下输入框获取焦点时, 输入法会挡住输入框</span></span>  
<span class="line"><span class="comment">// 相关 issue: https://github.com/weui/weui/issues/15</span></span>  
<span class="line"><span class="comment">// 解决方法:</span></span>  
<span class="line"><span class="comment">// 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element</span></span>  
<span class="line"><span class="comment">// Android 手机下, input 或 textarea 元素聚焦时, 主动滚动</span></span>  
<span class="line"><span class="keyword">if</span> (<span class="regexp">/Android/gi</span>.test(navigator.userAgent)) &#123;</span>  
<span class="line">    <span class="built_in">window</span>.addEventListener(<span class="string">'resize'</span>, <span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>&#123;</span>  
<span class="line">        <span class="keyword">if</span> (<span class="built_in">document</span>.activeElement.tagName == <span class="string">'INPUT'</span> '' <span class="built_in">document</span>.activeElement.tagName == <span class="string">'TEXTAREA'</span>) &#123;</span>  
<span class="line">            <span class="built_in">window</span>.setTimeout(<span class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>&#123;</span>  
<span class="line">                <span class="built_in">document</span>.activeElement.scrollIntoViewIfNeeded();</span>  
<span class="line">            &#125;, <span class="number">0</span>);</span>  
<span class="line">        &#125;</span>  
<span class="line">    &#125;)</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

摘自： [WeUI](https://weui.io/)
<!-- rebuild by neat -->