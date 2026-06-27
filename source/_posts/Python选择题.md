---
title: Python选择题
date: 2026-06-27 13:18:46
tags: Python
categories: Technology
keywords: Python选择题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Python选择题
---

# Python 选择题整理

> 共 84 题，满分 100 分

---

## 1. 以下哪个不是Python的基本数据类型？

- A. int
- B. float
- C. string
- D. **array** ✅

**答案：D**

> Python的基本数据类型包括int（整数）、float（浮点数）、string（字符串）等，array不是Python的基本数据类型，它属于numpy库中的数据结构。

---

## 2. 以下哪个变量名符合Python的命名规范？

- A. 123_var
- B. var-name
- C. **varName** ✅
- D. class

**答案：C**

> Python变量名不能以数字开头（选项A错误），不能包含减号（选项B错误），不能使用关键字（选项D中class是关键字错误）；选项C为驼峰命名法，符合Python命名规范。

---

## 3. Python中推荐的缩进方式是？

- A. 使用2个空格
- B. **使用4个空格** ✅
- C. 使用Tab键
- D. 混合使用空格和Tab

**答案：B**

> PEP 8规范推荐Python使用4个空格进行缩进，不推荐混合使用空格和Tab，也不推荐仅用2个空格（虽然部分项目使用）。

---

## 4. 以下哪种是Python的单行注释符号？

- A. //
- B. **#** ✅
- C. /* */
- D. <!-- -->

**答案：B**

> Python单行注释使用#，//是C++/Java的单行注释，/* */是多行注释（Python中多行注释常用三引号），<!-- -->是HTML注释。

---

## 5. 以下哪种方式不能定义字符串？

- A. 'hello'
- B. "hello"
- C. '''hello'''
- D. **\<hello\>** ✅

**答案：D**

> Python中字符串可以用单引号、双引号、三引号定义，尖括号不能用于定义字符串。

---

## 6. Python中条件语句的关键字是？

- A. **if** ✅
- B. switch
- C. case
- D. when

**答案：A**

> Python中条件语句使用if关键字，不支持switch和case（Python 3.10+支持match-case语法，但题目为基础内容）；when不是Python条件语句关键字。

---

## 7. Python中用于遍历序列的循环语句是？

- A. **for** ✅
- B. while
- C. do-while
- D. loop

**答案：A**

> Python中for循环常用于遍历序列（如列表、字符串），while循环基于条件重复执行；Python不支持do-while和loop关键字。

---

## 8. 以下哪个是Python列表的正确定义方式？

- A. list = (1, 2, 3)
- B. **list = [1, 2, 3]** ✅
- C. list = {1, 2, 3}
- D. list = '1,2,3'

**答案：B**

> Python列表使用方括号[]定义（选项B正确）；选项A是元组，选项C是集合，选项D是字符串。

---

## 9. 在Python中，以下哪个关键字用于表示条件判断的开始？

- A. for
- B. **if** ✅
- C. while
- D. def

**答案：B**

> if是Python中用于条件判断的关键字，for用于循环遍历，while用于条件循环，def用于定义函数。

---

## 10. 执行以下代码后，输出结果是？

```python
x = 5
if x > 10:
    print('A')
else:
    print('B')
```

- A. A
- B. **B** ✅
- C. 无输出
- D. 报错

**答案：B**

> x的值为5，不满足x>10的条件，因此执行else块中的print('B')语句，输出B。

---

## 11. 执行以下代码后，输出结果是？

```python
score = 85
if score >= 90:
    print('优秀')
elif score >= 80:
    print('良好')
elif score >= 60:
    print('及格')
else:
    print('不及格')
```

- A. 优秀
- B. **良好** ✅
- C. 及格
- D. 不及格

**答案：B**

> score的值为85，满足score>=80的条件，因此执行对应的print('良好')语句，输出良好。

---

## 12. 在Python中，以下哪个关键字用于创建条件循环？

- A. for
- B. if
- C. **while** ✅
- D. break

**答案：C**

> while关键字用于创建条件循环，只要条件为真就重复执行循环体；for用于遍历可迭代对象；break用于终止循环。

---

## 13. 执行以下代码后，循环体执行了多少次？

```python
count = 0
while count < 3:
    count += 1
```

- A. 0次
- B. 1次
- C. 2次
- D. **3次** ✅

**答案：D**

> 初始count=0，第一次循环count变为1，第二次变为2，第三次变为3，此时count<3不成立，循环结束，共执行3次。

---

## 14. 以下代码中，能够遍历列表[1,2,3]的是？

- A. for i in range(3): print(i)
- B. **for i in [1,2,3]: print(i)** ✅
- C. for i in '123': print(i)
- D. for i in 1,2,3: print(i+1)

**答案：B**

> 选项B中的for循环直接遍历列表[1,2,3]中的每个元素并打印；选项A遍历的是0、1、2；选项C遍历的是字符串的字符；选项D打印的是元素加1后的值。

---

## 15. range(1,5)生成的序列是？

- A. **1,2,3,4** ✅
- B. 1,2,3,4,5
- C. 0,1,2,3,4
- D. 0,1,2,3

**答案：A**

> range(a,b)生成的序列包含a但不包含b，因此range(1,5)生成1、2、3、4。

---

## 16. 执行以下代码后，输出结果是？

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

- A. **0 1 2** ✅
- B. 0 1 2 3
- C. 0 1 2 3 4
- D. 无输出

**答案：A**

> 当i等于3时，执行break语句终止循环，因此只打印0、1、2。

---

## 17. 执行以下代码后，输出结果是？

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

- A. **0 1 3 4** ✅
- B. 0 1 2 3 4
- C. 0 1
- D. 3 4

**答案：A**

> 当i等于2时，执行continue语句跳过本次循环，因此不打印2，其他元素正常打印。

---

## 18. 以下代码中，属于循环嵌套的是？

- A. for i in range(3): print(i)
- B. while True: break
- C. **for i in range(2): for j in range(2): print(i,j)** ✅
- D. if x > 0: print(x)

**答案：C**

> 循环嵌套是指一个循环体内包含另一个循环，选项C中for循环内部还有一个for循环，属于循环嵌套。

---

## 19. 在Python中，以下哪种数据容器是有序且可变的？

- A. 集合(set)
- B. **列表(list)** ✅
- C. 元组(tuple)
- D. 字典(dict)

**答案：B**

> 列表(list)是Python中有序且可变的数据容器，可以通过索引访问元素并修改元素值。集合(set)无序且元素唯一，元组(tuple)有序但不可变，字典(dict)无序（Python 3.7+开始有序，但本质是键值对映射）且可变。

---

## 20. 以下关于元组的描述，正确的是？

- A. 元组中的元素可以被修改
- B. 元组使用方括号[]定义
- C. 元组中的元素类型必须相同
- D. **元组可以包含不同类型的元素** ✅

**答案：D**

> 元组(tuple)是不可变的，使用圆括号()定义，可以包含不同类型的元素，例如(1, 'a', True)。

---

## 21. 以下哪种数据容器中的元素是唯一且无序的？

- A. 列表(list)
- B. 元组(tuple)
- C. **集合(set)** ✅
- D. 字典(dict)

**答案：C**

> 集合(set)的特点是元素唯一且无序，自动去重。列表和元组有序，字典是键值对结构，键唯一但值可以重复。

---

## 22. Python字典的键必须是以下哪种类型？

- A. 可变类型
- B. **不可变类型** ✅
- C. 整数类型
- D. 字符串类型

**答案：B**

> 字典的键必须是不可变类型（如整数、字符串、元组），因为字典通过哈希表实现，可变类型（如列表、集合）无法哈希，不能作为键。

---

## 23. 要向列表的末尾添加一个元素，应该使用哪个方法？

- A. **append()** ✅
- B. insert()
- C. extend()
- D. add()

**答案：A**

> append()方法用于在列表末尾添加单个元素；insert()用于在指定位置插入元素；extend()用于将另一个可迭代对象的元素添加到列表末尾；add()是集合的方法。

---

## 24. 要从集合中移除指定元素，且当元素不存在时不报错，应该使用哪个方法？

- A. remove()
- B. **discard()** ✅
- C. pop()
- D. clear()

**答案：B**

> discard()方法用于移除集合中的指定元素，元素不存在时不报错；remove()方法元素不存在时会抛出KeyError；pop()方法随机移除并返回一个元素；clear()方法清空集合。

---

## 25. 要获取字典中所有键的列表，应该使用哪个方法？

- A. **keys()** ✅
- B. values()
- C. items()
- D. get()

**答案：A**

> keys()方法返回字典中所有键的视图对象；values()返回所有值；items()返回所有键值对；get()用于获取指定键的值。

---

## 26. 以下关于元组的说法，错误的是？

- A. 元组的元素可以是不同类型
- B. 元组使用圆括号定义
- C. **元组中的元素可以被修改** ✅
- D. 元组可以作为字典的键

**答案：C**

> 元组是不可变的，其元素不能被修改。其他选项均正确。

---

## 27. 已知列表a = [1, 2, 3, 4, 5]，执行a[1:3]后得到的结果是？

- A. **[2, 3]** ✅
- B. [1, 2]
- C. [2, 3, 4]
- D. [1, 2, 3]

**答案：A**

> Python列表切片语法a[start:end]，start包含，end不包含。所以a[1:3]表示从索引1到索引2的元素，即[2, 3]。

---

## 28. 要同时遍历字典的键和值，应该使用哪个方法？

- A. keys()
- B. values()
- C. **items()** ✅
- D. get()

**答案：C**

> items()方法返回字典中所有键值对的视图对象，每个元素是一个包含键和值的元组，可通过for k, v in dict.items()同时遍历。

---

## 29. 在Python中，定义一个无参数、无返回值的函数，以下语法正确的是？

- A. **def func(): pass** ✅
- B. function func(): pass
- C. def func() pass
- D. def func() { pass }

**答案：A**

> Python中定义函数使用def关键字，函数体需用冒号和缩进标识，pass可作为空函数体占位符。

---

## 30. 以下关于Python函数参数的描述，错误的是？

- A. 位置参数必须按定义顺序传递
- B. 默认参数可以在调用时省略
- C. 关键字参数传递时必须使用等号
- D. **可变长度参数只能接收列表类型** ✅

**答案：D**

> 可变长度参数*args接收的是元组类型，**kwargs接收的是字典类型，并非只能接收列表。

---

## 31. Python函数中，用于返回值的关键字是？

- A. **return** ✅
- B. print
- C. yield
- D. break

**答案：A**

> return关键字用于函数返回值；print用于输出内容；yield用于生成器；break用于中断循环。

---

## 32. 以下关于Python函数作用域的描述，正确的是？

- A. 全局变量不能在函数内部修改
- B. 局部变量可以在函数外部访问
- C. **global关键字用于声明使用全局变量** ✅
- D. nonlocal关键字用于声明使用全局变量

**答案：C**

> global关键字用于在函数内部声明使用全局变量；nonlocal用于嵌套函数中声明使用外层函数的局部变量。

---

## 33. 以下哪个是合法的lambda表达式？

- A. **lambda x: x\*\*2** ✅
- B. lambda x, y: x + y if x > y
- C. lambda: print('hello')
- D. lambda x: x = 1

**答案：A**

> lambda表达式必须是单行表达式，选项B缺少else分支，选项C是语句而非表达式，选项D是赋值语句而非表达式，均不合法。

---

## 34. 以下关于递归函数的描述，错误的是？

- A. 递归函数必须有终止条件
- B. 递归函数调用次数过多可能导致栈溢出
- C. **递归函数的执行效率通常高于循环** ✅
- D. 递归函数是调用自身的函数

**答案：C**

> 递归函数由于存在函数调用开销，执行效率通常低于循环。

---

## 35. 定义函数时，默认参数的正确位置是？

- A. 所有参数的最前面
- B. **位置参数之后，可变参数之前** ✅
- C. 可变参数之后，关键字参数之前
- D. 所有参数的最后面

**答案：B**

> Python函数定义中，参数顺序为：位置参数 → 默认参数 → 可变位置参数*args → 关键字参数 → 可变关键字参数**kwargs。

---

## 36. 以下关于函数文档字符串（docstring）的描述，正确的是？

- A. docstring必须使用双引号
- B. **docstring可以通过help()函数查看** ✅
- C. docstring只能写在函数定义的第一行
- D. docstring对函数功能无影响

**答案：B**

> docstring可通过help()函数或\_\_doc\_\_属性查看；可使用单引号、双引号或三引号；可写在函数定义的多行。

---

## 37. 以下代码的输出结果是？

```python
def func(a, b=[]):
    b.append(a)
    return b

print(func(1), func(2))
```

- A. [1] [2]
- B. **[1] [1, 2]** ✅
- C. [1, 2] [1, 2]
- D. 报错

**答案：B**

> 函数默认参数的列表在定义时创建，后续调用会复用该列表。第一次调用func(1)时b为[1]，第二次调用func(2)时b为[1,2]。

---

## 38. 以下哪个是Python内置的高阶函数？

- A. **map()** ✅
- B. input()
- C. type()
- D. len()

**答案：A**

> 高阶函数是指能接收函数作为参数或返回函数的函数。map()可接收函数和可迭代对象，属于高阶函数。

---

## 39. 在Python中，若要以只读模式打开一个文本文件，应使用的打开模式是？

- A. "w"
- B. **"r"** ✅
- C. "a"
- D. "x"

**答案：B**

> "r"表示只读模式，"w"是写入模式（覆盖原有内容），"a"是追加模式，"x"是创建新文件并写入。

---

## 40. 使用文件对象的哪个方法可以一次性读取文件的全部内容？

- A. **read()** ✅
- B. readline()
- C. readlines()
- D. readall()

**答案：A**

> read()方法无参数时读取全部内容，readline()读取一行，readlines()读取所有行并返回列表，Python中没有readall()方法。

---

## 41. 执行以下代码后，文件"test.txt"中的内容是？

```python
with open("test.txt", "w") as f:
    f.write("Hello")
    f.write("World")
```

- A. "Hello\nWorld"
- B. **"HelloWorld"** ✅
- C. "WorldHello"
- D. "Hello World"

**答案：B**

> write()方法会按顺序写入字符串，不自动添加换行符，因此两次写入的内容会直接拼接。

---

## 42. 使用open()函数打开文件后，若忘记关闭文件，可能会导致什么问题？

- A. 文件内容丢失
- B. 文件被永久锁定无法访问
- C. **占用系统资源，可能导致文件损坏** ✅
- D. 程序立即崩溃

**答案：C**

> 未关闭的文件会占用文件描述符等系统资源，长期不关闭可能导致资源耗尽或文件数据未正确写入（缓存未刷新）。

---

## 43. Python中使用with语句操作文件的主要优势是？

- A. 自动创建文件
- B. **自动关闭文件** ✅
- C. 提高文件读写速度
- D. 支持更多文件格式

**答案：B**

> with语句会在代码块结束后自动调用文件对象的close()方法，确保文件正确关闭，避免资源泄漏。

---

## 44. 若要在文件末尾添加内容而不覆盖原有内容，应使用哪种打开模式？

- A. "r+"
- B. "w+"
- C. **"a"** ✅
- D. "rb"

**答案：C**

> "a"是追加模式，写入内容会添加到文件末尾；"r+"是读写模式但不会自动追加；"w+"是读写模式（覆盖原有内容）；"rb"是二进制只读模式。

---

## 45. 处理二进制文件（如图片、视频）时，应使用哪种打开模式？

- A. "rt"
- B. "wt"
- C. **"rb"** ✅
- D. "at"

**答案：C**

> 二进制文件需用"b"模式打开，如"rb"（只读二进制）、"wb"（写入二进制）。

---

## 46. 使用文件对象的哪个方法可以移动文件指针的位置？

- A. **seek()** ✅
- B. tell()
- C. move()
- D. position()

**答案：A**

> seek(offset, whence)方法用于移动文件指针，tell()方法返回当前指针位置。

---

## 47. 若文件对象为f，以下哪种方式可以逐行读取文件内容？

- A. for line in f.read()
- B. **for line in f** ✅
- C. while f.readline() is not None
- D. f.readlines()

**答案：B**

> 文件对象是可迭代对象，直接用for循环遍历即可逐行读取。f.read()返回字符串，遍历会逐个字符处理；f.readlines()返回所有行的列表。

---

## 48. 以下哪个模块可以用于处理文件路径？

- A. **os.path** ✅
- B. file
- C. pathlib
- D. both A and C

**答案：A**

> os.path模块提供了路径处理的函数，pathlib是Python 3.4+引入的面向对象路径处理模块，但本题选项中A是最直接的正确答案。

---

## 49. 在Python中，定义类的关键字是以下哪一个？

- A. **class** ✅
- B. def
- C. object
- D. instance

**答案：A**

> Python中使用`class`关键字定义类，`def`用于定义函数，`object`是所有类的基类，`instance`通常指类的实例对象。

---

## 50. 以下代码中，能够正确创建类`Student`的实例的是哪一项？

```python
class Student:
    def __init__(self, name):
        self.name = name
```

- A. s = Student
- B. **s = Student('张三')** ✅
- C. s = Student(name='张三')
- D. s = new Student('张三')

**答案：B**

> Python中创建类的实例需要调用类名并传入初始化方法`__init__`所需的参数。选项A仅引用类对象，未创建实例；选项D使用了Java风格的`new`关键字，Python中不需要。

---

## 51. 以下代码中，实例属性`age`的值是多少？

```python
class Person:
    def __init__(self):
        self.age = 18

p = Person()
p.age = 20
```

- A. 18
- B. **20** ✅
- C. 报错
- D. None

**答案：B**

> 实例属性可以通过实例对象直接修改，代码中先初始化`age`为18，随后修改为20，因此最终`age`的值为20。

---

## 52. 以下代码中，类属性`count`的值是多少？

```python
class Car:
    count = 0
    def __init__(self):
        Car.count += 1

c1 = Car()
c2 = Car()
```

- A. 0
- B. 1
- C. **2** ✅
- D. 3

**答案：C**

> 类属性属于类本身，所有实例共享。每次创建`Car`类的实例时，`__init__`方法会将类属性`count`加1，创建两个实例后`count`的值为2。

---

## 53. 以下关于Python实例方法的描述，正确的是哪一项？

- A. **实例方法的第一个参数必须是`self`** ✅
- B. 实例方法只能访问类属性，不能访问实例属性
- C. 实例方法可以通过类名直接调用
- D. 实例方法的第一个参数必须是`cls`

**答案：A**

> Python中实例方法的第一个参数通常命名为`self`，用于引用实例对象本身；`cls`是类方法的第一个参数。

---

## 54. 在Python中，定义类方法需要使用以下哪个装饰器？

- A. @staticmethod
- B. **@classmethod** ✅
- C. @property
- D. @abstractmethod

**答案：B**

> `@classmethod`装饰器用于定义类方法，类方法的第一个参数是`cls`，代表类本身；`@staticmethod`用于定义静态方法；`@property`用于定义属性；`@abstractmethod`用于定义抽象方法。

---

## 55. 以下关于Python静态方法的描述，错误的是哪一项？

- A. 静态方法不需要传入`self`或`cls`参数
- B. 静态方法可以通过类名或实例对象调用
- C. **静态方法可以访问类属性和实例属性** ✅
- D. 静态方法使用`@staticmethod`装饰器定义

**答案：C**

> 静态方法不依赖于类或实例，因此无法访问类属性或实例属性；其他选项的描述均正确。

---

## 56. 以下代码中，类`Dog`继承自类`Animal`的语法正确的是哪一项？

- A. **class Dog(Animal):** ✅
- B. class Dog inherits Animal:
- C. class Dog = Animal:
- D. class Dog extends Animal:

**答案：A**

> Python中类的继承通过在类名后加括号并指定父类来实现。其他选项使用了其他编程语言的继承语法。

---

## 57. 以下代码中，调用`d.speak()`会输出什么？

```python
class Animal:
    def speak(self):
        print('动物叫')

class Dog(Animal):
    def speak(self):
        print('汪汪叫')

d = Dog()
d.speak()
```

- A. 动物叫
- B. **汪汪叫** ✅
- C. 报错
- D. 无输出

**答案：B**

> 子类`Dog`重写了父类`Animal`的`speak`方法，当通过子类实例调用该方法时，会执行子类中重写后的方法，因此输出'汪汪叫'。

---

## 58. 在Python子类的方法中，使用`super()`函数的主要目的是什么？

- A. **调用父类的方法** ✅
- B. 创建父类的实例
- C. 定义子类的属性
- D. 实现多态

**答案：A**

> `super()`函数用于在子类中调用父类的方法，尤其是在重写父类方法时，可以通过`super()`调用父类的实现。

---

## 59. 在Python中，尝试访问列表中不存在的索引会引发哪种异常？

- A. KeyError
- B. **IndexError** ✅
- C. TypeError
- D. ValueError

**答案：B**

> 访问列表不存在的索引时会触发IndexError；KeyError用于字典键不存在；TypeError用于类型不匹配；ValueError用于值不合法。

---

## 60. 以下哪个语句可以捕获所有类型的异常？

- A. **except Exception as e:** ✅
- B. except BaseException as e:
- C. except Error as e:
- D. except AllError as e:

**答案：A**

> Exception是所有非系统退出异常的基类，使用except Exception可以捕获所有常规异常；BaseException包含系统退出类异常，通常不建议直接捕获。

---

## 61. 在try-except结构中，哪个块中的代码无论是否发生异常都会执行？

- A. try块
- B. except块
- C. **finally块** ✅
- D. else块

**答案：C**

> finally块中的代码无论是否发生异常都会执行，常用于资源释放操作；else块仅在无异常时执行。

---

## 62. 以下哪个关键字用于主动抛出异常？

- A. throw
- B. **raise** ✅
- C. assert
- D. try

**答案：B**

> Python中使用raise关键字主动抛出异常；throw是其他语言（如JavaScript）的关键字；assert用于断言；try用于包裹可能抛出异常的代码。

---

## 63. 尝试将字符串转换为整数时，如果字符串格式不正确会引发哪种异常？

- A. **ValueError** ✅
- B. TypeError
- C. SyntaxError
- D. NameError

**答案：A**

> 字符串格式不正确时int()函数会抛出ValueError；TypeError是类型不匹配；SyntaxError是语法错误；NameError是变量未定义。

---

## 64. 当多个except块存在时，Python会按什么顺序匹配异常？

- A. 随机顺序
- B. 从下到上
- C. **从上到下** ✅
- D. 按异常类型优先级

**答案：C**

> Python会按照except块的书写顺序从上到下匹配异常，一旦匹配成功则执行对应块并跳过后续except块，因此应将子类异常放在父类异常前面。

---

## 65. 尝试访问未定义的变量会引发哪种异常？

- A. KeyError
- B. **NameError** ✅
- C. AttributeError
- D. IndexError

**答案：B**

> 访问未定义变量会触发NameError；KeyError是字典键不存在；AttributeError是对象属性不存在；IndexError是列表索引越界。

---

## 66. 以下哪个结构可以在没有异常时执行特定代码？

- A. try-except
- B. try-except-finally
- C. **try-else-finally** ✅
- D. try-finally

**答案：C**

> try-else结构中，else块的代码仅在try块未发生异常时执行；finally块无论是否异常都会执行。

---

## 67. 尝试对不支持的操作数类型进行运算会引发哪种异常？

- A. ValueError
- B. **TypeError** ✅
- C. ZeroDivisionError
- D. ArithmeticError

**答案：B**

> 操作数类型不支持时会触发TypeError；ValueError是值不合法；ZeroDivisionError是除零错误；ArithmeticError是算术错误的基类。

---

## 68. 以下代码中，当用户输入非数字时会输出什么？

```python
try:
    num = int(input("请输入数字："))
except ValueError:
    print("输入错误")
else:
    print(f"你输入的是{num}")
finally:
    print("程序结束")
```

- A. **输入错误\n程序结束** ✅
- B. 你输入的是...\n程序结束
- C. 程序结束
- D. 无输出

**答案：A**

> 输入非数字时会触发ValueError，执行except块输出"输入错误"，然后执行finally块输出"程序结束"；else块仅在无异常时执行。

---

## 69. 在Python中，以下哪个库不是用于数据库编程的？

- A. pymysql
- B. sqlite3
- C. **numpy** ✅
- D. psycopg2

**答案：C**

> numpy是用于数值计算的库，不是数据库编程库。pymysql用于MySQL，sqlite3用于SQLite，psycopg2用于PostgreSQL。

---

## 70. 使用sqlite3库连接数据库时，以下哪个方法用于创建数据库连接？

- A. **connect()** ✅
- B. open()
- C. link()
- D. start()

**答案：A**

> sqlite3库通过connect()方法创建数据库连接，参数为数据库文件名，如sqlite3.connect('test.db')。

---

## 71. 在Python数据库编程中，游标（Cursor）的主要作用是？

- A. 存储数据库连接信息
- B. **执行SQL语句并获取结果** ✅
- C. 加密数据库数据
- D. 备份数据库文件

**答案：B**

> 游标对象用于执行SQL语句（如execute()方法），并通过fetchone()、fetchall()等方法获取查询结果。

---

## 72. 使用pymysql库连接MySQL数据库时，以下哪个参数是必须的？

- A. **database** ✅
- B. charset
- C. port
- D. unix_socket

**答案：A**

> pymysql.connect()方法中，database参数指定要连接的数据库名，是必须的参数。

---

## 73. 执行INSERT、UPDATE、DELETE等修改数据的SQL语句后，需要调用以下哪个方法提交事务？

- A. cursor.commit()
- B. **connection.commit()** ✅
- C. cursor.execute()
- D. connection.close()

**答案：B**

> 修改数据的操作需要通过数据库连接对象（connection）的commit()方法提交事务，否则修改不会生效。

---

## 74. 使用cursor.fetchall()方法获取查询结果时，返回的是什么类型的数据？

- A. 单个元组
- B. **列表** ✅
- C. 字典
- D. 字符串

**答案：B**

> fetchall()方法返回所有查询结果，以列表形式存储，每个元素是一个元组，代表一行数据。

---

## 75. 为了防止SQL注入，执行SQL语句时应优先使用哪种方式传递参数？

- A. 字符串拼接
- B. **%s占位符** ✅
- C. 直接替换变量
- D. eval函数

**答案：B**

> 使用参数化查询（如cursor.execute('SELECT * FROM users WHERE id=%s', (user_id,))）可以有效防止SQL注入。

---

## 76. 完成数据库操作后，以下哪个操作顺序是正确的？

- A. **先关闭游标，再关闭连接** ✅
- B. 先关闭连接，再关闭游标
- C. 只需关闭游标
- D. 只需关闭连接

**答案：A**

> 正确的顺序是先关闭游标（cursor.close()），再关闭数据库连接（connection.close()），以释放资源。

---

## 77. 在Python数据库编程中，通常使用什么语句捕获数据库操作中的异常？

- A. if语句
- B. for语句
- C. **try-except语句** ✅
- D. while语句

**答案：C**

> 使用try-except语句可以捕获数据库操作中的异常（如连接错误、SQL语法错误等），并进行相应的错误处理。

---

## 78. 以下关于SQLite数据库的描述，错误的是？

- A. 是文件型数据库
- B. 无需独立服务器
- C. **支持多用户并发写入** ✅
- D. Python内置支持

**答案：C**

> SQLite是单文件数据库，不支持多用户并发写入，适用于单用户或低并发场景。

---

## 79. 在Python中，类的构造方法是哪个？

- A. **\_\_init\_\_** ✅
- B. \_\_new\_\_
- C. \_\_str\_\_
- D. \_\_repr\_\_

**答案：A**

> `__init__`是类的构造方法，用于初始化实例属性；`__new__`用于创建实例；`__str__`定义实例的字符串表示；`__repr__`定义实例的官方字符串表示。

---

## 80. 在Python中，打开文件时使用`open()`函数，下列哪个模式用于以只读方式打开文本文件？

- A. w
- B. **r** ✅
- C. a
- D. x

**答案：B**

> `w`表示写入模式（覆盖原有内容），`r`表示只读模式，`a`表示追加模式，`x`表示创建新文件并写入。

---

## 81. 在Python中，下列哪个数据结构是可变的、有序的，并且可以包含不同类型的元素？

- A. **列表（list）** ✅
- B. 元组（tuple）
- C. 集合（set）
- D. 字典（dict）

**答案：A**

> 列表（list）是可变的、有序的，可以包含不同类型的元素；元组（tuple）是不可变的；集合（set）是无序的；字典（dict）是无序的键值对集合。

---

## 82. Python中，子类继承父类的语法是？

- A. **class Child(Parent):** ✅
- B. class Child=Parent:
- C. class Child->Parent:
- D. class Child\<Parent:

**答案：A**

> Python中类的继承通过在子类名后的括号中指定父类名实现，语法为`class 子类名(父类名):`。

---

## 83. Python中，以追加模式打开文件的模式是？

- A. 'r'
- B. 'w'
- C. **'a'** ✅
- D. 'x'

**答案：C**

> 'r'是只读模式，'w'是写入模式（会覆盖原有内容），'a'是追加模式（在文件末尾添加内容），'x'是创建模式。

---

## 84. Python中，以下哪种参数类型允许函数接收任意数量的关键字参数？

- A. *args
- B. **\*\*kwargs** ✅
- C. 默认参数
- D. 位置参数

**答案：B**

> `**kwargs`用于接收任意数量的关键字参数，这些参数会被打包成一个字典。`*args`用于接收任意数量的位置参数，打包成一个元组。


