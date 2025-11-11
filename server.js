const express = require("express");
require("dotenv").config();

const app = express();

// 中间件
app.use(express.json());

// 美化首页 - 返回 HTML 页面
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Task API Service - 12</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
            h1 { color: #333; }
            .endpoint { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
            code { background: #eee; padding: 2px 5px; }
        </style>
    </head>
    <body>
        <h1>🚀 Task API Service - 12</h1>
        <p>基于 Node.js 和 Express 的 RESTful API 服务</p>
        
        <h2>📚 API 端点</h2>
        
        <div class="endpoint">
            <h3>认证接口</h3>
            <p><code>POST /api/auth/register</code> - 用户注册</p>
            <p><code>POST /api/auth/login</code> - 用户登录</p>
        </div>
        
        <div class="endpoint">
            <h3>任务接口</h3>
            <p><code>GET /api/tasks</code> - 获取任务列表</p>
            <p><code>POST /api/tasks</code> - 创建任务</p>
            <p><code>GET /api/tasks/:id</code> - 获取任务详情</p>
            <p><code>PUT /api/tasks/:id</code> - 更新任务</p>
            <p><code>DELETE /api/tasks/:id</code> - 删除任务</p>
        </div>
        
        <div class="endpoint">
            <h3>工具接口</h3>
            <p><code>GET /health</code> - 健康检查</p>
            <p><code>GET /api</code> - API 文档 (JSON)</p>
        </div>
        
        <p><strong>学号:</strong> 2024131012</p>
    </body>
    </html>
  `);
});

// 健康检查端点
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK",
    service: "Task API Service",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

// API 文档端点 (JSON 格式)
app.get("/api", (req, res) => {
  res.json({
    message: "Task API Service - 文档",
    studentId: "2024131012",
    endpoints: {
      auth: {
        register: { method: "POST", path: "/api/auth/register", description: "用户注册" },
        login: { method: "POST", path: "/api/auth/login", description: "用户登录" }
      },
      tasks: {
        getAll: { method: "GET", path: "/api/tasks", description: "获取任务列表" },
        create: { method: "POST", path: "/api/tasks", description: "创建任务" },
        getOne: { method: "GET", path: "/api/tasks/:id", description: "获取任务详情" },
        update: { method: "PUT", path: "/api/tasks/:id", description: "更新任务" },
        delete: { method: "DELETE", path: "/api/tasks/:id", description: "删除任务" }
      },
      utility: {
        health: { method: "GET", path: "/health", description: "健康检查" },
        docs: { method: "GET", path: "/api", description: "API文档" }
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 服务器运行在端口 ${PORT}`);
  console.log(`📍 首页: http://localhost:${PORT}`);
  console.log(`📍 健康检查: http://localhost:${PORT}/health`);
  console.log(`📍 API文档: http://localhost:${PORT}/api`);
});
