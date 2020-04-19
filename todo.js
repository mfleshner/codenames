const mongoose = require('mongoose');

var todoSchema = new mongoose.Schema(
  { name: String, kind: String, requester: String, email: String, date: { type: Date, default: Date.now } }
);

module.exports = mongoose.model('Todo', todoSchema);
