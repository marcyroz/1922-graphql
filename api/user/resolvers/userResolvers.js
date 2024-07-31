const userResolvers = {
  Query: {
    // context  //info
    users: (root, args, { dataSources }) => dataSources.UsersAPI.getUsers(),
  },
};

module.exports = userResolvers;
