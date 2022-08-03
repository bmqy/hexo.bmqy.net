---
layout: post
title: echarts中tooltips自定义数据结构与样式
tags:
  - ECharts
  - ECharts的tooltips
  - tooltips自定义
  - 清学小记
abbrlink: 1458
date: 2017-06-21 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) --><font color="#0070c0">直接上代码：</font>  
<font color="#0070c0">1、css样式代码</font><figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="selector-class">.myEchartsTooltips</span>&#123;</span>  
<span class="line">  <span class="attribute">width</span>: <span class="number">180px</span>;</span>  
<span class="line">  <span class="attribute">padding</span>: <span class="number">0</span> <span class="meta">!important</span>;</span>  
<span class="line">  <span class="attribute">opacity</span>: <span class="number">0.8</span>;</span>  
<span class="line">  <span class="attribute">border-radius</span>: <span class="number">5px</span> <span class="meta">!important</span>;</span>  
<span class="line">  <span class="attribute">font-size</span>: <span class="number">12px</span> <span class="meta">!important</span>;</span>  
<span class="line">  <span class="attribute">color</span>: <span class="number">#666</span> <span class="meta">!important</span>; </span>  
<span class="line">  <span class="attribute">box-shadow</span>: <span class="number">0</span> <span class="number">0</span> <span class="number">3px</span> <span class="built_in">rgba</span>(0, 0, 0, 0.5);</span>  
<span class="line">&#125;</span>  
<span class="line"><span class="selector-class">.myEchartsTooltips</span> <span class="selector-class">.echartsTooltipsWarp-head</span>&#123;</span>  
<span class="line">  <span class="attribute">padding</span>: <span class="number">5px</span> <span class="number">10px</span>;</span>  
<span class="line">  <span class="attribute">background-color</span>: <span class="number">#eee</span>;</span>  
<span class="line">  <span class="attribute">border-bottom</span>: <span class="number">1px</span> solid <span class="number">#e6e6e6</span>;</span>  
<span class="line">  <span class="attribute">overflow</span>: hidden;</span>  
<span class="line">&#125;</span>  
<span class="line"><span class="selector-class">.myEchartsTooltips</span> <span class="selector-class">.echartsTooltipsWarp-body</span>&#123;</span>  
<span class="line">  <span class="attribute">padding</span>: <span class="number">0</span> <span class="number">10px</span>;</span>  
<span class="line">  <span class="attribute">background-color</span>: <span class="number">#fff</span>;</span>  
<span class="line">  <span class="attribute">overflow</span>: hidden;</span>  
<span class="line">&#125;</span>  
<span class="line"><span class="selector-class">.myEchartsTooltips</span> <span class="selector-class">.echartsTooltipsWarp-body</span> <span class="selector-tag">p</span>&#123;</span>  
<span class="line">  <span class="attribute">overflow</span>: hidden;</span>  
<span class="line">  <span class="attribute">line-height</span>: <span class="number">30px</span>;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure><font color="#0070c0">2、js代码（ <font color="red">主要是通过对dom的控制，实现数据结构与样式的自定义</font>）</font><figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line">tooltip: &#123;</span>  
<span class="line">                trigger: <span class="string">'axis'</span>,</span>  
<span class="line">                position: <span class="function"><span class="keyword">function</span> (<span class="params">pos, params, dom, rect, size</span>) </span>&#123;</span>  
<span class="line">                    <span class="built_in">console</span>.log(params);</span>  
<span class="line">                    <span class="keyword">var</span> sHtml = <span class="string">''</span>;</span>  
<span class="line">                    <span class="keyword">var</span> _tempHtml = <span class="string">''</span>;</span>  
<span class="line">                    <span class="keyword">for</span>(<span class="keyword">var</span> i=<span class="number">0</span>;i<params.length;i++)&#123;</span>  
<span class="line">                        <span class="keyword">var</span> sName = params[i].name<<span class="number">10</span> ? <span class="string">'0'</span> + params[i].name : params[i].name;</span>  
<span class="line">                        <span class="keyword">var</span> iVal = params[i].value==<span class="number">0</span> ? <span class="string">'--'</span> : params[i].value;</span>  
<span class="line">                        <span class="keyword">var</span> sSeriesName = params[i].seriesName;</span>  
<span class="line"></span>  
<span class="line">                        _tempHtml += <span class="string">'<p><span class="pull-left">'</span>+ sSeriesName +<span class="string">'</span><span class="pull-right">'</span>+ iVal +<span class="string">'</span></p>'</span></span>  
<span class="line">                    &#125;</span>  
<span class="line">                    sHtml = <span class="string">'<div class="echartsTooltipsWarp-head"><span class="pull-left">'</span>+ sName +<span class="string">':00 - '</span>+ sName +<span class="string">':59 '</span> +<span class="string">'</span><span class="pull-right">'</span>+ option.title.text +<span class="string">'</span></div><div class="echartsTooltipsWarp-body">'</span>+ _tempHtml +<span class="string">'</div>'</span>;</span>  
<span class="line">                    $(dom).addClass(<span class="string">'myEchartsTooltips'</span>).html(sHtml);<span class="comment">// 通过对dom的控制，实现数据结构与样式的自定义</span></span>  
<span class="line">                &#125;</span>  
<span class="line">            &#125;,</span>  
</pre></td></tr></table></figure><!-- rebuild by neat -->