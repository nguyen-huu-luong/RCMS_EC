let mongoose = require("mongoose");

let accounts = mongoose.Schema({
  user_id: Number,
  user_name: String,
  password: String
});

exports.model = mongoose.model("Accounts", accounts)