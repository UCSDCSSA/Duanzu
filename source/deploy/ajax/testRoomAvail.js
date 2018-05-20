const Mongo = require("keeling-js/lib/mongo");
const ObjectId = require("mongodb").ObjectId;
const Leasing = Mongo.db.collection("leasing");

module.exports = {
    /**
     * req.body.username,
     * req.body.password
     */
    "test": function (req, res) {
        Leasing.find({
            "user_id": "testid"
        }).toArray(function (err, result) {
            if(err){
                res.error(1, "???");
            }
            else{
                console.log(result[0]["room_avail"]);
                console.log(result[0]["room_avail"][0]);
                console.log(result[0]["room_avail"][0].type);
                res.success("Fuck");
            }
        })
    }
}
