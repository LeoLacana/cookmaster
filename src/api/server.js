const {
  registerUsers } = require('../controller/usersController');

const {
  validationName,
  validationEmail,
  validationPassword,
  validationEmailExist,
  loginValidation } = require('../middleware/usersMiddleware');

const app = require('./app');

const PORT = 3000;

app.post('/users',
  validationName,
  validationPassword,
  validationEmail,
  validationEmailExist,
  registerUsers);

app.post('/login',
  validationEmail,
  validationPassword,
  loginValidation);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
