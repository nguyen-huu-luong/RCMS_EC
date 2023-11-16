let express = require("express")
let ratings = require("../controller/rating.controller")
let router = express.Router()

router.route("/ratings")
    .get(ratings.getRating)
    .post(ratings.rating)

exports.ratingRouter = router