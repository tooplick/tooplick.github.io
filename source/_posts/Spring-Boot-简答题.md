---
title: Spring-Boot-简答题
date: 2026-06-27 23:07:32
tags: Spring-Boot
categories: Technology
keywords: Spring-Boot-简答题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Spring-Boot-简答题
---

# 简答题题库

1. **Spring Boot最核心的设计理念是什么？该理念能为开发带来哪些优势？**

   Spring Boot的核心设计思想是"约定优于配置"。这种思想的好处是：开发者遵循框架的默认约定，就可以减少大量的手动配置工作，提高开发效率，让开发者更专注于业务逻辑的实现。

---

2. **请说明Spring Data JPA中Repository相关接口的层级继承关系？**

   继承体系从上到下依次是：（1）Repository：标记接口，不提供方法；（2）CrudRepository：提供基本CRUD方法；（3）PagingAndSortingRepository：增加分页和排序功能；（4）JpaRepository：提供更丰富的JPA操作方法，是开发中最常用的接口。

---

3. **Spring Boot主流的配置文件类型有哪两种？二者语法特性和使用区别是什么？**

   支持 .properties 和 .yml（或 .yaml）两种格式。.properties 采用键值对形式（key=value）；.yml 采用层级缩进形式，结构更清晰，适合表达复杂对象。注意 .yml 格式不支持 @PropertySource 注解导入配置。

---

4. **基于Spring Boot实现纯文本邮件发送，完整操作流程是什么？**

   Spring Boot发送纯文本邮件的步骤：（1）在pom.xml中引入spring-boot-starter-mail依赖；（2）在application.yml中配置邮件服务器信息，包括spring.mail.host（SMTP服务器地址）、spring.mail.port（端口号）、spring.mail.username（发件人账号）、spring.mail.password（授权码）；（3）注入JavaMailSender对象；（4）发送纯文本邮件：创建SimpleMailMessage对象，设置收件人、主题、内容，调用send()方法。

---

5. **什么是Spring Boot自动配置？其核心原理是什么？**

   Spring Boot自动配置是指框架根据项目引入的依赖包，自动扫描并创建对应的Bean、完成组件配置，无需开发者手动XML或代码配置。核心原理基于@EnableAutoConfiguration注解，通过SPI机制读取META-INF/spring.factories配置文件，加载对应的自动配置类，结合条件注解实现按需自动装配。

---

6. **Spring Boot的核心启动注解是什么？该注解包含哪些核心组合注解？**

   核心启动注解是@SpringBootApplication。该注解是组合注解，核心包含三大注解：@Configuration（标识当前类为配置类）、@EnableAutoConfiguration（开启自动配置）、@ComponentScan（自动扫描当前包及子包下的所有组件）。

---

7. **Spring Boot中全局配置文件和自定义配置文件的区别是什么？**

   全局配置文件为application.properties/application.yml，项目启动时默认加载，作用于整个项目全局；自定义配置文件需要通过@PropertySource注解手动导入，仅用于加载自定义业务配置，不会全局生效，常用于拆分复杂配置、实现配置解耦。

---

8. **Spring Data JPA中常用的主键生成策略有哪些？分别适用于什么场景？**

   常用四种主键策略：1、AUTO：程序自动选择主键生成方式，默认适配数据库自增；2、IDENTITY：依赖数据库自增主键，适用于MySQL、SQL Server；3、SEQUENCE：依托数据库序列生成主键，适用于Oracle、PostgreSQL；4、TABLE：通过数据表维护主键，兼容性最强，所有数据库均可使用。

---

9. **Spring Boot如何实现自定义配置参数绑定？常用注解是什么？**

   首先在yml/properties配置文件中自定义参数，然后创建配置实体类，通过@ConfigurationProperties(prefix = "配置前缀")注解绑定配置参数，配合@Component注解将配置类交给Spring管理，即可在项目中注入使用，实现配置与代码解耦。

---

10. **Spring Boot项目中@Component、@Controller、@Service、@Repository注解的区别？**

    四者均可将类交给Spring容器管理：1、@Component：通用组件注解，适用于所有普通业务类；2、@Controller：专门标识控制器层，用于接收前端请求；3、@Service：专门标识业务逻辑层，处理核心业务；4、@Repository：专门标识数据持久层，适配JPA、MyBatis等数据操作。

---

11. **Spring Boot发送HTML格式邮件，和纯文本邮件的核心区别是什么？**

    核心区别在于邮件消息对象和内容设置：纯文本邮件使用SimpleMailMessage对象，仅支持普通文本内容；HTML邮件需要使用MimeMessageHelper封装消息，设置setHtml(true)开启HTML格式，可在邮件内容中写入HTML标签，实现图文、样式、超链接等富文本效果，其余依赖引入、服务器配置流程与纯文本邮件一致。

---

12. **Spring Boot默认的项目扫描范围是什么？如何修改扫描包路径？**

    Spring Boot默认扫描启动类所在包及其所有子包。修改扫描路径有两种方式：1、在@SpringBootApplication注解中通过scanBasePackages属性指定扫描包；2、使用@ComponentScan注解手动配置需要扫描的包路径，覆盖默认扫描规则。

---

13. **Spring Data JPA中接口方法命名查询的作用是什么？举例说明常用命名规则？**

    方法命名查询无需手写SQL，通过规范的方法名即可自动生成查询语句，简化数据查询开发。常用规则：findBy+字段名（精准查询）、findBy+字段名+Like（模糊查询）、findBy+字段名+And/Or（多条件查询）、countBy（统计数量）、deleteBy（删除数据）。

---

14. **Spring Boot中配置文件的加载优先级是怎样的？**

    优先级从高到低依次为：1、项目根目录下的config文件夹中的配置文件；2、项目根目录下的配置文件；3、resources/config文件夹中的配置文件；4、resources根目录下的配置文件；高优先级配置会覆盖低优先级的同名配置，互补不同配置参数。
