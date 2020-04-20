angular.module('codenames', []).controller('appController', function($scope, $http, $timeout, $q) {
  
  console.log("appController!");

  //$scope.cards = [{word:"Hollywood"},{word:"Well"},{word:"Foot"},{word:"NewYork"},{word:"Spring"},{word:"Court"},{word:"Tube"},{word:"Point"},{word:"Tablet"},{word:"Slip"},{word:"Date"},{word:"Drill"},{word:"Lemon"},{word:"Bell"},{word:"Screen"},{word:"Fair"},{word:"Torch"},{word:"State"},{word:"Match"},{word:"Iron"},{word:"Block"},{word:"France"},{word:"Australia"},{word:"Limousine"},{word:"Stream"},{word:"Glove"},{word:"Nurse"},{word:"Leprechaun"},{word:"Play"},{word:"Tooth"},{word:"Arm"},{word:"Bermuda"},{word:"Diamond"},{word:"Whale"},{word:"Comic"},{word:"Mammoth"},{word:"Green"},{word:"Pass"},{word:"Missile"},{word:"Paste"},{word:"Drop"},{word:"Pheonix"},{word:"Marble"},{word:"Staff"},{word:"Figure"},{word:"Park"},{word:"Centaur"},{word:"Shadow"},{word:"Fish"},{word:"Cotton"},{word:"Egypt"},{word:"Theater"},{word:"Scale"},{word:"Fall"},{word:"Track"},{word:"Force"},{word:"Dinosaur"},{word:"Bill"},{word:"Mine"},{word:"Turkey"},{word:"March"},{word:"Contract"},{word:"Bridge"},{word:"Robin"},{word:"Line"},{word:"Plate"},{word:"Band"},{word:"Fire"},{word:"Bank"},{word:"Boom"},{word:"Cat"},{word:"Shot"},{word:"Suit"},{word:"Chocolate"},{word:"Roulette"},{word:"Mercury"},{word:"Moon"},{word:"Net"},{word:"Lawyer"},{word:"Satellite"},{word:"Angel"},{word:"Spider"},{word:"Germany"},{word:"Fork"},{word:"Pitch"},{word:"King"},{word:"Crane"},{word:"Trip"},{word:"Dog"},{word:"Conductor"},{word:"Part"},{word:"Bugle"},{word:"Witch"},{word:"Ketchup"},{word:"Press"},{word:"Spine"},{word:"Worm"},{word:"Alps"},{word:"Bond"},{word:"Pan"},{word:"Beijing"},{word:"Racket"},{word:"Cross"},{word:"Seal"},{word:"Aztec"},{word:"Maple"},{word:"Parachute"},{word:"Hotel"},{word:"Berry"},{word:"Soldier"},{word:"Ray"},{word:"Post"},{word:"Greece"},{word:"Square"},{word:"Mass"},{word:"Bat"},{word:"Wave"},{word:"Car"},{word:"Smuggler"},{word:"England"},{word:"Crash"},{word:"Tail"},{word:"Card"},{word:"Horn"},{word:"Capital"},{word:"Fence"},{word:"Deck"},{word:"Buffalo"},{word:"Microscope"},{word:"Jet"},{word:"Duck"},{word:"Ring"},{word:"Train"},{word:"Field"},{word:"Gold"},{word:"Tick"},{word:"Check"},{word:"Queen"},{word:"Strike"},{word:"Kangaroo"},{word:"Spike"},{word:"Scientist"},{word:"Engine"},{word:"Shakespeare"},{word:"Wind"},{word:"Kid"},{word:"Embassy"},{word:"Robot"},{word:"Note"},{word:"Ground"},{word:"Draft"},{word:"Ham"},{word:"War"},{word:"Mouse"},{word:"Center"},{word:"Chick"},{word:"China"},{word:"Bolt"},{word:"Spot"},{word:"Piano"},{word:"Pupil"},{word:"Plot"},{word:"Lion"},{word:"Police"},{word:"Head"},{word:"Litter"},{word:"Concert"},{word:"Mug"},{word:"Vacuum"},{word:"Atlantis"},{word:"Straw"},{word:"Switch"},{word:"Skyscraper"},{word:"Laser"},{word:"Scuba"},{word:"Diver"},{word:"Africa"},{word:"Plastic"},{word:"Dwarf"},{word:"Lap"},{word:"Life"},{word:"Honey"},{word:"Horseshoe"},{word:"Unicorn"},{word:"Spy"},{word:"Pants"},{word:"Wall"},{word:"Paper"},{word:"Sound"},{word:"Ice"},{word:"Tag"},{word:"Web"},{word:"Fan"},{word:"Orange"},{word:"Temple"},{word:"Canada"},{word:"Scorpion"},{word:"Undertaker"},{word:"Mail"},{word:"Europe"},{word:"Soul"},{word:"Apple"},{word:"Pole"},{word:"Tap"},{word:"Mouth"},{word:"Ambulance"},{word:"Dress"},{word:"IceCream"},{word:"Rabbit"},{word:"Buck"},{word:"Agent"},{word:"Sock"},{word:"Nut"},{word:"Boot"},{word:"Ghost"},{word:"Oil"},{word:"Superhero"},{word:"Code"},{word:"Kiwi"},{word:"Hospital"},{word:"Saturn"},{word:"Film"},{word:"Button"},{word:"Snowman"},{word:"Helicopter"},{word:"LochNess"},{word:"Log"},{word:"Princess"},{word:"Time"},{word:"Cook"},{word:"Revolution"},{word:"Shoe"},{word:"Mole"},{word:"Spell"},{word:"Grass"},{word:"Washer"},{word:"Game"},{word:"Beat"},{word:"Hole"},{word:"Horse"},{word:"Pirate"},{word:"Link"},{word:"Dance"},{word:"Fly"},{word:"Pit"},{word:"Server"},{word:"School"},{word:"Lock"},{word:"Brush"},{word:"Pool"},{word:"Star"},{word:"Jam"},{word:"Organ"},{word:"Berlin"},{word:"Face"},{word:"Luck"},{word:"Amazon"},{word:"Cast"},{word:"Gas"},{word:"Club"},{word:"Sink"},{word:"Water"},{word:"Chair"},{word:"Shark"},{word:"Jupiter"},{word:"Copper"},{word:"Jack"},{word:"Platypus"},{word:"Stick"},{word:"Olive"},{word:"Grace"},{word:"Bear"},{word:"Glass"},{word:"Row"},{word:"Pistol"},{word:"London"},{word:"Rock"},{word:"Van"},{word:"Vet"},{word:"Beach"},{word:"Charge"},{word:"Port"},{word:"Disease"},{word:"Palm"},{word:"Moscow"},{word:"Pin"},{word:"Washington"},{word:"Pyramid"},{word:"Opera"},{word:"Casino"},{word:"Pilot"},{word:"String"},{word:"Night"},{word:"Chest"},{word:"Yard"},{word:"Teacher"},{word:"Pumpkin"},{word:"Thief"},{word:"Bark"},{word:"Bug"},{word:"Mint"},{word:"Cycle"},{word:"Telescope"},{word:"Calf"},{word:"Air"},{word:"Box"},{word:"Mount"},{word:"Thumb"},{word:"Antarctica"},{word:"Trunk"},{word:"Snow"},{word:"Penguin"},{word:"Root"},{word:"Bar"},{word:"File"},{word:"Hawk"},{word:"Battery"},{word:"Compound"},{word:"Slug"},{word:"Octopus"},{word:"Whip"},{word:"America"},{word:"Ivory"},{word:"Pound"},{word:"Sub"},{word:"Cliff"},{word:"Lab"},{word:"Eagle"},{word:"Genius"},{word:"Ship"},{word:"Dice"},{word:"Hood"},{word:"Heart"},{word:"Novel"},{word:"Pipe"},{word:"Himalayas"},{word:"Crown"},{word:"Round"},{word:"India"},{word:"Needle"},{word:"Shop"},{word:"Watch"},{word:"Lead"},{word:"Tie"},{word:"Table"},{word:"Cell"},{word:"Cover"},{word:"Czech"},{word:"Back"},{word:"Bomb"},{word:"Ruler"},{word:"Forest"},{word:"Bottle"},{word:"Space"},{word:"Hook"},{word:"Doctor"},{word:"Ball"},{word:"Bow"},{word:"Degree"},{word:"Rome"},{word:"Plane"},{word:"Giant"},{word:"Nail"},{word:"Dragon"},{word:"Stadium"},{word:"Flute"},{word:"Carrot"},{word:"Wake"},{word:"Fighter"},{word:"Model"},{word:"Tokyo"},{word:"Eye"},{word:"Mexico"},{word:"Hand"},{word:"Swing"},{word:"Key"},{word:"Alien"},{word:"Tower"},{word:"Poison"},{word:"Cricket"},{word:"Cold"},{word:"Knife"},{word:"Church"},{word:"Board"},{word:"Cloak"},{word:"Ninja"},{word:"Olympus"},{word:"Belt"},{word:"Light"},{word:"Death"},{word:"Stock"},{word:"Millionaire"},{word:"Day"},{word:"Knight"},{word:"Pie"},{word:"Bed"},{word:"Circle"},{word:"Rose"},{word:"Change"},{word:"Cap"},{word:"Triangle"}];
  var socket = io();
  $scope.spymaster = false;
  $scope.red = $scope.blue = 0;
  $scope.title = "Code Fleshy";
  //socket.emit('spymaster', $scope.spymaster);

  _gameover = function(){
    if($scope.red == 0) $scope.title = "RED WINS!!!";
    else if($scope.blue == 0) $scope.title = "BLUE WINS!!!";
  }

  function _remaining(){
    $scope.red = $scope.blue = 0;
    for(var i = 0; i < $scope.cards.length; i++){
      if($scope.cards[i].textColor == "red" && !$scope.cards[i].selected) $scope.red++;
      else if($scope.cards[i].textColor == "blue" && !$scope.cards[i].selected) $scope.blue++;
    }
    if($scope.red == 0 || $scope.blue == 0) _gameover();
  }

  function _getCards() {
    /*for(var i = 0; i < $scope.cards.length; i++){
      $http.put('/cards', $scope.cards[i]).then(
        function(res) { },
        function (err) { console.log('Error saving list item'); }
      );
    }*/
    $http.get('/cards').then(
      function(res) { $scope.cards = res.data; _remaining();},
      function (err) { console.log('Error getting cards'); }
    );
  }
  _getCards();

  $scope.reset = function(){
    
  }

  $scope.role = function(role){
    var old = $scope.spymaster;
    if(role == 'spymaster' && ($scope.masters < 2)){
      $scope.spymaster = true;
      //socket.emit('spymaster', $scope.spymaster);
    }
    else if(role == "agent" && old){
      $scope.spymaster = false;
      //socket.emit('spymaster', $scope.spymaster);
    }
    
    //only allow two spymasters. add code below
  }

  $scope.nextGame = function(){
    $http.get('/shuffle').then(
      function(res) { $scope.cards = res.data;},
      function (err) { console.log('Error shuffling'); }
    );
    $scope.title = "Code Fleshy";
  }

  socket.on('spymaster', function(masters){
    $scope.masters = masters;
    console.log("Spymasters: ", $scope.masters);
  });

  $scope.select = function(card){
    if(!card.selected){
      if(card.textColor == "red") $scope.red--;
      else if(card.textColor == "blue") $scope.blue--;
    }
    else{
      if(card.textColor == "red") $scope.red++;
      else if(card.textColor == "blue") $scope.blue++;
    }
    socket.emit('card selected', $scope.cards.indexOf(card));
    if($scope.red == 0 || $scope.blue == 0) _gameover();
  }

  socket.on('card selected', function(card){
    _getCards();
  });
  socket.on('next game', function(){
    $scope.spymaster = false;
    $scope.title = "Code Fleshy";
    _getCards();
  });

});
