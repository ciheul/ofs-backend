var mongoose = require('mongoose');

var eventSchema = mongoose.Schema({
  message: String,
  type: Number,
});

module.exports.Event = mongoose.model('Event', wellSchema);