const express = require('express');
const router = express.Router();

// 模拟用户数据（实际项目用数据库）
let users = [];

// 注册接口
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '用户名和密码不能为空' });
  }
  users.push({ username, password });
  res.status(201).json({ message: '注册成功' });
});

// 登录接口
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: '登录成功', token: 'fake-token-123' }); // 实际项目用JWT
  } else {
    res.status(401).json({ message: '用户名或密码错误' });
  }
});

module.exports = router;