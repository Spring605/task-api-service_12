const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../middleware/validation');

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || 'fallback_secret',
    { expiresIn: '7d' }
  );
};

exports.register = async (req, res) => {
  try {
    // 数据验证
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    const { username, email, password } = req.body;

    // 检查用户是否已存在
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        error: '邮箱或用户名已存在'
      });
    }

    // 创建新用户
    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    // 生成token
    const token = generateToken(user._id);

    res.status(201).json({
      message: '用户注册成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      error: '注册失败，请重试'
    });
  }
};

exports.login = async (req, res) => {
  try {
    // 数据验证
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    const { email, password } = req.body;

    // 查找用户
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: '邮箱或密码错误'
      });
    }

    // 验证密码
    const isValidPassword = await user.correctPassword(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        error: '邮箱或密码错误'
      });
    }

    // 生成token
    const token = generateToken(user._id);

    res.json({
      message: '登录成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({
      error: '登录失败，请重试'
    });
  }
};