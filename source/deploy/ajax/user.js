const Mongo = require("keeling-js/lib/mongo");
const Leasing = Mongo.db.collection("leasing");

module.exports = {
    login: function (req, res) {
        Leasing.find({}).toArray(function (err, result) {
            if (err) {
                res.error(1, err);
            }
            else {
                res.success(result);
            }
        });
    }
}
