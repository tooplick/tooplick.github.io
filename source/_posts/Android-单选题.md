---
title: Android-单选题
date: 2026-06-27 23:07:23
tags: Tutorial
categories: Technology
keywords: Android-单选题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Android-单选题
---

# 单选题汇总

---

## 第1章 Android基础入门

**Q1.** 下列选项中，属于应用程序框架层的是（）。
- A. 短信程序
- B. 联系人程序
- C. 音频驱动
- D. 活动管理器

**答案：** D

**解析：** 短信程序与联系人程序属于应用程序层，音频驱动属于Linux内核层。

---

**Q2.** 下列选项中，属于Android系统的应用程序框架层提供的是（）。
- A. 短信程序
- B. 联系人程序
- C. 构建应用程序时用到的各种API
- D. 音频驱动

**答案：** C

**解析：** 应用程序框架层主要提供了构建应用程序时用到的各种API。

---

**Q3.** 下列选项中，Dalvik虚拟机指令集基于的架构是（）。
- A. x86
- B. ARM
- C. MIPS
- D. 寄存器

**答案：** D

**解析：** Dalvik是Google公司设计的，用于在Android平台上运行的虚拟机，其指令集基于寄存器架构。

---

**Q4.** 当Android Studio工具中创建一个新项目时，需要选择的选项是（）。
- A. Open an existing Android Studio project
- B. Start a new Android Studio project
- C. Profile or debug APK
- D. Import project

**答案：** B

---

**Q5.** 集成了Android程序开发所需要的工具的是（）。
- A. JDK
- B. Android Studio
- C. SDK Manager
- D. Gradle

**答案：** B

---

**Q6.** 关于模拟器的说法，正确的是（）。
- A. 模拟器属于真实设备
- B. 模拟器性能优于真机
- C. 模拟器不需要系统镜像
- D. 在模拟器上可预览和测试Android应用程序

**答案：** D

**解析：** 模拟器属于模拟设备。

---

**Q7.** 指定项目中使用的SDK路径的文件是（）。
- A. local.properties
- B. build.gradle
- C. AndroidManifest.xml
- D. settings.gradle

**答案：** A

---

**Q8.** 用于存放程序的代码和资源等内容的文件夹是（）。
- A. app
- B. gradle
- C. build
- D. .idea

**答案：** A

---

**Q9.** 用于存放应用图标资源的是（）。
- A. drawable开头的文件夹
- B. 以mipmap开头的文件夹
- C. layout文件夹
- D. values文件夹

**答案：** B

---

**Q10.** 当屏幕密度为460dpi时，Android系统会首先查找（）文件夹。
- A. drawable_mdpi
- B. drawable_hdpi
- C. drawable_xhdpi
- D. drawable_xxdpi

**答案：** D

**解析：** 密度范围值为320~480dpi时对应drawable_xxdpi。

---

**Q11.** 用于在XML文件中调用drawable文件夹中的icon图片的是（）。
- A. @drawable//icon
- B. @drawable\icon
- C. @drawable/icon
- D. drawable/icon

**答案：** C

---

**Q12.** 可以定义主题资源的文件是（）。
- A. styles.xml
- B. strings.xml
- C. colors.xml
- D. dimens.xml

**答案：** A

---

**Q13.** 用于在Activity中加载布局资源文件的方法是（）。
- A. setContentView
- B. setContentView()
- C. setLayout()
- D. loadLayout()

**答案：** B

---

**Q14.** 用于定义字符串资源的标签是（）。
- A. <strings></strings>
- B. <str></str>
- C. <text></text>
- D. <string></string>

**答案：** D

---

**Q15.** 用于定义颜色资源的标签是（）。
- A. <colors></colors>
- B. <color></color>
- C. <style></style>
- D. <dimen></dimen>

**答案：** B

---

**Q16.** 关于尺寸资源的描述，正确的是（）。
- A. 尺寸资源只能定义在Java代码中
- B. 尺寸资源只能在XML文件中使用
- C. 尺寸资源通常定义在res/values/dimens.xml文件中
- D. 尺寸资源不能在布局文件中使用

**答案：** C

---

**Q17.** 用于在Java代码中加载尺寸资源的是（）。
- A. getResources().getString()
- B. getResources().getDimension()
- C. getResources().getColor()
- D. getResources().getDrawable()

**答案：** B

---

**Q18.** 关于单元测试的描述，正确的是（）。
- A. Android单元测试不需要依赖Android设备
- B. Junit单元测试需要连接Android设备
- C. 单元测试只能测试界面
- D. ExampleUnitTest类属于Junit单元测试类

**答案：** D

---

**Q19.** 关于LogCat的描述，正确的是（）。
- A. Android使用android.util.Log类的静态方法实现输出程序的调试信息
- B. LogCat只能输出一种级别的日志
- C. LogCat不能过滤日志信息
- D. Log类只能输出Error级别的日志

**答案：** A

---

## 第2章 Android常见界面布局

**Q1.** 在（）中编写界面布局，能够有效的将界面中的布局代码和Java代码隔离。
- A. XML布局文件
- B. Java代码
- C. Manifest文件
- D. Gradle文件

**答案：** A

---

**Q2.** 用于在Java代码中设置界面上文字大小的方法是（）。
- A. setText()
- B. setTextSize()
- C. setSize()
- D. setFont()

**答案：** B

---

**Q3.** 用于设置当前布局的唯一标识的属性是（）。
- A. android:id
- B. android:name
- C. android:tag
- D. android:label

**答案：** A

---

**Q4.** 属性android:layout_margin的描述，正确的是（）。
- A. 用于设置当前布局的宽度
- B. 用于设置当前布局的高度
- C. 用于设置当前布局的背景
- D. 用于设置当前布局与屏幕边界、周围布局或控件的距离

**答案：** D

---

**Q5.** 属于线性布局的标签是（）。
- A. <RelativeLayout>
- B. <LinearLayout>
- C. <TableLayout>
- D. <FrameLayout>

**答案：** B

---

**Q6.** 用于设置线性布局内控件排列顺序的属性是（）。
- A. android:orientation
- B. android:layout_weight
- C. android:gravity
- D. android:layout_gravity

**答案：** A

---

**Q7.** 用于设置线性布局中控件的权重的属性是（）。
- A. android:orientation
- B. android:layout_weight
- C. android:gravity
- D. android:layout_gravity

**答案：** B

---

**Q8.** 用于将相对布局中的某一个控件显示在另一个控件的右侧的属性是（）。
- A. layout_toRightOf
- B. layout_alignRight
- C. layout_alignParentRight
- D. layout_centerHorizontal

**答案：** A

---

**Q9.** 用于将相对布局中的当前控件显示在某控件上方的属性是（）。
- A. android:layout_above
- B. android:layout_below
- C. android:layout_toLeftOf
- D. android:layout_alignTop

**答案：** A

---

**Q10.** 用于将相对布局中的某一个控件显示在另一个控件的下方的属性是（）。
- A. android:layout_above
- B. android:layout_alignBottom
- C. layout_below
- D. android:layout_centerVertical

**答案：** C

---

**Q11.** 是相对布局的英文书写的是（）。
- A. LinearLayout
- B. TableLayout
- C. FrameLayout
- D. RelativeLayout

**答案：** D

---

**Q12.** 用于设置当前控件位于某控件的左侧的属性是（）。
- A. android:layout_alignLeft
- B. android:layout_toLeftOf
- C. android:layout_alignParentLeft
- D. android:layout_centerVertical

**答案：** B

---

**Q13.** 用于设置TableLayout布局中可被拉伸的列的属性是（）。
- A. android:shrinkColumns
- B. android:collapseColumns
- C. android:stretchColumns
- D. android:layout_column

**答案：** C

---

**Q14.** 用于设置TableLayout布局中控件显示的位置的属性是（）。
- A. android:layout_column
- B. android:layout_row
- C. android:layout_span
- D. android:layout_gravity

**答案：** A

---

**Q15.** 用于设置帧布局容器的前景图像的属性是（）。
- A. android:foreground
- B. android:background
- C. android:src
- D. android:foregroundGravity

**答案：** A

---

## 第3章 Android常见界面控件

**Q1.** 可以为ListView控件添加适配器的方法是（）。
- A. setAdapter()
- B. addAdapter()
- C. getAdapter()
- D. removeAdapter()

**答案：** A

---

**Q2.** 用于设置EditText控件的内容为空时显示的提示信息的属性是（）。
- A. android:text
- B. android:editable
- C. android:inputType
- D. android:hint

**答案：** D

---

**Q3.** 开始提供RecyclerView控件的Android系统版本是（）。
- A. Android 5.0
- B. Android 4.0
- C. Android 3.0
- D. Android 6.0

**答案：** A

---

**Q4.** 关于SimpleAdapter的描述，正确的是（）。
- A. SimpleAdapter是系统自带的布局
- B. SimpleAdapter是数据适配器
- C. SimpleAdapter只能显示文字
- D. SimpleAdapter不需要数据源

**答案：** B

---

**Q5.** 关于ListView控件的描述，错误的是（）。
- A. ListView可以使用Adapter加载数据
- B. ListView必须实现滚动条的显示才能实现滑动功能
- C. ListView可以通过setOnItemClickListener()设置条目点击事件
- D. ListView用于展示大量数据

**答案：** B

---

**Q6.** 用于设置EditText控件中输入的内容只能是数字的属性是（）。
- A. android:phoneNumber
- B. android:numeric
- C. android:digits
- D. android:inputType

**答案：** A

---

**Q7.** 用于设置ImageView控件显示图片资源的属性是（）。
- A. android:background
- B. android:image
- C. android:src
- D. android:drawable

**答案：** C

---

**Q8.** 用于自定义View中测量尺寸的方法是（）。
- A. onMeasure()
- B. onLayout()
- C. onDraw()
- D. onSizeChanged()

**答案：** A

---

**Q9.** 用于显示文本信息的控件是（）。
- A. EditText
- B. Button
- C. ImageView
- D. TextView

**答案：** D

---

**Q10.** 用于设置ListView控件的分割线颜色的属性是（）。
- A. android:dividerHeight
- B. android:divider
- C. android:dividerColor
- D. android:separator

**答案：** B

---

## 第4章 程序活动单元Activity

**Q1.** 用于在当前Activity被其他Activity覆盖时调用的方法是（）。
- A. onStop()
- B. onDestroy()
- C. onPause()
- D. onRestart()

**答案：** C

---

**Q2.** 用于在Activity之间进行数据回传时开启一个Activity的方法是（）。
- A. startActivity()
- B. startService()
- C. sendBroadcast()
- D. startActivityForResult()

**答案：** D

---

**Q3.** 用于在创建Activity时调用的方法是（）。
- A. onCreate()
- B. onStart()
- C. onResume()
- D. onDestroy()

**答案：** A

---

**Q4.** 属于在清单文件中配置Activity的标签是（）。
- A. <service />
- B. <receiver />
- C. <provider />
- D. <activity />

**答案：** D

---

**Q5.** 不是onActivityResult()方法中的参数的是（）。
- A. requestCode
- B. resultCode
- C. data
- D. result

**答案：** D

---

**Q6.** 用来存放Activity实例的容器是（）。
- A. 集合
- B. 数组
- C. 队列
- D. Android的任务栈

**答案：** D

---

**Q7.** 关于Fragment的描述，正确的是（）。
- A. Fragment只能在手机上使用
- B. Fragment不能与用户交互
- C. Fragment必须在Activity中使用
- D. 使用Fragment，能使程序更加合理和充分地利用屏幕的空间

**答案：** D

---

**Q8.** 关于Intent的描述，正确的是（）。
- A. Intent只能启动Activity
- B. Intent用于启动Activity、Service以及发送广播
- C. Intent只能传递数据
- D. Intent只能用于隐式启动

**答案：** B

---

**Q9.** 用于负责与用户交互的组件是（）。
- A. Activity
- B. Service
- C. BroadcastReceiver
- D. ContentProvider

**答案：** A

---

**Q10.** 关于Fragment的描述，正确的是（）。
- A. Fragment不需要依赖Activity
- B. Fragment没有自己的生命周期
- C. Fragment只能在手机上使用
- D. 可以通过getFragmentManager()方法获取FragmentManager实例

**答案：** D

---

**Q11.** 属于在Fragment和Activity解除关联时调用的方法是（）。
- A. onDestroy()
- B. onDetach()
- C. onStop()
- D. onDestroyView()

**答案：** B

---

**Q12.** 属于在Fragment和Activity建立关联时调用的方法是（）。
- A. onCreate()
- B. onCreateView()
- C. onActivityCreated()
- D. onAttach()

**答案：** D

---

**Q13.** 关于Activity生命周期状态的描述，正确的是（）。
- A. Activity在运行状态时是不可见的
- B. Activity在暂停状态用户对它操作没有响应
- C. Activity在停止状态时是可见的
- D. Activity在销毁状态时仍然可以与用户交互

**答案：** B

---

**Q14.** 用于携带数据进行回传的方法是（）。
- A. setResult()
- B. putExtra()
- C. getExtra()
- D. getData()

**答案：** A

---

**Q15.** 可以将Bundle对象封装到Intent对象中的方法是（）。
- A. putExtras()
- B. getExtras()
- C. putBundle()
- D. getBundle()

**答案：** A

---

**Q16.** 可以启动Activity的方法是（）。
- A. startActivity()
- B. startService()
- C. sendBroadcast()
- D. bindService()

**答案：** A

---

**Q17.** 属于在Fragment关联的视图被移除时调用的方法是（）。
- A. onDestroy()
- B. onDetach()
- C. onStop()
- D. onDestroyView()

**答案：** D

---

**Q18.** （）模式会判断要启动的Activity实例是否位于栈顶。
- A. standard
- B. singleTask
- C. singleInstance
- D. singleTop

**答案：** D

---

**Q19.** 属于没有明确指定组件名的Intent类型是（）。
- A. 隐式Intent
- B. 显式Intent
- C. 通用Intent
- D. 专用Intent

**答案：** A

---

**Q20.** 属于Activity的默认启动模式的是（）。
- A. singleTop
- B. singleTask
- C. standard
- D. singleInstance

**答案：** C

---

## 第5章 数据存储

**Q1.** 用于删除SharedPreferences文件中的一条数据的方法是（）。
- A. remove()
- B. delete()
- C. clear()
- D. drop()

**答案：** A

---

**Q2.** 用于获取SharedPreferences文件中存储的String类型数据的方法是（）。
- A. getString()
- B. getValue()
- C. getText()
- D. getData()

**答案：** A

---

**Q3.** 能够读取内部存储文件中数据的类是（）。
- A. FileOutputStream
- B. BufferedWriter
- C. FileInputStream
- D. BufferedReader

**答案：** C

---

**Q4.** 用于获取SD卡根目录的方法是（）。
- A. getFilesDir()
- B. getCacheDir()
- C. getExternalFilesDir()
- D. getExternalStorageDirectory()

**答案：** D

---

**Q5.** 用于获取SharedPreferences类的编辑器的方法是（）。
- A. getEditor()
- B. edit()
- C. modify()
- D. change()

**答案：** B

---

**Q6.** 用于指定文件只能被当前程序读写的操作模式是（）。
- A. MODE_WORLD_READABLE
- B. MODE_PRIVATE
- C. MODE_WORLD_WRITEABLE
- D. MODE_APPEND

**答案：** B

---

**Q7.** 用于获取SharedPreferences类的对象的方法是（）。
- A. getPreferences()
- B. getSharedPreferences()
- C. getDefaultSharedPreferences()
- D. createSharedPreferences()

**答案：** B

---

**Q8.** 用于存储String类型的数据到SharedPreferences文件中的方法是（）。
- A. putString()
- B. setString()
- C. saveString()
- D. addString()

**答案：** A

---

**Q9.** 属于Android自带的一个轻量级数据库的是（）。
- A. MySQL
- B. SQLite
- C. Oracle
- D. SQL Server

**答案：** B

---

**Q10.** 用于修改SQLite数据库表中的数据的方法是（）。
- A. update()
- B. modify()
- C. alter()
- D. change()

**答案：** A

---

**Q11.** 不属于Android数据存储方式的是（）。
- A. 文件存储
- B. SharedPreferences
- C. Map
- D. SQLite

**答案：** C

---

**Q12.** 关于文件存储的描述，正确的是（）。
- A. 内部存储的文件可以被其他应用程序共享
- B. 外部存储的文件只能被当前程序访问
- C. 内部存储和外部存储没有区别
- D. 外部存储的文件可以被其他应用程序所共享

**答案：** D

---

**Q13.** 用于开启SQLite数据库事务的方法是（）。
- A. startTransaction()
- B. beginTransaction()
- C. openTransaction()
- D. initTransaction()

**答案：** B

---

**Q14.** 关于SQLite数据库的描述中，错误的是（）。
- A. 每次调用getWritableDatabase()方法时都会执行onCreate()方法
- B. SQLite是一个轻量级的数据库
- C. SQLite支持事务操作
- D. SQLite数据库文件后缀为.db

**答案：** A

---

**Q15.** 属于SQLite数据库文件的后缀名的是（）。
- A. .db
- B. .sql
- C. .sqlite
- D. .database

**答案：** A

---

**Q16.** 关于数据存储方式的描述，正确的是（）。
- A. SharedPreferences只能存储整数类型数据
- B. 文件存储不支持外部存储
- C. SQLite是Android自带的一个轻量级的数据库
- D. SQLite数据库不支持事务操作

**答案：** C

---

**Q17.** 属于在数据库版本号增加时调用的方法是（）。
- A. onCreate()
- B. onUpgrade()
- C. onDowngrade()
- D. onOpen()

**答案：** B

---

**Q18.** 用于向SQLite数据库添加数据的方法是（）。
- A. insert()
- B. add()
- C. create()
- D. put()

**答案：** A

---

## 第6章 内容提供者和内容观察者

**Q1.** 用于操作手机短信程序暴露的数据的是（）。
- A. ContentProvider
- B. ContentResolver
- C. ContentObserver
- D. UriMatcher

**答案：** B

---

**Q2.** 用于在清单文件中注册内容提供者的标签是（）。
- A. <activity/>
- B. <provider/>
- C. <service/>
- D. <receiver/>

**答案：** B

---

**Q3.** 用于获取ContentResolver的对象的是（）。
- A. getContentProvider()
- B. getResolver()
- C. getContentResolver()
- D. getContentObserver()

**答案：** C

---

**Q4.** （）的主要组成部分是scheme、authority和path。
- A. URL
- B. URI
- C. Uri
- D. URN

**答案：** C

---

**Q5.** 能观察到系统短信数据库的变化的类是（）。
- A. ContentProvider
- B. ContentObserver
- C. ContentResolver
- D. BroadcastReceiver

**答案：** B

---

**Q6.** 用于返回MIME类型的数据的方法是（）。
- A. getType()
- B. getMimeType()
- C. getContentType()
- D. getDataType()

**答案：** A

---

**Q7.** 关于<provider />标签中的属性android:authorities的描述，正确的是（）。
- A. 设置权限
- B. 设置导出
- C. 唯一标识
- D. 设置名称

**答案：** C

---

**Q8.** 是内容提供者的英文单词是（）。
- A. ContentResolver
- B. ContentObserver
- C. ContentProvider
- D. ContentManager

**答案：** C

---

**Q9.** 表示任何应用程序都可以通过URI访问ContentProvider的是（）。
- A. android:exported="false"
- B. android:exported="true"
- C. android:enabled="true"
- D. android:permission="none"

**答案：** B

---

## 第7章 广播机制

**Q1.** 用于注册广播接收者的方法是（）。
- A. sendBroadcast()
- B. abortBroadcast()
- C. unregisterReceiver()
- D. registerReceiver()

**答案：** D

---

**Q2.** 用于接收系统广播的组件是（）。
- A. Activity
- B. Service
- C. ContentProvider
- D. BroadcastReceiver

**答案：** D

---

**Q3.** 可以监听来自系统或者应用程序的广播的组件是（）。
- A. Activity
- B. 广播接收者
- C. Service
- D. ContentProvider

**答案：** B

---

**Q4.** 可以有多个对应的BroadcastReceiver接收并进行处理的事件是（）。
- A. Activity启动
- B. Service绑定
- C. 数据变化
- D. 广播

**答案：** D

---

**Q5.** 用于接收并过滤广播中的消息的组件是（）。
- A. Intent
- B. Handler
- C. BroadcastReceiver
- D. ContentObserver

**答案：** C

---

**Q6.** 关于广播机制的描述，正确的是（）。
- A. 广播只能在同一程序内发送
- B. 广播只能用于系统通知
- C. 可以使用广播在不同程序之间进行通信
- D. 广播接收者只能静态注册

**答案：** C

---

**Q7.** 关于广播的描述，正确的是（）。
- A. 无序广播可以被拦截
- B. 有序广播不能被拦截
- C. 无序广播按照优先级顺序执行
- D. 有序广播可以被接收者拦截

**答案：** D

---

**Q8.** （）发送消息时，会将消息存储到公共消息区中。
- A. 有序广播
- B. 无序广播
- C. 自定义广播
- D. 系统广播

**答案：** C

---

**Q9.** 关于静态注册广播接收者中Exported属性的描述，正确的是（）。
- A. 是否接收有序广播
- B. 是否接收无序广播
- C. 是否接收当前程序之外的广播
- D. 是否接收系统广播

**答案：** C

---

## 第8章 服务

**Q1.** 关于Service的描述，错误的是（）。
- A. Service依赖于Activity
- B. Service可以在后台长期运行
- C. Service是Android四大组件之一
- D. Service没有用户界面

**答案：** A

**解析：** Service不依赖于Activity。

---

**Q2.** 属于创建服务时需要继承的类是（）。
- A. Service
- B. Activity
- C. BroadcastReceiver
- D. ContentProvider

**答案：** A

---

**Q3.** 属于创建服务时必须实现的方法是（）。
- A. onBind()
- B. onCreate()
- C. onStartCommand()
- D. onDestroy()

**答案：** A

---

**Q4.** 哪个方法的返回值是一个IBinder对象（）。
- A. onCreate()
- B. onBind()
- C. onStartCommand()
- D. onDestroy()

**答案：** B

---

**Q5.** 当使用bindService()方法开启服务时，服务生命周期正确的是（）。
- A. onCreate()-onStartCommand()-onDestroy()
- B. onBind()-onCreate()-onDestroy()
- C. onCreate()-onBind()-onUnbind()-onDestroy()
- D. onStartCommand()-onBind()-onDestroy()

**答案：** C

---

**Q6.** 用于在清单文件中配置服务的标签是（）。
- A. <activity/>
- B. <receiver/>
- C. <provider/>
- D. <service/>

**答案：** D

---

**Q7.** 关于服务通信的描述，正确的是（）。
- A. 本地服务通信不需要绑定服务
- B. 远程服务通信只能在同一应用内进行
- C. AIDL定义接口的源代码必须以.aidl结尾
- D. 服务通信不支持跨进程

**答案：** C

---

**Q8.** 关于bindService()方法启动服务的描述，正确的是（）。
- A. 服务会一直运行直到调用stopService()
- B. 服务会在所有客户端解绑后自动销毁
- C. 可以通过unbindService()方法停止该服务
- D. 服务不能与多个组件绑定

**答案：** C

---

**Q9.** 属于可以长期运行在后台的组件是（）。
- A. Service
- B. Activity
- C. Fragment
- D. Intent

**答案：** A

---

## 第9章 网络编程

**Q1.** 用于设置WebView控件支持JavaScript代码的方法是（）。
- A. setWebSettings()
- B. setWebClient()
- C. setJavaScriptEnabled()
- D. setWebViewClient()

**答案：** C

---

**Q2.** HttpURLConnection提交数据后请求成功的状态码是（）。
- A. 100
- B. 404
- C. 200
- D. 500

**答案：** C

---

**Q3.** （）解析JSON数据时，创建的实体类成员名称必须与JSON数据中的key值一致。
- A. JSONObject
- B. JSONArray
- C. JsonReader
- D. Gson库

**答案：** D

---

**Q4.** 用于获取WebSettings类的对象的方法是（）。
- A. getWebSettings()
- B. getSettings()
- C. getWebConfig()
- D. getConfig()

**答案：** B

---

**Q5.** 属于WebView控件的方法的是（）。
- A. setWebChromeClient()
- B. setWebChrome()
- C. setChromeClient()
- D. setWebBrowser()

**答案：** A

---

**Q6.** 关于WebView控件的描述，正确的是（）。
- A. WebView只能加载URL网页
- B. WebView不能使用JavaScript
- C. WebView只能显示本地网页
- D. 可以使用loadData()方法加载HTML代码

**答案：** D

---

**Q7.** 当服务器端接收到请求后会做出响应的是（）。
- A. HTTP请求
- B. HTTP连接
- C. HTTP状态码
- D. HTTP响应

**答案：** D

---

**Q8.** 不属于JSON数据的是（）。
- A. {"name":"zhangsan"}
- B. [1,2,3]
- C. {"abc",12345,false,null}
- D. {"age":20,"score":90.5}

**答案：** C

---

**Q9.** 是超文本传输协议的是（）。
- A. FTP
- B. HTTP
- C. TCP
- D. UDP

**答案：** B

---

**Q10.** 用于解析对象结构的JSON数据的类是（）。
- A. JSONObject
- B. JSONArray
- C. JsonReader
- D. Gson

**答案：** A

---

**Q11.** 关于GET方式访问网络的描述，正确的是（）。
- A. GET方式没有数据大小限制
- B. GET方式比POST方式更安全
- C. GET方式可以传输大量数据
- D. 使用GET方式访问网络URL的内容一般要小于1K

**答案：** D

---

**Q12.** 用于加载指定URL对应的网页的方法是（）。
- A. loadData()
- B. loadUrl()
- C. loadHtml()
- D. loadPage()

**答案：** B

---

**Q13.** 属于一种轻量级的数据交互格式的是（）。
- A. XML
- B. JSON
- C. HTML
- D. CSV

**答案：** B

---

**Q14.** 关于Android中消息机制的描述，正确的是（）。
- A. Handler是用来发送消息和处理消息的
- B. MessageQueue是用来发送消息的
- C. Looper是用来发送消息的
- D. Handler只能在主线程中使用

**答案：** A

---

**Q15.** 关于Looper的描述，正确的是（）。
- A. Looper用于发送消息
- B. Looper用于创建消息
- C. Looper用于存储消息
- D. Looper用来监视消息队列里面的数据，一旦发现消息队列里面有数据就把消息给取出来

**答案：** D

---

**Q16.** 用于存放Handler发送的消息的类是（）。
- A. MessageQueue
- B. Looper
- C. Handler
- D. Message

**答案：** A

---

**Q17.** 关于HttpURLConnection访问网络的描述，正确的是（）。
- A. HttpURLConnection不需要设置请求方式
- B. HttpURLConnection不能设置超时时间
- C. HttpURLConnection只能使用GET方式
- D. 使用HttpURLConnection访问网络时需要设置超时时间

**答案：** D

---

## 第10章 图形图像处理

**Q1.** 用于表示位图工厂的是（）。
- A. Bitmap
- B. BitmapFactory
- C. BitmapConfig
- D. BitmapHelper

**答案：** B

---

**Q2.** 属于矩阵前乘式中设置特效的方法是（）。
- A. postScale()
- B. preScale()
- C. setScale()
- D. addScale()

**答案：** B

---

**Q3.** 用于将指定的资源id解析为位图的方法是（）。
- A. decodeFile()
- B. decodeStream()
- C. decodeResource()
- D. decodeBitmap()

**答案：** C

---

**Q4.** （）是顺序播放一组预定义的静态图像。
- A. 逐帧动画
- B. 补间动画
- C. 属性动画
- D. 转场动画

**答案：** A

---

**Q5.** 用于设置画笔绘制的文字大小的方法是（）。
- A. setColor()
- B. setStyle()
- C. setTextSize()
- D. setTypeface()

**答案：** C

---

**Q6.** 用于设置画笔绘制图形的透明度的方法是（）。
- A. setColor()
- B. setStyle()
- C. setStrokeWidth()
- D. setAlpha()

**答案：** D

---

**Q7.** 用于绘制椭圆的方法是（）。
- A. drawOval()
- B. drawCircle()
- C. drawRect()
- D. drawLine()

**答案：** A

---

**Q8.** 可以添加多个属性动画效果的类是（）。
- A. ObjectAnimator
- B. ValueAnimator
- C. AnimatorInflater
- D. AnimatorSet

**答案：** D

---

**Q9.** 用于设置画笔是否使用抗锯齿功能的方法是（）。
- A. setDither()
- B. setAntiAlias()
- C. setFilterBitmap()
- D. setSmooth()

**答案：** B

---

**Q10.** 关于Bitmap类的描述，错误的是（）。
- A. Bitmap类可以创建位图
- B. Config表示位图
- C. Config是Bitmap的内部类
- D. Bitmap用于处理图像

**答案：** B

---

**Q11.** 用于设置补间动画的播放时长的属性是（）。
- A. android:startOffset
- B. android:repeatCount
- C. android:duration
- D. android:interpolator

**答案：** C

---

**Q12.** 用于将图片旋转一定角度的方法是（）。
- A. setTranslate()
- B. setRotate()
- C. setScale()
- D. setSkew()

**答案：** B

---

## 第11章 多媒体应用开发

**Q1.** 属于VideoView控件播放本地视频时需要调用的方法是（）。
- A. setVideoPath()
- B. setVideoURI()
- C. setVideoURL()
- D. setVideoFile()

**答案：** A

---

**Q2.** 用于设置要播放的视频文件位置的方法是（）。
- A. setVideoURI()
- B. setVideoFile()
- C. setVideoURL()
- D. setVideoPath()

**答案：** D

---

**Q3.** 可以将SurfaceView控件与MediaPlayer类进行关联的方法是（）。
- A. setSurface()
- B. setDisplay()
- C. setHolder()
- D. setView()

**答案：** D

---

**Q4.** 用于获取MediaPlayer中载入的音频文件时长的方法是（）。
- A. getLength()
- B. getSize()
- C. getDuration()
- D. getTime()

**答案：** C

---

**Q5.** 用于开始或继续播放音频的方法是（）。
- A. play()
- B. resume()
- C. begin()
- D. start()

**答案：** D

---

**Q6.** 关于SoundPool类的描述，正确的是（）。
- A. SoundPool只能播放一个音频
- B. SoundPool适合播放长音频
- C. SoundPool不支持同时播放多个音频
- D. SoundPool类可以同时播放多个短小的音频

**答案：** D

---

**Q7.** 用于设置VideoView控件重新播放视频的方法是（）。
- A. restart()
- B. replay()
- C. restart()
- D. resume()

**答案：** D

---

**Q8.** 用于获取SurfaceHolder类的对象的方法是（）。
- A. getSurface()
- B. getHolder()
- C. getSurfaceHolder()
- D. getSurfaceView()

**答案：** B

---
