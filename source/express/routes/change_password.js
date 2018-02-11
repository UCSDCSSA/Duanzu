//oldPassword,password
module.exports = function (req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< current
  //res.success("aaa");
  if(req.body.oldPassword == null){
    res.error(2);
  }else if(req.body.newPassword == null){
    res.error(3);
  }else if(req.body.confirmNewPassword == null){
    res.error(4);
  }else if(req.body.newPassword != req.body.confirmNewPassword){
    res.error(5);
  }
=======
  // res.success("aaa");
  res.error(1000); 
  // if(req.body.oldPassword == null){
  //   res.error(2);
  // }else if(req.body.newPassword == null){
  //   res.error(3);
  // }else if(req.body.confirmNewPassword == null){
  //   res.error(4);
  // }else if(req.body.newPassword != req.body.confirmNewPassword){
  //   res.error(5);
  // }
>>>>>>> before discard
=======
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139



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
<<<<<<< HEAD
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
}
