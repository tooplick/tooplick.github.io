---
title: Softwore-test程序填空题
date: 2026-06-27 23:07:16
tags: Softwore-test
categories: Technology
keywords: Softwore-test程序填空题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Softwore-test程序填空题
---

# 程序填空题复习题库 - 答案整理

> 题量: 6 | 满分: 100

---

## 第1题：企业利润提成计算

**题目概述：** 企业根据利润提成发放奖金，划分6个档位。

| 档位 | 利润范围 | 提成比例 |
|------|----------|----------|
| 一 | ≤10万 | 10% |
| 二 | 10万 < 利润 ≤ 20万 | 7.5% |
| 三 | 20万 < 利润 ≤ 40万 | 5% |
| 四 | 40万 < 利润 ≤ 60万 | 3% |
| 五 | 60万 < 利润 ≤ 100万 | 1.5% |
| 六 | > 100万 | 1% |

**测试用例：**

| 编号 | 输入利润(万) | 测试方法 | 所属档位 | 预期结果 |
|------|-------------|----------|----------|----------|
| 1 | 8 | testLevel1 | 档位一 | 总提成：0.80万 |
| 2 | 15 | testLevel2 | 档位二 | 总提成：1.38万 |
| 3 | 30 | testLevel3 | 档位三 | 总提成：2.25万 |
| 4 | 50 | testLevel4 | 档位四 | 总提成：3.05万 |
| 5 | 80 | testLevel5 | 档位五 | 总提成：3.65万 |
| 6 | 120 | testLevel6 | 档位六 | 总提成：4.15万 |

### 待测类 BonusCalc.java

```java
package test;

public class BonusCalc {
    public static String calcBonus(int profit) {
        double bonus = 0.0;
        if (___（1）___) {  // 利润低于或等于10万元部分
            bonus = profit * 0.1;
        } else if (profit <= 20) {
            bonus = 10 * 0.1 + ___（2）___ * 0.075;
        } else if (profit <= 40) {
            bonus = 10 * 0.1 + 10 * 0.075 + ___（3）___ * 0.05;
        } else if (profit <= 60) {
            bonus = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + ___（4）___ * 0.03;
        } else if (profit <= 100) {
            bonus = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + 20 * 0.03 + (profit - 60) * 0.015;
        } else {
            bonus = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + 20 * 0.03 + 40 * 0.015 + (profit - 100) * 0.01;
        }
        return String.format("总提成：%.2f万", ___（5）___);
    }
}
```

### 测试类 BonusCalcTest.java

```java
package test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import org.junit.Test;

public class BonusCalcTest {
    @Test // 档位一：≤10万
    public void ___（6）___() {
        String res = BonusCalc.calcBonus(___（7）___);
        assertThat(res, is("总提成：___（8）___万"));
    }

    @Test // 档位二：10~20万
    public void ___（9）___() {
        String res = BonusCalc.calcBonus(___（10）___);
        assertThat(res, is("总提成：___（11）___万"));
    }

    @Test // 档位三：20~40万
    public void ___（12）___() {
        String res = BonusCalc.calcBonus(___（13）___);
        assertThat(res, is("总提成：___（14）___万"));
    }

    @Test // 档位四：40~60万
    public void ___（15）___() {
        String res = BonusCalc.calcBonus(___（16）___);
        assertThat(res, is("总提成：___（17）___万"));
    }

    @Test // 档位五：60~100万
    public void ___（18）___() {
        String res = BonusCalc.calcBonus(___（19）___);
        assertThat(res, is("总提成：___（20）___万"));
    }

    @Test // 档位六：＞100万
    public void testLevel6() {
        String res = BonusCalc.calcBonus(120);
        assertThat(res, is("总提成：4.15万"));
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `profit <= 10` |
| (2) | `(profit - 10)` |
| (3) | `(profit - 20)` |
| (4) | `(profit - 40)` |
| (5) | `bonus` |
| (6) | `testLevel1` |
| (7) | `8` |
| (8) | `0.80` |
| (9) | `testLevel2` |
| (10) | `15` |
| (11) | `1.38` |
| (12) | `testLevel3` |
| (13) | `30` |
| (14) | `2.25` |
| (15) | `testLevel4` |
| (16) | `50` |
| (17) | `3.05` |
| (18) | `testLevel5` |
| (19) | `80` |
| (20) | `3.65` |

---

## 第2题：快递单信息校验

**题目概述：** 校验手机号（11位数字）和地址（字母开头，10位以内字母或数字）。

**测试用例：**

| 编号 | 测试场景 | 姓名 | 手机号 | 地址 | 测试方法 | 预期结果 |
|------|----------|------|--------|------|----------|----------|
| 1 | 手机号格式错误 | 张三 | 123456 | a123 | testPhoneError | 手机号不符合要求 |
| 2 | 地址格式错误 | 李四 | 13800138000 | 1abc | testAddressError | 地址不符合要求 |
| 3 | 全部校验通过 | 王五 | 13812345678 | a1b2c3 | testAllOK | OK |

### 待测类 ExpressCheck.java

```java
package test;

public class ExpressCheck {
    public static String checkExpress(String name, String phone, String address) {
        if (!phone.matches("___（1）___")) {
            return "___（2）___";
        }
        if (!address.matches("___（3）___")) {
            return "___（4）___";
        }
        return "___（5）___";
    }
}
```

### 测试类 ExpressCheckTest.java

```java
package test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import org.junit.Test;

public class ExpressCheckTest {
    @Test // 1. 手机号错误
    public void ___（6）___() {
        String result = ExpressCheck.checkExpress("___（7）___", "___（8）___", "___（9）___");
        assertThat(result, equalTo("___（10）___"));
    }

    @Test // 2. 地址错误
    public void ___（11）___() {
        String result = ExpressCheck.checkExpress("___（12）___", "___（13）___", "___（14）___");
        assertThat(result, equalTo("___（15）___"));
    }

    @Test // 3. 全部正确
    public void ___（16）___() {
        String result = ExpressCheck.checkExpress("___（17）___", "___（18）___", "___（19）___");
        assertThat(result, equalTo("___（20）___"));
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `\\d{11}` |
| (2) | `手机号不符合要求` |
| (3) | `^[a-zA-Z][a-zA-Z0-9]{0,9}$` |
| (4) | `地址不符合要求` |
| (5) | `OK` |
| (6) | `testPhoneError` |
| (7) | `张三` |
| (8) | `123456` |
| (9) | `a123` |
| (10) | `手机号不符合要求` |
| (11) | `testAddressError` |
| (12) | `李四` |
| (13) | `13800138000` |
| (14) | `1abc` |
| (15) | `地址不符合要求` |
| (16) | `testAllOK` |
| (17) | `王五` |
| (18) | `13812345678` |
| (19) | `a1b2c3` |
| (20) | `OK` |

---

## 第3题：月份天数判断

**题目概述：** 根据年份和月份判断该月天数，考虑闰年（普通闰年、世纪闰年）。

**测试用例：**

| 编号 | 输入年份 | 输入月份 | 测试方法 | 预期结果 |
|------|----------|----------|----------|----------|
| 1 | 2026 | 15 | test01 | 月份输入不正确。 |
| 2 | 2026 | 1 | test02 | 2026年1月份的天数是31天。 |
| 3 | 2021 | 4 | test03 | 2021年4月份的天数是30天。 |
| 4 | 2022 | 2 | test04 | 2022年2月份的天数是28天。 |
| 5 | 2020 | 2 | test05 | 2020年2月份的天数是29天。 |
| 6 | 2000 | 2 | test06 | 2000年2月份的天数是29天。 |

### 待测类 MonthDay.java

```java
package test;

public class MonthDay {
    private static boolean isLeapYear(int year) {
        if (___（1）___) return false;  // 年份小于0
        if (___（2）___)               // 闰年判断
            return true;
        else
            return false;
    }

    public static String getMonthDays(int year, int month) {
        if (year <= 0 || month <= 0) {
            return "___（3）___";
        }
        if (___（4）___) {  // 月份必须 1~12
            return "月份输入不正确。";
        }
        int days;
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                days = 31; break;
            case 4: case 6: case 9: case 11:
                days = 30; break;
            case 2:
                days = ___（5）___;  // 闰年给29，不是闰年给28
                break;
            default:
                return "月份输入不正确。";
        }
        return year + "年" + month + "月份的天数是" + days + "天。";
    }
}
```

### 测试类 MonthDayTest.java

```java
package test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import org.junit.Test;

public class MonthDayTest {
    @Test
    public void test01() {
        String result = MonthDay.getMonthDays(2026, 15);
        assertThat(result, equalTo("月份输入不正确。"));
    }

    @Test
    public void ___（6）___() {
        String result = MonthDay.getMonthDays(___（7）___, ___（8）___);
        assertThat(result, equalTo("2026年1月份的天数是31天。"));
    }

    @Test
    public void ___（9）___() {
        String result = MonthDay.getMonthDays(___（10）___, ___（11）___);
        assertThat(result, equalTo("2021年4月份的天数是30天。"));
    }

    @Test
    public void ___（12）___() {
        String result = MonthDay.getMonthDays(___（13）___, ___（14）___);
        assertThat(result, equalTo("2022年2月份的天数是28天。"));
    }

    @Test
    public void ___（15）___() {
        String result = MonthDay.getMonthDays(___（16）___, ___（17）___);
        assertThat(result, equalTo("2020年2月份的天数是29天。"));
    }

    @Test
    public void ___（18）___() {
        String result = MonthDay.getMonthDays(___（19）___, ___（20）___);
        assertThat(result, equalTo("2000年2月份的天数是29天。"));
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `year <= 0` |
| (2) | `year % 4 == 0 && year % 100 != 0 \|\| year % 400 == 0` |
| (3) | `月份输入不正确。` |
| (4) | `month > 12` |
| (5) | `isLeapYear(year) ? 29 : 28` |
| (6) | `test02` |
| (7) | `2026` |
| (8) | `1` |
| (9) | `test03` |
| (10) | `2021` |
| (11) | `4` |
| (12) | `test04` |
| (13) | `2022` |
| (14) | `2` |
| (15) | `test05` |
| (16) | `2020` |
| (17) | `2` |
| (18) | `test06` |
| (19) | `2000` |
| (20) | `2` |

---

## 第4题：三角形类型判断

**题目概述：** 根据三条边判断三角形类型（等边、等腰、普通），校验边值范围和三角形成立条件。

**测试用例：**

| 编号 | 测试场景 | a | b | c | 测试方法 | 预期结果 |
|------|----------|---|---|---|----------|----------|
| 1 | 边值不在1~10 | 0 | 5 | 6 | testOutOfRange | 输入边值不在范围内 |
| 2 | 不能组成三角形 | 1 | 2 | 3 | testCannotFormTriangle | 输入边值不能组成三角形 |
| 3 | 等边三角形 | 3 | 3 | 3 | testEquilateralTriangle | 能组成等边三角形 |
| 4 | 等腰三角形 | 2 | 2 | 3 | testIsoscelesTriangle | 能组成等腰三角形 |
| 5 | 普通三角形 | 3 | 4 | 5 | testCommonTriangle | 能组成普通三角形 |

### 待测类 TriangleJudge.java

```java
package test;

public class TriangleJudge {
    public static String judgeTriangle(int a, int b, int c) {
        if (___（1）___) {  // 判断边值是否在 1~10 范围内
            return "输入边值不在范围内";
        }
        if (___（2）___) {  // 任意两边之和 > 第三边
            return "输入边值不能组成三角形";
        }
        if (___（3）___) {  // 三条边相等
            return "能组成等边三角形";
        } else if (___（4）___) {  // 两条边相等
            return "能组成等腰三角形";
        } else {
            return "___（5）___";
        }
    }
}
```

### 测试类 TriangleJudgeTest.java

```java
package test;

import static org.junit.Assert.*;
import org.junit.Test;

public class TriangleJudgeTest {
    @Test
    public void ___（6）___() {
        String result = TriangleJudge.judgeTriangle(___（7）___, ___（8）___, ___（9）___);
        assertEquals("输入边值不在范围内", result);
    }

    @Test
    public void ___（10）___() {
        String result = TriangleJudge.judgeTriangle(___（11）___, ___（12）___, ___（13）___);
        assertEquals("输入边值不能组成三角形", result);
    }

    @Test
    public void ___（14）___() {
        String result = TriangleJudge.judgeTriangle(___（15）___, ___（15）___, ___（15）___);
        assertEquals("能组成等边三角形", result);
    }

    @Test
    public void ___（16）___() {
        String result = TriangleJudge.judgeTriangle(___（17）___, ___（17）___, ___（18）___);
        assertEquals("能组成等腰三角形", result);
    }

    @Test
    public void ___（19）___() {
        String result = TriangleJudge.judgeTriangle(3, ___（20）___, 5);
        assertEquals("能组成普通三角形", result);
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `a < 1 \|\| a > 10 \|\| b < 1 \|\| b > 10 \|\| c < 1 \|\| c > 10` |
| (2) | `a + b <= c \|\| a + c <= b \|\| b + c <= a` |
| (3) | `a == b && b == c` |
| (4) | `a == b \|\| a == c \|\| b == c` |
| (5) | `能组成普通三角形` |
| (6) | `testOutOfRange` |
| (7) | `0` |
| (8) | `5` |
| (9) | `6` |
| (10) | `testCannotFormTriangle` |
| (11) | `1` |
| (12) | `2` |
| (13) | `3` |
| (14) | `testEquilateralTriangle` |
| (15) | `3` |
| (16) | `testIsoscelesTriangle` |
| (17) | `2` |
| (18) | `3` |
| (19) | `testCommonTriangle` |
| (20) | `4` |

---

## 第5题：图形构建判断

**题目概述：** 输入两个正整数x、y，根据差值判断可构建的图形。

| 条件 | 结果 |
|------|------|
| x≤0 或 y≤0 | 输入不符合要求。 |
| x=y | 可以构建圆形或正方形 |
| 0 < \|x-y\| ≤ 4 | 可以构建长方形 |
| 4 < \|x-y\| ≤ 7 | 可以构建椭圆 |
| \|x-y\| > 7 | 可以构建矩形 |

**测试用例：**

| 编号 | 测试场景 | x | y | 测试方法 | 预期输出 |
|------|----------|---|---|----------|----------|
| 1 | x≤0 或 y≤0 | -1 | 4 | test01 | 输入不符合要求。 |
| 2 | 差值=0 | 8 | 8 | test02 | 可以构建圆形或正方形 |
| 3 | 0<差值≤4 | 5 | 7 | test03 | 可以构建长方形 |
| 4 | 4<差值≤7 | 2 | 9 | test04 | 可以构建椭圆 |
| 5 | 差值>7 | 3 | 11 | test05 | 可以构建矩形 |

### 待测类 ShapeJudge.java

```java
package test;

public class ShapeJudge {
    public static String judgeShape(int x, int y) {
        if (___（1）___) {
            return "输入不符合要求。";
        }
        int diff = ___（2）___;
        if (___（3）___) {
            return "可以构建圆形或正方形";
        }
        if (___（4）___) {
            return "可以构建长方形";
        }
        if (___（5）___) {
            return "可以构建椭圆";
        }
        return "可以构建矩形";
    }
}
```

### 测试类 ShapeJudgeTest.java

```java
package test;

import static org.junit.Assert.*;
import org.junit.Test;

public class ShapeJudgeTest {
    @Test
    public void ___（6）___() {
        String result = ShapeJudge.judgeShape(___（7）___, ___（8）___);
        assertEquals("输入不符合要求。", result);
    }

    @Test
    public void ___（9）___() {
        String result = ShapeJudge.judgeShape(___（10）___, ___（11）___);
        assertEquals("可以构建圆形或正方形", result);
    }

    @Test
    public void ___（12）___() {
        String result = ShapeJudge.judgeShape(___（13）___, ___（14）___);
        assertEquals("可以构建长方形", result);
    }

    @Test
    public void ___（15）___() {
        String result = ShapeJudge.judgeShape(___（16）___, ___（17）___);
        assertEquals("可以构建椭圆", result);
    }

    @Test
    public void ___（18）___() {
        String result = ShapeJudge.judgeShape(___（19）___, ___（20）___);
        assertEquals("可以构建矩形", result);
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `x <= 0 \|\| y <= 0` |
| (2) | `Math.abs(x - y)` |
| (3) | `diff == 0` |
| (4) | `diff <= 4` |
| (5) | `diff <= 7` |
| (6) | `test01` |
| (7) | `-1` |
| (8) | `4` |
| (9) | `test02` |
| (10) | `8` |
| (11) | `8` |
| (12) | `test03` |
| (13) | `5` |
| (14) | `7` |
| (15) | `test04` |
| (16) | `2` |
| (17) | `9` |
| (18) | `test05` |
| (19) | `3` |
| (20) | `11` |

---

## 第6题：星期判断

**题目概述：** 输入一个大写字母和一个小写字母，根据首字母判断星期几。S开头需第二个字母区分Sunday/Saturday，T开头需区分Tuesday/Thursday。

**测试用例：**

| 编号 | 输入(f,s) | 覆盖分支 | 测试方法 | 预期结果 |
|------|-----------|----------|----------|----------|
| 1 | M, o | M分支 | testGetMonday | Monday |
| 2 | W, e | W分支 | testGetWednesday | Wednesday |
| 3 | F, r | F分支 | testGetFriday | Friday |
| 4 | S, u | S+u分支 | testGetSunday | Sunday |
| 5 | S, a | S+a分支 | testGetSaturday | Saturday |
| 6 | T, u | T+u分支 | testGetTuesday | Tuesday |
| 7 | T, h | T+h分支 | testGetThursday | Thursday |
| 8 | X, x | default无效分支 | testInvalidInput | 无效输入 |

### 待测类 WeekDayChecker.java

```java
package test;

public class WeekDayChecker {
    public String getWeekDay(char first, char second) {
        return switch (___（1）___) {
            case 'M' -> "Monday";
            case 'W' -> "Wednesday";
            case 'F' -> "Friday";
            case 'S' -> ___（2）___ ? "Sunday" : "Saturday";
            case 'T' -> second == 'u' ? "Tuesday" : "Thursday";
            default -> "无效输入";
        };
    }
}
```

### 测试类 WeekDayCheckerTest.java

```java
package test;

import org.junit.Assert;
import org.junit.Test;

public class WeekDayCheckerTest {
    private WeekDayChecker checker = new WeekDayChecker();

    @Test
    public void ___（3）___() {
        String result = checker.getWeekDay('___（4）___', '___（5）___');
        Assert.assertEquals("Monday", result);
    }

    @Test
    public void ___（6）___() {
        String result = checker.getWeekDay('___（7）___', '___（8）___');
        Assert.assertEquals("Wednesday", result);
    }

    @Test
    public void ___（9）___() {
        String result = checker.getWeekDay('___（10）___', '___（11）___');
        Assert.assertEquals("Friday", result);
    }

    @Test
    public void ___（12）___() {
        String result = checker.getWeekDay('S', '___（13）___');
        Assert.assertEquals("Sunday", result);
    }

    @Test
    public void ___（14）___() {
        String result = checker.getWeekDay('S', '___（15）___');
        Assert.assertEquals("Saturday", result);
    }

    @Test
    public void ___（16）___() {
        String result = checker.getWeekDay('T', '___（17）___');
        Assert.assertEquals("Tuesday", result);
    }

    @Test
    public void ___（18）___() {
        String result = checker.getWeekDay('T', '___（19）___');
        Assert.assertEquals("Thursday", result);
    }

    @Test
    public void ___（20）___() {
        String result = checker.getWeekDay('X', 'x');
        Assert.assertEquals("无效输入", result);
    }
}
```

### 答案

| 空号 | 答案 |
|------|------|
| (1) | `first` |
| (2) | `second == 'u'` |
| (3) | `testGetMonday` |
| (4) | `M` |
| (5) | `o` |
| (6) | `testGetWednesday` |
| (7) | `W` |
| (8) | `e` |
| (9) | `testGetFriday` |
| (10) | `F` |
| (11) | `r` |
| (12) | `testGetSunday` |
| (13) | `u` |
| (14) | `testGetSaturday` |
| (15) | `a` |
| (16) | `testGetTuesday` |
| (17) | `u` |
| (18) | `testGetThursday` |
| (19) | `h` |
| (20) | `testInvalidInput` |
