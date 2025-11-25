---
name: "Bug 报告"
description: "报告项目中的错误或问题"
title: "[BUG] "
labels: ["bug"]
body:
  - type: textarea
    id: description
    attributes:
      label: "问题描述"
      description: "清晰描述你遇到的问题"
      placeholder: "当我执行某个操作时，发生了意外的错误..."
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: "重现步骤"
      description: "详细的重现步骤"
      placeholder: "1. 访问某个页面... 2. 点击某个按钮... 3. 看到错误..."
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: "预期行为"
      description: "你期望的正确结果"
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: "实际行为"
      description: "实际发生的错误结果"
    validations:
      required: true
