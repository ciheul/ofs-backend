var mongoose = require('mongoose');

var activeAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('ActiveAlarms', activeAlarmSchema);
