//username, picture, phone
module.exports = function (req, res) {
  res.success("aaa");
  // if(req.body.oldPassword == null){
  //   res.error(2);
  // }else if(req.body.newPassword == null){
  //   res.error(3);
  // }else if(req.body.confirmNewPassword == null){
  //   res.error(4);
  // }else if(req.body.newPassword != req.body.confirmNewPassword){
  //   res.error(5);
  // }
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
}
