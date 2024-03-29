---
title: 【Web自动化】常见控件交互方法
date: 2023-03-28
sidebar: auto
categories:
 - 测试
tags:
 - web自动化
---

> 本篇内容主要为控件实际操作方法，如输入、清空等操作。目录如下：
>
> - 元素操作
> - 获取元素属性信息

## 简单元素操作（搜狗网页）

---

```python
def element_interaction():
    """
    元素的操作，点击输入清空
    :return:
    """
    # 1、实例化driver对象
    driver = webdriver.Chrome()
    # 2、打开一个网页
    driver.get("https://www.sogou.com")
    # 3、定位到输入框进行操作
    driver.find_element(By.ID,"query").send_keys("霍格沃茨测试开发")
    time.sleep(2)
    # 4、对输入框进行清空
    driver.find_element(By.ID,"query").clear()
    time.sleep(2)
    # 5、再次输入
    driver.find_element(By.ID, "query").send_keys("霍格沃茨测试开发2")
    time.sleep(2)
    # 6、点击搜索
    driver.find_element(By.ID, "stb").click()
    time.sleep(2)
```



## 获取元素属性

---

- 获取元素文本
- 获取元素的属性（html的属性值）

```python
# 获取元素文本
driver.find_element(By.ID, "id").text
# 获取这个元素的name属性的值
driver.find_element(By.ID, "id").get_attribute("name")
```

```python
def element_get_attr():
    # 1、实例化driver对象
    driver = webdriver.Chrome()
    # 2、打开一个网页
    driver.get("https://vip.ceshiren.com/#/ui_study")
    # 3、定位一个元素
    web_element = driver.find_element(By.ID, "locate_id")
    # 4、打印这个元素对象
    # 断点打在想看的对象的下一行
    # print(web_element)
    # 5、获取元素的文本信息
    # 不是每个元素都含有文本信息的
    # print(web_element.text)
    # 6、获取元素的属性信息，title="xxx"
    res = web_element.get_attribute("class")
    print(res)
```
