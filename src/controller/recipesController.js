const {
  setRecipe,
  showRecipes,
  showRecipeById } = require('../service/recipesService');

const registerRecipe = async (req, res) => {
  const { _id } = req.user;
  const { name, ingredients, preparation } = req.body;

  const recipeInserted = await setRecipe(name, ingredients, preparation, _id);
  const recipe = {
    name,
    ingredients,
    preparation,
    userId: _id,
    _id: recipeInserted.insertedId,
  };

  return res.status(201).json({ recipe });
};

const getRecipes = async (req, res) => {
  const recipes = await showRecipes();
  return res.status(200).json(recipes);
};

const getRecipesById = async (req, res) => {
  const { id } = req.params;
  const recipe = await showRecipeById(id);
  return res.status(200).json(recipe);
};

module.exports = {
  registerRecipe,
  getRecipes,
  getRecipesById,
};