//oldPassword,password
module.exports = function(req, res) {
    //res.success("aaa");
    if (req.body.email == null || !req.body.email.is_email_legal()) { // illegal formatting
        res.error(109);
    } else if (req.body.email.is_email_used()) { // email is used
        res.error(106);
    } else if (req.body.password == null || req.body.password.length() != 256) { // password must be 256 bits after SHA256 encrption
        res.error(105);
    } else if (req.body.username == null || req.body.username.is_username_legal()) {
        res.error(108);
    } else {
      res.success({
      /* save into database */

      });
    }
}
