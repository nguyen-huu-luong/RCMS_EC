let AccountModel = require('../model/account.model').model

exports.getAll = async(req, res) => {
    try {
        let data = await AccountModel.find({});
        res.status(200).send(data);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}

exports.authenticate = async(req, res) => {
    try {
        let name = req.query.userName 
        let pwd = req.query.password
        let checker = await AccountModel.findOne({"user_name": name, "password": pwd})
        res.status(200).send(checker);
    }
    catch(err) {
        console.log(error);
        res.status(400).send(error);
    }

}
