---
title: 【接口自动化】xml响应断言
date: 2023-03-29
sidebar: auto
categories:
 - 测试
tags:
 - 接口自动化
---

## xml断言

```py
from requests_xml import XMLSession
session = XMLSession()
r = session.get('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss')	
r.xml.links
```

### xpath断言

```py
from requests_xmlimport XMLSession
session = XMLSession()
r = session.get('https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss')	
r.xml.links
item = r.xml.xpath('//item', first=True)
print(item.text)
```

### 直接解析xml

```py
# xml解析
import xml.etree.ElementTree as ET
root = ET.fromstring(countrydata)
root.findall(".")
root.findall("./country/neighbor")root.findall(".//year/..[@name='Singapore']")
root.findall(".//*[@name='Singapore']/year")
root.findall(".//neighbor[2]")
```

## Hamcrest断言体系

> Hamcrest可以处理多种复杂断言，实现逻辑序列，字典等功能的自定义断言，功能强大。

框架自带assert体系: assert，assertEqual
Hamcrest体系: assertThat

```py
from hamcrest import *
import unittest


class BiscuitTest(unittest.TestCase):
    def testEquals(self):
        theBiscuit = Biscuit("Ginger")
        myBiscuit = Biscuit("Ginger")
        assert_that(theBiscuit, equal_to(myBiscuit))


if __name__ == "__main__":
    unittest.main()
```

