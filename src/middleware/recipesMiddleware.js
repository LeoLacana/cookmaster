const { ObjectId } = require('mongodb');

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

module.exports = {
    validationIngredients,
    validationPreparation,
    validationRecipeById,
};