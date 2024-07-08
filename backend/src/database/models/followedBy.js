module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "followedBy",
    {
      date: { type: DataTypes.DATE, primaryKey: true },
      followerEmail: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        references: {
          model: "user",
          key: "email",
        },
      },
      followeeEmail: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        references: {
          model: "user",
          key: "email",
        },
      },
    },
    {
      timestamps: false,
    }
  );
