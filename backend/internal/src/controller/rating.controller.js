let RatingModel = require('../model/rating.model').model

exports.getRating = async(req, res) => {
    try {
        let user_id = req.query.userId
        let book_id = req.query.bookId
        let data = await RatingModel.findOne({"user_id": user_id, "book_id": book_id});
        res.status(200).send(data);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}

exports.rating = async(req, res) => {
    try {
        let user_id = req.body.userId
        let book_id = req.body.bookId
        let rating = req.body.rating
        let checker = await RatingModel.findOne({"user_id": user_id, "book_id": book_id});
        if (checker) {
            checker.rating = rating
            await checker.save()
        }
        else {
            let ratingItem = new RatingModel({"user_id": user_id, "book_id": book_id, "rating": rating})
            await ratingItem.save()
        }
        res.status(200).send("success");
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}