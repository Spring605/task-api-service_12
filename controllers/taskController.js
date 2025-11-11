// 模拟任务数据（包含分类和状态字段）
let tasks = [
  { id: 1, title: "完成作业", description: "数学作业", completed: false, category: "学习" },
  { id: 2, title: "买水果", description: "苹果和香蕉", completed: true, category: "生活" },
  { id: 3, title: "健身", description: "跑步30分钟", completed: false, category: "健康" },
  { id: 4, title: "写报告", description: "课程期末报告", completed: false, category: "学习" }
];

// 1. 获取所有任务（原有功能）
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// 2. 新增：任务筛选功能（按状态和分类）
exports.filterTasks = (req, res) => {
  const { completed, category } = req.query; // 从URL参数获取筛选条件
  let filteredTasks = [...tasks]; // 复制原数组，避免修改源数据

  // 按完成状态筛选（completed参数为"true"或"false"）
  if (completed !== undefined) {
    filteredTasks = filteredTasks.filter(
      task => task.completed === (completed === "true")
    );
  }

  // 按分类筛选（category参数为具体分类，如"学习"）
  if (category) {
    filteredTasks = filteredTasks.filter(
      task => task.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json({
    count: filteredTasks.length,
    tasks: filteredTasks
  });
};

// 3. 以下为原有功能（保持不变，确保完整可运行）
// 创建任务
exports.createTask = (req, res) => {
  const { title, description, category = "默认" } = req.body;
  if (!title) {
    return res.status(400).json({ message: "任务标题不能为空" });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || "",
    completed: false,
    category
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// 获取单个任务
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: "任务不存在" });
  }
  res.json(task);
};

// 更新任务
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: "任务不存在" });
  }
  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.completed = req.body.completed ?? task.completed;
  task.category = req.body.category || task.category;
  res.json(task);
};

// 删除任务
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "任务不存在" });
  }
  tasks.splice(index, 1);
  res.json({ message: "任务已删除" });
};