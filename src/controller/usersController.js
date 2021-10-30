const {
    setRegister } = require('../service/usersService');

const registerUsers = async (req, res) => {
    const { name, email, password, role = 'user' } = req.body;
    const user = await setRegister(name, email, password, role);
    return res.status(201).json({ user });
};

module.exports = {
    registerUsers,
};