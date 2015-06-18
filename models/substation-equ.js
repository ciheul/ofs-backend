var mongoose = require('mongoose');

var substationEquSchema = mongoose.Schema({
	TimeStamp: String,
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
	PowerApparent: Number,
	PowerReactive: Number,
	PowerReal: Number,
	THDAverage: Number,
	THDR: Number,
	THDS: Number,
	THDT: Number,
	EnergyTotalizer: Number 
});

module.exports = mongoose.model('substationEqu', substationEquSchema);
