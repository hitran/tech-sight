module.exports = (express, app) => {
  const controller = require("../controllers/user.controller.js");
  const router = express.Router();

  // select all users
  router.get("/", controller.all);

  app.use("/api/users", router);
};
