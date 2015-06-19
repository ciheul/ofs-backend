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

var unitSchema = mongoose.Schema({
  Name: String,
  SubstationUnits: [substationUnitSchema],
});

module.exports.SubstationUnit = mongoose.model('SubstationUnit', substationUnitSchema);
module.exports.Unit = mongoose.model('Units', unitSchema);