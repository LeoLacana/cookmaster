const { showUsers } = require('../service/usersService');

const validationUsers = async (req, res, next) => {
  const { name, email, password } = req.body;
  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[com]+/i;
  if (!name
    || !email
    || !password
    || !emailRegex.test(email)
    ) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

const emailExistValidation = async (req, res, next) => {
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

module.exports = {
  validationUsers,
  emailExistValidation,
};