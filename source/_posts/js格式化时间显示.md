---
layout: post
title: js格式化时间显示
tags:
  - format
  - js
  - 格式化时间
  - 燕衔春泥
abbrlink: 51511
date: 2017-10-24 00:00:00
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
<span class="line">39</span>  
<span class="line">40</span>  
<span class="line">41</span>  
<span class="line">42</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">if</span> (!<span class="built_in">Date</span>.prototype.format)&#123;</span>  
<span class="line"><span class="built_in">Object</span>.defineProperty(<span class="built_in">Date</span>.prototype, <span class="string">"format"</span>, &#123;</span>  
<span class="line">        value: <span class="built_in">Date</span>.prototype.format = <span class="function"><span class="keyword">function</span> (<span class="params">fmt</span>) </span>&#123;</span>  
<span class="line"><span class="keyword">var</span> week = [<span class="string">'Sunday'</span>, <span class="string">'Monday'</span>, <span class="string">'Tuesday'</span>, <span class="string">'Wednesday'</span>, <span class="string">'Thursday'</span>, <span class="string">'Friday'</span>, <span class="string">'Saturday'</span>];</span>  
<span class="line"><span class="keyword">var</span> weekShortName = [<span class="string">'Sun'</span>, <span class="string">'Mon'</span>, <span class="string">'Tues'</span>, <span class="string">'Wed'</span>, <span class="string">'Thurs'</span>, <span class="string">'Fri'</span>, <span class="string">'Sat'</span>];</span>  
<span class="line"><span class="keyword">var</span> month = [<span class="string">"December"</span>, <span class="string">"January"</span>, <span class="string">"February"</span>, <span class="string">"March"</span>, <span class="string">"April"</span>, <span class="string">"May"</span>, <span class="string">"June"</span>, <span class="string">"July"</span>, <span class="string">"August"</span>, <span class="string">"September"</span>, <span class="string">"October"</span>, <span class="string">"November"</span>]</span>  
<span class="line"><span class="keyword">var</span> monthShortName = [<span class="string">"Dec"</span>, <span class="string">"Jan"</span>, <span class="string">"Feb"</span>, <span class="string">"Mar"</span>, <span class="string">"Apr"</span>, <span class="string">"May"</span>, <span class="string">"Jun"</span>, <span class="string">"Jul"</span>, <span class="string">"Aug"</span>, <span class="string">"Sep"</span>, <span class="string">"Oct"</span>, <span class="string">"Nov"</span>];</span>  
<span class="line"><span class="keyword">var</span> regs = &#123;</span>  
<span class="line"><span class="string">'%y'</span>: <span class="keyword">this</span>.getFullYear() % <span class="number">100</span>,<span class="comment">//两位数的年份表示（00-99）</span></span>  
<span class="line"><span class="string">'%Y'</span>: <span class="keyword">this</span>.getFullYear(),<span class="comment">//四位数的年份表示（000-9999）</span></span>  
<span class="line"><span class="string">'%m'</span>: <span class="keyword">this</span>.getMonth() + <span class="number">1</span>,<span class="comment">//月份（01-12）</span></span>  
<span class="line"><span class="string">'%d'</span>: <span class="keyword">this</span>.getDate(),<span class="comment">//月内中的一天（0-31）</span></span>  
<span class="line"><span class="string">'%H'</span>: <span class="keyword">this</span>.getHours(),<span class="comment">//24小时制小时数（0-23）</span></span>  
<span class="line"><span class="string">'%I'</span>: <span class="keyword">this</span>.getHours() % <span class="number">12</span> + <span class="number">1</span>,<span class="comment">//12小时制小时数（01-12）</span></span>  
<span class="line"><span class="string">'%M'</span>: <span class="keyword">this</span>.getMinutes(),<span class="comment">//分钟数（00=59）</span></span>  
<span class="line"><span class="string">'%S'</span>: <span class="keyword">this</span>.getSeconds(),<span class="comment">//秒（00-59）</span></span>  
<span class="line"><span class="string">'%a'</span>: weekShortName[<span class="keyword">this</span>.getDay()],<span class="comment">//本地简化星期名称</span></span>  
<span class="line"><span class="string">'%A'</span>: week[<span class="keyword">this</span>.getDay()],<span class="comment">//本地完整星期名称</span></span>  
<span class="line"><span class="string">'%b'</span>: monthShortName[<span class="keyword">this</span>.getMonth()],<span class="comment">//本地简化的月份名称</span></span>  
<span class="line"><span class="string">'%B'</span>: month[<span class="keyword">this</span>.getMonth()],<span class="comment">//本地完整的月份名称</span></span>  
<span class="line"><span class="string">'%c'</span>: <span class="keyword">this</span>.toLocaleString(),<span class="comment">//本地相应的日期表示和时间表示</span></span>  
<span class="line"><span class="string">'%j'</span>: getDayNumber(),<span class="comment">//年内的第几天（001-366）</span></span>  
<span class="line"><span class="string">'%u'</span>: <span class="built_in">Math</span>.ceil(getDayNumber() / <span class="number">7</span>),<span class="comment">//一年中的星期数（00-53）星期一为星期的开始</span></span>  
<span class="line"><span class="string">'%U'</span>: <span class="keyword">this</span>.getDay() == <span class="number">0</span> ? <span class="built_in">parseInt</span>(getDayNumber() / <span class="number">7</span>) + <span class="number">1</span> : <span class="built_in">parseInt</span>(getDayNumber() / <span class="number">7</span>),<span class="comment">//一年中的星期数（00-53）星期日为星期的开始</span></span>  
<span class="line"><span class="string">'%w'</span>: <span class="keyword">this</span>.getDay(),<span class="comment">//星期（0-6），星期日为星期的开始</span></span>  
<span class="line"><span class="string">"%q"</span>: <span class="built_in">Math</span>.ceil((<span class="keyword">this</span>.getMonth() + <span class="number">1</span>) / <span class="number">3</span>), <span class="comment">//季度</span></span>  
<span class="line"><span class="string">'%x'</span>: <span class="keyword">this</span>.toLocaleDateString(),<span class="comment">//本地相应的日期表示</span></span>  
<span class="line"><span class="string">'%X'</span>: <span class="keyword">this</span>.toLocaleTimeString(),<span class="comment">//本地相应的时间表示</span></span>  
<span class="line">&#125;;</span>  
<span class="line"><span class="comment">//格式化匹配</span></span>  
<span class="line"><span class="keyword">for</span> (<span class="keyword">var</span> k <span class="keyword">in</span> regs) &#123;</span>  
<span class="line"><span class="keyword">if</span> (<span class="keyword">new</span> <span class="built_in">RegExp</span>(<span class="string">"("</span> + k + <span class="string">")"</span>).test(fmt)) &#123;</span>  
<span class="line">fmt = fmt.replace(<span class="built_in">RegExp</span>.$<span class="number">1</span>, regs[k]);</span>  
<span class="line">&#125;</span>  
<span class="line">                &#125;</span>  
<span class="line"><span class="keyword">return</span> fmt;</span>  
<span class="line">&#125;,</span>  
<span class="line">        configurable: <span class="literal">true</span>,</span>  
<span class="line">        enumerable: <span class="literal">false</span>,</span>  
<span class="line">        writable: <span class="literal">true</span></span>  
<span class="line">&#125;);</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>> 本文摘自： [https://juejin.im/entry/59edb91ff265da43163c3bf5?utm_source=gold_browser_extension](https://juejin.im/entry/59edb91ff265da43163c3bf5?utm_source=gold_browser_extension)<!-- rebuild by neat -->