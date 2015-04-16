var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ofs');

var dummy = require('./dummy');

var Well = require('../models/well').Well;
var Plant = require('../models/well').Plant;


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
