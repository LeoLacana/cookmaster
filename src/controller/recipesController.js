const { setRecipe, showRecipes } = require('../service/recipesService');

const registerRecipe = (req, res) => {
  const { _id } = req.user;
  const { name, ingredients, preparation } = req.body;

  const recipeInserted = setRecipe(name, ingredients, preparation, _id);
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

module.exports = {
  registerRecipe,
  getRecipes,
};