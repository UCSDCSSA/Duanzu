//oldPassword,password
import { is_email_legal } from "../check_email";
import { is_email_used } from "../check_email";
import { is_username_legal } from "../check_email";


module.exports = function(req, res) {
    //res.success("aaa");
    if (req.body.email == null || !is_email_legal(req.body.email)) { // illegal formatting
        res.error(109);
    } else if (is_email_used(req.body.email)) { // email is used
        res.error(106);
    } else if (req.body.password == null || req.body.password.length() != 256) { // password must be 256 bits after SHA256 encrption
        res.error(105);
    } else if (req.body.username == null || is_username_legal(req.body.username)) {
        res.error(108);
    } else {
      res.success({
      /* save into database */

      });
    }
}
