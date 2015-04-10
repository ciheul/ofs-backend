var mongoose = require('mongoose');

var trafoSchema = mongoose.Schema({
  name: String,
  size: Number
});

module.exports = mongoose.model('Trafo', trafoSchema);
