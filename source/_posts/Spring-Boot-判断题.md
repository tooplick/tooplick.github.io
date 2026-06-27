---
title: Spring-Boot-判断题
date: 2026-06-27 23:07:27
tags: Spring-Boot
categories: Technology
keywords: Spring-Boot-判断题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Spring-Boot-判断题
---

# 判断题题库

## 第一章

1. Spring Boot 2.1.3版本要求Java7及以上版本的支持，同时兼容Java 11。（ ）
   **答案：错**

2. 使用Spring Initializr 搭建Spring Boot项目，可以选择任意不同的 Spring Boot 版本，而无须修改。（ ）
   **答案：错**

3. 使用Spring Initializr搭建的Spring Boot项目会默认生成项目启动类。（ ）
   **答案：对**

4. 编写单元测试需要提前加入spring-boot-starter-test测试依赖启动器。（ ）
   **答案：对**

5. Spring Boot提供了对所有第三方技术框架的整合支持和版本管理。（ ）
   **答案：错**

## 第二章

6. application.yaml 配置文件的属性类型只能是数组类型。（ ）
   **答案：错**

7. 使用@ConfigurationProperties注解注入属性值时，必须为对应的属性提供setter方法。（ ）
   **答案：对**

8. @Value注解是 Spring Boot提供的，用来读取配置文件的属性并能够批量注入Bean。（ ）
   **答案：对**

9. @Value注解支持所有数据类型的属性读取和注入。（ ）
   **答案：错**

10. Spring Boot可以使用@PropertiesResource注解引入XML配置文件。（ ）
    **答案：错**

## 第四章

11. Thymeleaf是采用Java语言编写的模板引擎。（ ）
    **答案：对**

12. Thymeleaf的th属性可以直接在HTML标签中使用。（ ）
    **答案：对**

13. Thymeleaf的th:each属性用于遍历，可以遍历集合、数组等对象。（ ）
    **答案：对**

14. Thymeleaf 默认会在/resources/templates/目录下根据模版名查找对应的模板文件。（ ）
    **答案：对**

15. 链接表达式中包裹的内容可以是绝对URL或相对URL地址。（ ）
    **答案：对**

## 第五章

16. Spring Data对大量的关系型数据库和非关系型数据库提供了数据访问的方案。（ ）
    **答案：对**

17. Spring Data JPA使用位置参数时，在@Query注解的查询语句中，参数标注的编号和方法的参数列表中参数的顺序的对应关系没有要求。（ ）
    **答案：错**

18. MyBatis-Plus在MyBatis的基础上只做增强不做改变。（ ）
    **答案：对**

19. Redis以Key-Value的形式存储数据。（ ）
    **答案：对**

20. @RedisHash可以指定数据类的实例对象存储在Redis存储空间的名称。（ ）
    **答案：对**

## 第六章

21. CacheManager是缓存管理器，基于缓存名称对缓存进行管理。（ ）
    **答案：对**

22. 标注@Cacheable注解的方法执行时，会先进行查询缓存，如果查询到缓存数据，则不执行该方法。（ ）
    **答案：对**

23. @Cacheable注解的value和cacheNames属性作用相同，且要二选一使用。（ ）
    **答案：对**

24. Ehcache配置文件中，只有eternal为false时timeToLiveSeconds的设置才有效。（ ）
    **答案：对**

25. Ehcache要将缓存持久化到本地磁盘，则操作的实体类需要实现序列化接口。（ ）
    **答案：对**

## 第七章

26. 授权是指验证用户是否有权限访问特定资源的过程。（ ）
    **答案：对**

27. Spring Security安全管理的实现主要是由过滤器链中一系列过滤器相互配合完成。（ ）
    **答案：对**

28. AuthenticationManager接口是认证相关的核心接口，也是发起认证的出发点。（ ）
    **答案：对**

29. Spring Security自定义身份认证后，项目启动时不会在控制台中输出Spring Security生成的随机密码。（ ）
    **答案：对**

30. 使用Spring Security时，受保护的Web资源将被SecurityFilterChain中FilterSecurityInterceptor的实例对象拦截。（ ）
    **答案：对**

## 第八章

31. RabbitMQ支持的协议有AMQP。（ ）
    **答案：对**

32. RabbitMQ中，一个Broker里只能有一个Virtual Host。（ ）
    **答案：错**

33. RabbitMQ的简单模式不用声明交换机，只需要定义一个队列。（ ）
    **答案：对**

34. 安装RabbitMQ之前需要先安装Erlang语言包。（ ）
    **答案：对**

35. RabbitTemplate进行消息发送过程中默认使用SimpleMessageConverter转换器进行消息转换存储。（ ）
    **答案：对**
