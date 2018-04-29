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
            }
        });
    }


}

Crypto.genEncrypted("12345678");
Crypto.match("12345677", "183u54428u50ytugw90ejr9sgij");
