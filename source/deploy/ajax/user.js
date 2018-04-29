const Mongo = require("keeling-js/lib/mongo");
const Crypto = require("keeling-js/lib/crypto");
const User = Mongo.db.collection("user");

module.exports = {
    login: function (req, res) {
        User.find({"username":req.username}).toArray(function (err, result) {
            if (err) {
                res.error(1, err);
            }
            else {
                res.success(result);
                // console.log(Crypto.genEncrypted("12345678"));
                // console.log(Crypto.match("12345678", Crypto.genEncrypted("12345678")));
            }
        });
    },

    register: function (req, res) {
        User.insertOne({"username": req.body.username,
                        "email": req.body.email,
                        "password": Crypto.genEncrypted(req.body.password) });

        User.find({"username":req.body.username}).toArray(function (err, result) {
            if (err) {
                res.error(1, err);
            }
            else {
                res.success(result);
            }
        });

    }
}
