const userResolvers = {
  Query: {
    // context  //info
    users: (root, args, { dataSources }) => dataSources.UsersAPI.getUsers(),

    user: (root, { id }, { dataSources }) => dataSources.UsersAPI.getUserById(id)
},
  Mutation: {
    adicionaUser: async (root, user, { dataSources }) => dataSources.UsersAPI.adicionaUser(user),

    atualizaUser: async (root, novosDados, { dataSources }) => dataSources.UsersAPI.atualizaUser(novosDados),

    deletaUser: async (root, {id}, {dataSources}) => dataSources.UsersAPI.deletaUser(id)

    }
  };

module.exports = userResolvers;
