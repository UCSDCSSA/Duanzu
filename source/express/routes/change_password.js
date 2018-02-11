//oldPassword,password
module.exports = function (req, res) {

  if(req.body.oldPassword == null){
    res.error(2);
  }else if(req.body.newPassword == null){
    res.error(3);
  }else if(req.body.confirmNewPassword == null){
    res.error(4);
  }else if(req.body.newPassword != req.body.confirmNewPassword){
    res.error(5);
  }


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
