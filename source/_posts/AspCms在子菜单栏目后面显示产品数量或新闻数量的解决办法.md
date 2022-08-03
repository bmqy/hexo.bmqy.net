---
layout: post
title: AspCms在子菜单栏目后面显示产品数量或新闻数量的解决办法
tags:
  - aspcms
  - 燕衔春泥
  - 调用栏目中文章数量
abbrlink: 56035
date: 2015-01-11 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

有时候我们需要在产品栏目后面显示出该栏目下有多少产品，或者新闻栏目下有多少条新闻。例如子页面导航为产品总分类（18）产品分类一（10）产品分类二（3）产品分类三（5）数字代表该栏目下有多少产品。以下内容是模拟显示产品数量的解决办法。  
此文仅提供解决思路，如果使用以下代码有问题，还需自行修改。  
打开inc/AspCms_MainClass.asp在479行左右找到  

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
<span class="line">11</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">for</span> each matchfield in matchesfield</span>  
<span class="line">fieldNameAndAttr=regExpReplace(matchfield.SubMatches(<span class="number">0</span>),<span class="string">"[\s]+"</span>,chr(<span class="number">32</span>))</span>  
<span class="line">fieldNameAndAttr=trimOuter(fieldNameAndAttr)</span>  
<span class="line">m=instr(fieldNameAndAttr,chr(<span class="number">32</span>))</span>  
<span class="line"><span class="keyword">if</span> m > <span class="number">0</span> then </span>  
<span class="line">fieldName=left(fieldNameAndAttr,m - <span class="number">1</span>)</span>  
<span class="line">fieldAttr = right(fieldNameAndAttr,len(fieldNameAndAttr) - m)</span>  
<span class="line"><span class="keyword">else</span></span>  
<span class="line">fieldName=fieldNameAndAttr</span>  
<span class="line">fieldAttr = <span class="string">""</span></span>  
<span class="line">end <span class="keyword">if</span></span>  
</pre></td></tr></table></figure>

在下面加入  

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
<span class="line">11</span>  
<span class="line">12</span>  
<span class="line">13</span>  
<span class="line">14</span>  
<span class="line">15</span>  
<span class="line">16</span>  
<span class="line">17</span>  
<span class="line">18</span>  
</pre></td><td class="code"><pre><span class="line">dim selsortid,contotal,contype,newstotal,prototal,downtotal,pictotal,total</span>  
<span class="line">selsortid=linkArray(<span class="number">3</span>,i)</span>  
<span class="line">set contype=conn.Exec(<span class="string">"select sortType from &#123;prefix&#125;Sort where sortID="</span>&selsortid,<span class="string">"r1"</span>)</span>  
<span class="line">set contotal=conn.Exec(<span class="string">"select count (*) from &#123;prefix&#125;Content where sortID="</span>&selsortid,<span class="string">"r1"</span>)</span>  
<span class="line"><span class="keyword">if</span> contype(<span class="number">0</span>)=<span class="number">1</span> <span class="keyword">or</span> contype(<span class="number">0</span>)=<span class="number">7</span> then </span>  
<span class="line"> alertMsgAndGo contype(<span class="number">0</span>),<span class="string">"-1"</span></span>  
<span class="line"><span class="keyword">else</span></span>  
<span class="line">set total=conn.Exec(<span class="string">"select count (*) from &#123;prefix&#125;Content as c,&#123;prefix&#125;Sort as s where c.sortID="</span>&selsortid&<span class="string">" and c.sortid=s.sortid and s.sortType="</span>&contype(<span class="number">0</span>),<span class="string">"r1"</span>)</span>  
<span class="line">end <span class="keyword">if</span></span>  
<span class="line"><span class="keyword">if</span> contype(<span class="number">0</span>)=<span class="number">2</span> then </span>  
<span class="line">newstotal=total(<span class="number">0</span>)</span>  
<span class="line"><span class="keyword">elseif</span> contype(<span class="number">0</span>)=<span class="number">3</span> then </span>  
<span class="line">prototal=total(<span class="number">0</span>)</span>  
<span class="line"><span class="keyword">elseif</span> contype(<span class="number">0</span>)=<span class="number">4</span> then </span>  
<span class="line">downtotal=total(<span class="number">0</span>)</span>  
<span class="line"><span class="keyword">elseif</span> contype(<span class="number">0</span>)=<span class="number">6</span> then </span>  
<span class="line">pictotal=total(<span class="number">0</span>)</span>  
<span class="line">end <span class="keyword">if</span></span>  
</pre></td></tr></table></figure>

然后在select case fieldName里面加入  

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
</pre></td><td class="code"><pre><span class="line"><span class="keyword">case</span> <span class="string">"total"</span></span>  
<span class="line">loopstrLinklistNew=replaceStr(loopstrLinklistNew,matchfield.value,contotal(<span class="number">0</span>))</span>  
<span class="line"><span class="keyword">case</span> <span class="string">"newstotal"</span></span>  
<span class="line">loopstrLinklistNew=replaceStr(loopstrLinklistNew,matchfield.value,newstotal)</span>  
<span class="line"><span class="keyword">case</span> <span class="string">"prototal"</span></span>  
<span class="line">loopstrLinklistNew=replaceStr(loopstrLinklistNew,matchfield.value,prototal)</span>  
<span class="line"><span class="keyword">case</span> <span class="string">"downtotal"</span></span>  
<span class="line">loopstrLinklistNew=replaceStr(loopstrLinklistNew,matchfield.value,downtotal)</span>  
<span class="line"><span class="keyword">case</span> <span class="string">"pictotal"</span></span>  
<span class="line">loopstrLinklistNew=replaceStr(loopstrLinklistNew,matchfield.value,pictotal)</span>  
</pre></td></tr></table></figure>

前台调用代码在各页面的栏目循环中加入：新闻：[navlist:newstotal] 产品：[navlist:prostotal] 下载：[navlist:downtotal] 图片：[navlist:pictotal] 不区分分类[navlist:total]

通过 [AspCms在子菜单栏目后面显示产品数量或新闻数量的解决办法 _乐知心觉_新浪博客](http://blog.sina.com.cn/s/blog_4a64b49c0101f3g8.html).
<!-- rebuild by neat -->