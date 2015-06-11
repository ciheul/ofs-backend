var mongoose = require('mongoose');

var substationSchema = mongoose.Schema({
  Name: String,
  Status: String,
  DetailUrl: String,
  AlarmCount: Number
});

module.exports.Well = mongoose.model('Substation', substationSchema);
