---
title: 【接口自动化】cookie 处理
date: 2023-03-29
sidebar: auto
categories:
 - 测试
tags:
 - 接口自动化
---

## Cookie简介

---

### Cookie使用场景

在接口测试过程中，很多情况下，需要发送的请求附带cookies，才会得到正常的响应的结果。所以使用python+requests进行接口自动化测试也是同理，需要在构造接口测试用例时加入cookie。

### 传递Cookie的两种方式

- 通过请求头信息传递

```python
def test_demo(self):
    url = "https://httpbin.testing-studio.com/cookies"
    header = {
        "Cookie": "hogwarts=school",
        'User-Agent': 'hogwarts'
    }
    r = requests.get(url=url, headers=header)
    print(r.request.headers)
```

- 通过请求的关键字参数cookies传递

```python
def test_demo(self):
    url = "https://httpbin.testing-studio.com/cookies"
    header = {
        'User-Agent': 'hogwarts'
    }
    cookie_data = {"hogwarts": "school", "teacher": "ad"}
    r = requests.get(url=url, headers=header, cookies=cookie_data)
    print(r.request.headers)
```