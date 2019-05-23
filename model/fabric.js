const mongoose = require("mongoose");
const { Schema } = mongoose;
const fabricSchema = new Schema({
  name: String,
  description: String,
  alternatives: Array
});
module.exports = mongoose.model("Fabric", fabricSchema);
