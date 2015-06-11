var mongoose = require('mongoose');

var srpSchema = mongoose.Schema({
	FR601_TimeStamp: null,
	EquipmentID: null,
	FR601_ContactorStatus: Number,
	SPM: Number,
	PPRL: Number,
	MPRL: Number,
	PumpFillage: Number,
	CycleCounter: Number,
	FR601_EstProdRateBPH: Number,
	FR601_Validity: null,
	FR602_TimeStamp: String,
	FR602_ContactorStatus: Number,
	PMStatus: Number,
	VoltageAverage: Number,
	VoltageMax: Number,
	VoltageMin: Number,
	VoltageUnbalance: Number,
	CurrentAverage: Number,
	CurrentMax: Number,
	CurrentMin: Number,
	CurrentUnbalance: Number,
	PowerAverage: Number,
	PowerMax: Number,
	PowerMin: Number,
	StrokeEnergyWH: Number,
	FR602_EstProdRateBPH: Number,
	FR602_Validity: String
});

module.exports = mongoose.model('Srp', srpSchema);
