let mongoose = require("mongoose");

let ratings = mongoose.Schema({
  user_id: Number,
  book_id: Number,
  rating: Number
});

exports.model = mongoose.model("Ratings", ratings);
