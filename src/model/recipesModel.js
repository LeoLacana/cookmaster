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
    console.log(recipes);
    return recipes;
}

module.exports = {
    registerRecipe,
    getRecipes,
};