var mongoose = require('mongoose');

var substationSchema = mongoose.Schema({
  Name: String,
  Status: String,
  DetailUrl: String,
  AlarmCount: Number
});

var detailSchema = mongoose.Schema({
  Name: String,
  Substations: [substationSchema],
});

module.exports.Substation = mongoose.model('Substation', substationSchema);
module.exports.Detail = mongoose.model('Details', detailSchema);
