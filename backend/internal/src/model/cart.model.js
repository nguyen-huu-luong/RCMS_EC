let mongoose = require("mongoose");

let carts = mongoose.Schema({
  user_id: Number,
  book_id: Number,
  book_title: String,
  quantity: Number,
  price: Number
});

exports.model = mongoose.model("Carts", carts)