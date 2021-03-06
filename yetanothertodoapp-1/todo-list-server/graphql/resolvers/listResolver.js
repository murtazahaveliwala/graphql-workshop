import models from '../../models';

export default {
  Query: {
    getAllTodoList: () => models.List.findAll(),
    getTodoList: (_, { id }, _ctx) => models.List.findByPk(id),
  },
  Mutation: {
    // args = { name: "something" }
    // List.create({ name: "asdasdd" })
    createTodoList: (_parent, args, _ctx) => {
      return models.List.create(args).then((list) => {
        return {
          success: true,
          list: list,
        }
      });
    },
    updateTodoList: (_, { id, name }, _ctx) => models.List.findByPk(id).then(list => list.update({ name })),
  }
};
