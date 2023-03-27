---
title: Python数据结构
date: 2023-03-23
sidebar: auto
categories: 
 - Python
tags:
 - Python
---

## Python列表

### **列表定义**

- 列表是有序的可变元素的集合，使用中括号[]包围，元素之间用逗号分隔
- 列表是动态的，可以随时扩展和收缩
- 列表是异构的，可以同时存放不同类型的对象
- 列表中允许出现重复元素
- （列表与其它编程语言中的数组类似）

### 创建列表



## Python元组

### 元组创建

- 元组：有序的不可变对象的集合
- 元组使用小括号包围，各个对象之间用‘,’分隔
- 元组是异构的，可包含多种数据类型

```python
# 1、直接使用,分隔
tup1 = 1, 2, 3, 4, 5
print(type(tup1), tup1)
# <class 'tuple'> (1, 2, 3, 4, 5)

# 2、使用小括号填充
tup2 = (1, 2, 3, 4, 5)
print(type(tup2), tup2)
# <class 'tuple'> (1, 2, 3, 4, 5)

# 3、通过构造函数tuple(iterable)
tup3 = tuple()
print(type(tup3), tup3)
# <class 'tuple'> ()

tup4 = tuple('hogwarts')
print(type(tup4), tup4)
# <class 'tuple'> ('h', 'o', 'g', 'w', 'a', 'r', 't', 's')

tup5 = tuple([1, 2, 3, 4, 5])
print(type(tup5), tup5)
# <class 'tuple'> (1, 2, 3, 4, 5)

# 4、注意：单元素元组，逗号不可缺少
tup6 = 1,
print(type(tup6), tup6)
# <class 'tuple'> (1,)

tup7 = (2,)
print(type(tup7), tup7)
# <class 'tuple'> (2,)

tup8 = (3)
print(type(tup8), tup8)
# <class 'int'> 3

```

### 元组索引

```python
"""元组索引"""
tup9 = tuple('hotwras')
# 1、正向索引 0,1,2,3,4,5,6
print(tup9[2])
# 2、反向索引 -1,-2,-3,-4,-5,-6
print(tup9[-1])
# t
# s
```

### 元组切片

start、stop、step均可选，默认（start=0，stop=length，step=1）

```python
"""元组切片"""
tup10 = tuple('hotwras')
print(tup10)
print(tup10[0:3:1])
print(tup10[::-1])  # 反转
```

### 元组解包

元组解包方便对可迭代对象进行处理

```python
"""元组解包"""
tup12 = 1, 2, 3
# 1、传统逐个赋值
a = tup12[0]
b = tup12[1]
c = tup12[2]
print(a, b, c)
# 2、解包平行赋值
a, b, c = [1, 2, 3] # 此处a,b,c=tup12也是一样
print(a, b, c)
```



### 元组常用方法

| 方法        | 作用                                   |
| ----------- | -------------------------------------- |
| index(item) | 返回传入元素的索引值（返回最近的一个） |
| count(item) | 返回传入元素出现的次数                 |



### 元组与列表异同点

**相同点**

- 都是有序的
- 都是异构的，能够包含不同类型的对象
- 都支持索引和切片

**区别**

- 声明方式不同，元组使用()，列表使用 []
- 列表是可变的，元组是不可变的

## Python集合



## Python字典

