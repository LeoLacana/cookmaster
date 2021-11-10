const app = require('./app');

const validateJWT = require('./auth/validateJWT');

const {
  registerUsers,
  generateToken } = require('../controller/usersController');

const {
  registerRecipe,
  getRecipes,
  getRecipesById,
  updateRecipe } = require('../controller/recipesController');

const {
  validationName,
  validationEmail,
  validationPassword,
  validationEmailExist,
  loginValidation } = require('../middleware/usersMiddleware');

const {
  validationIngredients,
  validationPreparation,
  validationRecipeById,
  validationAuth } = require('../middleware/recipesMiddleware');

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
  generateToken);

app.post('/recipes',
  validateJWT,
  validationName,
  validationIngredients,
  validationPreparation,
  registerRecipe);

app.get('/recipes',
  getRecipes);

app.get('/recipes/:id',
  validationRecipeById,
  getRecipesById);

app.put('/recipes/:id',
  validationAuth,
  validateJWT,
  updateRecipe);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
