---
title: 04-拉取和上传到Github仓库
date: 2025-02-04
sidebar: auto
tags:
 - 教程
categories: 
 - Github入门
---

> 本文介绍如何拉取GitHub仓库，并在本地仓库修改后上传但远程仓库。

## 拉取仓库到本地

### 在GitHub复制你的仓库SSH链接

![image-20250204131117128](http://cdn.cookcode.xyz/img/blog/image-20250204131117128.png)

### 新建文件夹，右键单击打开Git bash

```bash
git clone git@github.com:LeoYangdev/Shenghao-Yang.git #此处为你的仓库链接

# 首次克隆后，之后每次拉取只需要 git pull 即可
```

![image-20250204131638704](http://cdn.cookcode.xyz/img/blog/image-20250204131638704.png)

## 上传到远程仓库

### 修改本地仓库后，输入如下命令

将修改添加到git，给本次提交写注释，然后push到远程仓库

```bash
git add .
git commit -m "首次提交注释，此处可自定义"
git push
```

> 注意：如果在其它地方修改过远程仓库，你在本机上传时会出现不一致现象，需要先拉取再上传

可以将以上命令写成一个cmd命令，便于每次上传操作简单，如图所示：

