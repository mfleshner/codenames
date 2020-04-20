const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

var CardModel = require('./cards');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var all_cards = [];
var new_cards = [];
var old_arr = [];
var spymaster = 0;
var turn = "Blue";

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

_pickCards = function(){
  var arr = [];
  while(arr.length < 25){
    var r = Math.floor(Math.random() * (all_cards.length-1));
    if((arr.indexOf(r) === -1) && (old_arr.indexOf(r) === -1)){ arr.push(r); old_arr.push(r);}
  }
  if(old_arr.length > 795) old_arr = [];
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
}

_shuffle = function(){
  shuffleArray(all_cards);
  _pickCards();
  console.log("server: 25 new cards!");
}

_newCards = function(){
  CardModel.find({}).lean().exec(function (err, cards) {
    if (err) console.log('Error getting cards:', err);
    else {
      all_cards = cards;
      _shuffle();
      spymaster = 0; //reset spymaster
    }
  });
}
_newCards();

app.get('/cards', function (req, res) {
  res.json(new_cards);
});

app.get('/shuffle', function (req, res) {
  //_newCards();
  _pickCards(); //don't reshuffle, just pick new cards
  res.json(new_cards);
  io.emit('next game');
});

app.get('/turn', function (req, res) {
  res.json(turn);
});

app.get('/spymasters', function (req, res) {
  res.json(spymaster);
});
app.put('/spymasters', function (req, res) {
  spymaster = 0;
  io.emit('spymaster', spymaster);
  io.emit('spymaster reset');
  res.end();
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

http.listen(80, () => {
  console.log('listening on: 80');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  //io.emit('spymaster', spymaster);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('card selected', (card) => {
    if(!new_cards[card].selected) new_cards[card].selected = true;
    else new_cards[card].selected = false;
    console.log('card: ' + card);
    io.emit('card selected', card);
  });
  socket.on('spymaster', (spy) => {
    if(spy) spymaster++;
    else if(spymaster > 0) spymaster--;
    io.emit('spymaster', spymaster);
    console.log('spymasters: ', spymaster);
  });
  socket.on('turn', (whoTurn) => {
    turn = whoTurn;
    io.emit('turn', turn);
  });
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