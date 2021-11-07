const app = require('./app');

const validateJWT = require('./auth/validateJWT');

const {
  registerUsers,
  getToken } = require('../controller/usersController');

const {
  registerRecipe,
  getRecipes } = require('../controller/recipesController');

const {
  validationName,
  validationEmail,
  validationPassword,
  validationEmailExist,
  loginValidation } = require('../middleware/usersMiddleware');

const {
  validationIngredients,
  validationPreparation } = require('../middleware/recipesMiddleware');

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
  loginValidation,
  getToken);

app.post('/recipes',
  validationName,
  validationIngredients,
  validationPreparation,
  validateJWT,
  registerRecipe);

app.get('/recipes',
  getRecipes);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
