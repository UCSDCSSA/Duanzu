//username, picture, phone
module.exports = function (req, res) {

  mongodb.user.findProfile({
  }, function (err, result) {
    // if userid can not be found
    if (err) {
      res.error(101);
    }
    else {
      mongodb.user.checkPicture({
          "username": req.body.username
          // "picture" : req.body.picture
      }, function (err, result) {
        // if picture failed to be uploaded
        if (err) {
          res.error(110);
        }
        else {
          mongodb.collection("user").updateProfile({
              "username": req.body.username
          }, {
              "picture" : req.body.picture
              //"phone"   : req.body.phone
          }, function (err, result) {
            // if Profile failed to be modified
            if (err) {
              res.error(111);
            }
            else {
              // Successfully changed profile, return username
              res.success(req.body.username);
            }
          } );
        }
      } );
    }
  } );
}
