//rodar api:
// npx json-server --watch api/data/dados.json

// O Schema é onde definimos o que pode ser feito no servidor pgraphql
// O resolver é o objeto onde implementamos esse esquema
// Cada campo do schema precisa ter seu próprio resolver


const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");
const userResolvers = require("./user/resolvers/userResolvers");
const UsersAPI = require("./user/datasource/user");

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return { UsersAPI: new UsersAPI() };
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
