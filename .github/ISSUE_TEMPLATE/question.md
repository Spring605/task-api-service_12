---
name: "问题咨询"
description: "询问关于项目使用或开发的问题"
title: "[QUESTION] "
labels: ["question"]
body:
  - type: textarea
    id: question
    attributes:
      label: "你的问题"
      description: "详细描述你的疑问"
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: "问题背景"
      description: "什么情况下遇到这个问题？"
    validations:
      required: true

  - type: textarea
    id: tried
    attributes:
      label: "已尝试的方案"
      description: "你已经尝试过哪些解决方法？"
