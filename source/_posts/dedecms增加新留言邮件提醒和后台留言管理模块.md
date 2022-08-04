---
layout: post
title: dedecms增加新留言邮件提醒和后台留言管理模块
tags:
  - dedecms
  - 后台留言管理模块
  - 新留言发送邮件
categories:
  - 清学小记
abbrlink: 1517
date: 2015-01-13 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">本文记述为dedecms增加并完善留言邮件提醒、留言后台管理等相关功能。</span>

<span style="color:#00f">1、增加邮箱格式验证并提示；</span>

<span style="color:#00f">找到dedecms留言页"guestbook.php"文件，在需要进行验证的位置处加入以下代码（可按需修改）：</span>  

<figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
<span class="line">2</span>  
<span class="line">3</span>  
<span class="line">4</span>  
<span class="line">5</span>  
<span class="line">6</span>  
<span class="line">7</span>  
<span class="line">8</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">//验证邮箱</span></span>  
<span class="line"><span class="keyword">if</span> ($email !=<span class="string">""</span>)&#123;</span>  
<span class="line">    <span class="keyword">if</span>(!eregi(<span class="string">"^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]&#123;2&#125;'aero'arpa'biz'com'coop'edu'gov'info'int'jobs'mil'museum'name'nato'net'org'pro'travel)$"</span>,$email))</span>  
<span class="line">    &#123;</span>  
<span class="line">        ShowMsg(<span class="string">"<font color='red'>错误： E-Mail 地址有误!</font>"</span>,<span class="string">"-1"</span>);</span>  
<span class="line">        <span class="keyword">exit</span>();</span>  
<span class="line">    &#125;</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure>

<span style="color:#00f">2、留言成功发送邮件到指定邮箱地址：</span>

<span style="color:#00f">找到dedecms留言页"guestbook.php"文件，在需要进行验证的位置处加入以下代码，引用时注意"$msg"变量的赋值变化，可按需更改：</span>  

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
<span class="line">28</span>  
</pre></td><td class="code"><pre><span class="line"><span class="comment">//发送EMAIL</span></span>  
<span class="line"><span class="keyword">if</span>($needCheck==<span class="number">1</span>)</span>  
<span class="line">&#123;</span>  
<span class="line">    <span class="keyword">require_once</span>(DEDEINC.<span class="string">"/oxwindow.class.php"</span>);</span>  
<span class="line">    $mailbody = <span class="string">''</span>;</span>  
<span class="line">    $basehost = preg_replace(<span class="string">"#http:\/\/#"</span>, <span class="string">''</span>, $cfg_basehost);</span>  
<span class="line">    $mailtitle = <span class="string">"您的网站' $basehost '上有新留言"</span>;</span>  
<span class="line">    $mailbody .= <span class="string">"姓名：$uname \r\n"</span>;</span>  
<span class="line">    $mailbody .= <span class="string">"标题：$title \r\n"</span>;</span>  
<span class="line">    $mailbody .= <span class="string">"内容：$msg \r\n"</span>;</span>  
<span class="line">    $mailbody .= <span class="string">"E-mail：$email \r\n"</span>;</span>  
<span class="line">    $mailbody .= <span class="string">"Powered by http://www.bmqy.net ！"</span>;</span>  
<span class="line">    $headers = <span class="string">"From: "</span>.$cfg_adminemail.<span class="string">"\r\nReply-To: "</span>.$cfg_adminemail;</span>  
<span class="line">    $email=<span class="string">'bmqy@qq.com'</span>;<span class="comment">//改为要接收邮件的邮箱</span></span>  
<span class="line">    <span class="keyword">if</span>($cfg_sendmail_bysmtp == <span class="string">'Y'</span> &amp;&amp; !<span class="keyword">empty</span>($cfg_smtp_server))</span>  
<span class="line">    &#123;</span>  
<span class="line">        $mailtype = <span class="string">'TXT'</span>;</span>  
<span class="line">        <span class="keyword">require_once</span>(DEDEINC.<span class="string">'/mail.class.php'</span>);</span>  
<span class="line">        $smtp = <span class="keyword">new</span> smtp($cfg_smtp_server,$cfg_smtp_port,<span class="keyword">true</span>,$cfg_smtp_usermail,$cfg_smtp_password);</span>  
<span class="line">        $smtp-&gt;debug = <span class="keyword">false</span>;</span>  
<span class="line">        $smtp-&gt;sendmail($email,$cfg_webname,$cfg_smtp_usermail,     $mailtitle, $mailbody, $mailtype);</span>  
<span class="line">    &#125;</span>  
<span class="line">    <span class="keyword">else</span></span>  
<span class="line">    &#123;</span>  
<span class="line">        @mail($email, $mailtitle, $mailbody, $headers);</span>  
<span class="line">    &#125;</span>  
<span class="line">&#125;</span>  
<span class="line"><span class="comment">//发送EMAIL结束</span></span>  
</pre></td></tr></table></figure>

<span style="color:#00f">3、后台增加留言管理功能：</span>  
1) 首先下载附件  
2) 解压后得到2个文件guestbook.php和guestbook.htm  
3) 将guestbook.php文件 复制的 dede（后台管理目录）目录下  
4) 将guestbook.htm 文件 复制的dede/templets 目录下  
5) 进入织梦后台，模块->管理模块->留言簿模块->修改  
6) 找到安装程序，将里面的link链接改为guestbook.php  
7) 点击卸载留言簿模块，不要刷新，再安装一次该模块

该模块详细安装步骤步骤可参考： [增加dedecms后台留言管理功能](http://www.jb51.net/cms/134809.html "增加dedecms后台留言管理功能")。

再此附上本人修改过的版本，改善了查看留言页的样式排版，

[点此下载dedecms留言管理模块.zip](http://pan.baidu.com/s/1hquzZne "点此下载 dedecms留言管理模块.zip") 亦可自行按需更改。

附：查看留言页效果图：

![留言人提供邮箱地址时，显示回复邮件按钮](http://ww3.sinaimg.cn/large/4eed32f2jw1eo7sazsrbtj213x0l2whl.jpg "留言人提供邮箱地址时，显示回复邮件按钮")  
![留言人未提供邮箱地址时，只显示单击返回按钮](http://ww4.sinaimg.cn/large/4eed32f2jw1eo7sayofjkj21400l2ad4.jpg "留言人未提供邮箱地址时，只显示单击返回按钮")
<!-- rebuild by neat -->