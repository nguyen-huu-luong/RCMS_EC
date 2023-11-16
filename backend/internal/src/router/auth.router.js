let express = require("express")
let accounts = require("../controller/auth.controller")
let users = require("../controller/user.controller")
let router = express.Router()

router.route("/accounts")
    .get(accounts.getAll)

router.route("/users/auth")
    .get(accounts.authenticate)

router.route("/users/register")
    .post(users.addUser)

exports.authRouter = router