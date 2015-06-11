var express = require('express');
var strftime = require('strftime');
var router = express.Router();

var OilWell = require('../models/well').OilWell;
var Well = require('../models/well').Well;
var OilWellActiveAlarm = require('../models/well-active-alarm.js');
var OilWellHistoricalAlarm = require('../models/well-historical-alarm.js');
var Trafo = require('../models/trafo');


router.get('/', function (req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});
var counter = 0;


router.route('/OilWellOverView')
  .get(function (req, res) {
    Well.find(function (err, wells) {
      if (err) res.send(err);
      res.json(wells);
    });
  });


// router.route('/OilWellOverView')
//   // create a well
//   .post(function (req, res) {
//     var well = new OilWell();
//     well.name = req.body.name;
//     well.size = req.body.size;
//
//     well.save(function (err) {
//       if (err) res.send(err);
//       res.json({ success: 0, message: "Well created!" });
//     });
//   })
//   // query all wells
//   .get(function (req, res) {
//     Plant.find({},{},{skip: counter * 8, limit: 8}, function (err, plants) {
//       if (err) res.send(err);
//       counter++;
//       if (counter > 1) {
//         counter = 0;
//       }
//       #<{(|var plant = plants[randint(0, plants.length)];|)}>#
//       res.json(plants);
//     });
//   });


router.route('/ActiveAlarms')
  .get(function(req, res) {
    OilWellActiveAlarm.find(function(err, activeAlarms) {
      if (err) res.send(err);
      activeAlarms.map(function(a) {
        // convert 'Date object' to Date and Time in string type
        a.Date = strftime('%Y-%m-%d', a.Timestamp);
        a.Time = strftime('%H:%M:%S', a.Timestamp);
        delete a.Timestamp;
      });

     /* sleep(5000);*/
      
      res.json(activeAlarms);
    });
  });


router.route('/HistoricalAlarms')
  .get(function(req, res) {
    var conditions = {};
    if (req.query.dtfrom !== undefined && req.query.dtto !== undefined) {
      // get start date
      var timestampFrom = buildTimestamp(req.query.dtfrom);

      // get end date
      var temp = buildTimestamp(req.query.dtto);
      var timestampTo = new Date(temp.setDate(temp.getDate() + 1));

      // conditions to query to MongoDB using time range
      var conditions = {
        Timestamp: { $gte: timestampFrom, $lte: timestampTo }
      };
    }

    OilWellHistoricalAlarm.find(conditions, function(err, historicalAlarms) {
      if (err) res.send(err);
      historicalAlarms.map(function(a) {
        // convert 'Date object' to Date and Time in string type
        a.Date = strftime('%Y-%m-%d', a.Timestamp);
        a.Time = strftime('%H:%M:%S', a.Timestamp);
        delete a.Timestamp;
      });

      /*sleep(5000);
*/
      res.json(historicalAlarms);
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


/**
 * Generate random between two integer numbers.
 */
function randint(a, b) {
  return Math.floor(Math.random() * b) + a;
}


/**
 * Convert from Smartadeco timestamp format to Javascript Date Object.
 * ex: 20150516183000
 */
function buildTimestamp(t) {
  return new Date(t.slice(0, 4), parseInt(t.slice(4, 6) - 1), t.slice(6, 8),
                  t.slice(8, 10), t.slice(10, 12), t.slice(12, 14), 0);
}


/**
 * Javascript does not have built-in sleep function. This snippet simulates it.
 */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e10; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


module.exports = router;
