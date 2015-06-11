var mongoose = require('mongoose');

var srpActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SrpActiveAlarms', srpActiveAlarmSchema);
