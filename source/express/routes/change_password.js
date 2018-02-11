//oldPassword,password
module.exports = function (req, res) {
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
}
