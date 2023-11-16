let express = require("express")
let books = require("../controller/book.controller")
let router = express.Router()

router.route("/books")
    .get(books.getAll)

router.route("/book/:id")
    .get(books.getById)

exports.bookRouter = router