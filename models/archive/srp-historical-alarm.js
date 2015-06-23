var mongoose = require('mongoose');

var srpHistoricalAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SrpHistoricalAlarms', srpHistoricalAlarmSchema);
