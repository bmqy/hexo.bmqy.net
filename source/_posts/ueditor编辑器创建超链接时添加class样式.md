---
layout: post
title: ueditor编辑器创建超链接时添加class样式
tags:
  - ueditor
  - 添加class样式
  - 清学小记
  - 超链接
abbrlink: 1524
date: 2014-12-18 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

在使用"ueditor"编辑文本时，为了在创建超链接时，给所有需要创建的链接加上同样的class样式，图方便不能每次都去html模式编辑，所以最好的办法就是在创建超链接时，有个选项：选择就添加class样式，否则就不添加。那么步骤如下：

1、打开ueditor编辑器目录"ueditor\dialogs\link"里的link.html文件；

2、找到以下3处代码并编辑：  

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
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">tr</span>></span></span>  
<span class="line">     <span class="tag"><<span class="name">td</span> <span class="attr">colspan</span>=<span class="string">"2"</span>></span></span>  
<span class="line">         <span class="tag"><<span class="name">label</span> <span class="attr">for</span>=<span class="string">"target"</span>></span><span class="tag"><<span class="name">var</span> <span class="attr">id</span>=<span class="string">"lang_input_target"</span>></span><span class="tag"></<span class="name">var</span>></span><span class="tag"></<span class="name">label</span>></span></span>  
<span class="line">         <span class="tag"><<span class="name">input</span> <span class="attr">id</span>=<span class="string">"target"</span> <span class="attr">type</span>=<span class="string">"checkbox"/</span>></span></span>  
<span class="line">     <span class="tag"></<span class="name">td</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">tr</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">!-此处编辑为你想要显示的信息</span>  -></span></span>  
<span class="line"><span class="tag"><<span class="name">tr</span>></span></span>  
<span class="line">    <span class="tag"><<span class="name">td</span> <span class="attr">colspan</span>=<span class="string">"2"</span>></span></span>  
<span class="line">        <span class="tag"><<span class="name">label</span> <span class="attr">for</span>=<span class="string">"class"</span>></span>添加class样式：<span class="tag"></<span class="name">label</span>></span></span>  
<span class="line">        <span class="tag"><<span class="name">input</span> <span class="attr">id</span>=<span class="string">"class"</span> <span class="attr">type</span>=<span class="string">"checkbox"/</span>></span></span>  
<span class="line">    <span class="tag"></<span class="name">td</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">tr</span>></span></span>  
<span class="line"><span class="tag"><<span class="name">!-此处编辑为你想要显示的信息</span>  -></span></span>  
<span class="line"><span class="tag"><<span class="name">tr</span>></span></span>  
<span class="line">    <span class="tag"><<span class="name">td</span> <span class="attr">colspan</span>=<span class="string">"2"</span> <span class="attr">id</span>=<span class="string">"msg"</span>></span><span class="tag"></<span class="name">td</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">tr</span>></span></span>  
</pre></td></tr></table></figure><figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
</pre></td><td class="code"><pre><span class="line">$G("title").value = url ? link.title : "";</span>  
<span class="line">$G("href").value = url ? url: '';</span>  
<span class="line">$G("target").checked = url && link.target == "_blank" ? <span class="literal">true</span> :  <span class="literal">false</span>;</span>  
<span class="line"><span class="comment">//判断是否选中</span></span>  
<span class="line">$G("<span class="class"><span class="keyword">class</span>").<span class="title">checked</span> </span>= url && link.className == "样式名" ? <span class="literal">true</span> :  <span class="literal">false</span>;</span>  
<span class="line">$focus($G("href"));</span>  
</pre></td></tr></table></figure><figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">var</span> obj = &#123;</span>  
<span class="line">    <span class="string">'href'</span> : href,</span>  
<span class="line">    <span class="string">'target'</span> : $G(<span class="string">'target'</span>).checked ? <span class="string">'_blank'</span> : <span class="string">'_self'</span>,</span>  
<span class="line">    <span class="string">'title'</span> : $G(<span class="string">'title'</span>).value.replace(<span class="regexp">/^\s+'\s+$/g</span>, <span class="string">''</span>),</span>  
<span class="line">    <!-选中则添加样式，否则不添加  -></span>  
<span class="line">    <span class="string">'class'</span> : $G(<span class="string">'class'</span>).checked ? <span class="string">'样式名'</span><span class="string">' : '</span><span class="string">'</span></span>  
<span class="line"><span class="string">    <!-选中则添加样式，否则不添加  -></span></span>  
<span class="line"><span class="string">&#125;;</span></span>  
</pre></td></tr></table></figure>

3、编辑完成之后，打开demo.html，再创建超链接，就会有图中所示效果了。如果没有效果，请清空浏览器缓存后刷新再试。

![ueditor创建超链接时添加class样式](http://ww1.sinaimg.cn/large/4eed32f2jw1endqya2entj20li0e2q4o.jpg "ueditor创建超链接时添加class样式")

![ueditor创建超链接时添加class样式](http://ww2.sinaimg.cn/large/4eed32f2jw1endqyc03x8j20rm08u75r.jpg "ueditor创建超链接时添加class样式")

**<span style="color:#00f">原创文章，转载请注明出处，thankyou。。。</span>**
<!-- rebuild by neat -->