---
title: Spring-Boot-单选题
date: 2026-06-27 23:07:28
tags: Spring-Boot
categories: Technology
keywords: Spring-Boot-单选题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Spring-Boot-单选题
---

# 单选题题库

## 第四章

1. 下列选项中，关于Thymeleaf的描述错误的是（ ）。
   A. Thymeleaf是采用Python语言编写的模板引擎。
   B. Thymeleaf可用于非Web环境中的应用开发。
   C. Thymeleaf浏览器可以直接打开模板文件。
   D. Thymeleaf是Spring Boot官方推荐使用的模板引擎。
   **答案：A**

2. 下列选项中，对于Thymeleaf的特点描述错误的是（ ）。
   A. Thymeleaf提供了Spring标准方言。
   B. 如果直接使用浏览器打开模板文件，浏览器不解析未定义的Thymeleaf标签属性，导致页面打开错误。
   C. Thymeleaf可以创建自己的方言。
   D. Spring Boot为Thymeleaf整合提供了自动配置支持。
   **答案：B**

3. 下列选项中，用于根据条件判断是否需要展示当前标签的Thymeleaf属性是（ ）。
   A. th:each
   B. th:if
   C. th:value
   D. th:object
   **答案：B**

4. 下列选项中，对于Thymeleaf的内置对象描述错误的是（ ）。
   A. #request对应HttpServletRequest对象。
   B. #response对应HttpServletResponse对象。
   C. #session对应HttpSession对象。
   D. #servletContext对应上下文变量。
   **答案：D**

5. 下列选项中，关于Thymeleaf的表达式描述错误的是（ ）。
   A. 变量表达式中也使用内置对象直接访问内置对象的属性。
   B. 选择表达式是对整个应用环境的变量进行映射。
   C. 在#{ }中指定配置文件中的Key，则会在页面中显示配置文件中Key对应的Value。
   D. Thymeleaf会将链接表达式中开头的斜杠(/)，解析为当前工程的上下文路径ContextPath。
   **答案：B**

## 第五章

6. 下列选项中，关于Spring Data的接口描述错误的是（ ）。
   A. Repository接口提供了各种增删改查方法。
   B. CrudRepository接口继承Repository接口，提供了各种增删改查方法。
   C. PagingAndSortingRepository接口继承CrudRepository接口，增加了分页和排序功能的方法。
   D. QueryByExampleExecutor接口是进行条件封装查询的顶级父接口。
   **答案：A**

7. 下列选项中，对于JPQL的使用描述错误的是（ ）。
   A. JPQL支持命名参数和位置参数两种查询参数。
   B. 使用JPQL时，需要把查询的表名换成实体类名称，把表中的字段名换成实体类的属性名称。
   C. JPQL中可以使用SpEL表达式接收变量。
   D. JPQL中只能使用字符串和基本数据类型的数据作为参数。
   **答案：D**

8. 下列选项中，关于Wrapper的eq()方法的作用描述正确的是（ ）。
   A. 用于匹配字段中值不等于某个值的记录。
   B. 用于匹配字段中值大于某个值的记录。
   C. 用于匹配字段中值等于某个值的记录。
   D. 用于匹配字段中值大于或等于某个值的记录。
   **答案：C**

9. 下列选项中，使用MyBatis-Plus时，可以指定实体类中属性对应字段名的注解是（ ）。
   A. @Entity
   B. @TableName
   C. @TableId
   D. @TableField
   **答案：D**

10. 下列选项中，Spring Data Redis用于标识对应属性在Redis数据库中生成二级索引的注解是（ ）。
    A. @RedisHash
    B. @Id
    C. @Indexed
    D. @TableField
    **答案：C**

## 第六章

11. 下列选项中，关于Spring Boot默认缓存方案说法错误的是（ ）。
    A. Spring Boot继承了Spring框架的缓存管理功能。
    B. Spring的缓存机制将提供的缓存作用于Java方法上。
    C. Spring的默认的缓存方案通过Cache和CacheManager接口统一不同的缓存技术。
    D. Spring中的Cache接口制定了管理Cache的规则。
    **答案：D**

12. 下列选项中，对于@Cacheable注解的属性说明错误的是（ ）。
    A. value用于指定CacheManager的实现。
    B. key用于指定缓存数据的key。
    C. keyGenerator用于指定缓存数据的key的生成器。
    D. cacheManager用于指定缓存管理器。
    **答案：A**

13. 下列选项中，对于声明式缓存注解的描述错误的是（ ）。
    A. @EnableCaching是Spring框架提供的用于开启基于注解的缓存支持的注解。
    B. @CachePut注解的执行顺序是，先将方法结果更新到缓存中，再进行方法调用。
    C. @CachePut注解的作用是更新缓存数据。
    D. @CacheEvict注解的默认执行顺序是，先进行方法调用，然后将缓存进行清除。
    **答案：C**

14. 下列选项中，对于类上标注@CacheConfig(cacheNames = "book")的描述正确的是（ ）。
    A. 声明当前类中共享的属性cacheNames的值为book。
    B. 类中所有方法上使用缓存注解时cacheNames属性的值默认都为book。
    C. 如果类的方法上再次定义cacheNames属性，那么cacheNames属性的值最终为方法上指定的属性值。
    D. 类的方法上可以再次定义cacheNames属性的值。
    **答案：C**

15. 下列选项中，Ehcache配置文件中用于指定是否启用磁盘持久化的属性是（ ）。
    A. external
    B. diskPersistent
    C. maxElementsInMemory
    D. memoryStoreEvictionPolicy
    **答案：B**

## 第七章

16. 下列选项中，对于Spring Security的作用描述正确的是（ ）。
    A. 集成其他Spring框架。
    B. 提供用户认证和授权功能。
    C. 管理Spring应用程序的依赖关系。
    D. 管理开源库的版本控制。
    **答案：B**

17. 下列选项中，Spring Security处理所有身份验证请求的类是（ ）。
    A. AuthenticationManager
    B. AuthenticationProvider
    C. UserDetails
    D. AccessDecisionManager
    **答案：A**

18. 下列选项中，Spring Security 默认使用的加密算法是（ ）。
    A. BCryptPasswordEncoder
    B. Pbkdf2PasswordEncoder
    C. SCryptPasswordEncoder
    D. DelegatingPasswordEncoder
    **答案：D**

19. 下列选项中，开启Spring Security基于方法的安全认证机制的注解是（ ）。
    A. @Secured
    B. @RolesAllowed
    C. @PreAuthorize
    D. @EnableGlobalMethodSecurity
    **答案：D**

20. 下列选项中，Spring Security管理Session时如果没有Session存在就创建一个的策略是（ ）。
    A. always
    B. ifRequired
    C. never
    D. stateless
    **答案：A**

## 第八章

21. 下列选项中，关于RabbitMQ的描述正确的是（ ）。
    A. 一种分布式数据库。
    B. 一种集群管理工具。
    C. 一种消息队列中间件。
    D. 一种Java安全框架。
    **答案：C**

22. 下列选项中，消息队列中消息的载体是（ ）。
    A. Channel
    B. Broker
    C. Exchange
    D. Queue
    **答案：D**

23. 下列选项中，关于消息队列中Exchange组件描述正确的是（ ）。
    A. 消息通道，位于连接内部，负责实际的通信。
    B. 交换机，用来接收生产者发送的消息，并根据分发规则将这些消息路由给服务器中的队列。
    C. 交换机和消息队列之间的虚拟连接。
    D. 消息队列服务器实体。
    **答案：B**

24. 下列选项中，关于RabbitMQ的模式的描述错误的是（ ）。
    A. RabbitMQ的简单模式中，消息生产者会将消息交给默认的交换机。
    B. Work Queues模式只能有一个消息消费者。
    C. Routing模式需要指定一个Routing Key。
    D. Topics工作模式适用于根据不同需求动态传递处理业务的场合。
    **答案：B**

25. 下列选项中，Spring提供的用于管理Exchange、Queue、Binding的类是（ ）。
    A. AmqpAdmin
    B. RabbitTemplate
    C. Queue
    D. Binding
    **答案：A**
