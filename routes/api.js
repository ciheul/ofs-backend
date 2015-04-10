var express = require('express');
var router = express.Router();

var Well = require('../models/well');
var Trafo = require('../models/trafo');


router.get('/', function (req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});


router.route('/wells')
  // create a well
  .post(function (req, res) {
    var well = new Well();
    well.name = req.body.name;
    well.size = req.body.size;

    well.save(function (err) {
      if (err) res.send(err);
      res.json({ success: 0, message: "Well created!" });
    });
  })
  // query all wells
  .get(function (req, res) {
    Well.find(function (err, wells) {
      if (err) res.send(err);
      res.json(wells)
    });
  });


router.route('/trafos')
  // create a well
  .post(function (req, res) {
    var trafo = new Trafo();
    trafo.name = req.body.name;
    trafo.size = req.body.size;

    trafo.save(function (err) {
      if (err) res.send(err);
      res.json({ success: 0, message: "Trafo created!" });
    });
  })
  // query all wells
  .get(function (req, res) {
    Trafo.find(function (err, trafos) {
      if (err) res.send(err);
      res.json(trafos)
    });
  });


module.exports = router;
