const { Sequelize } = require("sequelize");
const db = {
  Op: Sequelize.Op,
};

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "reply",
    {
      title: {
        type: DataTypes.STRING(200),
        primaryKey: true,
      },
      reply_date: { type: DataTypes.DATE, primaryKey: true },
      description: { type: DataTypes.STRING(400), allowNull: false },
    },
    {
      timestamps: false,
    }
  );
