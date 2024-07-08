module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "searchHistory",
    {
      keyword: { type: DataTypes.STRING(200), primaryKey: true },
      date: { type: DataTypes.DATE, primaryKey: true },
    },
    {
      timestamps: false,
    }
  );
