var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ofs');

var dummy = require('./dummy');
var dummy2 = require('./dummy2');

var Well = require('../models/well').Well;
var Plant = require('../models/well').Plant;

var Event = require('../models/event');

async.each(dummy.plants, function(plant) {
  var wells = [];
  async.each(plant.wells, function(well) {  	
    var w = new Well({
      name: well.name,
      size: well.size,
      status: well.status,
      status_name: well.status_name,
    });    
    wells.push(w);
  });

  var p = new Plant({
    name: plant.name,
    bopd: plant.bopd,
    brl: plant.brl,
    wells: wells,
  });

  p.save(function (err, p) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + p.name);
  });
});

async.each(dummy2.events, function(event){
  var e = new Event({
    message: event.message,
    type: event.type,
  });

  e.save(function (err, e){
    if (err) return console.error(err);
    console.log("SUCCESS => " + e.message);
  });
});
