const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// 原有：获取所有任务
router.get('/', taskController.getAllTasks);

// 新增：任务筛选接口（支持查询参数）
router.get('/filter', taskController.filterTasks);

// 原有：创建任务
router.post('/', taskController.createTask);

// 原有：获取单个任务
router.get('/:id', taskController.getTaskById);

// 原有：更新任务
router.put('/:id', taskController.updateTask);

// 原有：删除任务
router.delete('/:id', taskController.deleteTask);

module.exports = router;