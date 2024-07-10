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
  foreignKey: {
    name: "userEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Relate comment and user
db.comment.belongsTo(db.user, {
  foreignKey: {
    name: "userEmail",
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Relate reply and comment
db.reply.belongsTo(db.comment, {
  foreignKey: {
    name: "commentId",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Relate reply and user
db.reply.belongsTo(db.user, {
  foreignKey: {
    name: "userEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Relate followedBy and user
db.followedBy.belongsTo(db.user, {
  foreignKey: {
    name: "followerEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});
db.followedBy.belongsTo(db.user, {
  foreignKey: {
    name: "followeeEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Relate managedBy, admin user and user
db.managedBy.belongsTo(db.user, {
  foreignKey: {
    name: "userEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});
db.managedBy.belongsTo(db.adminUser, {
  foreignKey: {
    name: "adminEmail",
    primaryKey: true,
    constraints: true,
    onDelete: "CASCADE",
  },
});

// Include a sync option with seed data logic included
db.sync = async () => {
  // sync schema
  await db.sequelize.sync({ force: true });
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
