module.exports = function (req, res) {
<<<<<<< HEAD
  if(req.body.oldPassword == null || req.body.newPassword == null ||
      req.body.confirmNewPassword == null){
    res.error(107);
  }else if(req.body.oldPassword.length() != 256 ||
      req.body.newPassword.length() != 256 ||
      req.body.confirmNewPassword.length() != 256){
    res.error(105);
  }else if(!req.body.oldPassword.equals(/* 数据库原密码 */)){
    res.error(103);
  }else if(!req.body.newPassword.equals(req.body.confirmNewPassword) ){
    res.error(104);
  }else{
    res.success({
    /*我也不知道写什么*/
    /*存入数据库*/
=======
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
>>>>>>> 636e30a4d38a30a15abad5446a3fc3ff074b846f
  })

}
