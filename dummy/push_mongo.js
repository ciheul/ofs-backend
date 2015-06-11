var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ofs');

var oilWellOverView = require('./OilWellOverView.json');
var oilWellActiveAlarms = require('./OilWellActiveAlarms.json');
var oilWellHistoricalAlarms = require('./OilWellHistoricalAlarms.json');

var OilWell = require('../models/well').OilWell;
var Well = require('../models/well').Well;

var OilWellActiveAlarm = require('../models/well-active-alarm');
var OilWellHistoricalAlarm = require('../models/well-historical-alarm');

async.each(oilWellOverView, function(well) {
  var oilWells = [];
  async.each(well.OilWells, function(oilWell) {  	
    var ow = new OilWell({
      Name: oilWell.Name,
      GroupName: oilWell.GroupName,
      Size: oilWell.Size,
      Status: oilWell.Status,
      DetailUrl: oilWell.DetailUrl,
      UnitId: oilWell.UnitId,
      AlarmStatus: oilWell.AlarmStatus,
      AlarmCount: oilWell.AlarmCount
    });
    oilWells.push(ow);
  });

  var w = new Well({
    Name: well.Name,
    OilWells: oilWells
  });

  w.save(function (err, w) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + w.Name);
  });
});


async.each(oilWellActiveAlarms, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var owaa = new OilWellActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  owaa.save(function (err, owaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + owaa.Message);
  });
});


async.each(oilWellHistoricalAlarms, function(historicalAlarm){
  var dateSplit = historicalAlarm.Date.split('-');
  var timeSplit = historicalAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var owha = new OilWellHistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  owha.save(function (err, owha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + owha.Message);
  });
});
