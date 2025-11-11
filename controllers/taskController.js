const Task = require('../models/Task');
const { taskValidation } = require('../middleware/validation');

exports.getAllTasks = async (req, res) => {
  try {
    const { status, priority, page = 1, limit = 10 } = req.query;

    const filter = { createdBy: req.user._id };
    if (status) filter.status = status;
    if (priority) filter.priority = priority;

    const tasks = await Task.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Task.countDocuments(filter);

    res.json({
      tasks,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({
      error: '获取任务失败'
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!task) {
      return res.status(404).json({
        error: '任务不存在'
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      error: '获取任务失败'
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    // 数据验证
    const { error } = taskValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    const task = new Task({
      ...req.body,
      createdBy: req.user._id
    });

    await task.save();

    res.status(201).json({
      message: '任务创建成功',
      task
    });
  } catch (error) {
    res.status(500).json({
      error: '创建任务失败'
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { error } = taskValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id
      },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        error: '任务不存在'
      });
    }

    res.json({
      message: '任务更新成功',
      task
    });
  } catch (error) {
    res.status(500).json({
      error: '更新任务失败'
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });

    if (!task) {
      return res.status(404).json({
        error: '任务不存在'
      });
    }

    res.json({
      message: '任务删除成功'
    });
  } catch (error) {
    res.status(500).json({
      error: '删除任务失败'
    });
  }
};