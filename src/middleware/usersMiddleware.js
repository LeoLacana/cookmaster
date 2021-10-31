const jwt = require('jsonwebtoken');
const { showUsers } = require('../service/usersService');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validationName = async (req, res, next) => {
  const { name } = req.body;
  if (!name
    ) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

const validationPassword = async (req, res, next) => {
  const { password, name } = req.body;
  if (!password) {
    if (!name) return res.status(401).json({ message: 'All fields must be filled' });
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validationEmail = async (req, res, next) => {
  const { email, name } = req.body;
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[com]+/i;

  if (!email || !emailRegex.test(email)) {
    if (!name) return res.status(401).json({ message: 'All fields must be filled' });
    
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validationEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const users = await showUsers();
  const emailExist = users.some((user) => user.email === email);
  if (emailExist) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  const users = await showUsers();
  const secret = password;
  const token = jwt.sign({ data: users.role }, secret, jwtConfig);
  const emailExist = users.find((user) => user.email === email);
  if (!emailExist || emailExist.password !== password) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }
  return res.status(200).json({ token });
};

module.exports = {
  validationName,
  validationPassword,
  validationEmail,
  validationEmailExist,
  loginValidation,
};