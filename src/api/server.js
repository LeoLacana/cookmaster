const {
  registerUsers } = require('../controller/usersController');

const {
  validationUsers,
  emailExistValidation } = require('../middleware/usersMiddleware');

const app = require('./app');

const PORT = 3000;

app.post('/users', validationUsers, emailExistValidation, registerUsers);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
