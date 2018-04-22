const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const mongo = require("./lib/mongo");
const debug = require("./lib/debug");
const config = require("./data/config.json");

function initDebug (callback) {
  debug.set(config["debug"]);
  callback();
}

function initApplication (callback) {
  debug.log("Initiating Application");
  callback(express());
}

function initBodyParser (app, callback) {
  debug.log("Initiating Body Parser");
  app.use(bodyParser.urlencoded({
      extended: true
  }));
  callback(app);
}

function initAjaxRequest (app, callback) {
  debug.log("Initiating Ajax Request");
  app.use(function (req, res, next) {
    var errorCode = JSON.parse(fs.readFileSync('error-code.json'));
    res.formattedResponse = function (code,msg,content){
      res.send({"code":code,"msg": msg,"content":content});
    }

    res.success = function (content) {
      res.formattedResponse(0,"",content);
      res.formattedResponse(0,"success",content);
    }

    res.error = function (code) {
      res.formattedResponse(code,errorCode[code],{});
    }

    next();
  });
  callback(app);
}

function initMongoDB (app, callback) {
  debug.log("Initiating Mongo DB");
  try {
    var mongoConfig = require("./data/mongo.json");
  }
  catch (err) {
    debug.log("Mongo config not found");
    return;
  }
  mongo.init(mongoConfig, callback, callback);
}

function initRouter (app, callback) {
  debug.log("Initiating Router");
  app.get('/api/change_password', require("./routes/change_password"));
  app.post('/api/change_profile', require("./routes/change_profile"));
  app.post('/api/change_password', require("./routes/change_password"));
  app.post('/api/login', require("./routes/login"));
  app.post('/api/register', require("./routes/register"));
  app.post('/api/logout', require("./routes/logout"));
  app.post('/api/change_password', require("./routes/forget_password"));
  callback();
}

function startServer (app) {
  app.listen(config["port"], function () {
    debug.info(config["name"] + " server listening to port " + config["port"]);
  });
}

initDebug(function () {
  initApplication(function (app) {
    initBodyParser(app, function (app) {
      initAjaxRequest(app, function (app) {
        initMongoDB(app, function () {
          initRouter(app, function () {
            startServer(app);
          });
        });
      });
    });
  });
});
