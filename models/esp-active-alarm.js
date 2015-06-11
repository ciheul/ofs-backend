var mongoose = require('mongoose');

var espActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('EspActiveAlarms', espActiveAlarmSchema);
