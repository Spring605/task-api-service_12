const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/taskapi',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB连接成功: ${conn.connection.host}`);
  } catch (error) {
    console.error('数据库连接错误:', error);
    process.exit(1);
  }
};

module.exports = connectDB;