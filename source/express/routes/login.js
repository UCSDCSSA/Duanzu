//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == NULL){
    res.error(1);
  }else if(req.body.password = NULL){
    res.error(2);
  }
}
