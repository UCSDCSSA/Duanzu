//oldPassword,password
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
<<<<<<< HEAD
=======
  //res.success("aaa");
>>>>>>> 513a7015918bb06243d24613781fff818ad82afb
  if(req.body.oldPassword == null){
    res.error(2);
  }else if(req.body.newPassword == null){
    res.error(3);
  }else if(req.body.confirmNewPassword == null){
    res.error(4);
  }else if(req.body.newPassword != req.body.confirmNewPassword){
    res.error(5);
  }
<<<<<<< HEAD
  res.success("success")
=======
>>>>>>> 513a7015918bb06243d24613781fff818ad82afb
}
