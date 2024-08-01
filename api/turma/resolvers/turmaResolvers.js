const { GraphQLScalarType } = require("graphql");

const turmaResolvers = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string de data e hora no formato ISO-8601",
    serialize: (value) => new Date(value).toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value).toISOString(),
  }),

  Query: {
    turmas: (_, __, { dataSources }) => dataSources.TurmasAPI.getTurmas(),
    turma: (_, { id }, { dataSources }) => dataSources.TurmasAPI.getTurma(id),
  },
  Mutation: {
    incluiTurma: (_, { turma }, { dataSources }) => dataSources.TurmasAPI.incluiTurma(turma),
    atualizaTurma: (_, novosDados, { dataSources }) => dataSources.TurmasAPI.atualizaTurma(novosDados),
    deletaTurma: (_, { id }, { dataSources }) => dataSources.TurmasAPI.deletaTurma(id),
  },
};

module.exports = turmaResolvers;
