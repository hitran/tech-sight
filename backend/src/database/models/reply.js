const comment = require("./comment");
const user = require("./user");

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
      email: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        references: {
          model: user,
          key: "email",
        },
      },
      commentDate: {
        type: DataTypes.DATE,
        primaryKey: true,
        references: {
          model: comment,
          key: "date",
        },
      },
    },
    {
      timestamps: false,
    }
  );
