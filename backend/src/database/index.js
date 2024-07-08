const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config.js");
const db = {
  Op: Sequelize.Op,
};

// Create sequelize
db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
  port: config.PORT,
});

// Include models
db.user = require("./models/user.js")(db.sequelize, DataTypes);
db.adminUser = require("./models/adminUser.js")(db.sequelize, DataTypes);
db.searchHistory = require("./models/searchHistory.js")(
  db.sequelize,
  DataTypes
);
db.comment = require("./models/comment.js")(db.sequelize, DataTypes);
db.reply = require("./models/reply.js")(db.sequelize, DataTypes);
db.followedBy = require("./models/followedBy.js")(db.sequelize, DataTypes);
db.managedBy = require("./models/managedBy.js")(db.sequelize, DataTypes);

// Relate search history and user
db.searchHistory.belongsTo(db.user, {
  foreignKey: { name: "email", primaryKey: true },
});
// Relate comment and user
db.comment.belongsTo(db.user, {
  foreignKey: { name: "email", primaryKey: true },
});
// Relate reply and user
db.reply.belongsTo(db.user, {
  foreignKey: { name: "email", primaryKey: true },
});
// Relate reply and comment
db.reply.belongsTo(db.comment, {
  foreignKey: { name: "date", primaryKey: true },
});
// Relate followedBy and user
// db.followedBy.belongsTo(db.user, {
//   foreignKey: { name: "email" },
// });

// Include a sync option with seed data logic included
db.sync = async () => {
  // sync schema
  await db.sequelize.sync();
  await seedData();
};

async function seedData() {
  const count = await db.user.count();

  if (count > 0) {
    return;
  }

  const argon2 = require("argon2");
  let hash = await argon2.hash("root", { type: argon2.argon2id });
  await db.user.create({
    email: "root",
    password: hash,
    jobTitle: "root",
    firstName: "root",
    lastName: "root",
  });
}

module.exports = db;
