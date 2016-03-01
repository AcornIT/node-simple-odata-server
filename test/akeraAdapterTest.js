var ODataServer = require("../index.js");
var model = require("./akeraModel.js");
var should = require("should");
var akera = require('akera-api');


describe("akeraAdapter", function () {
    var odataServer;
    var db;

    beforeEach(function (done) {
        akera.connect({
          host: '10.10.10.6',
          port: 38900,
          user: 'medu',
          passwd: 'ariciu2000Pogoniciu'
        }).then(function(conn) {
          db = conn;
          odataServer = ODataServer('http://localhost:1234');
          odataServer.model(model);
          odataServer.onAkera(function(collection, cb) {
            //console.log(cb);
            cb(null, db);
          });
          done();
        });
    });

//    it("insert should add _id", function (done) {
//        odataServer.cfg.insert("test", {foo: "Hello"}, function (err, doc) {
//            if (err)
//                return done(err);
//
//            doc.should.have.property("_id");
//            done();
//        });
//    });
//
//    it("remove should remove", function (done) {
//        db.collection("test").insert({foo: "Hello"}, function(err) {
//            if (err)
//                return done(err);
//
//            odataServer.cfg.remove("test", {}, function (err) {
//                if (err)
//                    return done(err);
//
//                db.collection("test").count({}, function(err, val) {
//                    if (err)
//                        return done(err);
//
//                    val.should.be.eql(0);
//                    done();
//                });
//            });
//        });
//    });
//
//    it("update should update", function (done) {
//        db.collection("test").insert({foo: "Hello"}, function(err) {
//            if (err)
//                return done(err);
//
//            odataServer.cfg.update("test", { foo: "Hello"}, { $set: { foo: "updated"}}, function (err) {
//                if (err)
//                    return done(err);
//
//                db.collection("test").find({}).toArray(function(err, val) {
//                    if (err)
//                        return done(err);
//
//                    val.should.have.length(1);
//                    val[0].foo.should.be.eql("updated");
//                    done();
//                });
//            });
//        });
//    });

    it("query should be able to filter in", function (done) {
            odataServer.cfg.query("Customer", { $filter : { CustNum: 1} }, function (err, res) {
                if (err)
                    return done(err);
                //console.log(res);
               // res.should.have.length(1);
                db.disconnect().then(function() {
                  //console.log(done);
                  done();
                });
            });
    });

//    it("query should be able to filter out", function (done) {
//        db.collection("test").insert({foo: "Hello"}, function(err) {
//            if (err)
//                return done(err);
//
//            odataServer.cfg.query("test", { $filter: { foo: "different"} }, function (err, res) {
//                if (err)
//                    done(err);
//
//                res.should.have.length(0);
//                done();
//            });
//        });
//    });
//
//    it("query should do projections", function (done) {
//        db.collection("test").insert({foo: "Hello", x: "x"}, function(err) {
//            if (err)
//                return done(err);
//
//            odataServer.cfg.query("test", { $select : { "foo": 1 } }, function (err, res) {
//                if (err)
//                    return done(err);
//
//                res[0].should.have.property("foo");
//                res[0].should.not.have.property("x");
//                done();
//            });
//        });
//    });
});