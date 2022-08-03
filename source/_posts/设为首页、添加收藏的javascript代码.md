---
layout: post
title: 设为首页、添加收藏的javascript代码
tags:
  - javascript
  - 添加收藏
  - 清学小记
  - 设为首页
abbrlink: 1492
date: 2015-07-28 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:16 GMT+0800 (中国标准时间) --><figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="comment">//加入收藏</span></span>  
<span class="line"><span class="function"><span class="keyword">function</span> <span class="title">AddFavorite</span>(<span class="params"></span>) </span>&#123;</span>  
<span class="line">sTitle = <span class="built_in">window</span>.location.href;</span>  
<span class="line">sURL = <span class="built_in">encodeURI</span>(<span class="built_in">window</span>.location.href);</span>  
<span class="line"><span class="keyword">try</span>&#123;</span>  
<span class="line"><span class="built_in">window</span>.external.addFavorite(sURL, sTitle);</span>  
<span class="line">&#125;<span class="keyword">catch</span>(e) &#123;</span>  
<span class="line"><span class="keyword">try</span>&#123;</span>  
<span class="line"><span class="built_in">window</span>.sidebar.addPanel(sTitle, sURL, <span class="string">""</span>);</span>  
<span class="line">&#125;<span class="keyword">catch</span> (e) &#123;</span>  
<span class="line">alert(<span class="string">"加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置."</span>);</span>  
<span class="line">&#125;</span>  
<span class="line">&#125;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="comment">//设为首页</span></span>  
<span class="line"><span class="function"><span class="keyword">function</span> <span class="title">SetHome</span>(<span class="params"></span>)</span>&#123;</span>  
<span class="line"><span class="keyword">var</span> url = <span class="built_in">window</span>.location.href;</span>  
<span class="line"><span class="keyword">if</span> (<span class="built_in">document</span>.all) &#123;</span>  
<span class="line"><span class="built_in">document</span>.body.style.behavior=<span class="string">'url(#default#homepage)'</span>;</span>  
<span class="line"><span class="built_in">document</span>.body.setHomePage(url);</span>  
<span class="line">&#125;<span class="keyword">else</span>&#123;</span>  
<span class="line">alert(<span class="string">"您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!"</span>);</span>  
<span class="line">&#125;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure><figure class="highlight html"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">a</span> <span class="attr">class</span>=<span class="string">"shou"</span> <span class="attr">onclick</span>=<span class="string">"AddFavorite();"</span>></span>添加收藏<span class="tag"></<span class="name">a</span>></span></span>  
<span class="line"></span>  
<span class="line"><span class="tag"><<span class="name">a</span> <span class="attr">class</span>=<span class="string">"home"</span> <span class="attr">onclick</span>=<span class="string">"SetHome();"</span>></span>设为首页<span class="tag"></<span class="name">a</span>></span></span>  
</pre></td></tr></table></figure><!-- rebuild by neat -->