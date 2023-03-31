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

- 列表是有序的可变元素的集合，使用中括号[ ]包围，元素之间用逗号分隔
- 列表是动态的，可以随时扩展和收缩
- 列表是异构的，可以同时存放不同类型的对象
- 列表中允许出现重复元素
- （列表与其它编程语言中的数组类似）

### 创建列表

- 通过构造函数创建
- 中括号创建
- 并填充列表推导式

```py
# 1、通过构造函数创建
li1 = list()  # 空列表
li1 = list('hogwarts')  # 字符串
li1 = list((1, 2, 3))  # 元组
li1 = list({4, 5, 6})  # 集合
li1 = list({'a': 7, 'b': 8})  # 字典
```

### 列表索引

- 默认正向索引，编号从0开始
- 支持反向索引，编号从-1开始

```py
"""列表：索引"""
li6 = [1,2,3,4]
# 1、正向索引
print(li6[2]) # 3
# 2、反向索引
print(li6[-3]) # 2
```

### 列表切片

> 切片可以一次选取多个元素，而上面的索引仅仅是取单个元素

- 切片[start: stop: step]
  - start 值: 指示开始索引值，如果没有指定，则默认开始值为 0;
  - stop 值:指示到哪个索引值结束，但不包括这个结束索引值。如果没有指定，则取列表允许的最大索引值;
  - step 值: 步长值指示每一步大小，如果没有指定，则默认步长值为 1。
  - 三个值都是可选的，非必填

```py
"""列表：切片"""
# 切片基本用法
li =["h","o","g","w","a","r","t","s"]
print(li[0:5:2]) # ['h', 'g', 'a']
print(li[2:4]) # 省略step['g', 'w']
print(li[:4]) # 省略step和start['h', 'o', 'g', 'w']
print(li[2:]) # 省略step和stop['g', 'w', 'a', 'r', 't', 's']
print(li[::2]) # 省略start和stop['h', 'g', 'a', 't']
print(li[::-1]) #特殊的切片写法: 逆序打印 ['s', 't', 'r', 'a', 'w', 'g', 'o', 'h']
```

### 列表运算符

```python
"""列表：运算符"""
# 1、* 号
li7 = [1]
print(li7 * 5) # [1, 1, 1, 1, 1]
# 2、+ 号
li8 = [1, 2, 3]
li9 = [4, 5, 6]
print(li8 + li9) # [1, 2, 3, 4, 5, 6]
```

### 列表成员检测

- in: 检查一个对象是否在列表中，如果在则返回 True，否则返回 False。
- not in: 检查一个列表是否不包含某个元素。如果不在返回 True，否则返回False。

```python
"""列表：成员检测"""
# 1、in
li10 = [1, 2, 3]
print(1 in li10)
print(100 in li10)
print(1 not in li10)
print(100 not in li10)
```

### 列表嵌套

- 嵌套列表是指在列表里存放列表
- 列表的常用方法都适用于嵌套列表

```python
"""列表嵌套"""
li21 = [[1, 2, 3], ['hogwarts', 'help', 'python']]
print(li21[1][2])
li21[1].append("Go")
print(li21)
```

### 列表推导式

- 列表推导式是指循环创建列表，相当于for 循环创建列表的简化版
- 语法: [x for x in list if x ...l

```python
"""列表推导式"""
# for循环
result = []
for i in range(1, 11):
    if i % 2 == 0:
        result.append(i ** 2)
print(result)

# 列表推导式
result2 = [i ** 2 for i in range(1, 11) if i % 2 == 0]
print(result2)
```

### 列表常用方法

| 方法                          | 入参                                                         | 返回值                              | 含义                                                         |
| ----------------------------- | ------------------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------ |
| append(item)                  | 对象item                                                     | None                                | 将一个对象item 添加到列表的末尾。                            |
| extend(iterable)              | 可迭代对象iterable                                           | None                                | 将一个可迭代对象的所有元素，添加到列表末尾。                 |
| insert(index, item)           | 索引值index，一个对象item                                    | None                                | 将一个对象插入到指定的索引位置，原索引位置及后面的元素后移一位 |
| pop(index) 或pop()            | 索引值index，非必须                                          | 指定索引的元素 未指定则返回末尾元素 | 弹出并返回所指定索引的元素 如果索引值不正确，或者列表已经为空，则引发IndexError 错误 |
| remove(item)                  | 指定元素item                                                 | None                                | 移除列表中第一个等于item的元素 目标元素必须已存在，否则会报ValueError |
| sort(key=None, reverse=False) | 支持2个关键字参数： key：指定带有一个参数的函数，用于从每个列表元素中提取比较键 reverse：默认值为False表示升序，为True表示降序 | None                                | 对列表进行原地排序，只使用< 来进行各项间比较。               |
| reverse()                     | None                                                         | None                                | 将列表中的元素顺序反转 反转只是针对索引值，元素之间不相互比较。 |

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

### set集合

- 集合定义与使用
- 集合常用方法
- 集合推导式

### 集合定义

- 无序的唯一对象集合
- 用大括号{ }包围，对象相互之间使用逗号分隔
- 集合是动态的，可以随时添加或删除元素
- 集合是异构的，可以包含不同类型的数据

### 集合创建

- 通过使用{}填充元素
- 通过构造方法set()
- 通过集合推导式

```python
"""集合创建"""
# 1、通过使用'{}'填充元素
set1 = {1, 2, 3}
print(set1, type(set1))
# 2、通过构造方法set(iterable)
set2 = set('hogwarts') # 这里乱序 {'o', 'g', 's', 'a', 'w', 'h', 'r', 't'} <class 'set'>
print(set2, type(set2))
set3 = set([1, 2, 3])
print(set3, type(set3)) # {1, 2, 3} <class 'set'>
set4 = set()
print(set4, type(set4)) # set() <class 'set'>
# 3、通过集合推导式
set5 = {i for i in range(5) if i % 2 == 0}
print(set5, type(set5)) # {0, 2, 4} <class 'set'>
```

### 集合成员检测

- in：判断元素是否在集合中存在
- not in：判断元素是否在集合中不存在

```python
"""集合成员检测"""
set6 = {1, 4, 6}
# 1、in
print(1 in set6)
# 2、not in
print(10 not in set6)
```

### 集合运算

| 运算类型 | 方法           | 操作符 |
| -------- | -------------- | ------ |
| 交集     | intersection() | &      |
| 并集     | union()        | \|     |
| 差集     | difference()   | -      |

```python
"""集合运算"""
a = {1,3,2}
b = {5,1,4}
# 1、交集运算 intersection()
print(a.intersection(b))
print(a & b)
# 2、并集运算
print(a.union(b))
print(a | b)
# 3、差集运算
print(a.difference(b))
print(a - b)
```

### 集合推导式

- 类似列表推导式，同样集合支持集合推导式
- 语法: {x for x in ... if ...}

```python
"""
    集合推导式
    示例：寻找hogwarts 与 hello world 的共同字母
    输出：{'r', 'h', 'o', 'w'}
"""
set10 = set()
for s in "hogwarts":
    if s in "hello world":
        set10.add(s)
print(set10)

set11 = {s for s in "hogwarts" if s in "hello world"}
print(set11)
```



### 集合常用方法

| 方法             | 入参               | 返回值 | 含义                                                         |
| ---------------- | ------------------ | ------ | ------------------------------------------------------------ |
| add(item)        | 对象item           | None   | 将单个对象添加到集合当中                                     |
| update(iterable) | 可迭代对象iterable | None   | 批量添加来自可迭代对象中的所有元素                           |
| remove(item)     | 指定元素值         | None   | 从集合中移除指定元素item<br/>如果item不存在于集合中则会引发KeyError |
| discard(item)    | 指定对象值         | None   | 从集合中移除指定对象item<br/>元素item不存在没影响，不会抛出KeyError |
| clear()          | 无                 | None   | 清空集合，移除所有元素                                       |



## Python字典

### 目录

- 字典定义与使用
- 字典常用方法
- 字典推导式
- 实例

### 字典定义

- 字典是无序的键值对集合
- 字典用大括号 {} 包围
- 每个键 / 值对之间用一个逗号分隔
- 各个键与值之间用一个冒号分隔
- 字典是动态的

### 字典创建

- 使用大括号填充键值对
- 通过构造方法dict()
- 使用字典推导式

```python
"""字典创建"""
# 1、使用大括号创建
dc1 = {"name": "hello", "age": "18"}
print(type(dc1), dc1)
dc2 = {}
print(type(dc2), dc2)
# 2、使用字典构造方法
dc3 = dict()
print(type(dc3), dc3)
dc4 = dict([("name", "hello"), ("age", "18")])
print(type(dc4), dc4)
# 3、使用字典推导式
dc5 = {k: v for k, v in [("name", "hello"), ("age", "18")]}
print(type(dc5), dc5)
```

### 字典访问元素

- 与字典也支持中括号记法[key]
- 字典使用键来访问其关联的值
- 访问时对应的key必须要存在

```python
"""字典访问元素"""
dc6 = {"name": "hogwarts", "age": 18}
# 1、访问存在的key
print(dc6["name"])  # hogwarts
print(dc6["age"])  # 18
# 2、访问不存在key
print(dc6["num"])  # KeyError: 'num'
```

### 字典操作元素

- 语法: `dict[key] = value`
- 添加元素
  - 键不存在
- 修改元素
  - 键已经存在

```python
# 1、key存在--赋值
dc6['age'] = 20
print(dc6)
# 2、key不存在--插入
dc6['hobby'] = "Magic"
print(dc6)
```

### 字典嵌套

- 嵌套字典
- 字典的值可以是字典对象

```python
"""字典使用: 嵌套字典"""
dc = {"name": "Harry Potter", "age": 18, "course": {"magic": 90, "python": 80}}
# 1、获取课程Magic的值
print(dc['course']['magic']) # 90
# 2、把python分数改成100分
dc['course']['python'] = 100
print(dc)
# {'name': 'Harry Potter', 'age': 18, 'course': {'magic': 90, 'python': 100}}
```

### 字典推导式

- 字典推导式:可以从任何以键值对作为元素的可迭代对象中构建出字典。
- 实例:给定一个字典对象`{'a' : 1, 'b': 2, 'c' : 3}`，找出其中所有大于1的键值对，同时value值进行平方运算。

```python
"""字典推导式{k:v for k，v in ...}"""
# 例子2
dc11 = {k: v for k, v in [("name", "hello"), ("age", "18")]}
print(type(dc11), dc11) # <class 'dict'> {'name': 'hello', 'age': '18'}

# 例子2
dc12 = {'a': 1, 'b': 2, 'c': 3}
data = dict()
for k, v in dc12.items():
    if v > 1:
        data[k] = v ** 2
print(data) # {'b': 4, 'c': 9}

data2 = {k: v ** 2 for k, v in dc12.items() if v > 1}
print(data2) # {'b': 4, 'c': 9}
```



### 字典方法

| 方法         | 入参               | 返回值                                                       | 含义                                                         |
| ------------ | ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| keys()       | 无                 | None                                                         | 返回由字典键组成的一个新视图对象                             |
| values()     | 无                 | None                                                         | 返回由字典值组成的一个新视图对象                             |
| items()      | 无                 | None                                                         | 返回由字典项((键,值)对)组成的一个新视图对象                  |
| get(key)     | key:字典的键，必传 | 如果key存在于字典中，返回key关联的value值<br />如果key不存在，则返回None | 获取指定key关联的value值<br />此方法的好处是无需担心key是否存在，永远都不会引发KeyError错误 |
| update(dict) | dc:字典对象，必传  | None                                                         | 使用来自dict的键/值对更新字典，覆盖原有的键和值。            |
| pop(key)     | key:必传           | 如果key 存在于字典中，则将其移除并返回value 值<br />如果 key 不存在于字典中，则会引发KeyError | 删除指定 key的键值对，并返回对应value 值。                   |



### 实例

```python
"""
给定一个字典对象，请使用字典推导式，将它的key和value分别进行交换。也就是key变成value值，value值变成key。
输入: {'a': 1, 'b': 2, 'c': 3}
输出: {1: 'a', 2: 'b', 3: 'c'}
"""
data = {'a': 1, 'b': 2, 'c': 3}
result = {v:k for k,v in data.items()}
print(data)
print(result)
```



## 总结

以上仅仅是对数据结构的一些基础性知识介绍，但对每个方法并没有做出详细的样例和说明，有一些方法可能会存在使用上的问题。后续还需要多多练习，排除错误。

对于推导式来说，它可以提高代码的易读性，特别是当熟练掌握后，可以使得代码更加简洁易读。

---

最后编辑于： 2023年3月31日 16:46
