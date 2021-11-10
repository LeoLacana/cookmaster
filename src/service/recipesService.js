const {
  registerRecipe,
  getRecipes,
  getRecipesById,
  updateRecipe } = require('../model/recipesModel');

const setRecipe = async (name, ingredients, preparation, _id) => {
  try {
    const recipe = await registerRecipe(name, ingredients, preparation, _id);
    return recipe;
  } catch (err) {
    return { message: 'Erro ao fazer o registro da Receita', error: err.message };
  }
};

const showRecipes = async () => {
  try {
    const recipes = await getRecipes();
    return recipes;
  } catch (err) {
    return { message: 'Erro ao mostrar as Receitas', error: err.message };
  }
};

const showRecipeById = async (id) => {
  const recipe = await getRecipesById(id);
  return recipe;
};

const modifyRecipe = async (name, ingredients, preparation, id) => {
  const recipe = await updateRecipe(name, ingredients, preparation, id);
  return recipe;
};

module.exports = {
  setRecipe,
  showRecipes,
  showRecipeById,
  modifyRecipe,
};