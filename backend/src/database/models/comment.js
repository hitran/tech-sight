module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "comment",
    {
      commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(200),
      },
      date: { type: DataTypes.DATE, allowNull: false },
      description: { type: DataTypes.STRING(400), allowNull: false },
    },
    {
      timestamps: false,
    }
  );
