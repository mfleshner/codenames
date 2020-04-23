const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

var CardModel = require('./cards');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var database = [{all_cards: [], new_cards: [], old_arr: [], spymaster: 0, turn: "Blue", death_win: "", players: 0},
                 {all_cards: [], new_cards: [], old_arr: [], spymaster: 0, turn: "Blue", death_win: "", players: 0},
                 {all_cards: [], new_cards: [], old_arr: [], spymaster: 0, turn: "Blue", death_win: "", players: 0},
                 {all_cards: [], new_cards: [], old_arr: [], spymaster: 0, turn: "Blue", death_win: "", players: 0}];
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

_pickCards = function(server){
  var arr = [];
  while(arr.length < 25){
    var r = Math.floor(Math.random() * (database[server].all_cards.length-1));
    if((arr.indexOf(r) === -1) && (database[server].old_arr.indexOf(r) === -1)){ arr.push(r); database[server].old_arr.push(r);}
  }
  if(database[server].old_arr.length > 795) database[server].old_arr = [];
  for(var i = 0; i < 25; i++){
    database[server].new_cards[i] = database[server].all_cards[arr[i]];
    database[server].new_cards[i].selected = false;
  }
  var arr = [];
  while(arr.length < 25){
    var r = Math.floor(Math.random() * (database[server].new_cards.length));
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  for(var i = 0; i < 9; i++){
    database[server].new_cards[arr[i]].textColor = "blue";
    database[server].new_cards[arr[i]].backColor = "backblue";
  }
  for(var i = 9; i < 17; i++){
    database[server].new_cards[arr[i]].textColor = "red";
    database[server].new_cards[arr[i]].backColor = "backred";
  }
  for(var i = 17; i < 24; i++){
    database[server].new_cards[arr[i]].textColor = "yellow";
    database[server].new_cards[arr[i]].backColor = "backyellow";
  }
  database[server].new_cards[arr[24]].textColor = "black";
  database[server].new_cards[arr[24]].backColor = "backblack";
}

_shuffle = function(server){
  shuffleArray(database[server].all_cards);
  _pickCards(server);
  console.log("server: 25 new cards created on: ", server);
}

_newCards = function(server){
  console.log("Getting Cards...");
  CardModel.find({}).lean().exec(function (err, cards) {
    if (err) console.log('Error getting cards:', err);
    else {
      database[server].all_cards = cards;
      if(database[server].all_cards.length > 1) _shuffle(server);
      database[server].spymaster = 0; //reset spymaster
    }
  });
}
//_newCards();

_eachServer = function(){
  for(var i = 0; i < database.length; i++){
    _newCards(i);
  }
}
_eachServer();

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

http.listen(8090, () => {
  console.log('listening on: 8090');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  //io.emit('spymaster', database[0].spymaster); //send spymaster count
  //io.emit('get cards', database[0].new_cards); //send current cards
  //io.emit('turn', database[0].turn); //send current turn
  //io.emit('players', database[0].players); //send player count
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('players', database[0].players); //send player count
  });
  socket.on('card selected', (card, db) => {
    if(!database[db].new_cards[card].selected) database[db].new_cards[card].selected = true;
    else database[db].new_cards[card].selected = false;
    io.emit('card selected', database[db].new_cards, db);
  });
  socket.on('spymaster', (spy, db) => {
    if(spy) database[db].spymaster++;
    else if(database[db].spymaster > 0) database[db].spymaster--;
    io.emit('spymaster', database[db].spymaster, db);
  });
  socket.on('turn', (whoTurn, db) => {
    database[db].turn = whoTurn;
    io.emit('turn', database[db].turn, db);
  });
  socket.on('death card', (death, db) => {
    database[db].death_win = death;
    io.emit('death card', database[db].death_win, db);
  });
  socket.on('shuffle', (db) => {
    _pickCards(db); //don't reshuffle, just pick new cards
    io.emit('next game', database[db].new_cards, db);
  });
  socket.on('reset', (db) => {
    database[db].spymaster = 0;
    database[db].turn = "Blue";
    io.emit('spymaster reset', db);
  });
  socket.on('database', (db) => {
    database[db].players++;
    io.emit('players', database[db].players, db); //send player count
    io.emit('spymaster', database[db].spymaster, db); //send spymaster count
    io.emit('get cards', database[db].new_cards, db); //send current cards
    io.emit('turn', database[db].turn, db); //send current turn
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