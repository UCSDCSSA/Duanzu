const Mongo = require("keeling-js/lib/mongo");
const Crypto = require("keeling-js/lib/crypto");
const User = Mongo.db.collection("user");
const ObjectId = require("mongodb").ObjectId;
module.exports = {
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

    }

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
