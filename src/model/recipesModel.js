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

module.exports = {
    registerRecipe,
    getRecipes,
    getRecipesById,
};