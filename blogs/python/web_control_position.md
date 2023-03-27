---
title: 常见web控件定位方法
date: 2023-03-26
sidebar: auto
categories：
 - 测试
tags:
 - web自动化
---

## 定位html元素

| 方式                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| class name          | class 属性对应的值                                           |
| css selector (重点) | css 表达式                                                   |
| id (重点)           | id属性对应的值                                               |
| name (重点)         | name属性对应的值                                             |
| link text           | 查找其可见文本与搜索值匹配的锚元素。(可匹配多个)             |
| partial link text   | 查找其可见文本包含搜索值的锚元素。如果多个元素匹配，则只会选择第一个元素 |
| tag name            | 标签名称                                                     |
| xpath (重点)        | xpath表达式                                                  |

## Selenium常用定位方式

```py
# 格式:
driver.find_element_by_定位方式(定位元素)
driver.find_element(By.定位方式,定位元素)
```

```py
# 示例，两种方式作用一模一样
# 官方建议使用下面的方式
driver.find_element_by_id("su")
driver.find_element_(By.ID,"su")
```

> 练习平台：[霍格沃兹测试开发 (ceshiren.com)](https://vip.ceshiren.com/#/ui_study/frame)

### ID 定位

格式：`driver.find_element(By.ID, "locate_id")`

### Name 定位

格式：`driver.find_element(By.NAME, "locate")`

### Css Seletor 定位

格式：`driver.find_element(By.CSS_SELECTOR, "#locate_id")`

### Xpath 定位

格式：`driver.find_element(By.XPATH, '//*[@id="locate_id"]')`

### Link_Text 定位

格式：`driver.find_element(By.LINK_TEXT,"元素定位")`
