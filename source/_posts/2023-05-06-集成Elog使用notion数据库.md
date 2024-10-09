---
date: '2023-05-06 06:08'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: 为hexo集成elog使用notion数据库，这样更方便写博客。
summary: ''
tags:
  - elog
  - notion
  - notion数据库
  - hexo
abbrlink: 2651
updated: '2024-07-10 03:51'
cover: ''
categories:
  - 清学小记
urlname: 2023-05-06-集成Elog使用notion数据库
title: 集成Elog使用notion数据库
---

## 前言


为了更好、更方便地使用`hexo`写博客，因此把博客集成了[https://github.com/LetTTGACO/elog](https://github.com/LetTTGACO/elog)。


集成`Elog`使博客将`hexo`和`notion`的优点结合到了一起：

- `hexo`博客纯静态部署，简单方便
- `markdown`语法写博客优雅、专注
- `github`上写博客还是不太友好，至少目前为止是

## 部署流程


### 集成Elog


请参考[官方文档](https://elog.1874.cool/notion/start)


### 设置Notion数据库


`notion`数据库的设置请参考`elog`中的[文档](https://elog.1874.cool/notion/gvnxobqogetukays#notion)


> 使用 [**Database 模板**](https://1874.notion.site/09ff9e1e141744c6af0a1f69d2a3d834?v=a09065f9266446afa745b475044daca6) 创建一个数据库


> 创建 `Integration Token`，具体请参考 [**Notion 官方教程**](https://developers.notion.com/docs/create-a-notion-integration#step-1-create-an-integration)


> 将复制的数据库连接到刚创建的 `Integration`，具体请参考 [**Notion 官方教程**](https://developers.notion.com/docs/create-a-notion-integration#step-2-share-a-database-with-your-integration)


> 获取数据库 `DatabaseId`


### 文章导入Notion


目前并没有好的无损导入`notion`数据库方法，以下内容只供参考。


**直接导入.md文档**

- 首先需要从你的`github`上下载好`.md`文档
- 之后可以通过`notion`的导入功能，批量导入到`notion`中
- 再将其加入到你的`notion`数据库中
- 最后你可能需要处理文章的各个字段属性，视个人情况看复杂程度。。

**通过csv文件导入**

- 将`.md`文档导入`notion`中
- 使用相关工具将文档属性存成`csv`文件
- 导入`csv`文件到`notion`数据库
- 最后需要将导入到`notion`的`.md`文档，一一复制到数据库文章中

**导入工具**


目前暂无好的导入工具，期待广大网友的贡献。。。


### 持续集成


请参考[官方文档](https://elog.1874.cool/notion/vy55q9xwlqlsfrvk#notion-%E7%A4%BA%E4%BE%8B)


### Pipedream workflows触发github actions


此处借用[https://github.com/bmqy/serverless-api](https://github.com/bmqy/serverless-api)中代码：


```javascript
import axios from "axios"
export default defineComponent({
  async run({ steps, $ }) {
    const user = 'github用户名'
    const repo = 'github项目名'
    const event_type = 'github action监听事件类型'
    const token = 'github token'
    const { data } = await axios.post(
      `https://api.github.com/repos/${user}/${repo}/dispatches`,
      { event_type },
      {
        headers: {
          "User-Agent": "@elog/serverless-api",
          Accept: '*/*',
          Authorization: `token ${token}`,
        },
      }
    )
    return 'Success!'
  },
})
```


### 图床配置


**COS**


其它参数都按[官方文档](https://elog.1874.cool/notion/fe8ywmt999gon12w#%E8%85%BE%E8%AE%AF%E4%BA%91-cos-%E9%98%BF%E9%87%8C%E4%BA%91-oss-%E4%B8%83%E7%89%9B%E4%BA%91-qiniu)配置即可，这里只额外提一下`prefixKey`参数配置：路径开始和结尾不要带`/` 。


## 其它


更多关于`Elog`的内容与文档介绍，请前往[Elog](https://elog.1874.cool/)官网查看

