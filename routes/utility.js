const express = require('express');
const router = express.Router();

// 健康检查接口
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Task API Service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// 根路径首页
router.get('/', (req, res) => {
  res.send(`
    <h1>Task API Service - 12</h1>
    <p>基于 Node.js 和 Express 的 RESTful API 服务</p>
    <h2>API 端点</h2>
    <h3>认证接口</h3>
    <p>POST /api/auth/register - 用户注册</p>
    <p>POST /api/auth/login - 用户登录</p>
    <h3>任务接口</h3>
    <p>GET /api/tasks - 获取任务列表</p>
    <p>POST /api/tasks - 创建任务</p>
    <p>GET /api/tasks/:id - 获取任务详情</p>
    <p>PUT /api/tasks/:id - 更新任务</p>
    <p>DELETE /api/tasks/:id - 删除任务</p>
    <h3>工具接口</h3>
    <p>GET /health - 健康检查</p>
    <p>GET /api - API 文档（JSON）</p>
    <p>学号: 2024131012</p>
  `);
});

// API文档接口
router.get('/api', (req, res) => {
  res.json({
    message: 'Task API Service - 文档',
    studentId: '2024131012', // 替换为你的学号
    endpoints: {
      auth: {
        register: { method: 'POST', path: '/api/auth/register', description: '用户注册' },
        login: { method: 'POST', path: '/api/auth/login', description: '用户登录' }
      },
      tasks: {
        getAll: { method: 'GET', path: '/api/tasks', description: '获取任务列表' },
        create: { method: 'POST', path: '/api/tasks', description: '创建任务' },
        getOne: { method: 'GET', path: '/api/tasks/:id', description: '获取任务详情' },
        update: { method: 'PUT', path: '/api/tasks/:id', description: '更新任务' },
        delete: { method: 'DELETE', path: '/api/tasks/:id', description: '删除任务' }
      },
      utility: {
        health: { method: 'GET', path: '/health', description: '健康检查' },
        docs: { method: 'GET', path: '/api', description: 'API文档' }
      }
    }
  });
});

module.exports = router;