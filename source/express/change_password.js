module.exports = function (req, res) {
    console.log(req.body);
    res.send('hello ' + req.body.username);
}
