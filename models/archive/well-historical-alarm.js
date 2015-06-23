var mongoose = require('mongoose');

var oilWellHistoricalAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('WellHistoricalAlarms', oilWellHistoricalAlarmSchema);
