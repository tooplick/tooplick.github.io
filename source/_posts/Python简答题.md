---
title: Python简答题
date: 2026-06-27 13:23:58
tags: Python
categories: Technology
keywords: Python简答题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Python简答题
---
# Python 简答题

## 一、编写函数题

### 1. 判断闰年

**题目：** 编写函数，判断输入年份是否为闰年。

闰年条件：
- 能被4整除但不能被100整除；
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

---

### 2. 统计字符出现次数

**题目：** 编写函数 `count_char(s)`，统计 "banana" 字符串中每个字符出现的次数，并以字典形式返回。

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

---

### 3. 返回每行最大值

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

---

### 4. 计算学生平均成绩

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

---

### 5. 矩阵相加

**题目：** 编写函数 `matrix_sum(a, b)`，接收两个二维列表（矩阵）参数，返回两个矩阵对应元素相加后的结果矩阵。

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

---

### 6. 删除列表重复元素

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

---

### 7. 计算学生平均成绩（同第4题）

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

---

## 二、阅读代码写输出

### 8. if-else 条件判断

**题目：**

```python
a = 10
b = 20
if a > b:
    print("a大于b")
else:
    print("a小于等于b")
```

**答案：** `a小于等于b`

**解析：** a 的值为 10，b 的值为 20，条件 `a > b` 不成立，因此执行 else 分支，输出 "a小于等于b"。

---

### 9. for 循环累加

**题目：**

```python
sum = 0
for i in range(1, 5):
    sum += i
print(sum)
```

**答案：** `10`

**解析：** `range(1,5)` 生成序列 1、2、3、4，累加 1+2+3+4=10。

---

### 10. 列表 append 与索引

**题目：**

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits[2])
```

**答案：** `cherry`

**解析：** append 向末尾添加 "orange"，列表变为 `["apple", "banana", "cherry", "orange"]`，索引 2 对应 "cherry"。

---

### 11. 字典取值

**题目：**

```python
student = {"name": "Alice", "age": 18, "major": "Computer"}
print(student["age"])
```

**答案：** `18`

**解析：** 字典中键 "age" 对应的值是 18。

---

### 12. 函数调用与 f-string

**题目：**

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Bob"))
```

**答案：** `Hello, Bob!`

**解析：** 调用 `greet("Bob")` 时，name 为 "Bob"，返回 "Hello, Bob!"。

---

### 13. 文件读取

**题目：** 假设当前目录下有一个名为 test.txt 的文件，内容为 "Hello World!"。

```python
with open("test.txt", "r") as f:
    content = f.read()
print(content)
```

**答案：** `Hello World!`

**解析：** 以只读模式打开文件，read() 读取全部内容并输出。

---

### 14. 元组负索引

**题目：**

```python
colors = ("red", "green", "blue")
print(colors[-1])
```

**答案：** `blue`

**解析：** 索引 -1 表示最后一个元素，即 "blue"。

---

### 15. 集合去重

**题目：**

```python
nums = {1, 2, 2, 3, 3, 3}
print(len(nums))
```

**答案：** `3`

**解析：** 集合元素唯一，去重后为 {1, 2, 3}，长度为 3。

---

### 16. while 循环

**题目：**

```python
count = 0
while count < 3:
    print(count)
    count += 1
```

**答案：**

```
0
1
2
```

**解析：** count 从 0 开始，每次循环输出后加 1，直到 count=3 时循环结束。

---

### 17. 字符串拼接

**题目：**

```python
str1 = "Hello"
str2 = "Python"
print(str1 + " " + str2)
```

**答案：** `Hello Python`

**解析：** 使用 `+` 运算符拼接字符串。

---

## 三、解释代码输出及原因

### 18. f-string 格式化

**题目：**

```python
name = 'Alice'
print(f'My name is {name}!')
```

**答案：** 输出 `My name is Alice!`。使用了 f-string 格式化字符串，`{name}` 会被变量 name 的值 'Alice' 替换。

---

### 19. 列表推导式

**题目：**

```python
numbers = [1, 2, 3]
doubled = [x*2 for x in numbers]
print(doubled)
```

**答案：** 输出 `[2, 4, 6]`。使用列表推导式，遍历 numbers 中每个元素 x，将其乘以 2 后组成新列表。

---

### 20. 函数默认参数

**题目：**

```python
def add(a, b=2):
    return a + b

print(add(3))
print(add(3, 5))
```

**答案：** 依次输出 `5` 和 `8`。函数定义了默认参数 b=2，`add(3)` 时 b 使用默认值 2，返回 5；`add(3,5)` 时 b 被赋值为 5，返回 8。

---

### 21. 字典操作

**题目：**

```python
student = {'name': 'Bob', 'age': 18}
print(student['name'])
student['age'] = 19
print(student)
```

**答案：** 依次输出 `Bob` 和 `{'name': 'Bob', 'age': 19}`。通过键 'name' 获取值 'Bob'；通过赋值修改键 'age' 的值为 19。

---

### 22. 字符串拼接

**题目：**

```python
a = "Hello"
b = "World"
print(a + " " + b)
```

**答案：** 输出 `Hello World`。字符串通过 `+` 号拼接。

---

### 23. if-else 条件判断

**题目：**

```python
a = 5
b = 3
if a > b:
    print('a is bigger')
else:
    print('b is bigger')
```

**答案：** 输出 `a is bigger`。条件 `a > b`（5>3）成立，执行 if 块中的语句。

---

### 24. 类与对象

**题目：**

```python
class Person:
    def __init__(self, name):
        self.name = name
    def greet(self):
        print(f'Hello, {self.name}!')

p = Person('Charlie')
p.greet()
```

**答案：** 输出 `Hello, Charlie!`。定义 Person 类，`__init__` 初始化 name 属性，`greet` 方法输出问候语。创建对象 p 时传入 'Charlie'，调用 greet 输出对应内容。

---

### 25. 列表切片

**题目：**

```python
lst = [1, 2, 3, 4, 5]
print(lst[1:4])
```

**答案：** 输出 `[2, 3, 4]`。切片 `lst[1:4]` 表示从索引 1 到 3（不包含索引 4）。

---

### 26. 文件读写

**题目：**

```python
with open('test.txt', 'w') as f:
    f.write('Hello World!')
with open('test.txt', 'r') as f:
    content = f.read()
print(content)
```

**答案：** 输出 `Hello World!`。'w' 模式写入文件（覆盖原有内容），'r' 模式读取文件，with 语句自动关闭文件。

---

### 27. 函数调用

**题目：**

```python
def add(a, b):
    return a + b

result = add(2, 3)
print(result)
```

**答案：** 输出 `5`。函数 add 接收两个参数并返回和。

---

### 28. 列表索引

**题目：**

```python
lst = [10, 20, 30, 40]
print(lst[2])
```

**答案：** 输出 `30`。列表索引从 0 开始，`lst[2]` 表示第三个元素，即 30。

