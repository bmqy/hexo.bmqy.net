---
layout: post
title: dedecms使用ajax调用指定栏目文章列表
tags:
  - ajax更新文章列表
  - ajax调用指定栏目文章
  - dedecms
  - 清学小记
  - 燕衔春泥
abbrlink: 1501
date: 2015-07-03 00:00:00
---

<!-- build time:Sat Jun 23 2018 12:05:15 GMT+0800 (中国标准时间) -->

打开或复制一份plus目录下的list.php文件，在require_once(dirname( **FILE**)."/../include/common.inc.php");  
这段代码后加入以下代码：  

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
</pre></td><td class="code"><pre><span class="line"><span class="keyword">if</span>(<span class="keyword">isset</span>($_GET[<span class="string">'ajax'</span>]))&#123;</span>  
<span class="line">  $typeid = <span class="keyword">isset</span>($_GET[<span class="string">'typeid'</span>]) ? intval($_GET[<span class="string">'typeid'</span>]): <span class="number">0</span>;<span class="comment">//传递过来的分类ID</span></span>  
<span class="line">  $page = <span class="keyword">isset</span>($_GET[<span class="string">'page'</span>]) ? intval($_GET[<span class="string">'page'</span>]): <span class="number">0</span>;<span class="comment">//页码</span></span>  
<span class="line">  $pagesize = <span class="keyword">isset</span>($_GET[<span class="string">'pagesize'</span>]) ? intval($_GET[<span class="string">'pagesize'</span>]): <span class="number">15</span>;<span class="comment">//每页多少条，也就是一次加载多少条数据</span></span>  
<span class="line">  $start = $page><span class="number">0</span> ? ($page<span class="number">-1</span>)*$pagesize : <span class="number">0</span>;<span class="comment">//数据获取的起始位置。即limit条件的第一个参数。</span></span>  
<span class="line">  $typesql = $typeid ? <span class="string">" WHERE typeid='$typeid"</span> : <span class="string">''</span>;<span class="comment">//这个是用于首页实现瀑布流加载，因为首页加载数据是无需分类的，所以要加以判断，如果无需</span></span>  
<span class="line">   $total_sql = <span class="string">"SELECT COUNT(id) as num FROM '#@__archives'  $typesql "</span>;</span>  
<span class="line">  $temp = $dsql->GetOne($total_sql);</span>  
<span class="line">  $total = <span class="number">0</span>;<span class="comment">//数据总数</span></span>  
<span class="line">  $load_num =<span class="number">0</span>;</span>  
<span class="line">  <span class="keyword">if</span>(is_array($temp))&#123;</span>  
<span class="line">    $load_num= round(($temp[<span class="string">'num'</span>]<span class="number">-15</span>)/$pagesize);<span class="comment">//要加载的次数,因为默认已经加载了</span></span>  
<span class="line">    $total = $temp[<span class="string">'num'</span>];</span>  
<span class="line">  &#125;</span>  
<span class="line">  $sql = <span class="string">"SELECT a.*,t.typedir,t.typename,t.isdefault,t.defaultname,t.namerule, t.namerule2,t.ispart, t.moresite,t.siteurl,t.sitepath FROM '#@__archives' as a JOIN '#@__arctype' AS t ON a.typeid=t.id $typesql ORDER BY id DESC LIMIT $start,$pagesize"</span>;</span>  
<span class="line">   $dsql->SetQuery($sql);</span>  
<span class="line">    $dsql->Execute(<span class="string">'list'</span>);</span>  
<span class="line">   $statu = <span class="number">0</span>;<span class="comment">//是否有数据，默认没有数据</span></span>  
<span class="line">   $data = <span class="keyword">array</span>();</span>  
<span class="line">&#125;</span>  
</pre></td></tr></table></figure><figure class="highlight php"><table><tr><td class="gutter"><pre><span class="line">1</span>  
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
</pre></td><td class="code"><pre><span class="line">$index = <span class="number">0</span>;</span>  
<span class="line"><span class="keyword">while</span>($row = $dsql->GetArray(<span class="string">"list"</span>))&#123;</span>  
<span class="line">    $row[<span class="string">'info'</span>] = $row[<span class="string">'info'</span>] = $row[<span class="string">'infos'</span>] = cn_substr($row[<span class="string">'description'</span>],<span class="number">160</span>);</span>  
<span class="line">     $row[<span class="string">'id'</span>] =  $row[<span class="string">'id'</span>];</span>  
<span class="line">     $row[<span class="string">'filename'</span>] = $row[<span class="string">'arcurl'</span>] = GetFileUrl($row[<span class="string">'id'</span>],$row[<span class="string">'typeid'</span>],$row[<span class="string">'senddate'</span>],$row[<span class="string">'title'</span>],$row[<span class="string">'ismake'</span>],</span>  
<span class="line">  $row[<span class="string">'arcrank'</span>],$row[<span class="string">'namerule'</span>],$row[<span class="string">'typedir'</span>],$row[<span class="string">'money'</span>],$row[<span class="string">'filename'</span>],$row[<span class="string">'moresite'</span>],$row[<span class="string">'siteurl'</span>],$row[<span class="string">'sitepath'</span>]);</span>  
<span class="line">   $row[<span class="string">'typeurl'</span>] = GetTypeUrl($row[<span class="string">'typeid'</span>],$row[<span class="string">'typedir'</span>],$row[<span class="string">'isdefault'</span>],$row[<span class="string">'defaultname'</span>],$row[<span class="string">'ispart'</span>],</span>  
<span class="line">   $row[<span class="string">'namerule2'</span>],$row[<span class="string">'moresite'</span>],$row[<span class="string">'siteurl'</span>],$row[<span class="string">'sitepath'</span>]);</span>  
<span class="line">  <span class="keyword">if</span>($row[<span class="string">'litpic'</span>] == <span class="string">'-'</span> '' $row[<span class="string">'litpic'</span>] == <span class="string">''</span>)&#123;</span>  
<span class="line">      $row[<span class="string">'litpic'</span>] = $GLOBALS[<span class="string">'cfg_cmspath'</span>].<span class="string">'/images/defaultpic.gif'</span>;</span>  
<span class="line">   &#125;</span>  
<span class="line">    <span class="keyword">if</span>(!preg_match(<span class="string">"#^http:\/\/#i"</span>, $row[<span class="string">'litpic'</span>]) &&$GLOBALS[<span class="string">'cfg_multi_site'</span>] == <span class="string">'Y'</span>)&#123;</span>  
<span class="line">    $row[<span class="string">'litpic'</span>] = $GLOBALS[<span class="string">'cfg_mainsite'</span>].$row[<span class="string">'litpic'</span>];</span>  
<span class="line">   &#125;</span>  
<span class="line">  $row[<span class="string">'picname'</span>] = $row[<span class="string">'litpic'</span>];<span class="comment">//缩略图</span></span>  
<span class="line">   $row[<span class="string">'stime'</span>] = GetDateMK($row[<span class="string">'pubdate'</span>]);</span>  
<span class="line">  $row[<span class="string">'typelink'</span>] = <span class="string">"<a href='"</span>.$row[<span class="string">'typeurl'</span>].<span class="string">"'>"</span>.$row[<span class="string">'typename'</span>].<span class="string">"</a>"</span>;<span class="comment">//分类链</span></span>  
<span class="line">  $row[<span class="string">'fulltitle'</span>] = $row[<span class="string">'title'</span>];<span class="comment">//完整的标题</span></span>  
<span class="line">  $row[<span class="string">'title'</span>] = cn_substr($row[<span class="string">'title'</span>], <span class="number">60</span>);<span class="comment">//截取后的标题</span></span>  
<span class="line">   $data[$index] = $row;</span>  
<span class="line">   $index++;</span>  
<span class="line">&#125;</span>  
<span class="line"><span class="keyword">if</span>(!<span class="keyword">empty</span>($data))&#123;</span>  
<span class="line">$statu = <span class="number">1</span>;<span class="comment">//有数据</span></span>  
<span class="line">&#125;</span>  
<span class="line">$result =<span class="keyword">array</span>(<span class="string">'statu'</span>=>$statu,<span class="string">'list'</span>=>$data,<span class="string">'total'</span>=>$total,<span class="string">'load_num'</span>=>$load_num);</span>  
<span class="line"><span class="keyword">echo</span> json_encode($result);<span class="comment">//返回数据</span></span>  
<span class="line"><span class="keyword">exit</span>();</span>  
</pre></td></tr></table></figure>

以上代码摘自： [百度经验](http://jingyan.baidu.com/article/90808022d33ba2fd91c80fbb.html)

js代码输出获取到的内容：  

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
</pre></td><td class="code"><pre><span class="line">$(<span class="string">'.btn'</span>).on(<span class="string">"click"</span>,<span class="function"><span class="keyword">function</span>(<span class="params"></span>)</span>&#123;</span>  
<span class="line">$(<span class="string">"#content-box"</span>).hide();</span>  
<span class="line">$(<span class="string">"#content-box"</span>).html(<span class="string">"数据加载中..."</span>);</span>  
<span class="line">$(<span class="string">"#content-box"</span>).show();</span>  
<span class="line"><span class="keyword">var</span> htmlobj=  $.ajax(&#123;</span>  
<span class="line">url:<span class="string">"/plus/list.php?tid="</span>+$(<span class="keyword">this</span>).attr(<span class="string">"data-typeid"</span>),</span>  
<span class="line"><span class="keyword">async</span>:<span class="literal">false</span></span>  
<span class="line">&#125;);</span>  
<span class="line">$(<span class="string">"#content-box"</span>).html(htmlobj.responseText);</span>  
<span class="line">&#125;);</span>  
</pre></td></tr></table></figure><!-- rebuild by neat -->