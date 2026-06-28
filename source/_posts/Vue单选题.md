---
title: Vue单选题
date: 2026-06-28 19:11:09
tags: Tutorial
categories: Technology
keywords: Vue单选题
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Vue单选题
---

# Vue 单选题（共45题，100分）

## 1. 实现页面元素循环渲染的指令是

A. v-for
B. v-on
C. v-bind
D. v-model

**答案：A. v-for**

---

## 2. 绑定页面点击事件的指令简写形式是

A. @click
B. :click
C. #click
D. &click

**答案：A. @click**

---

## 3. keep-alive 标签主要作用是

A. 加速网络请求响应速度
B. 美化页面布局样式
C. 限制路由页面访问权限
D. 缓存组件状态，避免重复创建销毁

**答案：D. 缓存组件状态，避免重复创建销毁**

---

## 4. 声明式路由跳转标签是

A. router-link
B. a
C. button
D. div

**答案：A. router-link**

---

## 5. 下列不属于常见网络请求方式的是

A. GET 查询数据
B. POST 提交数据
C. CUT 剪切数据
D. DELETE 删除数据

**答案：C. CUT 剪切数据**

---

## 6. 实现表单双向数据绑定的核心指令是

A. v-bind
B. v-model
C. v-text
D. v-on

**答案：B. v-model**

---

## 7. 在Vue3中使用ref定义基本类型响应式数据，获取或修改其值需要通过

A. 直接使用变量名
B. 变量名.value
C. 变量名()
D. $ref(变量名)

**答案：B. 变量名.value**

---

## 8. 在Pinia中定义一个store的正确方式是

A. createStore({ id: 'main', state: ... })
B. defineStore('main', { state: ... })
C. new PiniaStore('main', ...)
D. useStore('main')

**答案：B. defineStore('main', { state: ... })**

---

## 9. Vue 模板中插值语法正确写法是

A. {{msg}}
B. {msg}
C. ((msg))
D. #[msg]

**答案：A. {{msg}}**

---

## 10. 下列不属于 Vue3 核心优势的是

A. 虚拟 DOM 高效渲染
B. 双向数据绑定特性
C. 原生 JS 无语法差别
D. 生态插件库丰富完善

**答案：C. 原生 JS 无语法差别**

---

## 11. v-show 指令的作用是

A. 绑定页面点击事件
B. 控制元素显示与隐藏
C. 循环遍历数组数据
D. 双向绑定表单数据

**答案：B. 控制元素显示与隐藏**

---

## 12. Vue3中，关于provide和inject的说法正确的是

A. 只能从上向下传递数据
B. 可以提供响应式数据
C. 常用于跨层级组件通信
D. 以上都对

**答案：D. 以上都对**

---

## 13. Vue Router 4（适配Vue3）中，创建路由实例的方法

A. new VueRouter()
B. createRouter()
C. VueRouter.create()
D. useRouter()

**答案：B. createRouter()**

---

## 14. 关于 Vue3 框架，说法错误的是

A. 属于渐进式 JavaScript 前端框架
B. 只能开发移动端网页项目
C. 简化 DOM 操作，提升开发效率
D. 支持组件化模块化开发

**答案：B. 只能开发移动端网页项目**

---

## 15. 在Vue Router中，动态路由匹配/user/:id，如何获取路由参数id？（组合式API）

A. this.$route.params.id
B. useRoute().params.id
C. useRouter().params.id
D. route.params.id

**答案：B. useRoute().params.id**

---

## 16. 关于 `<keep-alive>` 组件，说法正确的是

A. 用于缓存动态组件或路由组件
B. 会触发组件的activated和deactivated钩子
C. 需要配合include或exclude属性
D. 以上都对

**答案：D. 以上都对**

---

## 17. 路由配置中代表默认首页路径的是

A. /home
B. /
C. /index
D. /main

**答案：B. /**

---

## 18. 关于Vue3中的计算属性（computed），说法正确的是

A. 必须是一个带返回值的方法，且会被缓存
B. 必须使用ref定义
C. 不能在模板中直接使用
D. 只能读取不能修改

**答案：A. 必须是一个带返回值的方法，且会被缓存**

---

## 19. 下列不属于 Vue3 内置常用指令的是

A. v-text
B. v-html
C. v-css
D. v-show

**答案：C. v-css**

---

## 20. 关于 v-if 与 v-show 区别，说法错误的是

A. v-if 切换消耗更高
B. v-show 依靠 CSS 隐藏元素
C. v-if 适合频繁切换场景
D. v-if 条件不成立不渲染 DOM

**答案：C. v-if 适合频繁切换场景**

---

## 21. 在Vue3中，父组件向子组件传递数据，子组件接收的方式错误的是

A. 使用props
B. 使用provide/inject
C. 使用$parent直接修改
D. 使用attrs

**答案：C. 使用$parent直接修改**

---

## 22. Vue3中，v-model指令在原生 `<input>` 上的默认修饰符不包括

A. .lazy
B. .number
C. .trim
D. .debounce

**答案：D. .debounce**

---

## 23. Vue3 项目创建常用官方构建工具是

A. WebStorm
B. Vite
C. HBuilder
D. Photoshop

**答案：B. Vite**

---

## 24. Vue3 全局统一状态管理工具是

A. Pinia
B. Vuex5
C. Axios
D. Router

**答案：A. Pinia**

---

## 25. 下列不属于 Vue 生命周期钩子函数的是

A. onMounted
B. onUpdated
C. onUnmounted
D. onDelete

**答案：D. onDelete**

---

## 26. Axios 默认发送的请求方式是

A. POST
B. GET
C. PUT
D. DELETE

**答案：B. GET**

---

## 27. Vue3 中解构获取路由参数使用的函数是

A. useRoute
B. useRouter
C. useStore
D. useAxios

**答案：A. useRoute**

---

## 28. 开启 Vue 元素过渡动画必须包裹的标签是

A. `<div>`
B. `<view>`
C. `<style>`
D. `<transition>`

**答案：D. `<transition>`**

---

## 29. 在Vue3中遍历数组使用v-for，正确的写法是

A. v-for="item in items"
B. v-for="(item, index) of items"
C. v-for="item of items"
D. 以上都对

**答案：D. 以上都对**

---

## 30. 多个组件列表统一添加动画使用标签是

A. transition-group
B. transition
C. keep-alive
D. router-view

**答案：A. transition-group**

---

## 31. 关于v-bind指令的作用，说法正确的是

A. 绑定事件监听
B. 动态绑定一个或多个属性，或一个组件prop
C. 双向绑定表单输入
D. 条件渲染元素

**答案：B. 动态绑定一个或多个属性，或一个组件prop**

---

## 32. Vue 项目实现页面跳转管理的技术是

A. Vue Router
B. Axios
C. Pinia
D. Vite

**答案：A. Vue Router**

---

## 33. Vue3官方推荐的状态管理库是

A. Vuex
B. Pinia
C. Redux
D. MobX

**答案：B. Pinia**

---

## 34. 下列不属于 Vue 组件分类的是

A. 页面组件
B. 后台服务组件
C. 公共复用组件
D. 局部私有组件

**答案：B. 后台服务组件**

---

## 35. Vue3中，使用 `<Transition>` 组件时，若想自定义过渡类名前缀，使用哪个prop

A. name
B. prefix
C. class-prefix
D. type

**答案：A. name**

---

## 36. 关于Vue3的slot（插槽），说法错误的是

A. 默认插槽可以使用 `<slot>` 标签占位
B. 具名插槽在Vue3中使用v-slot:name
C. 作用域插槽可以将子组件数据传递给父组件
D. 插槽内容无法访问子组件的数据

**答案：D. 插槽内容无法访问子组件的数据**

---

## 37. Vue 中发送网络请求主流工具是

A. Axios
B. jQuery
C. Vconsole
D. ECharts

**答案：A. Axios**

---

## 38. 监听数据变化使用的 API 是

A. watch
B. filter
C. route
D. store

**答案：A. watch**

---

## 39. 父组件向子组件传递数据使用的方式是

A. props 属性
B. pinia 仓库
C. axios 请求
D. 路由跳转

**答案：A. props 属性**

---

## 40. Vue3生命周期钩子中，在组件挂载完成后执行的钩子是

A. onBeforeMount
B. onMounted
C. onBeforeUpdate
D. onUpdated

**答案：B. onMounted**

---

## 41. Vue3 过渡动画无法实现的效果是

A. 元素入场淡出
B. 元素离场滑动
C. 直接修改服务器数据库
D. 切换渐变样式动画

**答案：C. 直接修改服务器数据库**

---

## 42. Pinia 中定义仓库核心函数是

A. defineStore
B. defineProps
C. defineEmits
D. defineRouter

**答案：A. defineStore**

---

## 43. Vue3过渡动画中，用于定义进入过渡开始状态的类名是

A. .v-enter
B. .v-enter-from
C. .v-enter-active
D. .v-leave-from

**答案：B. .v-enter-from**

---

## 44. 在Vue3中，创建应用实例的正确方法是

A. new Vue({})
B. createApp({})
C. Vue.createApp({})
D. createVue({})

**答案：B. createApp({})**

---

## 45. 路由占位展示页面组件的标签是

A. `<router-view>`
B. `<router-link>`
C. `<component>`
D. `<slot>`

**答案：A. `<router-view>`**
