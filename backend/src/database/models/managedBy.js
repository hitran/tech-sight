const { adminUser, user } = require("..");

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "managedBy",
    {
      adminEmail: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        references: {
          model: adminUser,
          key: "email",
        },
      },
      userEmail: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        references: {
          model: user,
          key: "email",
        },
      },
    },
    {
      timestamps: false,
    }
  );
