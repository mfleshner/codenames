const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

var CardModel = require('./cards');
var all_cards = [];
var new_cards = [];

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

_shuffle = function(){
  shuffleArray(all_cards);
  var arr = [];
  while(arr.length < 25){
    var r = Math.floor(Math.random() * (all_cards.length-1));
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  for(var i = 0; i < 25; i++){
    new_cards[i] = all_cards[arr[i]];
    new_cards[i].selected = false;
  }
  var arr = [];
  while(arr.length < 25){
    var r = Math.floor(Math.random() * (new_cards.length));
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  for(var i = 0; i < 9; i++){
    new_cards[arr[i]].textColor = "blue";
    new_cards[arr[i]].backColor = "backblue";
  }
  for(var i = 9; i < 17; i++){
    new_cards[arr[i]].textColor = "red";
    new_cards[arr[i]].backColor = "backred";
  }
  for(var i = 17; i < 24; i++){
    new_cards[arr[i]].textColor = "yellow";
    new_cards[arr[i]].backColor = "backyellow";
  }
  new_cards[arr[24]].textColor = "black";
  new_cards[arr[24]].backColor = "backblack";

  console.log("server: 25 new cards!");
}

_newCards = function(){
  CardModel.find({}).lean().exec(function (err, cards) {
    if (err) console.log('Error getting cards:', err);
    else {
      all_cards = cards;
      _shuffle();
    }
  });
}
_newCards();

app.get('/cards', function (req, res) {
  res.json(new_cards);
});

app.get('/shuffle', function (req, res) {
  _newCards();
  res.json(new_cards);
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

/*app.put('/cards/update', function (req, res) {
  var item = req.body
    , model = CardModel;

  console.log('updating card ', item);
  model.findOneAndUpdate({ "_id": item._id }, {selected: item.selected}, function (err) {
    if (err) { console.log('Error finding item', err); res.status(502).end(); }
    else res.end();
  });
});*/

app.put('/cards/update', function (req, res) {
  var item = req.body;
  if(!new_cards[item.index].selected) new_cards[item.index].selected = true;
  else new_cards[item.index].selected = false;
  console.log(new_cards[item.index].word, new_cards[item.index].selected)
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