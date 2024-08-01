const turmaResolvers = {
  Query: {
    turmas: (_, __, { dataSources }) => dataSources.TurmasAPI.getTurmas(),
  },
};

module.exports = turmaResolvers;
