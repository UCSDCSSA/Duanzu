//require username and encoded password
module.exports = function (req, res) {
<<<<<<< HEAD
  if(req.body.username == undefined){
    res.error(1);
  }else if(req.body.password = undefined){
=======
  if(req.body.username == null){
    res.error(1);
  }else if(req.body.password = null){
<<<<<<< HEAD
>>>>>>> 513a7015918bb06243d24613781fff818ad82afb
}else if(req.body.password == undefined){
=======
>>>>>>> 636e30a4d38a30a15abad5446a3fc3ff074b846f
    res.error(2);
} else {
    res.success("haha");
}
}
