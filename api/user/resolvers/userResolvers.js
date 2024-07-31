const userResolvers = {
  Query: {
    // context  //info
    users: (root, args, { dataSources }) => dataSources.UsersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.UsersAPI.getUserById(id)
},
  Mutation: {
    adicionaUser: (root, user, { dataSources }) => dataSources.UsersAPI.adicionaUser(user),
  },
};

module.exports = userResolvers;
