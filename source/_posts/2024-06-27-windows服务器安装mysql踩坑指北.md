---
date: '2024-06-27 17:24:00'
sort: ''
catalog: []
status: 已发布
recommend: ''
excerpt: 记录下windows服务器安装mysql的踩坑大全，不全的欢迎补充。
summary: ''
tags:
  - windows
  - 服务器
  - mysql
abbrlink: 2672
updated: '2024-06-27 18:17:00'
cover: ''
categories:
  - 清学小记
urlname: 2024-06-27-windows服务器安装mysql踩坑指北
title: windows服务器安装mysql踩坑指北
---

记录下windows服务器安装mysql的踩坑大全，不全的欢迎补充。


## 安装


这里主要记录的是mysql免安装版遇到的问题，安装版请移步去百度


### 下载


去[官网](https://dev.mysql.com/downloads/mysql/)下载所需版本


### 配置


创建my.ini文件，并配置内容


```yaml
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir = D:\\DataBaseSet\\MQL\\mysql-8.0.24-winx64
# 设置mysql数据库的数据的存放目录
datadir =  D:\\DataBaseSet\\MQL\\mysql-8.0.24-winx64\\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 创建模式
sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
```


### 添加服务


```shell
mysqld --install
```


### 初始化data


执行完成后会生成一个临时密码，请记录，后续需要修改这个临时密码


```shell
mysqld --initialize --console
```


### 启动服务


```shell
net start mysql
```


## 问题


### is not allowed to connect to this MySQL server


这个问题是因为没有远程连接权限，其次再给权限的时候，可能需要修改临时密码；


```shell
# 命令行登录mysql
mysql -u root -p

# 修改临时密码
alter user user() identified by '新密码';

# 查看当前表中的数据库，**后续命令结尾都要带分号**
show databases;

# 查看当前数据库下，用户表的数据(主机,用户,密码)
select Host, User from user;

# 刷新权限
FLUSH PRIVILEGES;
```


### you need (at least one of) the system_user privilege(s) for this operation


原因是由于root用户没有SYSTEM_USER权限，把权限加入后即可解决：


```shell
grant system_user on *.* to 'root';
```


### Public Key Retrieval is not allowed

- 打开dbeaver数据库连接设置
- 点开驱动属性
- 把allowPublicKeyRetrieval=false改为true即可

## 鸣谢


以上内容摘自：


[https://www.cnblogs.com/ios9/p/16308119.html](https://www.cnblogs.com/ios9/p/16308119.html)


[https://www.cnblogs.com/jack4518/p/13166295.html](https://www.cnblogs.com/jack4518/p/13166295.html)


[https://blog.51cto.com/zhangzhixi/3176395](https://blog.51cto.com/zhangzhixi/3176395)


[https://www.imooc.com/article/321153](https://www.imooc.com/article/321153)

