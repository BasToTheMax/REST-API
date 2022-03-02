// Import packages
const express = require("express");

// Load config
const Config_API = require('./config/api.json');

// Setup express
const app = express();

// Routing
app.use(require("./routes"));

// Home page
app.get("/", (req, res) => {
  res.send("Home page");
});

// Start listening on port 5000
app.listen(Config_API.port, () => {
  console.log("API listening at port " + Config_API.port);
});
