//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == null){
    res.error(1);
    res.error(2);
  }
}
