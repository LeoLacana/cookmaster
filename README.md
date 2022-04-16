# Projeto Cookmaster

Desenvolvido app utilizando a arquitetura MSC!

Neste novo projeto feito o cadastro e login de pessoas usuárias, onde apenas essas pessoas poderão acessar, modificar e deletar as receitas que cadastrou.

Desenvolvido todas as camadas da aplicação (Models, Service e Controllers).

Através dessa aplicação, foi possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜).

Para ser possível realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) foi feito uma autenticação. Além disso, as pessoas usuárias devem poder ser clientes ou administradores. Pessoas clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já uma pessoa administradora pode disparar qualquer ação em qualquer receita.

A autenticação foi feita via `JWT`.

Foi possível adicionar uma imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

---

# Habilidades Utilizadas

- Gerar tokens a partir de informações como login e senha;

- Autenticar rotas do Express, usando o token JWT;

- Fazer upload de arquivos em APIs REST;

- Salvar arquivos no servidor através de uma API REST;

- Consultar arquivos do servidor através de uma api REST.

# Como Rodar o Projeto
  ```bash
npm install
npm run dev

EndPoints

http://localhost:3000/users

http://localhost:3000/login

http://localhost:3000/recipes

http://localhost:3000/recipes:id

http://localhost:3000/recipes:id/image
```