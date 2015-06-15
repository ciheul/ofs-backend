var mongoose = require('mongoose');

var substationUnitSchema = mongoose.Schema({
	Name: String,
	GroupName: String,
	Size: Number,
	Status: String,
	DetailUrl: String,
	UnitId: String,
	AlarmStatus: Number,
	AlarmCount: Number
});

var subSchema = mongoose.Schema({
  Name: String,
  Substation: [substationUnitSchema],
});

module.exports.unit = mongoose.model('substationUnitSchema', oilWellSchema);
module.exports.sub = mongoose.model('subSchema', wellSchema);