const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const service = require('../service/recipesService');

const validationIngredients = (req, res, next) => {
  const { ingredients } = req.body;
  if (!ingredients) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validationPreparation = (req, res, next) => {
  const { preparation } = req.body;
  if (!preparation) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const validationRecipeById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'recipe not found' });
  }
  next();
};

const validationAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  next();
};

const updateRecipeByAdmin = async (req, res, next) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const token = req.headers.authorization;
  const secret = 'turma11';
  const decode = jwt.verify(token, secret);
  console.log(decode);
  if (decode.data.role === 'admin') {
    await service.modifyRecipe(name, ingredients, preparation, id);
    const recipeModify = await service.showRecipeById(id);
    return res.status(200).json(recipeModify);
  }
  next();
};

const validateAuthUser = async (req, res, next) => {
  const { id } = req.params;
  const { _id, role } = req.user;
  const recipe = await service.showRecipeById(id);
  if (role === 'admin' || _id === recipe.userId) {
    res.status(404).json({ message: 'Sem autorizaão para remover' });
  }
  next();
};

module.exports = {
  validationIngredients,
  validationPreparation,
  validationRecipeById,
  validationAuth,
  updateRecipeByAdmin,
  validateAuthUser,
};