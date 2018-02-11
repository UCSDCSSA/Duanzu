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
>>>>>>> 513a7015918bb06243d24613781fff818ad82afb
    res.error(2);
  }
}
