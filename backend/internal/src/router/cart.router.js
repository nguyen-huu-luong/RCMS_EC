let express = require("express")
let carts = require("../controller/cart.controller")
let router = express.Router()

router.route("/carts")
    .get(carts.listItems)
    .post(carts.addToCart)
    .delete(carts.deleteItems)

exports.cartRouter = router