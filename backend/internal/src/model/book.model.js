let mongoose = require("mongoose");

let books = mongoose.Schema({
  book_id: Number,
  ISBN: String,
  book_title: String,
  book_author: String,
  year_of_publication: Number,
  publisher: String,
  image_URL_S: String,
  image_URL_S: String,
  image_URL_M: String,
  image_URL_L: String,
  price: {type: Number, default: 100}
});

exports.model = mongoose.model("Books", books);
