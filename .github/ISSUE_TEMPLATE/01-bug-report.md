---
name: "Bug 报告"
description: "报告项目中的错误或问题"
title: "[BUG] "
labels: ["bug", "triage"]
assignees: ""
body:
  - type: markdown
    attributes:
      value: |
        感谢报告 Bug！请详细描述问题，帮助我们改进项目质量。

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
      placeholder: |
        1. 访问 '/api/tasks'
        2. 发送 POST 请求
        3. 看到 500 错误
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: "预期行为"
      description: "你期望的正确结果"
      placeholder: "应该成功创建任务并返回 201 状态码"

  - type: textarea
    id: actual
    attributes:
      label: "实际行为"
      description: "实际发生的错误结果"
      placeholder: "返回了 500 内部服务器错误"

  - type: textarea
    id: environment
    attributes:
      label: "环境信息"
      description: "你的开发环境配置"
      placeholder: |
        - 操作系统: Windows 11
        - Node.js 版本: 18.17.0
        - 浏览器: Chrome 120

  - type: textarea
    id: logs
    attributes:
      label: "错误日志/截图"
      description: "如果有错误日志或截图，请在此处提供"

  - type: checkboxes
    id: terms
    attributes:
      label: "确认项"
      options:
        - label: "我已经搜索过现有的 Issue，没有找到相同问题"
          required: true
---
