var http = require('http');
var express = require('express');
var akera = require('akera-api');
var path = require('path');
var model = require('../test/akeraModel.js');
var oSrv = require('../index.js');

var app = express();
var odataServer = oSrv().model(model).onAkera(function(collection, cb) {
  akera.connect({
    host : '10.10.10.6',
    port : 38900,
    user : 'medu',
    passwd : 'ariciu2000Pogoniciu'
  }).then(function(conn) {
    cb(null, conn);
  });
});

app.use('/api', function(req, res) {
  odataServer.handle(req, res);
});

http.createServer(app).listen(1337);
