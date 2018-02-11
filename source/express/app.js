var express = require("express");
var bodyParser = require("body-parser");
const fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(function (req, res, next) {
  var errorCode = JSON.parse(fs.readFileSync('error-code.json'));
  res.formattedResponse = function (code,msg,content){
    res.send({"code":code,"msg": msg,"content":content});
  }

  res.success = function (content) {
    res.formattedResponse(0,"success",content);
  }

  res.error = function (code) {
    res.formattedResponse(code,errorCode[code],{});
  }

  next();
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/change_password', require("./routes/change_password"));

app.post('/api/change_password', require("./routes/change_password"));
app.post('/api/login', require("./routes/login"));
<<<<<<< HEAD
app.post('/api/register', require("./routes/register"));
=======
>>>>>>> 97d66ce9c9b8d2d62bb60cdc241d1a1c49f8a139
app.post('/api/logout', require("./routes/logout"));

app.listen(3000);
