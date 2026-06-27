---
title: Python大题
date: 2026-06-27 13:24:43
tags: Python
categories: Technology
keywords: Python大题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Python大题
---
# Python大题 答案解析

## 综合练习4

题量: 7 | 满分: 100

---

## 1. 判断闰年

**题目：** 编写函数，判断输入年份是否为闰年。

**闰年条件：**
- 能被4整除但不能被100整除
- 或能被400整除

**答案：**

```python
def year_days(year):
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        return "闰年"
    else:
        return "平年"

print(year_days(2024))
```

**解析：** 使用逻辑运算符 `and` 和 `or` 组合两个条件，`%` 取模运算判断整除关系。

---

## 2. 统计字符出现次数

**题目：** 编写函数 `count_char(s)`，统计字符串中每个字符出现的次数，并以字典形式返回。

**答案：**

```python
def count_char(s):
    result = {}
    for ch in s:
        if ch in result:
            result[ch] += 1
        else:
            result[ch] = 1
    return result

print(count_char("banana"))
```

**解析：** 遍历字符串，用字典记录每个字符出现次数。若字符已存在则计数+1，否则初始化为1。

---

## 3. 返回每行最大值

**题目：** 编写函数 `find_max_row(matrix)`，接收一个二维列表，返回每一行中的最大值组成的新列表。

**答案：**

```python
def find_max_row(matrix):
    result = []
    for row in matrix:
        result.append(max(row))
    return result

nums = [
    [1, 5, 3],
    [9, 2, 6],
    [7, 8, 4]
]
print(find_max_row(nums))
```

**解析：** 遍历二维列表的每一行，使用内置函数 `max()` 获取每行最大值，添加到结果列表。

---

## 4. 计算平均成绩

**题目：** 编写函数 `student_score(dic)`，接收一个字典参数，字典中保存学生姓名和成绩，计算所有学生的平均成绩并输出。

**答案：**

```python
def student_score(dic):
    total = 0
    for score in dic.values():
        total += score
    return total / len(dic)

scores = {
    "Tom": 85,
    "Lucy": 90,
    "Jack": 78
}
print(student_score(scores))
```

**解析：** 使用 `dic.values()` 获取所有成绩，累加求和后除以字典长度得到平均值。

---

## 5. 矩阵相加

**题目：** 编写函数 `matrix_sum(a, b)`，接收两个二维列表(矩阵)参数，返回两个矩阵对应元素相加后的结果矩阵。

**答案：**

```python
def matrix_sum(a, b):
    result = []
    for i in range(len(a)):
        row = []
        for j in range(len(a[0])):
            row.append(a[i][j] + b[i][j])
        result.append(row)
    return result

m1 = [[1, 2], [3, 4]]
m2 = [[5, 6], [7, 8]]
print(matrix_sum(m1, m2))
```

**解析：** 双重循环遍历矩阵，外层循环遍历行，内层循环遍历列，对应元素相加后存入新矩阵。

---

## 6. 删除重复元素

**题目：** 编写函数 `remove_duplicate(lst)`，接收一个列表参数，删除其中重复的元素，并返回新的列表。

**答案：**

```python
def remove_duplicate(lst):
    result = []
    for i in lst:
        if i not in result:
            result.append(i)
    return result

nums = [1, 2, 2, 3, 4, 4, 5]
print(remove_duplicate(nums))
```

**解析：** 创建新列表，遍历原列表，只将不在新列表中的元素添加进去，自动去重。

---

## 7. 计算平均成绩（同第4题）

**题目：** 编写函数 `student_score(dic)`，接收一个字典参数，字典中保存学生姓名和成绩，计算所有学生的平均成绩并输出。

**答案：**

```python
def student_score(dic):
    total = 0
    for score in dic.values():
        total += score
    return total / len(dic)

scores = {
    "Tom": 85,
    "Lucy": 90,
    "Jack": 78
}
print(student_score(scores))
```

**解析：** 与第4题相同，使用 `values()` 获取所有值求和，再除以字典长度。


