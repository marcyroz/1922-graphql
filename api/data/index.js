const { ApolloServer } = require("apollo-server");

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
const server = new ApolloServer({ typeDefs, resolvers });
