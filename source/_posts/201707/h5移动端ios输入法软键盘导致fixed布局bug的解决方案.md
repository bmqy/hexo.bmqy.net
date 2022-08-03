---
layout: post
title: h5移动端ios输入法软键盘导致fixed布局bug的解决方案
tags:
  - fixed布局bug
  - h5移动端
  - ios输入法软键盘
  - 清学小记
  - 燕衔春泥
abbrlink: 48890
date: 2017-07-28 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

移动端业务开发，iOS 下经常会有 fixed 元素和输入框(input 元素)同时存在的情况。 但是 fixed 元素在有软键盘唤起的情况下，会出现许多莫名其妙的问题。 这篇文章里就提供一个简单的有输入框情况下的 fixed 布局方案。

* * *

### [](#iOS下的-Fixed-Input-BUG现象 "iOS下的 Fixed + Input BUG现象")iOS下的 Fixed + Input BUG现象

让我们先举个栗子，最直观的说明一下这个 BUG 的现象。 常规的 fixed 布局，可能使用如下布局（以下仅示意代码）：  

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
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">body</span> <span class="attr">class</span>=<span class="string">"layout-fixed"</span>></span></span>  
<span class="line">    <span class="comment"><!-- fixed定位的头部 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">header</span>></span></span>  
<span class="line">        </span>  
<span class="line">    <span class="tag"></<span class="name">header</span>></span></span>  
<span class="line">    </span>  
<span class="line">    <span class="comment"><!-- 可以滚动的区域 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">main</span>></span></span>  
<span class="line">        <span class="comment"><!-- 内容在这里... --></span></span>  
<span class="line">    <span class="tag"></<span class="name">main</span>></span></span>  
<span class="line">    </span>  
<span class="line">    <span class="comment"><!-- fixed定位的底部 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">footer</span>></span></span>  
<span class="line">        <span class="tag"><<span class="name">input</span> <span class="attr">type</span>=<span class="string">"text"</span> <span class="attr">placeholder</span>=<span class="string">"Footer..."</span>/></span></span>  
<span class="line">        <span class="tag"><<span class="name">button</span> <span class="attr">class</span>=<span class="string">"submit"</span>></span>提交<span class="tag"></<span class="name">button</span>></span></span>  
<span class="line">    <span class="tag"></<span class="name">footer</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">body</span>></span></span>  
</pre></td></tr></table></figure>

对应的样式如下：  

<figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="selector-tag">header</span>, <span class="selector-tag">footer</span>, <span class="selector-tag">main</span> &#123;</span>  
<span class="line">    <span class="attribute">display</span>: block;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">header</span> &#123;</span>  
<span class="line">    <span class="attribute">position</span>: fixed;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">50px</span>;</span>  
<span class="line">    <span class="attribute">left</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">right</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">top</span>: <span class="number">0</span>;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">footer</span> &#123;</span>  
<span class="line">    <span class="attribute">position</span>: fixed;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">34px</span>;</span>  
<span class="line">    <span class="attribute">left</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">right</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">bottom</span>: <span class="number">0</span>;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">main</span> &#123;</span>  
<span class="line">    <span class="attribute">margin-top</span>: <span class="number">50px</span>;</span>  
<span class="line">    <span class="attribute">margin-bottom</span>: <span class="number">34px</span>;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">2000px</span></span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

然后看起来就是下面这个样子。拖动页面时 header 和 footer 已经定位在了对应的位置，目测没问题了。  
![fixed定位](http://image.bmqy.net/uploads/2017/28/fixed.png)  
但接下来问题就来了！如果底部输入框软键盘被唤起以后，再次滑动页面，就会看到如下图所示：  
![fixed定位](http://image.bmqy.net/uploads/2017/28/fixed_bug_0.png) ![fixed定位](http://image.bmqy.net/uploads/2017/28/fixed_bug_1.png)

我们看到 fixed 定位好的元素跟随页面滚动了起来... fixed 属性失效了！

这是为什么呢？简单解释下： > **软键盘唤起后，页面的 fixed 元素将失效（即无法浮动，也可以理解为变成了 absolute 定位），所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。**

这便是 iOS 上 fixed 元素和输入框的 bug 。其中不仅限于 `type=text` 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。

* * *

虽然 `isScroll.js` 可以很好的解决 fixed 定位滚动的问题，但是不在万不得已的情况下，我们尽量尝试一下不依赖第三方库的布局方案，以简化实现方式。这里抛砖引玉作为参考。

### [](#解决思路： "解决思路：")解决思路：

既然在 iOS 下由于软键盘唤出后，页面 fixed 元素会失效，导致跟随页面一起滚动，那么 **假如--页面不会过长出现滚动，那么即便 fixed 元素失效，也无法跟随页面滚动，也就不会出现上面的问题了**。

那么按照这个思路，如果使 fixed 元素的父级不出现滚动，而将原 body 滚动的区域域移到 main 内部，而 header 和 footer 的样式不变，代码如下：  

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
</pre></td><td class="code"><pre><span class="line"><span class="tag"><<span class="name">body</span> <span class="attr">class</span>=<span class="string">"layout-scroll-fixed"</span>></span></span>  
<span class="line">    <span class="comment"><!-- fixed定位的头部 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">header</span>></span></span>  
<span class="line">        </span>  
<span class="line">    <span class="tag"></<span class="name">header</span>></span></span>  
<span class="line">    </span>  
<span class="line">    <span class="comment"><!-- 可以滚动的区域 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">main</span>></span></span>  
<span class="line">        <span class="tag"><<span class="name">div</span> <span class="attr">class</span>=<span class="string">"content"</span>></span></span>  
<span class="line">        <span class="comment"><!-- 内容在这里... --></span></span>  
<span class="line">        <span class="tag"></<span class="name">div</span>></span></span>  
<span class="line">    <span class="tag"></<span class="name">main</span>></span></span>  
<span class="line">    </span>  
<span class="line">    <span class="comment"><!-- fixed定位的底部 --></span></span>  
<span class="line">    <span class="tag"><<span class="name">footer</span>></span></span>  
<span class="line">        <span class="tag"><<span class="name">input</span> <span class="attr">type</span>=<span class="string">"text"</span> <span class="attr">placeholder</span>=<span class="string">"Footer..."</span>/></span></span>  
<span class="line">        <span class="tag"><<span class="name">button</span> <span class="attr">class</span>=<span class="string">"submit"</span>></span>提交<span class="tag"></<span class="name">button</span>></span></span>  
<span class="line">    <span class="tag"></<span class="name">footer</span>></span></span>  
<span class="line"><span class="tag"></<span class="name">body</span>></span></span>  
</pre></td></tr></table></figure><figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="selector-tag">header</span>, <span class="selector-tag">footer</span>, <span class="selector-tag">main</span> &#123;</span>  
<span class="line">    <span class="attribute">display</span>: block;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">header</span> &#123;</span>  
<span class="line">    <span class="attribute">position</span>: fixed;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">50px</span>;</span>  
<span class="line">    <span class="attribute">left</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">right</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">top</span>: <span class="number">0</span>;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">footer</span> &#123;</span>  
<span class="line">    <span class="attribute">position</span>: fixed;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">34px</span>;</span>  
<span class="line">    <span class="attribute">left</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">right</span>: <span class="number">0</span>;</span>  
<span class="line">    <span class="attribute">bottom</span>: <span class="number">0</span>;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">main</span> &#123;</span>  
<span class="line">    <span class="comment">/* main绝对定位，进行内部滚动 */</span></span>  
<span class="line">    <span class="attribute">position</span>: absolute;</span>  
<span class="line">    <span class="attribute">top</span>: <span class="number">50px</span>;</span>  
<span class="line">    <span class="attribute">bottom</span>: <span class="number">34px</span>;</span>  
<span class="line">    <span class="comment">/* 使之可以滚动 */</span></span>  
<span class="line">    <span class="attribute">overflow-y</span>: scroll;</span>  
<span class="line">&#125;</span>  
<span class="line"></span>  
<span class="line"><span class="selector-tag">main</span> <span class="selector-class">.content</span> &#123;</span>  
<span class="line">    <span class="attribute">height</span>: <span class="number">2000px</span>;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

这样再来看一下：

![fixed定位](http://image.bmqy.net/uploads/2017/28/fixed_scroll_0.png)

在原始输入法下， fixed 元素可以定位在页面的正确位置。滚动页面时，由于滚动的是 main 内部的 div，因此 footer 没有跟随页面滚动。

上面貌似解决了问题，但是如果在手机上实际测试一下，会发现 main 元素内的滚动非常不流畅，滑动的手指松开后，滚动立刻停止，失去了原本的流畅滚动特性。百度一下弹性滚动的问题，发现在 `webkit` 中，下面的属性可以恢复弹性滚动。
> -webkit-overflow-scrolling: touch;

在 main 元素上加上该属性，嗯，丝般顺滑的感觉又回来了！  

<figure class="highlight css"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
<span class="line">9</span>  
<span class="line">10</span>  
</pre></td><td class="code"><pre><span class="line"><span class="selector-tag">main</span> &#123;</span>  
<span class="line">    <span class="comment">/* main绝对定位，进行内部滚动 */</span></span>  
<span class="line">    <span class="attribute">position</span>: absolute;</span>  
<span class="line">    <span class="attribute">top</span>: <span class="number">50px</span>;</span>  
<span class="line">    <span class="attribute">bottom</span>: <span class="number">34px</span>;</span>  
<span class="line">    <span class="comment">/* 使之可以滚动 */</span></span>  
<span class="line">    <span class="attribute">overflow-y</span>: scroll;</span>  
<span class="line">    <span class="comment">/* 增加该属性，可以增加弹性 */</span></span>  
<span class="line">    <span class="attribute">-webkit-overflow-scrolling</span>: touch;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

另外，这里的 header 和 footer 使用的是 fixed 定位，如果考虑到更老一些的 iOS 系统不支持 fixed 元素，完全可以把 fixed 替换成 absolute 。测试后效果是一样的。

至此一个不依赖第三方库的 fixed 布局就完成了。

* * *

### [](#Android-下布局 "Android 下布局")Android 下布局

谈到了 iOS ，也来简单说一下 Android 下的布局吧。

在 Android2.3+ 中，因为不支持 overflow-scrolling ，因此部分浏览器内滚动会有不流畅的卡顿。但是目前发现在 body 上的滚动还是很流畅的，因此使用第一种在 iOS 出现问题的 fixed 定位的布局就可以了。

如果需要考虑 Android2.3 以下系统，因为不支持 fixed 元素，所以依然要需要考虑使用 `isScroll.js` 来实现内部滚动。

其实在 fixed 和输入框的问题上，基本思路就是： > 由于 fixed 在软键盘唤起后会失效，导致在页面可以滚动时，会跟随页面一起滚动。因此如果页面无法滚动，那么 fixed 元素即使失效，也不会滚动，也就不会出现 bug 了。

所以可以在这个方面去考虑解决问题。

* * *

### [](#其他的一些细节处理 "其他的一些细节处理")其他的一些细节处理

在细节处理上，其实还有很多要注意的，挑几个实际遇到比较大的问题来说一下：

1.  有时候输入框 focus 以后，会出现软键盘遮挡输入框的情况，这时候可以尝试 input 元素的 scrollIntoView 进行修复。
2.  在 iOS 下使用第三方输入法时，输入法在唤起经常会盖住输入框，只有在输入了一条文字后，输入框才会浮出。目前也不知道有什么好的办法能让唤起输入框时正确显示。这暂时算是 iOS 下的一个坑吧。
3.  有些第三方浏览器底部的工具栏是浮在页面之上的，因此底部 fixed 定位会被工具栏遮挡。解决办法也比较简单粗暴--适配不同的浏览器，调整 fixed 元素距离底部的距离。
4.  最好将 header 和 footer 元素的 touchmove 事件禁止，以防止滚动在上面触发了部分浏览器全屏模式切换，而导致顶部地址栏和底部工具栏遮挡住 header 和 footer 元素。
5.  在页面滚动到上下边缘的时候，如果继续拖拽会将整个 View 一起拖拽走，导致页面的"露底"。
![fixed定位](http://image.bmqy.net/uploads/2017/28/fixed_pull_over.png)

为了防止页面露底，可以在页面拖拽到边缘的时候，通过判断拖拽方向以及是否为边缘来阻止 touchmove 事件，防止页面继续拖拽。

以上面内滚动 `layout-scroll-fixed` 布局为例，给出一段代码作为参考：  

<figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="comment">// 防止内容区域滚到底后引起页面整体的滚动</span></span>  
<span class="line"><span class="keyword">var</span> content = <span class="built_in">document</span>.querySelector(<span class="string">'main'</span>);</span>  
<span class="line"><span class="keyword">var</span> startY;</span>  
<span class="line"></span>  
<span class="line">content.addEventListener(<span class="string">'touchstart'</span>, <span class="function"><span class="keyword">function</span> (<span class="params">e</span>) </span>&#123;</span>  
<span class="line">    startY = e.touches[<span class="number">0</span>].clientY;</span>  
<span class="line">&#125;);</span>  
<span class="line"></span>  
<span class="line">content.addEventListener(<span class="string">'touchmove'</span>, <span class="function"><span class="keyword">function</span> (<span class="params">e</span>) </span>&#123;</span>  
<span class="line">    <span class="comment">// 高位表示向上滚动</span></span>  
<span class="line">    <span class="comment">// 底位表示向下滚动</span></span>  
<span class="line">    <span class="comment">// 1容许 0禁止</span></span>  
<span class="line">    <span class="keyword">var</span> status = <span class="string">'11'</span>;</span>  
<span class="line">    <span class="keyword">var</span> ele = <span class="keyword">this</span>;</span>  
<span class="line"></span>  
<span class="line">    <span class="keyword">var</span> currentY = e.touches[<span class="number">0</span>].clientY;</span>  
<span class="line"></span>  
<span class="line">    <span class="keyword">if</span> (ele.scrollTop === <span class="number">0</span>) &#123;</span>  
<span class="line">        <span class="comment">// 如果内容小于容器则同时禁止上下滚动</span></span>  
<span class="line">        status = ele.offsetHeight >= ele.scrollHeight ? <span class="string">'00'</span> : <span class="string">'01'</span>;</span>  
<span class="line">    &#125; <span class="keyword">else</span> <span class="keyword">if</span> (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) &#123;</span>  
<span class="line">        <span class="comment">// 已经滚到底部了只能向上滚动</span></span>  
<span class="line">        status = <span class="string">'10'</span>;</span>  
<span class="line">    &#125;</span>  
<span class="line"></span>  
<span class="line">    <span class="keyword">if</span> (status != <span class="string">'11'</span>) &#123;</span>  
<span class="line">        <span class="comment">// 判断当前的滚动方向</span></span>  
<span class="line">        <span class="keyword">var</span> direction = currentY - startY > <span class="number">0</span> ? <span class="string">'10'</span> : <span class="string">'01'</span>;</span>  
<span class="line">        <span class="comment">// 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动</span></span>  
<span class="line">        <span class="keyword">if</span> (!(<span class="built_in">parseInt</span>(status, <span class="number">2</span>) & <span class="built_in">parseInt</span>(direction, <span class="number">2</span>))) &#123;</span>  
<span class="line">            stopEvent(e);</span>  
<span class="line">        &#125;</span>  
<span class="line">    &#125;</span>  
<span class="line">&#125;);</span>  
</pre></td></tr></table></figure>

转载自： [http://efe.baidu.com/blog/mobile-fixed-layout/](http://efe.baidu.com/blog/mobile-fixed-layout/)
<!-- rebuild by neat -->