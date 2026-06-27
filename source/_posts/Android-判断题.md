---
title: Android-判断题
date: 2026-06-27 23:07:22
tags: Android
categories: Technology
keywords: Android-判断题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Android-判断题
---

# 判断题汇总

---

## 第1章 Android基础入门

**Q1.** 第二代移动通信技术能够处理图像、音乐、视频流等多种媒体形式。

**答案：** 错

**解析：** 第三代移动通信技术以上才可以处理图像、音乐、视频流等多种媒体形式。

---

**Q2.** 短信程序属于Android系统架构中的应用程序框架层。

**答案：** 错

**解析：** 短信程序属于应用程序层。

---

**Q3.** 短信程序属于Android系统架构中的应用程序层。

**答案：** 对

---

**Q4.** 每个Android程序在底层都运行在一个Dalvik虚拟机实例中。

**答案：** 对

---

**Q5.** 创建模拟器时，不需要使用系统镜像。

**答案：** 错

**解析：** 创建模拟器时需要使用系统镜像。

---

**Q6.** compileSdkVersion属性的值表示程序支持的目标SDK版本。

**答案：** 错

**解析：** compileSdkVersion表示程序编译时的SDK版本。

---

**Q7.** 在Activity中可以通过getResources().getDrawable()方法调用图片资源。

**答案：** 对

---

**Q8.** 布局资源文件只能在Java代码中调用。

**答案：** 错

**解析：** 布局资源文件也可以在XML文件中调用。

---

**Q9.** 字符串资源定义在res/values/目录中的strings.xml文件中。

**答案：** 对

---

**Q10.** 颜色值的内容必须是Alpha-Red-Green-Blue的形式。

**答案：** 错

**解析：** 可以不用设置Alpha透明度，颜色值也可以是Red-Green-Blue的形式。

---

**Q11.** 定义颜色值时，即可用大写字母也可用小写字母。

**答案：** 对

---

**Q12.** Android单元测试不需要依赖Android设备，在本地即可运行。

**答案：** 错

**解析：** Android单元测试需要连接Android设备。Junit单元测试不需要依赖Android设备，在本地即可运行。

---

**Q13.** Log类所输出的Warning级别的日志内容显示的是红色的警告信息。

**答案：** 错

**解析：** 显示的是橙色的警告信息。

---

## 第2章 Android常见界面布局

**Q14.** Java代码只能编写逻辑代码，不能编写布局代码。

**答案：** 错

**解析：** Java代码也可以编写布局代码。

---

**Q15.** android:background属性值只能引用图片资源。

**答案：** 错

**解析：** android:background属性值也可以引用颜色资源。

---

**Q16.** Android系统提供的四种常用布局必须指定其宽高。

**答案：** 对

---

**Q17.** 如果将线性布局的属性android:orientation的值设置为horizontal，则该布局内的控件会依次从左到右水平排列。

**答案：** 对

---

**Q18.** RelativeLayout通过以父容器或其他子控件为参照物，指定布局中子控件的位置。

**答案：** 对

---

**Q19.** TableLayout布局中，通过添加TableRow布局控制表格的列数。

**答案：** 错

**解析：** 通过添加TableRow布局控制表格的行数。

---

**Q20.** 帧布局容器的前景图像始终处于布局的最上层，不会被其他的控件覆盖。

**答案：** 对

---

## 第3章 Android常见界面控件

**Q21.** Android中SimpleAdapter数据适配器继承BaseAdapter类。

**答案：** 对

---

**Q22.** ImageView使用android:src属性设置图片时，该图片会自动填充满控件。

**答案：** 错

**解析：** android:src设置的图片以原图大小显示，不会自动填充满控件。

---

**Q23.** android:phoneNumber属性用于设置EditText输入框中的内容只能输入数字。

**答案：** 对

---

**Q24.** ListView控件不设置Adapter也能显示数据内容。

**答案：** 错

**解析：** ListView必须设置Adapter才能显示数据内容。

---

**Q25.** Toast类显示的提示信息必须手动取消，否则一直存在。

**答案：** 错

**解析：** Toast类显示的提示信息会自动消失。

---

**Q26.** Button控件可以显示文本信息，也可以显示图片资源。

**答案：** 对

---

**Q27.** TextView控件中只能显示文本信息，不能显示图片。

**答案：** 错

**解析：** TextView控件也可以通过drawable属性显示图片。

---

**Q28.** 与ListView控件不同的是，RecyclerView控件加载数据时不需要适配器。

**答案：** 错

**解析：** RecyclerView控件加载数据时同样需要适配器。

---

**Q29.** 若一个ListView列表界面显示了5个条目，每个条目显示的是一条数据，一共有100条数据，则列表界面中一定产生了100个View。

**答案：** 错

**解析：** 优化后只产生5个View，通过convertView复用机制实现。

---

## 第4章 程序活动单元Activity

**Q30.** 如果创建的Fragment继承的是android.app.Fragment类，则不兼容的Android 4.0的系统版本。

**答案：** 错

**解析：** 继承android.app.Fragment类兼容Android 3.0以上系统版本。

---

**Q31.** 一个Fragment只能在一个Activity中使用。

**答案：** 错

**解析：** 一个Fragment可以在多个Activity中使用。

---

**Q32.** 用户当前操作的Activity位于任务栈的顶部。

**答案：** 对

---

**Q33.** Activity可以通过重写onActivityResult()方法获取回传的数据。

**答案：** 对

---

**Q34.** 当打开一个Activity时，会启动一个新的任务栈来管理该Activity实例，那么该Activity的启动模式为singleTask。

**答案：** 错

**解析：** 该Activity的启动模式为singleInstance，而不是singleTask。

---

**Q35.** Fragment的生命周期是独立的，不受其他组件的影响。

**答案：** 错

**解析：** Fragment的生命周期受所属Activity的影响。

---

**Q36.** 通过FragmentManager的beginTransaction()方法可以开启FragmentTransaction。

**答案：** 对

---

## 第5章 数据存储

**Q37.** 外部存储的文件可以被其他的应用程序所共享，这种方式的存储是不安全的。

**答案：** 对

---

**Q38.** 数据库事务是针对数据库的一组操作，它可以由一条或多条SQL语句组成。

**答案：** 对

---

**Q39.** SharedPreferences将数据保存在.txt的文件中。

**答案：** 错

**解析：** SharedPreferences将数据保存在.xml文件中。

---

**Q40.** 在SQLiteDatabase中，endTransaction()方法用于关闭数据库事务。

**答案：** 对

---

**Q41.** 使用完SQLiteDatabase对象，需要调用close()方法关闭数据库连接。

**答案：** 对

---

**Q42.** 通过Editor的remove()方法可以删除SharedPreferences文件中保存的所有数据。

**答案：** 错

**解析：** remove()方法只能删除指定key的数据，clear()方法可以清空所有数据。

---

**Q43.** SQLite数据库的事务操作满足原子性、一致性、隔离性和持续性。

**答案：** 对

---

## 第6章 内容提供者和内容观察者

**Q44.** ContentProvider实现了不同应用之间的数据共享。

**答案：** 对

---

**Q45.** ContentResolver可以根据Uri对ContentProvider提供的数据进行增、删、改、查的操作。

**答案：** 对

---

**Q46.** ContentProvider提供的Uri可以随便定义。

**答案：** 错

**解析：** ContentProvider提供的Uri必须按照规范定义，包含scheme、authority和path。

---

**Q47.** 内容观察者是Android四大组件之一。

**答案：** 错

**解析：** ContentProvider（内容提供者）是Android四大组件之一，内容观察者（ContentObserver）不是四大组件。

---

## 第7章 广播机制

**Q48.** abortBroadcast()方法能够拦截无序广播。

**答案：** 错

**解析：** abortBroadcast()方法用于拦截有序广播，无序广播不能被拦截。

---

**Q49.** 当动态注册广播时，Activity销毁之后，广播接收者仍然可以接收到广播。

**答案：** 错

**解析：** 动态注册的广播接收者与注册它的组件生命周期一致，Activity销毁后广播接收者也会失效。

---

**Q50.** 在动态注册广播接收者时，可以调用IntentFilter的setPriority()方法设置广播接收者的优先级。

**答案：** 对

---

**Q51.** 如果两个广播接收者的优先级相同，则能同时接收到有序广播。

**答案：** 错

**解析：** 如果两个广播接收者的优先级相同，则先注册的广播接收者优先接收有序广播。

---

## 第8章 服务

**Q52.** 多个组件可以绑定一个服务。

**答案：** 对

---

**Q53.** 在Service中可以直接进行耗时操作。

**答案：** 错

**解析：** Service默认运行在主线程中，不能直接进行耗时操作，需要开启子线程。

---

**Q54.** 当一个组件通过startService()方法启动服务时，服务会与组件绑定，当组件销毁时，服务也销毁。

**答案：** 错

**解析：** 通过startService()方法启动的服务不会与组件绑定，组件销毁后服务仍然运行，需要调用stopService()方法停止。

---

**Q55.** 通过bindService()和startService()方法开启服务，服务的生命周期一样。

**答案：** 错

**解析：** 两种方式的服务生命周期不同。startService()方式：onCreate() -> onStartCommand() -> onDestroy()。bindService()方式：onCreate() -> onBind() -> onUnbind() -> onDestroy()。

---

## 第9章 网络编程

**Q56.** Gson库比JSONArray类解析JSON数据时更加方便快捷。

**答案：** 对

---

**Q57.** Gson库中的fromJson()用于解析对象结构的JSON数据。

**答案：** 对

---

**Q58.** 使用WebView控件的loadData()方法加载带中文的网页时不会产生乱码。

**答案：** 错

**解析：** 使用loadData()方法加载带中文的网页时可能会产生乱码，需要指定编码格式。

---

**Q59.** WebView控件加载网页时，不能设置网页放大或缩小的功能。

**答案：** 错

**解析：** WebView控件可以通过WebSettings设置网页放大或缩小的功能。

---

**Q60.** HTTP响应是客户端在与服务器端建立连接后，向服务器端发送的请求。

**答案：** 错

**解析：** HTTP响应是服务器端接收到客户端的请求后，向客户端返回的数据。客户端发送的是HTTP请求。

---

**Q61.** Handler中的sendMessage()方法用于处理消息。

**答案：** 错

**解析：** sendMessage()方法用于发送消息，handleMessage()方法用于处理消息。

---

**Q62.** JSON是基于JavaScript的一个子集。

**答案：** 对

---

**Q63.** Handler中的handleMessage()方法用于发送消息。

**答案：** 错

**解析：** handleMessage()方法用于处理消息，sendMessage()方法用于发送消息。

---

## 第10章 图形图像处理

**Q64.** Canvas类中的drawCircle()方法用于绘制椭圆形。

**答案：** 错

**解析：** drawCircle()方法用于绘制圆形，绘制椭圆形使用drawOval()方法。

---

**Q65.** Matrix类本身可以对图形或图像进行变换。

**答案：** 错

**解析：** Matrix类本身不能直接对图形或图像进行变换，需要与其他API（如Canvas）结合使用。

---

**Q66.** Config.ARGB_8888表示Bitmap的每个像素占用2个字节。

**答案：** 错

**解析：** Config.ARGB_8888表示Bitmap的每个像素占用4个字节（Alpha、Red、Green、Blue各8位）。

---

**Q67.** Android系统提供了两种实现动画效果的方式。

**答案：** 错

**解析：** Android系统提供了三种实现动画效果的方式：补间动画、逐帧动画和属性动画。

---

**Q68.** 动画监听器中，动画开始播放时调用onAnimationStart()方法。

**答案：** 对

---

**Q69.** 实现逐帧动画时，只需要定义动画开始和结束的关键帧。

**答案：** 错

**解析：** 实现逐帧动画时需要定义所有静态图像，而不是只定义开始和结束的关键帧。

---

## 第11章 多媒体应用开发

**Q70.** MediaPlayer类中的prepare()方法是在子线程中执行的异步操作。

**答案：** 错

**解析：** prepare()是同步操作，在主线程中执行；prepareAsync()才是异步操作。

---

**Q71.** SurfaceView类继承VideoView类。

**答案：** 错

**解析：** SurfaceView类继承自View类，VideoView继承自SurfaceView。

---

**Q72.** MediaPlayer类能够同时播放多个音频。

**答案：** 错

**解析：** MediaPlayer一次只能播放一个音频，SoundPool类可以同时播放多个短小的音频。

---

**Q73.** 使用SoundPool类可以循环播放音频。

**答案：** 对

---
