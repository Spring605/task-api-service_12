# TaskFlow API - 12

**学号：2024131012**

一个基于 Node.js 和 Express 的现代化 RESTful API 任务管理系统

## 项目概述

TaskFlow API 是一个完整的任务管理后端服务，采用现代化的技术栈构建，提供稳定可靠的 RESTful API 接口。项目涵盖了任务管理系统的核心业务流程，包括用户管理、任务CRUD操作、数据验证、错误处理等完整功能。

## 核心特性

### 完整的任务管理流程
- **任务生命周期**：创建 → 更新 → 完成 → 删除
- **状态管理**：任务状态跟踪（待处理、进行中、已完成）
- **优先级控制**：多级优先级管理（低、中、高）
- **时间管理**：截止日期设置，创建时间记录

### 安全的用户系统
- **数据验证**：使用 Joi 进行请求参数验证
- **错误处理**：统一的错误处理机制和友好的错误信息
- **输入清理**：防止非法输入和注入攻击

### 智能任务管理
- **多维度筛选**：支持按状态、优先级进行条件筛选
- **分页查询**：支持分页参数控制返回数据量
- **组合查询**：支持多条件组合筛选任务

## 技术选型

### 后端技术栈
| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | 18.0+ | JavaScript 运行时环境 |
| Express.js | 4.18+ | Web 应用框架 |
| 内存存储 | - | 当前使用内存数据存储 |
| Joi | 17.0+ | 数据验证库 |

### 开发工具链
| 工具 | 用途 | 优势 |
|------|------|------|
| Visual Studio Code | 开发 IDE | 强大的代码提示和调试功能 |
| Postman | API 测试 | 接口调试，文档生成 |
| Git | 版本控制 | 代码管理，团队协作 |
| Nodemon | 开发工具 | 自动重启，提升开发效率 |

## 快速开始

### 环境要求
- Node.js: 18.0 或更高版本
- npm: 8.0 或更高版本

### 运行步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/task-api-service_12.git
   cd task-api-service_12
npm install
# 开发模式
npm run dev

# 生产模式
npm start

# 添加 API 文档

```powershell

## API 文档

### 基础端点
`GET /` - 项目首页（HTML文档）
`GET /health` - 服务健康检查
`GET /api` - API 文档概览（JSON格式）

### 任务管理接口
`GET /api/tasks` - 获取任务列表（支持筛选、分页）
`POST /api/tasks` - 创建新任务
`GET /api/tasks/:id` - 获取任务详情
`PUT /api/tasks/:id` - 更新任务
`DELETE /api/tasks/:id` - 删除任务

### 查询参数
`status` - 按状态筛选（pending, in-progress, completed）
`priority` - 按优先级筛选（low, medium, high）
`page` - 页码（默认: 1）
`limit` - 每页数量（默认: 10）

## 项目架构

task-api-service_12/
├── controllers/      # 控制器层
├── middleware/       # 中间件
├── routes/           # 路由层
├── tests/            # 测试文件
├── docs/             # 项目文档
├── .github/          # GitHub 配置
├── server.js         # 应用入口
├── package.json      # 项目配置
└── README.md         # 项目说明

## 项目状态

### 已完成功能
项目基础架构
RESTful API 设计
任务CRUD操作
数据验证和错误处理
健康检查接口
完整项目文档

### 规划中功能
用户认证系统（JWT）
数据库集成（MongoDB）
单元测试覆盖
前端管理界面

## 许可证

本项目基于 MIT 许可证 - 查看 LICENSE 文件了解详情。

## 作者

2024131012

如果这个项目对你有帮助，请给个 Star 支持！
