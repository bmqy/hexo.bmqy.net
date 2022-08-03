---
layout: post
title: 简单的jquery滑动门代码
tags:
  - jquery
  - jquery滑动门
  - js滑动门
  - 燕衔春泥
abbrlink: 1490
date: 2015-08-19 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:16 GMT+0800 (中国标准时间) -->

简单的jquery滑动门代码，收来以备不时之需。  
html代码  

<figure class="highlight html"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">ul</span> <span class="attr">id</span>=<span class="string">"jq_hdm"</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">li</span> <span class="attr">class</span>=<span class="string">"active"</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">h3</span>></span>111111111111111111111<span class="tag"></<span class="name">h3</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">p</span>></span>222222222222222222222222222222222222222<span class="tag"></<span class="name">p</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">h3</span>></span>111111111111111111111<span class="tag"></<span class="name">h3</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">p</span>></span>222222222222222222222222222222222222222<span class="tag"></<span class="name">p</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">h3</span>></span>111111111111111111111<span class="tag"></<span class="name">h3</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">p</span>></span>222222222222222222222222222222222222222<span class="tag"></<span class="name">p</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">h3</span>></span>111111111111111111111<span class="tag"></<span class="name">h3</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">p</span>></span>222222222222222222222222222222222222222<span class="tag"></<span class="name">p</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">h3</span>></span>111111111111111111111<span class="tag"></<span class="name">h3</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">p</span>></span>222222222222222222222222222222222222222<span class="tag"></<span class="name">p</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">li</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">ul</span>></span></span>  
</pre></td></tr></table></figure>

js代码  

<figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
</pre></td><td class="code"><pre><span class="line">$(<span class="function"><span class="keyword">function</span>(<span class="params"></span>)</span>&#123;</span>  
<span class="line">   $(<span class="string">"#jq_hdm li"</span>).each(<span class="function"><span class="keyword">function</span>(<span class="params"></span>)</span>&#123;</span>  
<span class="line">      $(<span class="keyword">this</span>).mouseover(</span>  
<span class="line">         <span class="function"><span class="keyword">function</span>(<span class="params"></span>)</span>&#123;</span>  
<span class="line">            $(<span class="string">"#jq_hdm li.active"</span>).removeClass(<span class="string">"active"</span>);</span>  
<span class="line">            $(<span class="keyword">this</span>).addClass(<span class="string">"active"</span>);</span>  
<span class="line">      &#125;);</span>  
<span class="line">   &#125;);</span>  
<span class="line">&#125;);</span>  
</pre></td></tr></table></figure><!-- rebuild by neat -->