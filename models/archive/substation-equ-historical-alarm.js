var mongoose = require('mongoose');

var substationEquHistoricalAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SubstationEquHistorical', substationEquHistoricalAlarmSchema);