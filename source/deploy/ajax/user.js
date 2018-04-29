const Mongo = require("keeling-js/lib/mongo");
const ObjectId = require("mongodb").ObjectId;
const Crypto = require("keeling-js/lib/crypto");
const User = Mongo.db.collection("user");
const ObjectId = require("mongodb").ObjectId;
module.exports = {

    /**
     * req.body.username,
     * req.body.password
     */
    login: function (req, res) {
        User.find({"username":req.body.username}).toArray(function (err, result) {
            if (err) {
                res.error(1, err);
            }
            else {
              if(Crypto.match(req.body.password,result[0]['password'])){
                var session_id = ObjectId();
                User.update({
                  "_id":ObjectId("5ae61784896911a33b81d3bd")
                }, {
                  $set: {
                    "session_id" : session_id
                  }
                }, function(updateError,updateResult) {
                  if(err){
                    res.error(1,updateError);
                  }else{
                    res.success({"session_id" : session_id});
                  }
                });
              }else{
                res.error(102);
              }
            }
        });
    },
    forgetPassword: function(req, res) {
        var currentPassword = req.body.password;
        var newPassword = req.body.newPassword;
        if (req.body.username && currentPassword && newPassword){
            User.find({"username": req.body.username}).toArray(function(err, result)){
                if (err) {
                    res.error(1, err);
                }
                else
                {
                    if (result.length == 0){
                        res.error(5, "User not found");
                    }
                    else {
                        var user = result[0];
                        if (Crypto.match(currentPassword, user.password)) {
                            res.error(6, "Password not match");
                        }
                        else {
                            var hashNewPassword = Crypto.genEncrypted(newPassword);
                            User.update({
                                "_id": ObjectId(user._id)
                            }, {
                                "$set": {
                                    "password": hashNewPassword
                                }
                            }, function (err, result) {
                                if (err){
                                    res.error(7, err);
                                }
                                else{
                                    res.success(result);
                                }
                            });
                        }
                    }
                }
            }
        }
        else if (!req.body.username){
            res.error(2, "No username");
        }
        else if (!req.body.currentPassword){
            res.error(3, "No current password");
        }
        else if (!req.body.newPassword){
            res.error(4, "No new password");
        }

    }
}
//
// Crypto.genEncrypted("12345678");
// Crypto.match("12345677", "183u54428u50ytugw90ejr9sgij");
