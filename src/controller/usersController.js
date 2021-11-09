const jwt = require('jsonwebtoken');

const {
  setRegister,
  showUsers } = require('../service/usersService');

const secret = 'turma11';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const registerUsers = async (req, res) => {
  const { name, email, password, role = 'user' } = req.body;
  const user = await setRegister(name, email, password, role);
  return res.status(201).json({ user });
};

const generateToken = async (req, res) => {
  const { email } = req.body;

  const userData = await showUsers();
  const user = userData.find((thisUser) => thisUser.email === email);

  const { _id, name, role } = user;
  const newUserData = { _id, name, email, role };
  console.log(_id, name, email, role);

  const token = jwt.sign({ data: newUserData }, secret, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = {
  registerUsers,
  generateToken,
};