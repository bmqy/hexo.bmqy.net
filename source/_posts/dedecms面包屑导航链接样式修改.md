---
layout: post
title: dedecms面包屑导航链接样式修改
tags:
  - dedecms
  - 清学小记
  - 面包屑导航
abbrlink: 1506
date: 2015-04-01 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">1、去掉或替换面包屑导航中的栏目间隔符号">"；</span>

<del><span style="color:#00f">方法：进入后台管理页面，进入系统→系统基本参数→核心设置→栏目位置的间隔符号，然后随便输入你喜欢的符号或者留空就可以了。</span></del>  
**<span style="color:#00f">注：上述方法会导致页面标题的栏目间隔符号被替换或为空，如果为空则页面标题因为没有间隔符而影响阅读。</span>**  
**<span style="color:#00f">请用以下方法：</span>**  
<span style="color:#00f">1）找到"include"目录里的"typelink.class.php"文件；</span>  
<span style="color:#00f">2）找到"function GetPositionLink($islink=true)"函数中的以下代码：</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">$this</span>->valuePosition = $indexpage.<span class="keyword">$this</span>->SplitSymbol.<span class="keyword">$this</span>->valuePosition;</span>  
<span class="line">  <span class="keyword">return</span> <span class="keyword">$this</span>->valuePosition.<span class="keyword">$this</span>->SplitSymbol;</span>  
</pre></td></tr></table></figure>

<span style="color:#00f">3）将上边代码修改成如下的样子，即：去掉".$this->SplitSymbol"，此为间隔符号；</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">$this</span>->valuePosition = $indexpage.<span class="keyword">$this</span>->valuePosition;</span>  
<span class="line">  <span class="keyword">return</span> <span class="keyword">$this</span>->valuePosition;<span class="comment">//去掉此处的".$this->SplitSymbol"可以使当前栏目或页面后边不带间隔符号</span></span>  
</pre></td></tr></table></figure>

<span style="color:#00f">4）找到"function LogicGetPosition($id,$islink)"函数中的以下代码：</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">$this</span>->valuePosition = <span class="keyword">$this</span>->GetOneTypeLink($tinfos).<span class="keyword">$this</span>->SplitSymbol.<span class="keyword">$this</span>->valuePosition;</span>  
</pre></td></tr></table></figure>

<span style="color:#00f">5）同样去掉以上代码中的".$this->SplitSymbol"即可完成修改。</span>

<span style="color:#00f">2、修改面包屑导航的代码样式；</span>

<span style="color:#00f">比如想要修改成带"li"列表的，或者去掉当前栏目或页面的超链接的，方法如下：</span>

<span style="color:#00f">1）找到"include"目录里的"typelink.class.php"文件；</span>

<span style="color:#00f">2）找到以下代码，然后修改成你想要的样子，比如加上"li"列表标签，或者去掉"a"超链接标签；</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">//获得某类目的链接列表 如：类目一&gt;&gt;类目二&gt;&gt; 这样的形式</span></span>  
<span class="line"><span class="comment">//islink 表示返回的列表是否带连接</span></span>  
<span class="line"><span class="function"><span class="keyword">function</span> <span class="title">GetPositionLink</span><span class="params">($islink=true)</span></span></span>  
<span class="line"><span class="function"></span>&#123;</span>  
<span class="line">$indexpage = <span class="string">"<a href='"</span>.<span class="keyword">$this</span>->indexUrl.<span class="string">"'>"</span>.<span class="keyword">$this</span>->indexName.<span class="string">"</a>"</span>;</span>  
</pre></td></tr></table></figure>

<span style="color:#00f">PS：此处控制的是面包屑导航上层路径的标签；</span>

<span style="color:#00f">3）继续找到以下代码，然后同样修改成你想要的样子，比如加上"li"列表标签，或者去掉"a"超链接标签；</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">//获得某个类目的超链接信息</span></span>  
<span class="line"><span class="function"><span class="keyword">function</span> <span class="title">GetOneTypeLink</span><span class="params">($typeinfos)</span></span>&#123;</span>  
<span class="line">$typepage = <span class="keyword">$this</span>->GetOneTypeUrl($typeinfos);</span>  
<span class="line">$typelink = <span class="string">"<a href='"</span>.$typepage.<span class="string">"'>"</span>.$typeinfos[<span class="string">'typename'</span>].<span class="string">"</a>"</span>;</span>  
<span class="line"><span class="keyword">return</span> $typelink;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

<span style="color:#00f">以上代码可按需修改你想要的面包屑导航样式。</span>

**<span style="color:#00f">原创文章转载请注明出处，thankyou！</span>**
<!-- rebuild by neat -->