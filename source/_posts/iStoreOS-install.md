---
title: iStoreOS 软路由部署
date: 2025-11-14 16:25:30
keywords: iStoreOS-install
tags: Tutorial
categories: Technology
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/iStoreOS-install/
---


## 介绍

iStoreOS + Passwall：

实现局域网内网络加速，Google，Steam或者PUBG，战地...等外网游戏

## 准备

硬件：

- 一台小主机：咸鱼搜索"1037U"120元；或者任意电脑主机（2核2G内存以上）
  - 如果还有其他需求，请上4h4g配置
- 一根网线
- 一个U盘：2G以上
- 任意显示器+HDMI线

软件：

- iStoreOS镜像
- refus：写入镜像工具
- Passwall插件

## 软件下载

iStoreOS镜像：

- 官网：[https://site.istoreos.com/firmware/download?devicename=x86_64&firmware=iStoreOS](https://site.istoreos.com/firmware/download?devicename=x86_64&firmware=iStoreOS)

refus：

- 官网：[https://rufus.ie/zh/](https://rufus.ie/zh/)

Passwall：

- 开源地址：[https://github.com/AUK9527/Are-u-ok](https://github.com/AUK9527/Are-u-ok)

## 开始

**安装iStoreOS**

使用refus将iStoreOS镜像刷入U盘

插入主机启动iStoreOS

qu+Tab 补全

Tip：如果没有显示器，也可以插网线使用ssh连接

选择Install x86回车安装完成

参考官方文档：[https://doc.istoreos.com/zh/guide/istoreos/](https://doc.istoreos.com/zh/guide/istoreos/)

### 进入后台管理

- 默认后台地址 http://192.168.100.1/ （多网口机型） 或者 http://iStoreOS.lan/
- 默认密码：password
- 如果要修改 LAN 口 IP，首页有个内网设置，或者命令行用 quickstart 命令修改

进入后台管理代表成功大半

### 网络配置

旁路由：

- 网关地址为路由器地址，如192.168.1.1/192.168.10.1
- IP地址为访问iStoreOS地址，如192.168.1.xx/192.168.10.xx
- 我的路由器地址是192.168.10.1，iStoreOS地址是192.168.10.100，以此类推
- DHCP服务主路由和旁路由开一个就行，自行选择

配置软件源：中国科学技术大学

### 安装passwall

iStoreOS --> 手动安装 --> 选择 passwall-xx-x86_64-xx.run 安装

节点定阅里添加节点

开启服务..

**至此已完成**