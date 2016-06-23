var ODataModel = require("../lib/model.js");
var model = require("./akeraModel.js");
var model1 = require("./akeraModel1.js");
var meta = require('../lib/metadata.js');

var omodel = new ODataModel(model);
omodel.load(model1);
console.log(meta(omodel));
