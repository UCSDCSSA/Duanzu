//require username and encoded password
module.exports = function (req, res) {
  if(is_email_legal(req.body.email)){
      res.error(109);
  }
  else if (is_email_exist(req.body.email)){
      res.error(101);
  }
  else if (is_email_used(req.body.email)){
      res.error(106)
  }
  else {
      res.success({
          email: req.body.email
      });
  }
}
