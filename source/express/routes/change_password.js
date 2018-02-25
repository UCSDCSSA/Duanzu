module.exports = function (req, res) {
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
  })

}
