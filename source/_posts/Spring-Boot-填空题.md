---
title: Spring-Boot-填空题
date: 2026-06-27 23:07:29
tags: Spring-Boot
categories: Technology
keywords: Spring-Boot-填空题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Spring-Boot-填空题
---

# 填空题题库

## 第一章

1. Pivotal团队在原有_______框架的基础上开发了全新的Spring Boot框架。
   **答案：Spring**

2. Spring Boot框架在开发过程中大量使用_______的思想来摆脱框架中各种复杂的手动配置。
   **答案：约定优先配置**

3. Spring Boot 2.1.3版本要求Java_______及以上版本的支持。
   **答案：8**

4. Spring Boot 2.1.3版本框架官方声明支持的第三方项目构建工具包括有________和_______。
   **答案：Maven（3.3+）、Gradle（4.4+）**

5. @RestController注解是一个组合注解，主要包含有________和_______两个核心注解。
   **答案：@Controller、@ResponseBody**

## 第二章

6. 默认情况下，Spring Boot生成的全局配置文件是________。
   **答案：application.properties**

7. Spring Boot项目中，application.yaml 文件使用_______格式配置属性。
   **答案：key:（空格）value**

8. Spring Boot提供的_______注解可以批量将配置文件的属性注入Bean对象。
   **答案：@ConfigurationProperties**

9. 使用_______注解注入配置文件属性时，支持 SpEL 表达式语法。
   **答案：@Value**

10. Spring Boot中能够使用_______注解进行多环境配置。
    **答案：@Profile**

## 第四章

11. Thymeleaf的______属性根据条件判断是否需要展示此标签。
    **答案：th:if**

12. Thymeleaf中使用______包裹内容的表达式被称为变量表达式。
    **答案：${}**

13. 使用Thymeleaf______表达式可以访问容器上下文中的变量。
    **答案：变量**

14. Thymeleaf的选择表达式计算的是______。
    **答案：绑定的对象**

15. Spring Boot整合Thymeleaf后，模板文件的默认后缀为______。
    **答案：.html**

## 第五章

16. Spring Data JPA默认使用______实现JPA。
    **答案：Hibernate**

17. ________ 注解可以扫描指定路径的Mapper交由Spring管理。
    **答案：@MapperScan**

18. Redis默认启动端口号为______。
    **答案：6379**

19. Redis的序列化策略有String的序列化策略和______的序列化策略。
    **答案：JDK**

20. 使用@Indexed声明当前属性会被"索引化"，存储在Redis时为当前属性创建对应的______。
    **答案：Key**

## 第六章

21. Spring Boot项目中开启缓存管理后，如果没有任何缓存组件，默认使用________缓存组件进行管理。
    **答案：Simple**

22. 当配置类上使用__________ 注解，会默认提供CacheManager的实现，并通过AOP将缓存行为添加到应用程序。
    **答案：@EnableCaching**

23. ________注解主要用于统筹管理类中所有声明式缓存注解的公共属性。
    **答案：@CacheConfig**

24. @Cacheable注解的__________ 属性和cacheNames属性都可以指定缓存的名称。
    **答案：value**

25. Spring Boot项目中，全局配置文件中spring.cache.redis.key-prefix用于指定Redis中缓存key的________。
    **答案：前缀**

## 第七章

26. Spring Security默认提供用户名是 _________
    **答案：user**

27. _________ 中存储了当前用户的认证以及权限信息。
    **答案：SecurityContext**

28. Spring Security 5如果不想要对输入的密码进行加密，需要在密码前对使用 _____ _____进行标注。
    **答案：{noop}**

29. Spring Security中基于HttpSecurity的 _________方法可以配置CSRF跨站请求伪造防护功能。
    **答案：csrf()**

30. Spring Security中默认的Session创建策略是__________。
    **答案：ifRequired**

## 第八章

31. MQ是一种能实现____到消费者单向通信的通信模型。
    **答案：生产者**

32. 消息队列中,____用于客户端与RabbitMQ之间的连接。
    **答案：Connection**

33. 在RabbitMQ的Publish/Subscribe模式中，必须先显式配置一个_______类型的交换机。
    **答案：fanout**

34. RabbitMQ服务端口号默认为________。
    **答案：5672**

35. Spring框架提供的_______注解可以监听RabbitMQ中指定的队列。
    **答案：@RabbitListener**
