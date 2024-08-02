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
    incluiTurma: (_, { turma }, { dataSources }) =>
      dataSources.TurmasAPI.incluiTurma(turma),
    atualizaTurma: (_, novosDados, { dataSources }) =>
      dataSources.TurmasAPI.atualizaTurma(novosDados),
    deletaTurma: (_, { id }, { dataSources }) =>
      dataSources.TurmasAPI.deletaTurma(id),
  },
  // se adicionamos uma propriedade no resolver com o mesmo nome de um tipo, podemos assumir que cada uma das funções chamadas ira se relacionar com cada um dos campos do tipo turma
  Turma: {
    //parent se refere ao valor retornado do resolver ao parent desse campo (o parent de matricula é turma)
    matriculas: (parent, _, { dataSources }) =>
      dataSources.MatriculasAPI.getMatriculasPorTurma(parent.id),
    docente: (parent, _, { dataSources }) =>
      dataSources.UsersAPI.getUserById(parent.docente_id),
  },
};

module.exports = turmaResolvers;
