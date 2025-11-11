const express = require('express');
const router = express.Router();

// 模拟任务数据
let tasks = [];
let taskId = 1;

// 获取任务列表
router.get('/', (req, res) => {
  res.json(tasks);
});

// 创建任务
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const task = { id: taskId++, title, description, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// 获取单个任务
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) res.json(task);
  else res.status(404).json({ message: '任务不存在' });
});

// 更新任务
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: '任务不存在' });
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;
  res.json(task);
});

// 删除任务
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: '任务不存在' });
  tasks.splice(index, 1);
  res.json({ message: '任务已删除' });
});

module.exports = router;