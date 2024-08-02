//rodar api:
// npx json-server --watch api/data/dados.json

// O Schema é onde definimos o que pode ser feito no servidor graphql
// O resolver é o objeto onde implementamos esse esquema
// Cada campo do schema precisa ter seu próprio resolver

const { ApolloServer } = require("apollo-server");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const path = require("path");

const { userSchema, userResolvers, UsersAPI } = require("./user");
const { turmaSchema, turmaResolvers, TurmasAPI } = require("./turma");
const { matriculaSchema } = require("./matricula");

const dbConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, "./data/database.db"),
  },
};

const typeDefs = mergeTypeDefs([userSchema, turmaSchema, matriculaSchema]);
const resolvers = [userResolvers, turmaResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return { UsersAPI: new UsersAPI(), TurmasAPI: new TurmasAPI(dbConfig) };
  },
});

//Passando url, ele vai subir por padrão na porta 4000
server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});

// outra forma passando a porta diretamente
// server.listen(port: 4001).then(() => {
//   console.log(`Servidor rodando`);
// });
