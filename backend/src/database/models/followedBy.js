module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "follower",
    {
      date: { type: DataTypes.DATE, primaryKey: true },
    },
    {
      timestamps: false,
    }
  );
