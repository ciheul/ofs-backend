var mongoose = require('mongoose');

var wellSchema = mongoose.Schema({
  name: String,
  size: Number
});

module.exports = mongoose.model('Well', wellSchema);
