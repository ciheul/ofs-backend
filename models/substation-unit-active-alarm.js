var mongoose = require('mongoose');

var substationUnitActiveAlarmSchema = mongoose.Schema({
  Date: String,
  Time: String,
  Timestamp: Date,
  Equipment: String,
  Message: String
});

module.exports = mongoose.model('SubstationUnitActiveAlarms', substationUnitActiveAlarmSchema);
