var express = require('express');
var router = express.Router();

var Well = require('../models/well').Well;
var Plant = require('../models/well').Plant;
var Trafo = require('../models/trafo');
var Event = require('../models/event');


router.get('/', function (req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});
var counter = 0;

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
    Plant.find({},{},{skip: counter * 8, limit: 8}, function (err, plants) {
      if (err) res.send(err);
      counter++;
      if (counter > 1) {
        counter = 0;
      }
      /*var plant = plants[randint(0, plants.length)];*/
      console.log(plants);  
      res.json(plants);
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

router.route('/events')
  .post(function(req, res){
    var event =  new Event();
    event.message = req.body.message;
    event.type = req.body.type;

    event.save(function(err){
      if (err) res.send(err);
      res.json({ success: 0, message: "Event created"});
    });
  })

  .get(function (req, res){
    Event.find(function (err, events){
      if (err) res.send(err);
      var event = events[randint(0, events.length)];
      /*console.log(event);*/
      res.json(event)
    });
  });

module.exports = router;
var randint = function(a, b){
  var hasil = Math.floor(Math.random() * b) + a;
  return hasil;
}
