const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

var CardModel = require('./cards');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

_newCards = function(){
  CardModel.find({}).lean().exec(function (err, cards) {
    if (err) console.log('Error getting cards:', err);
    else {
      console.log(cards);
    }
  });
}
_newCards();

app.get('/cards', function (req, res) {
  var model = CardModel;
  
  model.find({}).lean().exec(function (err, cards) {
    if (err) console.log('Error getting cards:', err);
    else res.json(cards);
  });
});

app.put('/cards', function (req, res) {
  var item = req.body
    , model = CardModel;
    
  console.log('Adding card ', item);
  var instance = new model(item);
  instance.save(function (err) {
    if (err) { console.log('Error saving to card'); res.status(502).end(); }
    else res.end();
  });
});

app.put('/cards/update', function (req, res) {
  var item = req.body
    , model = CardModel;

  console.log('updating card ', item);
  model.findOneAndUpdate({ "_id": item._id }, {selected: item.selected}, function (err) {
    if (err) { console.log('Error finding item', err); res.status(502).end(); }
    else res.end();
  });
});

app.listen(80, function () {
  console.log('Server listening on port 80')
});

mongoose.connect('mongodb://localhost/codenames', { useNewUrlParser: true }).then(
  function (db) {
    app.db = mongoose.connection;
    console.log('Connected to the database!!');
  },
  function (err) {
    console.log('Error connecting to the database!');
  }
);