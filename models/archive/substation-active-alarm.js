var mongoose = require('mongoose');

var substationActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SubstationActiveAlarms', substationActiveAlarmSchema);
