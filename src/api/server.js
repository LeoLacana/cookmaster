const multer = require('multer');
const app = require('./app');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src/uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer({ storage });

const validateJWT = require('./auth/validateJWT');

const {
  registerUsers,
  generateToken } = require('../controller/usersController');

const {
  registerRecipe,
  getRecipes,
  getRecipesById,
  updateRecipe,
  deleteRecipe,
  inserImageRecipe } = require('../controller/recipesController');

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
  validationAuth,
   } = require('../middleware/recipesMiddleware');

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

app.delete('/recipes/:id',
  validationAuth,
  validateJWT,
  // validateAuthUser,
  deleteRecipe);

app.put('/recipes/:id/image',
  upload.single('image'),
  validationAuth,
  validateJWT,
  inserImageRecipe);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
