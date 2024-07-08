module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "comment",
    {
      title: {
        type: DataTypes.STRING(200),
        primaryKey: true,
      },
      date: { type: DataTypes.DATE, primaryKey: true },
      description: { type: DataTypes.STRING(400), allowNull: false },
    },
    {
      timestamps: false,
    }
  );
