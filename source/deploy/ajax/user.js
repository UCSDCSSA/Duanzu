const Mongo = require("keeling-js/lib/mongo");
const ObjectId = require("mongodb").ObjectId;
const Crypto = require("keeling-js/lib/crypto");
const User = Mongo.db.collection("user");

function isValidPassword(pwd) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(pwd));
}

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = {
    /**
     * req.body.username,
     * req.body.password
     */
    "login": function (req, res) {
        User.find({
            "username":req.body.username
        }).toArray(function (err, result) {
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
    "change_password": function(req, res) {
        var currentPassword = req.body["password"];
        var newPassword = req.body["new_password"];
        var confirmPassword = req.body["confirm_password"];
        if (req.body["username"] && currentPassword && newPassword && confirmPassword){
            if (newPassword != confirmPassword)
            {
                res.error(8, "confirm password is not same as new password");
            }
            else{
                User.find({"username": req.body["username"]}).toArray(function (err, result) {
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
                            if (!Crypto.match(currentPassword, user["password"])) {
                                res.error(6, "Password not match");
                            }
                            else {
                                if (!isValidPassword(newPassword)){
                                    res.error(9, "Minimum eight characters, at least one letter and one number");
                                }
                                else {
                                    var hashNewPassword = Crypto.genEncrypted(newPassword);
                                    User.update({
                                        "_id": ObjectId(user["_id"])
                                    }, {
                                        "$set": {
                                            "password": hashNewPassword
                                        }
                                    }, function (err, result) {
                                        if (err) {
                                            res.error(7, err);
                                        }
                                        else {
                                            res.success(result);
                                        }
                                    });
                                }
                            }
                        }
                    }
                });
            }
        }
        else if (!req.body["username"]){
            res.error(2, "No username");
        }
        else if (!currentPassword){
            res.error(3, "No current password");
        }
        else if (!newPassword){
            res.error(4, "No new password");
        }
        else if (!confirmPassword){
            res.error(7, "No confirm password");
        }
    },
    "register": function (req, res) {
        var username = req.body["username"];
        var email = req.body["email"];
        var password = req.body["password"];
        if(username && email && password){
            if(!isValidEmail(email)) {
                res.error(5, "email invalid");
            }
            else if(!isValidPassword(password)){
                res.error(6, "Minimum eight characters, at least one letter and one number");
            }
            else{
                User.find({"username": username}).toArray(function (err, result) {
                    if (err) {
                        res.error(1, err);
                    }
                    else{
                        if (result.length != 0){
                            res.error(7, "Username has been used");
                        }
                        else{
                            User.find({"email": email}).toArray(function (err, result) {
                                if (err) {
                                    res.error(1, err);
                                }
                                else{
                                    if (result.length != 0){
                                        res.error(8, "Email has been used");
                                    }
                                    else{
                                        User.insertOne({
                                            "username": username,
                                            "email": email,
                                            "password": Crypto.genEncrypted(password)
                                        }, function (err, response) {
                                            if (err) {
                                                res.error(1, err);
                                            }
                                            else {
                                                res.success(response.ops[0]);
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
        else if(!username){
            res.error(2, "No username");
        }
        else if (!email){
            res.error(3, "No email");
        }
        else if (!password){
            res.error(4, "No password");
        }
    },
    "remove_all_users": function (req, res) {
        if (User.drop()){
            res.success("drop success");
        }
        else {
            res.error(1, "collection does not exist");
        }
    },
}
