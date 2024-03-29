---
title: web入门期末大作业
date: 2022-04-15
sidebar: auto
tags:
 - 作业
categories: 
 - 课程设计
---

# 《Web入门》期末大作业

## 基于html + css + js完成淘宝网首页效果

### 实验要求

基于html + css + js完成淘宝网首页效果 

主要考查：

```markdown
- 开发者工具的使用，包括素材的获取
- 所学的html、css、js运用
- 代码的规范性（命名及相关注释）
```

### 功能要求

```markdown
(1)实现整体布局铺满页面
(2)实现固定顶部搜索条
(3)右侧悬浮条的固定和动效
(4)页面内文字动效
(5)商品展示轮播图实现
(6)实现图标颜色变化
(7)实现下拉列表
(8)商品图片展示蒙层和突出显示
(9)商品详细信息隐藏
```

### 实现效果截图

<img title="" src="./1.png" alt="" data-align="inline">

### 具体实现技术

```markdown
（1）Html：html是web页面的结构，html使用标记描述网页，此处设计的网页内容包括标题、段落、无序列表、定义列表等。Html是标记和纯文本构成的，网站小图标命名favicon.ico，以img/x-icon设置。

（2）
css：级联样式表，无序列表、有序列表的应用；
hover伪类的应用，对组件颜色和效果的切换；
css命名采用“组件+位置+效果”和“位置+效果”，便于快速查找到相关样式；
css中对页面内ul、ol等元素进行统一设计，减少代码冗余。
同时还用到了xml的svg进行图标的设计，svg元素图标取自阿里巴巴矢量图网站。

（3）js:对页面内切换效果使用jquary进行实现，如顶部搜索栏宝贝中“天猫和店铺的切换”；滚动条监听，实现右侧悬浮导航跳转、回到顶部功能；轮播图状态切换，是采用增删class来实现的，所以没有动效…

（4）素材爬取：使用浏览器开发者工具，对网页内相关元素进行检查，点击对应素材，此时可以在对应规则中查看样式，一般图片会以链接形式存储，点击链接下载另存即可。同时，使用开发者工具还可以查看级联样式表属性，获取元素规则。

（5）网页调试：在开发者工具中，可以采用定位方式找到对应元素，对元素样式（颜色、字体、行高、偏移量、边距、边框、布局等）进行查看，同时可以编辑样式，实时查看和修改；在“计算出的样式”一栏中，可以查看到选中元素的布局和内部样式，通过布局图可以直观感受组件的位置，以便进行调整。

（6）页面js调试：我用的不是原生js，是jQuery，可以通过控制台输出相关信息进行调试，使用console.log、添加alert等方法，及时查看js错误原因，进行对应异常处理。
```

### 资源获取方式

**[因为csdn要下载收费，所以这里用Github获取，点此处跳转，希望大家点个star，感谢！](https://github.com/dgutboy/webTest)**

[点此处进入仿淘宝网页面预览](https://web-test-taupe.vercel.app/taobao.html)