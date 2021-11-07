const validationIngredients = (req, res, next) => {
    const { ingredients } = req.body;
    if (!ingredients) {
        res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    next();
};

const validationPreparation = (req, res, next) => {
    const { preparation } = req.body;
    if (!preparation) {
        res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    next();
};

module.exports = {
    validationIngredients,
    validationPreparation,
};