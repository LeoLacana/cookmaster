const jwt = require('jsonwebtoken');
const model = require('../../model/usersModel');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'secretdesafioebytr';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decode = jwt.verify(token, secret, jwtConfig);

    const user = await model.getUser(decode.data.name);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};