const mongoose = require('mongoose');

var cardsSchema = new mongoose.Schema(
  { word: String, textColor: String, backColor: String, selected: Boolean }
);

module.exports = mongoose.model('Cards', cardsSchema);
