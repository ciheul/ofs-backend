var mongoose = require('mongoose');

var wellSchema = mongoose.Schema({
  name: String,
  size: Number,
  status: String,
  status_name: Number,
});

var plantSchema = mongoose.Schema({
  name: String,
  bopd: Number,
  brl: Number,
  wells: [wellSchema],
});

module.exports.Well = mongoose.model('Well', wellSchema);
module.exports.Plant = mongoose.model('Plant', plantSchema);
