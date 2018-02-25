//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == null){
    res.error(1);

}else if(req.body.password == null){

    res.error(2);
} else {
    res.success("haha");
}
}
