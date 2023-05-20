---
date: "2022-03-15 13:00"
updateTime: "2023-05-04T10:24:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: ""
excerpt: 对于node项目build构建完成后，可通过npm插件ftp-deploy部署上传到ftp服务器
summary: ""
_date: "2022-03-15T13:00:00.000+08:00"
tags:
  - nodejs
  - webpack
  - ftp
updated: "2022-03-15 13:00"
cover: ""
categories:
  - 清学小记
abbrlink: 2640
urlname: fbd77a3e-eb66-45ab-be6d-8b6de34b11cf
title: node项目部署到ftp
---

## 简介

对于`node`项目`build`构建完成后，可通过`npm`插件`ftp-deploy`部署上传到`ftp`服务器

## 示例代码

```text
var FtpDeploy = require("ftp-deploy");var ftpDeploy = new FtpDeploy();var config = {    user: "user",    // Password optional, prompted if none given    password: "password",    host: "ftp.someserver.com",    port: 21,    localRoot: __dirname + "/local-folder",    remoteRoot: "/public_html/remote-folder/",    // include: ["*", "**/*"],      // this would upload everything except dot files    include: ["*.php", "dist/*", ".*"],    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],    // delete ALL existing files at destination before uploading, if true    deleteRemote: false,    // Passive mode is forced (EPSV command is not sent)    forcePasv: true,    // use sftp or ftp    sftp: false};ftpDeploy    .deploy(config)    .then(res => console.log("finished:", res))    .catch(err => console.log(err));
```

## 补充

- `ftp`配置信息可用环境变量存储、调用;
- 脚本执行时机可区分开发环境

## 插件

- 查看 [ftp-deploy](https://www.npmjs.com/package/ftp-deploy)
- 安装 `npm install --save-dev ftp-deploy`
- 使用

```text
"scripts": {    "deploy": "node deploy"},
```
