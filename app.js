const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json()); // 解析JSON请求体

// 路由引入
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const utilityRoutes = require('./routes/utility');

// 路由挂载
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/', utilityRoutes); // 健康检查和API文档路由

// 启动服务
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});