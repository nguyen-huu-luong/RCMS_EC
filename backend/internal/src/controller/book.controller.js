let BookModel = require('../model/book.model').model

exports.getAll = async(req, res) => {
    try {
        let data = await BookModel.find({});
        res.status(200).send(data);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}

exports.getById = async(req, res) => {
    try {
        bookId = req.params['id']  
        bookId = parseInt(bookId)
        let data = await BookModel.find({book_id: bookId})
        res.status(200).send(data);

    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }
}