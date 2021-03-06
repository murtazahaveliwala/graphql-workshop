module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Task description is required.',
        },
      },
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {});

  Task.associate = (models) => {
    Task.belongsTo(models.List);
  };

  return Task;
};
