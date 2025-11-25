---
name: "功能请求"
description: "建议新的功能或改进现有功能"
title: "[FEATURE] "
labels: ["enhancement"]
body:
  - type: textarea
    id: description
    attributes:
      label: "功能描述"
      description: "清晰描述你希望添加的功能"
    validations:
      required: true

  - type: textarea
    id: problem
    attributes:
      label: "问题背景"
      description: "这个功能解决什么实际问题？"
    validations:
      required: true

  - type: textarea
    id: solution
    attributes:
      label: "建议方案"
      description: "你期望的实现方式"
    validations:
      required: true
