---
date: "2022-03-28 17:48"
updateTime: "2023-05-09T00:32:00.000Z"
catalog: []
status: 已发布
insertTime: "2023-04-28T14:04:00.000Z"
_updated: "2022-11-10T09:10:00.000+08:00"
excerpt: |-
  安装FreshRSS
  docker-compose部署
  • 创建一个目录 freshrss 并进入该位置，新建 docker-compose.yml
summary: ""
_date: "2022-03-28T17:48:00.000+08:00"
tags:
  - docker
  - FreshRSS
  - RssHub
updated: "2022-11-10 09:10"
cover: ""
categories:
  - 清学小记
abbrlink: 2648
urlname: 2022-03-28-docker部署freshrss
title: docker部署freshrss
---

## 安装`FreshRSS`

### docker-compose 部署

- 创建一个目录 `freshrss` 并进入该位置，新建 docker-compose.yml

```text
mkdir /freshrss && cd /freshrss
```

- 新建&编辑配置文件

```text
vim docker-compose.yml
```

- 配置文件内容如下：

```text
version: "3"

services:
  freshrss-db:
    image: postgres:12-alpine            # 官方示例中给出了 MySQL/MarriaDB/PostgreSQL 三种方案
    container_name: freshrss-db
    hostname: freshrss-db
    restart: unless-stopped
    volumes:
      - db:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: freshrss       # 数据库配置，请自行修改、避免使用默认配置
      POSTGRES_PASSWORD: freshrss   # 数据库配置，请自行修改、避免使用默认配置
      POSTGRES_DB: freshrss         # 数据库配置，请自行修改、避免使用默认配置

  freshrss-app:
    image: freshrss/freshrss:latest
    container_name: freshrss-app
    hostname: freshrss-app
    restart: unless-stopped
    ports:
      - "8081:80"                   # 映射端口
    depends_on:
      - freshrss-db
    volumes:
      - ./data:/var/www/FreshRSS/data
      - ./extensions:/var/www/FreshRSS/extensions
    environment:
      CRON_MIN: '*/20'             # RSS 刷新周期，单位为分钟，*/20 表示每 20 分钟刷新一次
      TZ: Asia/Shanghai            # 时区

volumes:
  db:
  data:
  extensions:
```

- 确认配置后，运行：

```text
docker-compose up -d
```

### docker 命令部署

```text
docker run -d --restart unless-stopped --log-opt max-size=10m \
  -p 8080:80 \
  -e TZ=Asia/Shanghai \
  -e CRON_MIN='*/20' \
  -v freshrss_data:/var/www/FreshRSS/data \
  -v freshrss_extensions:/var/www/FreshRSS/extensions \
  --name freshrss \
  freshrss/freshrss
```

## 访问

```text
设置的站点域名（IP地址 + 端口）
```

## 第三方客户端连接

- 一定要先在`设置`、`管理`、`认证`中勾选`允许 API 访问`，并在`用户账户` 、`API 管理中`设置`API 密码`
- 推荐搭配`NetNewsWire`、`reeder`等使用
- `API域名`：https://xxx.example.com/api/greader.php
- `用户名`：注册用户名
- `密码`：API 密码

## 开启`API Access`并允许`RssHub Radar`中订阅

- 打开左上角`订阅管理`
- 选择`订阅工具`
- 复制右侧显示的`API`链接地址
- 粘贴到`RSSHub`一键订阅中`FreshRSS`地址栏中
