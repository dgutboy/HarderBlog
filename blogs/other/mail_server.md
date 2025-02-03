---
title: linux搭建邮件服务器（仅发送端）
date: 2024-12-17
sidebar: auto
categories:
 - Other
tags:
 - Linux
---
> 本文介绍在linux搭建邮件服务器，适用于Centos8.0.2等系统。
> 需求环境: 域名,一台云主机(安全组防火墙端口配置完成)

## 安装postfix

`yum install postfix`

## 简单配置postfix

postfix大约有100个配置参数，这些参数都可以通过main.cf 指定。

在此仅对部分配置进行说明和配置

```bash
#配置发件域名
myhostname = mail.example.xyz
mydomain = example.xyz
myorigin = $mydomain
inet_interfaces = all
mydestination = $myhostname, localhost.$mydomain, localhost
local_recipient_maps =
relay_domains = $mydestination　 #变为此状态，定义允许转发的域名
mynetworks = 124.21.25.173, 127.0.0.0/8　 #找到此行，依照自己的内网情况修改，公网直接配置ip即可，本处以公网为例
```

## 配置域名解析记录（重要）

### MX记录

优先级设为5，主机记录为`空或@`，记录值为`mail.example.xyz`.

### A记录

直接将`mail.example.xyz`解析至服务器IP

### SPF记录

为避免被识别为垃圾邮件，配置SPF，最简单的方法为TXT记录

将`spf.example.xyz`解析至`v=spf1 ip4:服务器ip ~all`即可

## 测试发送邮件

在终端输入命令，即可收到邮件，未指定发件人默认为`当前用户@example.xyz`

`echo -e "date "+%Y-%m-%d %H:%M:%S" 测试邮件" | mail -s "testmail" receive@example.com`