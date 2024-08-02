const { GraphQLScalarType } = require("graphql");

const matriculaResolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string de data e hora no formato ISO-8601",
    serialize: (value) => new Date(value).toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value).toISOString(),
  }),
  Mutation: {
    matricularEstudante: (_, ids, { dataSources }) =>
      dataSources.MatriculasAPI.matricularEstudante(ids),
  },

  Matricula: {
    estudante: (parent, _, { dataSources }) =>
      dataSources.UsersAPI.getUserById(parent.estudante_id),
    turma: (parent, _, { dataSources }) =>
      dataSources.TurmasAPI.getTurma(parent.turma_id),
  },
};

module.exports = matriculaResolvers;
