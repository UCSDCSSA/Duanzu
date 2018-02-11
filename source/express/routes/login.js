//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == undefined){
    res.error(1);
  }else if(req.body.password = undefined){
    res.error(2);
  }
}
