const { GraphQLScalarType } = require("graphql");

//os resolvers servem basicamente para implementarmos tudo que existe no schema
const userResolvers = {
  RolesType: {
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO",
  },

  respostaCustom: {
    __resolveType(obj, context, info) {
      return false;
    },
  },

  //todos os tipos escalares do graphql tem essas prorpiedades internamente
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "String de data e hora no formato ISO-8601",
    //pega o dado da base de dados
    serialize: (value) => value.toISOString(),
    //pega o dado do input
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value),
  }),
  Query: {
    // context  //info
    users: (root, args, { dataSources }) => dataSources.UsersAPI.getUsers(),

    user: (root, { id }, { dataSources }) =>
      dataSources.UsersAPI.getUserById(id),
  },
  Mutation: {
    adicionaUser: async (root, { user }, { dataSources }) =>
      dataSources.UsersAPI.adicionaUser(user),

    atualizaUser: async (root, novosDados, { dataSources }) =>
      dataSources.UsersAPI.atualizaUser(novosDados),

    deletaUser: async (root, { id }, { dataSources }) =>
      dataSources.UsersAPI.deletaUser(id),
  },

  User: {
    matriculas: (parent,_, { dataSources }) => dataSources.MatriculasAPI.getMatriculasPorEstudante(parent.id)
  }
};

module.exports = userResolvers;
