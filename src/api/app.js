const express = require('express');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send('Ola');
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;