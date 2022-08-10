---
layout: post
title: dedecms更换html编辑器为ueditor
tags:
  - dedecms
  - html编辑器
  - ueditor
categories:
  - 清学小记
abbrlink: 1526
date: 2014-12-12 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">网上试了好多代码，终于找到这一段成功了，留存一下：</span>  

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
<span class="line">19</span>  
<span class="line">20</span>  
<span class="line">21</span>  
<span class="line">22</span>  
<span class="line">23</span>  
<span class="line">24</span>  
<span class="line">25</span>  
<span class="line">26</span>  
<span class="line">27</span>  
</pre></td><td class="code"><pre><span class="line"><span class="keyword">else</span> <span class="keyword">if</span>($GLOBALS[<span class="string">'cfg_html_editor'</span>]==<span class="string">'ueditor'</span>)</span>  
<span class="line">    &#123;</span>  
<span class="line">        $fvalue = $fvalue==<span class="string">''</span> ? <span class="string">'<p></p>'</span> : $fvalue;</span>  
<span class="line">        $code = <span class="string">'<script type="text/javascript" charset="utf-8" src="'</span>.$GLOBALS[<span class="string">'cfg_cmspath'</span>].<span class="string">'/include/ueditor/ueditor.config.js"></script>'</span>;</span>  
<span class="line">        $code .= <span class="string">'<script type="text/javascript" charset="utf-8" src="'</span>.$GLOBALS[<span class="string">'cfg_cmspath'</span>].<span class="string">'/include/ueditor/ueditor.all.min.js"></script>'</span>;</span>  
<span class="line">        $code .= <span class="string">'<link rel="stylesheet" type="text/css" href="'</span>.$GLOBALS[<span class="string">'cfg_cmspath'</span>].<span class="string">'/include/ueditor/themes/default/css/ueditor.css"/>'</span>;</span>  
<span class="line">        <span class="comment">//$code .= '<textarea name="'.$fname.'" id="'.$fname.'" style="width:100%;">'.$fvalue.'</textarea>';</span></span>  
<span class="line">        $code .= <span class="string">'<script type="text/plain" name="'</span>.$fname.<span class="string">'" id="'</span>.$fname.<span class="string">'">'</span>.$fvalue.<span class="string">'</script>'</span>;</span>  
<span class="line">        <span class="keyword">if</span>($bbcode)</span>  
<span class="line">        &#123;</span>  
<span class="line">            $code .= <span class="string">'<script type="text/javascript">UE.getEditor("'</span>.$fname.<span class="string">'",&#123;toolbars:[["Source","'",</span></span>  
<span class="line"><span class="string">        "bold", "italic", "underline","'","fontsize","forecolor","emotion","Undo", "Redo"]],initialFrameHeight:100&#125;);</script>'</span>;</span>  
<span class="line">        &#125;</span>  
<span class="line">        <span class="keyword">else</span></span>  
<span class="line">        &#123;</span>  
<span class="line">            $code .= <span class="string">'<script type="text/javascript">UE.getEditor("'</span>.$fname.<span class="string">'",&#123;initialFrameHeight:450&#125;);</script>'</span>;</span>  
<span class="line">        &#125;          </span>  
<span class="line">  </span>  
<span class="line">        <span class="keyword">if</span>($gtype==<span class="string">"print"</span>)</span>  
<span class="line">        &#123;</span>  
<span class="line">            <span class="keyword">echo</span> $code;</span>  
<span class="line">        &#125;</span>  
<span class="line">        <span class="keyword">else</span></span>  
<span class="line">        &#123;</span>  
<span class="line">            <span class="keyword">return</span> $code;</span>  
<span class="line">        &#125;</span>  
<span class="line">    &#125;<span class="comment">//bd end</span></span>  
</pre></td></tr></table></figure>

<span style="color:#00f">替换步骤也简单记录一下：</span>

<span style="color:#00f">1、下载ueditor并改好名字放在dedecms的"include"目录；</span>

<span style="color:#00f">2、修改include目录中"inc"目录里的"inc_fun_funAdmin.php"文件，找到"获取编辑器"段的函数"SpGetEditor"代码，在其"else"前添加如上代码；</span>

<span style="color:#00f">3、进入dedecms后台→系统→系统基本参数→核心设置，修改html编辑器的名字为ueditor。</span>
<!-- rebuild by neat -->