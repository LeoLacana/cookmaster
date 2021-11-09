const connection = require('./connection');

async function registerUsers(name, email, password, role) {
    const db = await connection();
    const user = await db.collection('users').insertOne({ name, email, password, role });
    return {
        name,
        email,
        role,
        _id: user.insertedId,
    };
}

async function getUsers() {
    const db = await connection();
    const users = await db.collection('users').find().toArray();
    return users;
}

async function getUser(name) {
    const db = await connection();
    const user = await db.collection('users').findOne({ name });
    console.log(user);
    return user;
}

module.exports = {
    registerUsers,
    getUsers,
    getUser,
};