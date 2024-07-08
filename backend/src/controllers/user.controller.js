const db = require("../database");
const argon2 = require("argon2");

// Select all users
exports.all = async (req, res) => {
  const users = await db.user.findAll();
  res.json(users);
};
