var mongoose = require('mongoose');

var substationEquActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SubstationEquActiveAlarms', substationEquActiveAlarmSchema);
