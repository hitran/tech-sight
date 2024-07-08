module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "adminUser",
    {
      email: {
        type: DataTypes.STRING(32),
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNul: false,
      },
    },
    {
      timestamps: false,
    }
  );
