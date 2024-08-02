const userSchema = require("./schema/user.graphql");
const userResolvers = require("./resolvers/userResolvers");
const UserAPI = require("./datasource/user");
const UsersAPI = require("./datasource/user");

module.exports = {
  userSchema,
  userResolvers,
  UsersAPI,
};
