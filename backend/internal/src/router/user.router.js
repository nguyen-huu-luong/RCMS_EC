let express = require("express")
let users = require("../controller/user.controller")
let router = express.Router()

router.route("/users")
    .get(users.getAll)

exports.userRouter = router