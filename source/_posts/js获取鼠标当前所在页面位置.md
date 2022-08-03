---
layout: post
title: js获取鼠标当前所在页面位置
tags:
  - js获取鼠标坐标
  - 燕衔春泥
  - 鼠标在页面中的位置
abbrlink: 1522
date: 2014-12-26 00:00:00
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
<span class="line">15</span>  
<span class="line">16</span>  
<span class="line">17</span>  
<span class="line">18</span>  
<span class="line">19</span>  
<span class="line">20</span>  
<span class="line">21</span>  
<span class="line">22</span>  
<span class="line">23</span>  
<span class="line">24</span>  
<span class="line">25</span>  
<span class="line">26</span>  
<span class="line">27</span>  
<span class="line">28</span>  
<span class="line">29</span>  
<span class="line">30</span>  
<span class="line">31</span>  
<span class="line">32</span>  
<span class="line">33</span>  
<span class="line">34</span>  
<span class="line">35</span>  
<span class="line">36</span>  
<span class="line">37</span>  
<span class="line">38</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">//此方法对于嵌套在一个页面A中的B页面，获取B页面的位置在IE9和其他浏览器（包括IE其他系列浏览器）下有些不同，IE9是根据浏览器来定位的，FF及其他则是根据当前页面也就是嵌套的页面来定位的（真正兼容还待改进）</span></span>  
<span class="line"></span>  
<span class="line">　　　　<span class="function"><span class="keyword">function</span> <span class="title">getEvent</span>(<span class="params"></span>) //同时兼容<span class="title">ie</span>和<span class="title">ff</span>的写法</span></span>  
<span class="line"><span class="function">        </span>&#123;</span>  
<span class="line">            <span class="keyword">if</span> (<span class="built_in">document</span>.all)</span>  
<span class="line">                <span class="keyword">return</span> <span class="built_in">window</span>.event;</span>  
<span class="line">            func = getEvent.caller;</span>  
<span class="line">            <span class="keyword">while</span> (func != <span class="literal">null</span>) &#123;</span>  
<span class="line">                <span class="keyword">var</span> arg0 = func.arguments[<span class="number">0</span>];</span>  
<span class="line">                <span class="keyword">if</span> (arg0) &#123;</span>  
<span class="line">                    <span class="keyword">if</span> ((arg0.constructor == Event '' arg0.constructor == MouseEvent) '' (<span class="keyword">typeof</span> (arg0) == <span class="string">"object"</span> && arg0.preventDefault && arg0.stopPropagation)) &#123;</span>  
<span class="line">                        <span class="keyword">return</span> arg0;</span>  
<span class="line">                    &#125;</span>  
<span class="line">                &#125;</span>  
<span class="line">                func = func.caller;</span>  
<span class="line">            &#125;</span>  
<span class="line">            <span class="keyword">return</span> <span class="literal">null</span>;</span>  
<span class="line">        &#125;</span>  
<span class="line">        <span class="keyword">var</span> __is_ff = (navigator.userAgent.indexOf(<span class="string">"Firefox"</span>) != <span class="number">-1</span>); <span class="comment">//Firefox </span></span>  
<span class="line">        <span class="function"><span class="keyword">function</span> <span class="title">getMouseLocation</span>(<span class="params"></span>) </span>&#123;</span>  
<span class="line">            <span class="keyword">var</span> e = getEvent();</span>  
<span class="line">            <span class="keyword">var</span> mouseX = <span class="number">0</span>;</span>  
<span class="line">            <span class="keyword">var</span> mouseY = <span class="number">0</span>;</span>  
<span class="line">            <span class="keyword">if</span> (__is_ff) &#123;</span>  
<span class="line">                mouseX = e.layerX + <span class="built_in">document</span>.body.scrollLeft;</span>  
<span class="line">                mouseY = e.layerY + <span class="built_in">document</span>.body.scrollLeft;</span>  
<span class="line">            &#125;</span>  
<span class="line">            <span class="keyword">else</span> &#123;</span>  
<span class="line">                mouseX = e.x + <span class="built_in">document</span>.body.scrollLeft;</span>  
<span class="line">                mouseY = e.y + <span class="built_in">document</span>.body.scrollTop;</span>  
<span class="line">            &#125;</span>  
<span class="line">            <span class="keyword">return</span> &#123; <span class="attr">x</span>: mouseX, <span class="attr">y</span>: mouseY &#125;;</span>  
<span class="line">        &#125;</span>  
<span class="line">        <span class="comment">//调用的方法，弹出当前所在页面的位置</span></span>  
<span class="line">        <span class="function"><span class="keyword">function</span> <span class="title">show</span>(<span class="params"></span>) </span>&#123;</span>  
<span class="line">            <span class="keyword">var</span> test = getMouseLocation();</span>  
<span class="line">            alert(test.x + <span class="string">":"</span> + test.y);</span>  
<span class="line">        &#125;</span>  
</pre></td></tr></table></figure>

[js获取鼠标当前所在页面位置 - wboweb - 博客园](http://www.cnblogs.com/wangbogo/archive/2012/08/23/2651841.html).
<!-- rebuild by neat -->