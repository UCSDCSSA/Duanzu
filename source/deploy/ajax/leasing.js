const Mongo = require("keeling-js/lib/mongo");
const ObjectId = require("mongodb").ObjectId;
const Leasing = Mongo.db.collection("leasing");

module.exports = {
    /**
     * req.body.username,
     * req.body.password
     */
    "add_one": function (req, res) {
        var user_id = req.body.user_id;
        var start_date = req.body.start_date;
        var end_date = req.body.end_date;
        var complex_id = req.body.complex_id;
        var apt_bedroom_amount = req.body.apt_bedroom_amount;
        var apt_bathroom_amount = req.body.apt_bathroom_amount;
        var room_avail = req.body.room_avail;
        var gender_req = req.body.gender_req;
        var user_description = req.body.user_description;
        var facility = req.body.facility;
        var notice = req.body.notice;
        var location = req.body.location;
        var status = req.body.status;
        var img_url = req.body.img_url;
        if(apt_bedroom_amount < 0 || apt_bathroom_amount < 0) {
            res.error(1, "room amount invalid");
        }
        else{
            Leasing.insertOne({
                "user_id": user_id,
                "start_date": start_date,
                "end_date": end_date,
                "complex_id": complex_id,
                "apt_bedroom_amount": apt_bedroom_amount,
                "apt_bathroom_amount": apt_bathroom_amount,
                "room_avail": room_avail,
                "gender_req": gender_req,
                "user_description": user_description,
                "facility": facility,
                "notice": notice,
                "location": location,
                "status": status,
                "img_url": img_url
            }, function (err, response) {
                if (err) {
                    res.error(1, err);
                }
                else {
                    res.success(response.ops[0]);
                }
            });
        }
    },

    "change_status_leasing": function (req, res) {
      //Leasing.find({ "room_avail.price" : {"$gte" : 200, "$lte": 500}});
      // var room_ID = Leasing.find({"_id": req.body._id});
      Leasing.updateOne({
          "_id": req.body.id,
      }, {
        $set: {
          "status" : req.body.status
        }
      }, function (err) {
          if (err) {
              res.error(200);
          }
          else {
              res.success({});
          }
      });
    },

    "remove_all_leasing": function (req, res) {
        if (Leasing.drop()){
            res.success("drop success");
        }
        else {
            res.error(1, "collection does not exist");
        }
    }
}
