module.exports = function(req, res){
    if (req.body.isLogin == false){
        res.error(1000);
    }
    else{
        isLogin = false;
        res.success()
    }
}
