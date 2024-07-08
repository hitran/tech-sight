const express = require("express");
const cors = require("cors");
const db = require("./src/database");

// db will be synced in the background
db.sync();

const app = express();
// Parse request of content-type - application/json
app.use(express.json());

// Add cors support
app.use(cors());

// simple hello route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Add user routes
require("./src/routes/user.routes.js")(express, app);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
