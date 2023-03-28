---
title: 【Web自动化】常见控件定位方法
date: 2023-03-26
sidebar: auto
categories:
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
| link text           | xxxxxxxxxx16 1def element_get_attr():2    # 1、实例化driver对象3    driver = webdriver.Chrome()4    # 2、打开一个网页5    driver.get("https://vip.ceshiren.com/#/ui_study")6    # 3、定位一个元素7    web_element = driver.find_element(By.ID, "locate_id")8    # 4、打印这个元素对象9    # 断点打在想看的对象的下一行10    # print(web_element)11    # 5、获取元素的文本信息12    # 不是每个元素都含有文本信息的13    # print(web_element.text)14    # 6、获取元素的属性信息，title="xxx"15    res = web_element.get_attribute("class")16    print(res)python |
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
