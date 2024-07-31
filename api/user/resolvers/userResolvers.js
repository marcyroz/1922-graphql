const arrayUsers = [
  {
    nome: "ana",
    ativo: true,
  },
  {
    nome: "marcia",
    ativo: false,
  },
];

const userResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[0]
  },
};

module.exports = userResolvers;
