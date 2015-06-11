var mongoose = require('mongoose');

var oilWellSchema = mongoose.Schema({
  Name: String,
  GroupName: String,
  Size: Number,
  Status: String,
  DetailUrl: String,
  UnitId: String,
  AlarmStatus: String,
  AlarmCount: Number
});

var wellSchema = mongoose.Schema({
  Name: String,
  // bopd: Number,
  // brl: Number,
  OilWells: [oilWellSchema],
});

module.exports.OilWell = mongoose.model('OilWell', oilWellSchema);
module.exports.Well = mongoose.model('Wells', wellSchema);
