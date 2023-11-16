let mongoose = require("mongoose");

let users = mongoose.Schema({
  user_id: Number,
  location: String,
  age: Number
});

exports.model = mongoose.model("Users", users);
