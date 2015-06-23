var mongoose = require('mongoose');

var espHistoricalAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('EspHistoricalAlarms', espHistoricalAlarmSchema);
