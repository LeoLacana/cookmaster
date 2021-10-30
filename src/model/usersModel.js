const connection = require('./connection');

const registerUsers = async (name, email, password, role) => {
    const db = await connection();
    const user = await db.collection('users').insertOne({ name, email, password, role });
    return {
        name,
        email,
        role,
        _id: user.insertedId,
    };
};

const getUsers = async () => {
    const db = await connection();
    const users = await db.collection('users').find().toArray();
    return users;
};

module.exports = {
    registerUsers,
    getUsers,
};