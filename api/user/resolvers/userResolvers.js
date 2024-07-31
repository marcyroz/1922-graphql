const userResolvers = {
  Query: {
    // context  //info
    users: (root, args, { dataSources }) => dataSources.UsersAPI.getUsers(),
    user: (root, {id}, { dataSources }) => dataSources.UsersAPI.getUserById(id)
  },
};

module.exports = userResolvers;
