const mongoose = require('mongoose');

var completeSchema = new mongoose.Schema(
  { name: String, kind: String, requester: String, email: String, notes: String, date: { type: Date, default: Date.now } }
);

module.exports = mongoose.model('Complete', completeSchema);
