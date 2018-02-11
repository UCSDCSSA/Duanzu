//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == null){
    res.error(1);
  }else if(req.body.password = null){
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
>>>>>>> 20112d94974e2c1868f91bce7a0763242b6f5815
    res.error(2);
} else {
    res.success("haha");
}
}
