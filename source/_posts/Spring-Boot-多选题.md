---
title: Spring-Boot-多选题
date: 2026-06-27 23:07:31
tags: Spring-Boot
categories: Technology
keywords: Spring-Boot-多选题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Spring-Boot-多选题
---

# 多选题题库

## 第一章

1. 以下选项中，哪些属于Spring Boot的优点？（ ）（多选）
   A. 可快速构建独立的 Spring 应用
   B. 无须打包即可快速部署
   C. 提供依赖启动器简化构建配置
   D. 极大程度地自动化配置了Spring和第三方库
   **答案：ACD**

2. IDEA界面中，【Configure】→【Project Defaults】中的Project Structure主要作用是（ ）。
   A. 用于全局JDK初始化设置
   B. 用于全局Maven初始化设置
   C. 用于全局运行环境设置
   D. 以上都不对
   **答案：A**

3. 下列关于 Spring Boot项目各个包作用的说法，正确的是（ ）（多选）
   A. resources 下 static中用于存放静态资源文件
   B. resources 下 templates中用于存放模板文件
   C. application.properties是项目的全局配置文件
   D. 以上都正确
   **答案：ABCD**

4. 下列关于Spring Boot依赖管理的说法，正确的是（ ）。
   A. spring-boot-starter-parent父依赖可以为项目提供整合的子依赖文件
   B. spring-boot-starter-parent父依赖可以为项目提供整合的子依赖版本管理
   C. Web场景开发依赖spring-boot-starter-web可以针对所有Web场景开发
   D. Web场景开发依赖spring-boot-starter-web 的版本需要自行管理
   **答案：B**

5. 下列关于Spring Boot自动配置原理的说法，错误的是（ ）。
   A. @SpringBootApplication 只包含@SpringBootConfiguration、@EnableAutoConfiguration、@ComponentScan 3个注解
   B. @SpringBootConfiguration注解表示当前类为一个配置类并可以被组件扫描器扫描
   C. @EnableAutoConfiguration的作用是启动自动配置，向容器中导入所有选中的自动配置类
   D. @ComponentScan注解的主要作用是扫描指定包及其子包下所有注解类文件作为Spring容器的组件使用
   **答案：A**

## 第二章

6. 下列关于Spring Boot全局配置文件的说法，正确的是（ ）。（多选）
   A. Spring Boot支持 application.properties全局配置文件
   B. Spring Boot支持application.yaml全局配置文件
   C. Spring Boot支持application.yml全局配置文件
   D. Spring Boot全局配置文件必须在项目resources根目录下
   **答案：ABCD**

7. 下列关于 YAML 配置文件的说法，正确的是（ ）。
   A. YAML配置文件的内容是"key:value"形式的键值对，并使用缩进式写法
   B. YAML 配置文件的行内式写法配置单列集合属性，包含属性值的中括号"[]"可以省略
   C. YAML 配置文件的行内式写法配置双列集合属性，包含属性值的大括号"{}"可以省略
   D. 以上都不对
   **答案：B**

8. 下列关于@ConfigurationProperties注解的说法中，正确的是（ ）（多选）
   A. @ConfigurationProperties注解只能作用于类
   B. 使用@ConfigurationProperties注解为Bean注入属性时，必须为Bean 设置setter方法
   C. @ConfigurationProperties注解必须和@Component结合使用
   D. 要想使@ConfigurationProperties注解注入的属性生效，必须使用@EnableConfigurationProperties注解开启注入
   **答案：B**

9. 下列关于@ConfigurationProperties 和@Value 注解的说法，正确的是（ ）。
   A. @ConfigurationProperties和@Value注解都是Spring Boot框架自带的
   B. 进行属性值注入时，@ConfigurationProperties 和@Value注解配置中必须设置属性的setter方法
   C. @ConfigurationProperties注解进行配置文件属性值注入时，支持JSR303数据校验
   D. @Value注解进行配置文件属性值注入时，支持松散绑定语法
   **答案：C**

10. 下列关于Spring Boot 的 Profile多环境配置的说法，错误的是（ ）。
    A. Spring Boot提供了两种多环境配置的方式：Profile文件多环境配置和@Profile注解多环境配置
    B. Profile 配置文件的名必须满足application-{profile}.properties的格式
    C. 可以在项目全局配置文件中配置spring.profiles.active属性激活指定的多环境配置文件
    D. 在多个自定义类上直接使用@Profile注解可以进行多环境配置
    **答案：D**
