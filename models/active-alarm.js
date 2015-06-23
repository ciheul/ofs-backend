var mongoose = require('mongoose');

var oilWellActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('WellActiveAlarms', oilWellActiveAlarmSchema);
