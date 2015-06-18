var mongoose = require('mongoose');

var espSchema = mongoose.Schema({
	TimeStamp: String,
	EquipmentID: String,
	ContactorStatus: Number,
	VSDStatus: Number,
	VSDStatusMessage: String,
	VSDFrequency: Number,
	OutputPower: Number,
	VoltageAverage: Number,
	VoltageR: Number,
	VoltageS: Number,
	VoltageT: Number,
	VoltageUnbalance: Number,
	CurrentAverage: Number,
	CurrentR: Number,
	CurrentS: Number,
	CurrentT: Number,
	CurrentUnbalance: Number,
	PumpIntakePressureBar: Number,
	CasingHeadPressureBar: Number,
	TubingHeadPressureBar: Number,
	EstProdRateBPH: Number,
	Validity: String
});

module.exports = mongoose.model('Esp', espSchema);
