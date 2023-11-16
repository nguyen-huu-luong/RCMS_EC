let user = require("./user.router").userRouter
let rating = require("./rating.router").ratingRouter
let cart = require("./cart.router").cartRouter
let book = require("./book.router").bookRouter
let auth = require("./auth.router").authRouter
exports.route = (app) => {
    app.use("", user)
    app.use("", rating)
    app.use("", cart)
    app.use("", book)
    app.use("", auth)
}
