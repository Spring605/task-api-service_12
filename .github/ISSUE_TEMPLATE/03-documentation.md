---
name: "文档改进"
description: "报告文档问题或建议文档改进"
title: "[DOCS] "
labels: ["documentation", "good first issue"]
assignees: ""
body:
  - type: markdown
    attributes:
      value: |
        文档是项目的重要组成部分，感谢你帮助改进项目文档！

  - type: textarea
    id: description
    attributes:
      label: "文档问题"
      description: "描述文档的缺失、错误或改进建议"
      placeholder: "API 响应格式的文档不够详细，缺少错误码说明"
    validations:
      required: true

  - type: textarea
    id: location
    attributes:
      label: "相关位置"
      description: "问题所在的文档文件或章节"
      placeholder: "文件: README.md, 章节: API 文档部分"

  - type: textarea
    id: current
    attributes:
      label: "当前内容"
      description: "当前的文档内容（如果有）"
      placeholder: "目前只简单提到了错误处理，但没有具体示例"

  - type: textarea
    id: expected
    attributes:
      label: "期望内容"
      description: "你期望的文档内容"
      placeholder: "希望包含完整的错误码列表和错误响应示例"

  - type: dropdown
    id: type
    attributes:
      label: "问题类型"
      options:
        - 内容缺失
        - 内容错误
        - 格式问题
        - 其他
    validations:
      required: true
---
