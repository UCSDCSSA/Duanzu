const Mongo = require("../lib/mongo.js");
const ObjectID = require('mongodb').ObjectID;

const Community = Mongo.db.collection("community");

module.exports = function(req, res) {
    // Community.find({}).toArray(function (err, result) {
    //     if (err) {
    //         res.error(200);
    //     }
    //     else {
    //         /**
    //          * [
    //          *   {
    //          *     "_id": "asdfjadsfs"
    //          *     "name": "La Re"
    //          *   },
    //          *   {
    //          *     "_id": "w09u0jifa0ifj0"
    //          *     "name": "Costa Verde"
    //          *   }
    //          * ]
    //          */
    //         res.success(result);
    //     }
    // });
    
    // Community.insertOne({
    //     "name": "Crossroad",
    //     "lat": 13.55,
    //     "lng": 39.673
    // }, function (err) {
    //     if (err) {
    //         res.error(200);
    //     }
    //     else {
    //         res.success({});
    //     }
    // });
    
    // if (req.body.name && req.body.lat && req.body.lng) {
    //     Community.insertOne({
    //         "name": req.body.name,
    //         "lat": req.body.lat,
    //         "lng": req.body.lng
    //     }, function (err) {
    //         if (err) {
    //             res.error(200);
    //         }
    //         else {
    //             res.success({});
    //         }
    //     });
    // }
    // else {
    //     res.error(201);
    // }
    
    // Community.findOne({
    //     "_id": ObjectID("5adccf75b446894e5866f088")
    // }, function (err, result) {
    //     if (err) {
    //         res.error(200);
    //     }
    //     else {
    //         res.success(result);
    //     }
    // });
    
    // Community.updateOne({
    //     "_id": ObjectID("5adccf75b446894e5866f088")
    // }, {
    //     $set: {
    //         "name": "Crossroad 2号"
    //     },
    //     $inc: {
    //         "counter": 3
    //     }
    // }, function (err) {
    //     if (err) {
    //         console.log(err);
    //         res.error(200);
    //     }
    //     else {
    //         res.success({});
    //     }
    // });
    
    // Community.removeOne({
    //     "_id": ObjectID("5adccf75b446894e5866f088")
    // }, function (err) {
    //     if (err) {
    //         res.error(200);
    //     }
    //     else {
    //         res.success({});
    //     }
    // });
    
    // Community.remove({}, function (err) {
    //     if (err) {
    //         res.error(200);
    //     }
    //     else {
    //         res.success({});
    //     }
    // });
    
    res.success("hello world");
}
