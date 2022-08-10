---
layout: post
title: asp解析json的方法
tags:
  - asp
  - asp解析json
  - json
categories:
  - 燕衔春泥
abbrlink: 1464
date: 2017-02-21 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

使用ASP解析 JSON，

第一个方法是使用&nbsp;JScript ：  

<figure class="highlight js"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
</pre></td><td class="code"><pre><span class="line"><script language=<span class="string">"jscript"</span> runat=<span class="string">"server"</span>>  </span>  
<span class="line">    <span class="built_in">Array</span>.prototype.get = <span class="function"><span class="keyword">function</span>(<span class="params">x</span>) </span>&#123; <span class="keyword">return</span> <span class="keyword">this</span>[x]; &#125;;  </span>  
<span class="line">    <span class="function"><span class="keyword">function</span> <span class="title">parseJSON</span>(<span class="params">strJSON</span>) </span>&#123; <span class="keyword">return</span> <span class="built_in">eval</span>(<span class="string">"("</span> + strJSON + <span class="string">")"</span>); &#125;  </span>  
<span class="line"><<span class="regexp">/script></span></span>  
</pre></td></tr></table></figure><figure class="highlight vb"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><%  </span>  
<span class="line"><span class="keyword">Dim</span> json, obj  </span>  
<span class="line">json = <span class="string">"&#123;a:"</span><span class="string">"aaa"</span><span class="string">", b:&#123; name:"</span><span class="string">"bb"</span><span class="string">", value:"</span><span class="string">"text"</span><span class="string">" &#125;, c:["</span><span class="string">"item0"</span><span class="string">", "</span><span class="string">"item1"</span><span class="string">", "</span><span class="string">"item2"</span><span class="string">"]&#125;"</span>  </span>  
<span class="line"><span class="keyword">Set</span> obj = parseJSON(json)  </span>  
<span class="line">   </span>  
<span class="line">Response.Write obj.a & <span class="string">"<br />"</span>  </span>  
<span class="line">Response.Write obj.b.name & <span class="string">"<br />"</span>  </span>  
<span class="line">Response.Write obj.c.length & <span class="string">"<br />"</span>  </span>  
<span class="line">Response.Write obj.c.<span class="keyword">get</span>(<span class="number">0</span>) & <span class="string">"<br />"</span>  </span>  
<span class="line">   </span>  
<span class="line"><span class="keyword">Set</span> obj = <span class="literal">Nothing</span>  </span>  
<span class="line">%></span>  
</pre></td></tr></table></figure>

第二个方法是使用MS的脚本控件（也一样是使用了 JScript）：  

<figure class="highlight vb"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line"><span class="keyword">Dim</span> scriptCtrl  </span>  
<span class="line">    <span class="keyword">Function</span> parseJSON(str)  </span>  
<span class="line">        <span class="keyword">If</span> <span class="keyword">Not</span> IsObject(scriptCtrl) <span class="keyword">Then</span>  </span>  
<span class="line">            <span class="keyword">Set</span> scriptCtrl = Server.CreateObject(<span class="string">"MSScriptControl.ScriptControl"</span>)  </span>  
<span class="line">            scriptCtrl.Language = <span class="string">"JScript"</span>  </span>  
<span class="line">            scriptCtrl.AddCode <span class="string">"Array.prototype.get = function(x) &#123; return this[x]; &#125;; var result = null;"</span>  </span>  
<span class="line">        <span class="keyword">End</span> <span class="keyword">If</span>  </span>  
<span class="line">        scriptCtrl.ExecuteStatement <span class="string">"result = "</span> & str & <span class="string">";"</span>  </span>  
<span class="line">        <span class="keyword">Set</span> parseJSON = scriptCtrl.CodeObject.result  </span>  
<span class="line">    <span class="keyword">End</span> <span class="keyword">Function</span>  </span>  
<span class="line">       </span>  
<span class="line">    <span class="keyword">Dim</span> json  </span>  
<span class="line">    json = <span class="string">"&#123;a:"</span><span class="string">"aaa"</span><span class="string">", b:&#123; name:"</span><span class="string">"bb"</span><span class="string">", value:"</span><span class="string">"text"</span><span class="string">" &#125;, c:["</span><span class="string">"item0"</span><span class="string">", "</span><span class="string">"item1"</span><span class="string">", "</span><span class="string">"item2"</span><span class="string">"]&#125;"</span>  </span>  
<span class="line">       </span>  
<span class="line">    <span class="keyword">Set</span> obj = parseJSON(json)  </span>  
<span class="line">       </span>  
<span class="line">    Response.Write obj.a & <span class="string">"<br />"</span>  </span>  
<span class="line">    Response.Write obj.b.name & <span class="string">"<br />"</span>  </span>  
<span class="line">    Response.Write obj.c.length & <span class="string">"<br />"</span>  </span>  
<span class="line">    Response.Write obj.c.<span class="keyword">get</span>(<span class="number">0</span>) & <span class="string">"<br />"</span>  </span>  
<span class="line">       </span>  
<span class="line">    <span class="keyword">Set</span> obj = <span class="literal">Nothing</span>  </span>  
<span class="line">       </span>  
<span class="line">    <span class="keyword">Set</span> scriptCtrl = <span class="literal">Nothing</span></span>  
</pre></td></tr></table></figure>

以上内容摘自： [http://json.tongxiehui.net/?post/fu41ub.html](http://json.tongxiehui.net/?post/fu41ub.html)
<!-- rebuild by neat -->