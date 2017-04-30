var mysql = require("keeling-js/lib/mysql");

module.exports = function (request, response, callback) {
    mysql.query("SELECT * FROM `sublease`", {}, function (err, result) {
        if (err) {
            console.log(err);
            response.error(403, "DATABASE ERROR");
        }
        else {
            callback({
                "communities": result
            });
        }
    });
}
