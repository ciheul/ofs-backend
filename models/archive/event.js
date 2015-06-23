var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  message: String,
  type: Number
});

module.exports = mongoose.model('Event', eventSchema);