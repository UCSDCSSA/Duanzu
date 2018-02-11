//oldPassword,password
module.exports = function (req, res) {



  mongodb.user.findOne({
      "username": req.body.username
  }, function (err, result) {
      // ....
      mongodb.collection("user").updateOne({
          "username": req.body.username
      }, {
          "password": req.body.newPassword
      }, function (err, result) {
          if (err) {
              res.error(100);
          }
          else {
              if (result.updateCount > 0) {
                  res.success();
              }
              else {
                  res.error(100);
              }
          }
      });
  })
}
