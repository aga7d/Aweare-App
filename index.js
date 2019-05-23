const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const api = require("./api");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once("open", () => {
  console.log("Successfully connected to MongoDb");
});
const app = express();
app.use("/api", api);
const PORT = process.env.PORT || 8082;
app.listen(PORT);
