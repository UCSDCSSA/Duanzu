const Mongo = require("keeling-js/lib/mongo");
const User = Mongo.db.collection("user");
const Crypto = require("keeling-js/lib/crypto");
const ObjectId = require("mongodb").ObjectId;

module.exports = {
    getOneUser (username, callback, error) {
        User.findOne(
            { "username" : username },
            function(err, result) {
                if (err) error(new Error("Error checking user " + username + " existence: " + err));
                callback(result);
            });
    },
    addUser (info, callback, error){
        var username = info["username"];
        var email = info["email"];
        var password = info["password"];

        User.findOne(
            {"username": username},
            function(err, result){
                if (err) error(new Error username + " existed"));
                else{
                    User.insertOne({
                            "username": username,
                            "email": email,
                            "password": Crypto.genEncrypted(password)
                        }, function (err, response) {
                            if (err) {
                                error(new Error("Error inserting user " + username + ": " + err));
                            }
                            else {
                                res.success(response["insertId"]);
                            }
                        }
                    )
                }
            }
        )
    }
}
