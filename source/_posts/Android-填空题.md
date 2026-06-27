---
title: Android-填空题
date: 2026-06-27 23:07:25
tags: Android
categories: Technology
keywords: Android-填空题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Android-填空题
---

# 填空题汇总

---

## 第1章 Android基础入门

**Q1.** 第四代移动通信技术包含____和FDD-LTE两种制式。

**答案：** TD-LTE

---

**Q2.** Android系统的核心类库主要包含了____和Android运行环境。

**答案：** 系统库

---

**Q3.** Dalvik虚拟机中的____工具会将部分class文件转换成dex文件。

**答案：** dx

---

**Q4.** 模拟器是一个可以运行在电脑上的____。

**答案：** 虚拟设备

---

**Q5.** ____文件是整个程序的配置文件。

**答案：** AndroidManifest.xml

---

**Q6.** 在程序中调用____资源可以改变窗体的样式。

**答案：** 主题

---

**Q7.** 主题资源定义在res/values目录下的____文件中。

**答案：** styles.xml

---

**Q8.** Android中的样式和____都用于为界面元素定义显示风格。

**答案：** 主题

---

**Q9.** 布局资源存放在res目录中的____文件夹中。

**答案：** layout

---

**Q10.** 颜色值必须以____符号开头。

**答案：** #

---

**Q11.** 在Android界面中View的宽高和View之间的间距值是通过____设置的。

**答案：** 尺寸资源

---

**Q12.** ____是Android中的命令行工具，用于获取程序从启动到关闭的日志信息。

**答案：** LogCat

---

**Q13.** 在日志过滤器中，可以使用____过滤信息。

**答案：** TAG

---

## 第2章 Android常见界面布局

**Q14.** 我们可以在____文件夹的XML文件中编写布局。

**答案：** res/layout

---

**Q15.** ____属性用于设置布局的高度。

**答案：** android:layout_height

---

**Q16.** Android系统提供的四种常用布局直接或者间接继承自____。

**答案：** ViewGroup

---

**Q17.** 属性android:orientation的值为____时，可以将线性布局中的控件进行竖直排列。

**答案：** vertical

---

**Q18.** RelativeLayout通过____的方式指定子控件的位置。

**答案：** 相对定位

---

**Q19.** TableLayout采用____、列的形式来管理控件。

**答案：** 行

---

**Q20.** 默认情况下，帧布局中的所有控件会与布局的____对齐。

**答案：** 左上角

---

## 第3章 Android常见界面控件

**Q21.** ____控件表示编辑框，用户可在此控件中输入信息。

**答案：** EditText

---

**Q22.** TextView控件的属性____用于设置文本的大小。

**答案：** android:textSize

---

**Q23.** ____是单选组合框，可容纳多个RadioButton。

**答案：** RadioGroup

---

**Q24.** 通过Toast类提示即时消息时，____用于设置消息显示较短时间。

**答案：** Toast.LENGTH_SHORT

---

**Q25.** ____属性用于设置EditText控件的输入框是否可编辑。

**答案：** android:editable

---

**Q26.** TextView控件的属性____用于设置文本的颜色。

**答案：** android:textColor

---

**Q27.** RadioButton表示单选按钮，可以通过属性____指定单选按钮"选中"和"未选中"的状态。

**答案：** android:checked

---

**Q28.** 属性____可以设置ListView控件的分割线高度。

**答案：** android:dividerHeight

---

**Q29.** Toast类是Android系统提供的轻量级____机制。

**答案：** 信息提醒

---

## 第4章 程序活动单元Activity

**Q30.** startActivityForResult()方法中的参数____表示请求码。

**答案：** requestCode

---

**Q31.** 当创建Activity时，在Activity Name输入框中输入的是____。

**答案：** Activity名称

---

**Q32.** Activity处于____状态时，它是可见的，可以与用户进行交互。

**答案：** 运行

---

**Q33.** ____被称为意图，是程序中各组件间进行交互的一种重要方式。

**答案：** Intent

---

**Q34.** 使用Intent传递数据有两种方式：使用putExtra()方法和____。

**答案：** 使用Bundle类传递数据

---

**Q35.** Intent被分为显式Intent和____。

**答案：** 隐式Intent

---

**Q36.** Android的任务栈最大的特点是____。

**答案：** 先进后出

---

**Q37.** Activity的生命周期指的是Activity从____到销毁的整个过程。

**答案：** 创建

---

**Q38.** Activity的启动模式包括standard、singleTop、singleTask、____模式。

**答案：** singleInstance

---

**Q39.** ____(碎片)是一种嵌入在Activity中的UI片段。

**答案：** Fragment

---

**Q40.** 通过调用____方法可以关闭Activity。

**答案：** finish()

---

**Q41.** Fragment创建视图（加载布局）时调用____方法。

**答案：** onCreateView()

---

**Q42.** Activity销毁时执行的生命周期方法是____。

**答案：** onDestroy()

---

## 第5章 数据存储

**Q43.** ____文件的存储路径为data/data/<包名>/shared_prefs。

**答案：** SharedPreferences

---

**Q44.** ____工具可以查看数据库文件。

**答案：** SQLite Expert Personal

---

**Q45.** openFileOutput()方法用于打开应用程序中对应的____。

**答案：** 输出流

---

**Q46.** Editor对象是以____的形式保存数据的。

**答案：** key/value

---

**Q47.** 通过____方法获取到文件输入流对象。

**答案：** openFileInput()

---

**Q48.** 创建数据库帮助类时，需要继承____类。

**答案：** SQLiteOpenHelper

---

**Q49.** Android的数据存储方式包括文件存储、____、SQLite数据库、ContentProvider和网络存储。

**答案：** SharedPreferences

---

**Q50.** 文件存储方式分为____和外部存储。

**答案：** 内部存储

---

## 第6章 内容提供者和内容观察者

**Q51.** Uri中的scheme是以____开头的前缀。

**答案：** content://

---

**Q52.** Android中创建内容提供者时，需要继承____类。

**答案：** ContentProvider

---

**Q53.** 内容观察者用于观察指定____代表的数据的变化。

**答案：** Uri

---

**Q54.** Android系统提供了一个辅助工具类____对多个Uri进行匹配。

**答案：** UriMatcher

---

## 第7章 广播机制

**Q55.** sendBroadcast()方法用于发送____广播。

**答案：** 无序

---

**Q56.** 广播接收者通过____机制在AMS中进行注册。

**答案：** Binder

---

**Q57.** Android中的广播类型分为____、无序广播。

**答案：** 有序广播

---

**Q58.** 广播接收者的注册方式分为动态注册和____。

**答案：** 静态注册

---

## 第8章 服务

**Q59.** 服务的通信方式有两种：本地服务通信和____。

**答案：** 远程服务通信

---

**Q60.** ____是通过AIDL实现的。

**答案：** 远程服务通信

---

**Q61.** 应用程序可以通过____方法返回IBinder对象与Service组件通信。

**答案：** onBind()

---

**Q62.** 当调用startService()方法启动服务时，其他组件可以调用____方法停止该服务。

**答案：** stopService()

---

**Q63.** 启动服务的方法有两种：startService()方法和____方法。

**答案：** bindService()

---

**Q64.** Service有两个应用场景：后台运行和____。

**答案：** 跨进程访问

---

## 第9章 网络编程

**Q65.** ____方法可以获取数组中的每个对象。

**答案：** getJSONObject()

---

**Q66.** ____类用于解析数组结构的JSON数据。

**答案：** JSONArray

---

**Q67.** Handler主要用于发送消息和____。

**答案：** 处理消息

---

**Q68.** WebView控件的____方法用于刷新当前页面。

**答案：** reload()

---

**Q69.** HttpURLConnection继承自____类。

**答案：** URLConnection

---

**Q70.** JSON数据有两种表示结构：对象结构和____结构。

**答案：** 数组

---

**Q71.** ____是一种请求/响应式的协议。

**答案：** HTTP

---

**Q72.** Android系统默认提供的内置浏览器中使用了开源的____引擎。

**答案：** WebKit

---

## 第10章 图形图像处理

**Q73.** ____类是Bitmap类的内部类，用于指定一些配置信息。

**答案：** Config

---

**Q74.** ____类表示画笔，主要用于描述图形的颜色和风格。

**答案：** Paint

---

**Q75.** ____类可以创建位图。

**答案：** Bitmap

---

**Q76.** ____是一种不断地对属性值进行操作的模式。

**答案：** 属性动画

---

**Q77.** ____指定了如何根据时间计算动画中的特定值。

**答案：** 插值器

---

**Q78.** ____主要用于监听动画播放期间的重要事件。

**答案：** 动画监听器

---

## 第11章 多媒体应用开发

**Q79.** 可以使用____类代替MediaPlayer类播放一些游戏音效。

**答案：** SoundPool

---

**Q80.** VideoView控件可以调用____方法加载网络视频。

**答案：** setVideoURI()

---

**Q81.** MediaPlayer类的____方法用于暂停播放音频。

**答案：** pause()

---

**Q82.** ____方法用于设置VideoView控件从指定位置开始播放视频。

**答案：** seekTo()

---
