const { registerUsers, getUsers, getUser } = require('../model/usersModel');

const setRegister = async (name, email, password, role) => {
  const user = await registerUsers(name, email, password, role);
  return user;
};

const showUsers = async () => {
  const users = await getUsers();
  return users;
};

const showUser = async (name) => {
  const user = await getUser(name);
  return user;
};

module.exports = {
  setRegister,
  showUsers,
  showUser,
};