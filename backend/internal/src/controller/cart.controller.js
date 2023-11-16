let CartModel = require('../model/cart.model').model
let BookModel = require('../model/book.model').model

exports.getAll = async(req, res) => {
    try {
        let data = await CartModel.find({});
        res.status(200).send(data);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}

exports.addToCart = async(req, res) => {
    try {
        let data = req.body
        let checker = await CartModel.findOne({"user_id": data.user_id, "book_id": data.book_id})
        book = await BookModel.findOne({"book_id": data.book_id})
        if (checker) {
            let quantity = data.quantity + checker.quantity
            checker.quantity = quantity
            checker.price = quantity*book.price
            await checker.save()
        }
        else {
            cartItem = new CartModel({"user_id": data.user_id, "book_id": data.book_id, "quantity": data.quantity,"price": data.quantity*book.price, "book_title": book.book_title})
            await cartItem.save()
        }
        res.send("success")
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.listItems = async(req, res) => {
    try{
        let userId = req.query.userId
        let items = await CartModel.find({"user_id": userId})
        res.status(200).send(items);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.deleteItems = async(req, res) => {
    try{
        let userId = req.query.userId
        await CartModel.deleteMany({"user_id": userId})
        res.send("success")
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }
}