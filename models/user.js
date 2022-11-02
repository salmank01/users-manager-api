const { model, Schema } = require("mongoose");

const userModel = new Schema({
  name: { type: String, unique: true },
  age: String,
});

module.exports = model("User", userModel);
