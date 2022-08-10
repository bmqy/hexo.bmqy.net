---
layout: post
title: dedecms调用指定单一子栏目文章列表无内容的问题
tags:
  - channelartlist
  - dedecms
  - 指定子栏目文章列表
categories:
  - 清学小记
abbrlink: 1519
date: 2015-01-08 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

<span style="color:#00f">dedecms调用指定栏目的文章列表方法为：</span>

<pre>{dede:channelartlist typeid="9"}  
<ul>  
    {dede:arclist titlelen='60' row='4' orderby='click'}  
    <li>[field:textlink/]</li>  
    {/dede:arclist}  
</ul>  
{/dede:channelartlist}</pre>  
<span style="color:#00f">但是刚在使用时发现，只有在id是顶级栏目的时候才会有文章列表出现，而换位任一子栏目时，结果却是空的，并无该有的子栏目文章列表出现。</span>

<span style="color:#00f">于是查找dedecms代码，发现是这个"channelartlist"方法里的代码语句导致，原为：</span>

<pre>if(!preg_match('#,#', $typeid)) {  
    $tpsql = " reid='$typeid' AND ispart<>2 AND ishidden<>1 ";  
}  
else {  
    $tpsql = " id IN($typeid) AND ispart<>2 AND ishidden<>1 ";  
}</pre>  
<span style="color:#00f">修改为以下代码，则调用指定任一子栏目文章列表显示正常：</span>

<pre>if(!preg_match('#,#', $typeid)) {  
    $tpsql = " id IN($typeid) AND ispart<>2 AND ishidden<>1 ";  
}  
else {  
    $tpsql = " id IN($typeid) AND ispart<>2 AND ishidden<>1 ";  
}</pre>  
<span style="color:#00f">特此记录如下。</span>

<span style="color:#00f">原创文章，如需转载请注明出处，thankyou！</span>
<!-- rebuild by neat -->