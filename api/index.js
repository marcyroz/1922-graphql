//rodar api:
// npx json-server --watch api/data/dados.json

const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");

const users = [
  {
    nome: "ana",
    ativo: true,
  },
  {
    nome: "marcia",
    ativo: false,
  },
];

const typeDefs = [userSchema];
const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });

//Passando url, ele vai subir por padrão na porta 4000
server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});

// outra forma passando a porta diretamente
// server.listen(port: 4001).then(() => {
//   console.log(`Servidor rodando`);
// });
