const express = require('express');
const auth = require('../middleware/auth');
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const router = express.Router();

// 所有任务路由都需要认证
router.use(auth);

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;