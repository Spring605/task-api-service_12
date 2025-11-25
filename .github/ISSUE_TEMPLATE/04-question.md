---
name: "问题咨询"
description: "询问关于项目使用或开发的问题"
title: "[QUESTION] "
labels: ["question", "help wanted"]
assignees: ""
body:
  - type: markdown
    attributes:
      value: |
        ## 欢迎提问！
        我们会尽力解答你的问题。

  - type: textarea
    id: question
    attributes:
      label: "你的问题"
      description: "详细描述你的疑问"
      placeholder: "如何在本地环境中配置数据库连接？"
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: "问题背景"
      description: "什么情况下遇到这个问题？"
      placeholder: "我在尝试部署项目到服务器时，不知道如何配置生产环境的数据库"

  - type: textarea
    id: tried
    attributes:
      label: "已尝试的方案"
      description: "你已经尝试过哪些解决方法？"
      placeholder: |
        - 查看了 README.md 的部署章节
        - 搜索了现有的 Issue
        - 尝试了默认的 MongoDB 配置

  - type: textarea
    id: environment
    attributes:
      label: "相关环境"
      description: "与问题相关的环境信息"
      placeholder: |
        - 部署环境: Ubuntu 20.04
        - 数据库: MongoDB 5.0
        - Node.js 版本: 18.17.0

  - type: checkboxes
    id: search
    attributes:
      label: "前置检查"
      options:
        - label: "我已经搜索过现有的 Issue 和 Discussions"
          required: true
        - label: "我已经阅读过项目文档"
          required: true

  - type: textarea
    id: references
    attributes:
      label: "参考资料"
      description: "任何相关的文档链接或参考资料"
      placeholder: "https://github.com/username/task-api-service_12/blob/main/README.md"
---
