---
title: 【实战】测试人论坛搜索功能自动化测试
date: 2023-03-28
sidebar: auto
categories:
 - 测试
tags:
 - web自动化
---

## 编写步骤

- 产品分析
- 测试用例分析
- 编写脚本
- 脚本优化

```python
class TestCeshiren():
    # ====优化1
    # 问题： 1、没有前置和后置的处理动作
    # 2、driver启动后没有做quit操作
    # 如果没有做quit操作，chrome.exe就会在后台留存
    def setup(self):
        # 打开浏览器
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(3)
        # 打开被测地址
        self.driver.get("https://ceshiren.com/search?expanded=true")

    def teardown(self):
        self.driver.quit()

    def test_search(self):
        """
        前提条件：进入测试人论坛的搜索页面
        测试步骤：1、输入搜索关键词
                2、点击搜索按钮
        :return:
        """
        # 定位到搜索输入框，并输入搜索内容
        self.driver.find_element(By.CSS_SELECTOR, "[placeholder='搜索']").send_keys("Appium")
        # 定位到搜索按钮，并点击
        self.driver.find_element(By.CSS_SELECTOR, ".search-cta").click()
        time.sleep(3)
        # 断言=预期结果与实际结果一致
        # 获取实际结果
        # 第一种方式，获取第一个搜索结果
        time.sleep(3)
        web_element = self.driver.find_element(By.CSS_SELECTOR,".topic-title")
        # 获取文本类的实际结果，断言，applium是否在实际结果文本之中
        # 两种解决方案大小写，1、统一，比如断言appium in
        # 2、获取到的内容与预期结果都用lower统一转成小写就可以
        assert "appium" in web_element.text.lower()
```

优化：

1. 断言
2. setup、teardown的使用
3. quit的操作