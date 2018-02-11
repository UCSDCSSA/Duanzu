//require username and encoded password
module.exports = function (req, res) {
  if(req.body.username == null){
    res.error(1);
<<<<<<< HEAD
<<<<<<< HEAD
}else if(req.body.password == null){
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
    res.error(2);
} else {
    res.success("haha");
}
}
