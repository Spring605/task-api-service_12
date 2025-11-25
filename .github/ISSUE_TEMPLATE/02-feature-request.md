---
name: "功能请求"
description: "建议新的功能或改进现有功能"
title: "[FEATURE] "
labels: ["enhancement", "feature-request"]
assignees: ""
body:
  - type: markdown
    attributes:
      value: |
        ## 欢迎提出功能建议！
        你的想法会让项目变得更好。

  - type: textarea
    id: description
    attributes:
      label: "功能描述"
      description: "清晰描述你希望添加的功能"
      placeholder: "我希望添加任务分类功能，让用户可以按类别组织任务"
    validations:
      required: true

  - type: textarea
    id: problem
    attributes:
      label: "问题背景"
      description: "这个功能解决什么实际问题或满足什么需求？"
      placeholder: "目前所有任务都混在一起，难以管理和查找特定类型的任务"

  - type: textarea
    id: solution
    attributes:
      label: "建议方案"
      description: "你期望的实现方式"
      placeholder: |
        建议在任务模型中添加 category 字段
        新增 GET /api/categories 端点管理分类
        支持按分类筛选任务

  - type: textarea
    id: alternatives
    attributes:
      label: "替代方案"
      description: "是否有其他实现思路？"
      placeholder: "或者可以使用标签系统代替固定分类"

  - type: dropdown
    id: priority
    attributes:
      label: "优先级"
      description: "这个功能的重要程度"
      options:
        - 高（核心功能）
        - 中（重要改进）
        - 低（锦上添花）
    validations:
      required: true

  - type: checkboxes
    id: involvement
    attributes:
      label: "参与意愿"
      description: "你是否愿意参与这个功能的开发？"
      options:
        - label: "我愿意参与这个功能的开发和测试"
          required: false
        - label: "我可以提供详细的需求说明"
          required: false

  - type: textarea
    id: acceptance
    attributes:
      label: "验收标准"
      description: "功能完成的标准是什么？"
      placeholder: |
        - [ ] 可以创建、编辑、删除分类
        - [ ] 任务可以分配分类
        - [ ] 支持按分类筛选任务
        - [ ] 相关 API 文档完善
---
