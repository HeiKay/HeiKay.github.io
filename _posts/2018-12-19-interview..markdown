---
layout: post
title: 面试题记录
date: Thu Dec 20 2018 01:24:52 GMT+0800
description: 面试题部分记录
img: http://wx2.sinaimg.cn/large/6dc324acly1fyd3yke9jej21tu0u0b29.jpg
tags: [面试]
author: HeiKay
---

### 前言

参加过的一些面试中，我觉得比较有记录意义的一些问题及相应的个人思考。
绝大部分
顺便结合一下自己的读书笔记。

---

**___javascript 与数据类型**

老生常谈，面试常有的基础问题
基本数据类型
* String
* Number
* Boolean
* Null
* Undefined

整理后的知识
```
以上五种应该叫常用基本数据类型

JavaScript 的数据类型分为两类：原始类型和对象类型

Number, String, Boolean 是原始类型
还有两个特殊的原始值：null 和 undefined
除此之外的就是对象类型的了

* Object
* Global -> 对象是属性的集合，以“ 名/值对 ”构成，其中有特殊的对象--全局对象
* Array -> 普通对象本是无序集合，JavaScript 同样定义了一种特殊对象--数组（array）,并提供了该对象专用语法
* function -> 具有与它-相关联的可执行代码-的对象，与数组一样有专用语法
* 以上两种可以看成对象类型的子类型，除此之外，JavaScript 语言核心还定义了其他三种有用的类
  日期（Date），正则（RegExp），错误（Error）

学问很多...
```

**___异步编程**

**___事件委托**

**___客户端存储**

**___用户行为**

**___如何防止频繁请求**

**___文档加载**

**___同源策略**

**___a( x, y ) == a( x )( y )**