const { ObjectId } = require('mongodb');
const connection = require('./connection');

async function registerRecipe(name, ingredients, preparation, _id) {
  const db = await connection();
  const recipe = await db.collection('recipes').insertOne({
    name,
    ingredients,
    preparation,
    userId: _id,
  });
  return recipe;
}

async function getRecipes() {
  const db = await connection();
  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
}

async function getRecipesById(id) {
  const db = await connection();
  const recipe = await db.collection('recipes').findOne(ObjectId(id));
  if (!recipe) return null;
  return recipe;
}

async function updateRecipe(name, ingredients, preparation, id) {
  try {
    const db = await connection();
    await db.collection('recipes').updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name,
          ingredients,
          preparation,
        },
      },
    );
    const recipe = await getRecipesById(id);
    return recipe;
  } catch (err) {
    return { message: 'Erro ao atualizar a receita.' };
  }
}

async function deleteRecipe(id) {
  const db = await connection();
  await db.collection('recipes').deleteOne(ObjectId(id));
}

async function insertImageRecipe(id, infoUser, image) {
  const db = await connection();
  const { _id, role } = infoUser;
  const recipeBefore = await getRecipesById(id);
  console.log(_id === recipeBefore.userId, role === 'admin');
  if (_id.toString() === recipeBefore.userId.toString() || role === 'admin') {
    await db.collection('recipes').updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          image,
        },
      },
    );
    const recipeAfter = await getRecipesById(id);
    return recipeAfter;
  }
  return 'Opa';
}

module.exports = {
  registerRecipe,
  getRecipes,
  getRecipesById,
  updateRecipe,
  deleteRecipe,
  insertImageRecipe,
};