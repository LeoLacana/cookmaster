const {
  registerRecipe,
  getRecipes,
  getRecipesById,
  updateRecipe,
  deleteRecipe,
  insertImageRecipe } = require('../model/recipesModel');

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

const removeRecipe = async (id) => {
  try {
    await deleteRecipe(id);
  } catch (err) {
    return { message: 'Erro ao remover receita' };
  }
};

const setImageRecipe = async (id, infoUser, image) => {
  try {
    const recipeAfter = await insertImageRecipe(id, infoUser, image);
    return recipeAfter;
  } catch (err) {
    return { message: 'Erro ao adicionar imagem' };
  }
};

module.exports = {
  setRecipe,
  showRecipes,
  showRecipeById,
  modifyRecipe,
  removeRecipe,
  setImageRecipe,
};