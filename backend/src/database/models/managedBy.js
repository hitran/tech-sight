const { adminUser, user } = require("..");

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "adminManagement",
    {},
    {
      timestamps: false,
    }
  );
