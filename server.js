const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "学习Node.js", status: "completed", priority: "high" },
  { id: 2, title: "编写API文档", status: "in-progress", priority: "medium" },
  { id: 3, title: "测试接口", status: "pending", priority: "high" },
  { id: 4, title: "部署项目", status: "pending", priority: "low" }
];

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Task API Service",
    version: "1.0.0",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/tasks", (req, res) => {
  let filteredTasks = [...tasks];
  const { status, priority } = req.query;
  
  if (status) {
    filteredTasks = filteredTasks.filter(task => task.status === status);
  }
  
  if (priority) {
    filteredTasks = filteredTasks.filter(task => task.priority === priority);
  }
  
  res.json({
    message: "获取任务成功",
    total: filteredTasks.length,
    filters: { status, priority },
    tasks: filteredTasks
  });
});

app.post("/api/tasks", (req, res) => {
  const { title, description, status, priority } = req.body;
  
  const newTask = {
    id: tasks.length + 1,
    title,
    description: description || "",
    status: status || "pending",
    priority: priority || "medium",
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  
  res.status(201).json({
    message: "任务创建成功",
    task: newTask
  });
});

app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: "任务不存在" });
  }
  
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  
  res.json({
    message: "任务更新成功", 
    task: tasks[taskIndex]
  });
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({ error: "任务不存在" });
  }
  
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  
  res.json({
    message: "任务删除成功",
    task: deletedTask
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("服务器运行在端口 3000");
});
