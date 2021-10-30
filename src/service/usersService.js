const { registerUsers, getUsers } = require('../model/usersModel');

const setRegister = async (name, email, password, role) => {
    const user = await registerUsers(name, email, password, role);
    return user;
};

const showUsers = async () => {
    const users = await getUsers();
    return users;
};

module.exports = {
    setRegister,
    showUsers,
};