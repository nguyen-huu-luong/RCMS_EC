let UserModel = require('../model/user.model').model
let AccountModel = require('../model/account.model').model

exports.getAll = async (req, res) => {
    try {
        let data = await UserModel.find({});
        res.status(200).send(data);
    }
    catch (err) {
        console.log(error);
        res.status(400).send(error);
    }

}

exports.addUser = async (req, res) => {
    try {
        let name = req.body.userName
        let pwd = req.body.password
        let data = await AccountModel.findOne({ "user_name": name })
        if (data) {
            res.status(200).send("Username has existed")
            return
        }
        else {
            data = await UserModel.find({}).sort({ "user_id": -1 }).limit(1)
            let userID = data[0].user_id + 1
            let age = 50
            let location = "sunnyvale, california, usa"

            data = { "user_id": userID, "age": age, "location": location }
            let user = new UserModel({ "user_id": userID, "age": age, "location": location })
            await user.save()

            data = { "user_id": userID, "user_name": name, "password": pwd }
            let account = new AccountModel(data)
            await account.save()
            res.send("success")
        }

    }
    catch (err) {
        console.log(error);
        res.status(400).send(error);
    }

}