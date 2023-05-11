---
date: "2022-03-25 16:55"
updateTime: "2023-05-04T10:23:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: |-
  ## 使用apiDoc生成接口数据
  查看apiDoc官方文档
  - 全局安装apiDoc，必须安装0.29.0或以下版本；新版本不再支持生成api_data.json等数据文件，导致无法导入Apifox
summary: ""
_date: "2022-03-25T16:55:00.000+08:00"
tags:
  - Apifox
  - Apifox自动导入
  - apiDoc
updated: "2022-03-25 16:55"
cover: ""
categories:
  - 清学小记
abbrlink: 2645
urlname: 2022-03-25-apifox自动导入apidoc接口数据
title: apifox自动导入apidoc接口数据
---

## 使用`apiDoc`生成接口数据

查看`apiDoc`[官方文档](https://apidocjs.com/)

- 全局安装`apiDoc`，必须安装`0.29.0`或以下版本；新版本不再支持生成`api_data.json`等数据文件，导致无法导入`Apifox`

```text
npm install apidoc@0.29.0 -g
```

- 创建配置文件`apidoc.json`

```json
{
  "name": "example",
  "version": "1.0.0",
  "description": "apiDoc basic example",
  "title": "Custom apiDoc browser title",
  "url": "https://api.github.com/v1"
}
```

- 生产文档命令

```text
apidoc -i src -o apidoc/ -f .jsp
```

- 监听文件变动，执行生产文档命令

```text
# 全局安装 nodemon
npm install -g nodemon

# nodemon监听指定目录文件变动，并执行指令
nodemon -w input/ -e js -x "apidoc -i input/ -f .js -o apidoc/"
# or
nodemon --watch input/ --ext js -exec "apidoc --input input/ --file-filters .js --output apidoc/"
```

## 使用`Apifox`自动导入`apiDoc`数据

- 创建好项目
- 依次打开`项目设置`、`数据管理`、`导入数据(自动同步)`
- `数据源格式`选择`apiDoc`，`数据源url`填入`http://xxx.xxx/api_data.json`
- `保存`，`立即导入`
- 按需开启`自动导入`
