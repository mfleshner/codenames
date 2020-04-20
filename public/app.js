angular.module('codenames', []).controller('appController', function($scope, $http, $timeout, $q) {
  
  console.log("appController!");

  //$scope.cards = [{word:"Hollywood"},{word:"Well"},{word:"Foot"},{word:"NewYork"},{word:"Spring"},{word:"Court"},{word:"Tube"},{word:"Point"},{word:"Tablet"},{word:"Slip"},{word:"Date"},{word:"Drill"},{word:"Lemon"},{word:"Bell"},{word:"Screen"},{word:"Fair"},{word:"Torch"},{word:"State"},{word:"Match"},{word:"Iron"},{word:"Block"},{word:"France"},{word:"Australia"},{word:"Limousine"},{word:"Stream"},{word:"Glove"},{word:"Nurse"},{word:"Leprechaun"},{word:"Play"},{word:"Tooth"},{word:"Arm"},{word:"Bermuda"},{word:"Diamond"},{word:"Whale"},{word:"Comic"},{word:"Mammoth"},{word:"Green"},{word:"Pass"},{word:"Missile"},{word:"Paste"},{word:"Drop"},{word:"Pheonix"},{word:"Marble"},{word:"Staff"},{word:"Figure"},{word:"Park"},{word:"Centaur"},{word:"Shadow"},{word:"Fish"},{word:"Cotton"},{word:"Egypt"},{word:"Theater"},{word:"Scale"},{word:"Fall"},{word:"Track"},{word:"Force"},{word:"Dinosaur"},{word:"Bill"},{word:"Mine"},{word:"Turkey"},{word:"March"},{word:"Contract"},{word:"Bridge"},{word:"Robin"},{word:"Line"},{word:"Plate"},{word:"Band"},{word:"Fire"},{word:"Bank"},{word:"Boom"},{word:"Cat"},{word:"Shot"},{word:"Suit"},{word:"Chocolate"},{word:"Roulette"},{word:"Mercury"},{word:"Moon"},{word:"Net"},{word:"Lawyer"},{word:"Satellite"},{word:"Angel"},{word:"Spider"},{word:"Germany"},{word:"Fork"},{word:"Pitch"},{word:"King"},{word:"Crane"},{word:"Trip"},{word:"Dog"},{word:"Conductor"},{word:"Part"},{word:"Bugle"},{word:"Witch"},{word:"Ketchup"},{word:"Press"},{word:"Spine"},{word:"Worm"},{word:"Alps"},{word:"Bond"},{word:"Pan"},{word:"Beijing"},{word:"Racket"},{word:"Cross"},{word:"Seal"},{word:"Aztec"},{word:"Maple"},{word:"Parachute"},{word:"Hotel"},{word:"Berry"},{word:"Soldier"},{word:"Ray"},{word:"Post"},{word:"Greece"},{word:"Square"},{word:"Mass"},{word:"Bat"},{word:"Wave"},{word:"Car"},{word:"Smuggler"},{word:"England"},{word:"Crash"},{word:"Tail"},{word:"Card"},{word:"Horn"},{word:"Capital"},{word:"Fence"},{word:"Deck"},{word:"Buffalo"},{word:"Microscope"},{word:"Jet"},{word:"Duck"},{word:"Ring"},{word:"Train"},{word:"Field"},{word:"Gold"},{word:"Tick"},{word:"Check"},{word:"Queen"},{word:"Strike"},{word:"Kangaroo"},{word:"Spike"},{word:"Scientist"},{word:"Engine"},{word:"Shakespeare"},{word:"Wind"},{word:"Kid"},{word:"Embassy"},{word:"Robot"},{word:"Note"},{word:"Ground"},{word:"Draft"},{word:"Ham"},{word:"War"},{word:"Mouse"},{word:"Center"},{word:"Chick"},{word:"China"},{word:"Bolt"},{word:"Spot"},{word:"Piano"},{word:"Pupil"},{word:"Plot"},{word:"Lion"},{word:"Police"},{word:"Head"},{word:"Litter"},{word:"Concert"},{word:"Mug"},{word:"Vacuum"},{word:"Atlantis"},{word:"Straw"},{word:"Switch"},{word:"Skyscraper"},{word:"Laser"},{word:"Scuba"},{word:"Diver"},{word:"Africa"},{word:"Plastic"},{word:"Dwarf"},{word:"Lap"},{word:"Life"},{word:"Honey"},{word:"Horseshoe"},{word:"Unicorn"},{word:"Spy"},{word:"Pants"},{word:"Wall"},{word:"Paper"},{word:"Sound"},{word:"Ice"},{word:"Tag"},{word:"Web"},{word:"Fan"},{word:"Orange"},{word:"Temple"},{word:"Canada"},{word:"Scorpion"},{word:"Undertaker"},{word:"Mail"},{word:"Europe"},{word:"Soul"},{word:"Apple"},{word:"Pole"},{word:"Tap"},{word:"Mouth"},{word:"Ambulance"},{word:"Dress"},{word:"IceCream"},{word:"Rabbit"},{word:"Buck"},{word:"Agent"},{word:"Sock"},{word:"Nut"},{word:"Boot"},{word:"Ghost"},{word:"Oil"},{word:"Superhero"},{word:"Code"},{word:"Kiwi"},{word:"Hospital"},{word:"Saturn"},{word:"Film"},{word:"Button"},{word:"Snowman"},{word:"Helicopter"},{word:"LochNess"},{word:"Log"},{word:"Princess"},{word:"Time"},{word:"Cook"},{word:"Revolution"},{word:"Shoe"},{word:"Mole"},{word:"Spell"},{word:"Grass"},{word:"Washer"},{word:"Game"},{word:"Beat"},{word:"Hole"},{word:"Horse"},{word:"Pirate"},{word:"Link"},{word:"Dance"},{word:"Fly"},{word:"Pit"},{word:"Server"},{word:"School"},{word:"Lock"},{word:"Brush"},{word:"Pool"},{word:"Star"},{word:"Jam"},{word:"Organ"},{word:"Berlin"},{word:"Face"},{word:"Luck"},{word:"Amazon"},{word:"Cast"},{word:"Gas"},{word:"Club"},{word:"Sink"},{word:"Water"},{word:"Chair"},{word:"Shark"},{word:"Jupiter"},{word:"Copper"},{word:"Jack"},{word:"Platypus"},{word:"Stick"},{word:"Olive"},{word:"Grace"},{word:"Bear"},{word:"Glass"},{word:"Row"},{word:"Pistol"},{word:"London"},{word:"Rock"},{word:"Van"},{word:"Vet"},{word:"Beach"},{word:"Charge"},{word:"Port"},{word:"Disease"},{word:"Palm"},{word:"Moscow"},{word:"Pin"},{word:"Washington"},{word:"Pyramid"},{word:"Opera"},{word:"Casino"},{word:"Pilot"},{word:"String"},{word:"Night"},{word:"Chest"},{word:"Yard"},{word:"Teacher"},{word:"Pumpkin"},{word:"Thief"},{word:"Bark"},{word:"Bug"},{word:"Mint"},{word:"Cycle"},{word:"Telescope"},{word:"Calf"},{word:"Air"},{word:"Box"},{word:"Mount"},{word:"Thumb"},{word:"Antarctica"},{word:"Trunk"},{word:"Snow"},{word:"Penguin"},{word:"Root"},{word:"Bar"},{word:"File"},{word:"Hawk"},{word:"Battery"},{word:"Compound"},{word:"Slug"},{word:"Octopus"},{word:"Whip"},{word:"America"},{word:"Ivory"},{word:"Pound"},{word:"Sub"},{word:"Cliff"},{word:"Lab"},{word:"Eagle"},{word:"Genius"},{word:"Ship"},{word:"Dice"},{word:"Hood"},{word:"Heart"},{word:"Novel"},{word:"Pipe"},{word:"Himalayas"},{word:"Crown"},{word:"Round"},{word:"India"},{word:"Needle"},{word:"Shop"},{word:"Watch"},{word:"Lead"},{word:"Tie"},{word:"Table"},{word:"Cell"},{word:"Cover"},{word:"Czech"},{word:"Back"},{word:"Bomb"},{word:"Ruler"},{word:"Forest"},{word:"Bottle"},{word:"Space"},{word:"Hook"},{word:"Doctor"},{word:"Ball"},{word:"Bow"},{word:"Degree"},{word:"Rome"},{word:"Plane"},{word:"Giant"},{word:"Nail"},{word:"Dragon"},{word:"Stadium"},{word:"Flute"},{word:"Carrot"},{word:"Wake"},{word:"Fighter"},{word:"Model"},{word:"Tokyo"},{word:"Eye"},{word:"Mexico"},{word:"Hand"},{word:"Swing"},{word:"Key"},{word:"Alien"},{word:"Tower"},{word:"Poison"},{word:"Cricket"},{word:"Cold"},{word:"Knife"},{word:"Church"},{word:"Board"},{word:"Cloak"},{word:"Ninja"},{word:"Olympus"},{word:"Belt"},{word:"Light"},{word:"Death"},{word:"Stock"},{word:"Millionaire"},{word:"Day"},{word:"Knight"},{word:"Pie"},{word:"Bed"},{word:"Circle"},{word:"Rose"},{word:"Change"},{word:"Cap"},{word:"Triangle"}];
  //$scope.cards = [{word: "Drum"},{word:"Bride"},{word:"Wagon"},{word:"Univerity"},{word:"Hit"},{word:"Ash"},{word:"Bass"},{word:"Astronaut"},{word:"Doll"},{word:"Nerve"},{word:"Coach"},{word:"Beam"},{word:"Spoon"},{word:"CountryNose"},{word:"King"},{word:"Arthur"},{word:"Stamp"},{word:"Camp"},{word:"Brain"},{word:"Leaf"},{word:"Tutu"},{word:"Coast"},{word:"Lunch"},{word:"Thunder"},{word:"Potato"},{word:"Desk"},{word:"Onion"},{word:"Elephant"},{word:"Anchor"},{word:"Cowboy"},{word:"Flood"},{word:"Mohawk"},{word:"Santa"},{word:"Pitcher"},{word:"Barbecue"},{word:"Leather"},{word:"Skates"},{word:"Musketeer"},{word:"Snap"},{word:"Saddle"},{word:"Genie"},{word:"MarkShoulder"},{word:"Governor"},{word:"Manicure"},{word:"Anthem"},{word:"Halloween"},{word:"Newton"},{word:"Balloon"},{word:"Fiddle"},{word:"Craft"},{word:"Glacier"},{word:"Cake"},{word:"Rat"},{word:"Tank"},{word:"Blind"},{word:"Spirit"},{word:"Cable"},{word:"Swamp"},{word:"Einstein"},{word:"Hide"},{word:"Crystal"},{word:"Gear"},{word:"Kiss"},{word:"Pew"},{word:"Powder"},{word:"Turtle"},{word:"Bacon"},{word:"Sherlock"},{word:"Squash"},{word:"Book"},{word:"Razor"},{word:"Dressing"},{word:"Brick"},{word:"Brazil"},{word:"Tear"},{word:"Stable"},{word:"Bikini"},{word:"Pen"},{word:"Roll"},{word:"Christmas"},{word:"Rubber"},{word:"Bay"},{word:"Mother"},{word:"Kick"},{word:"Fog"},{word:"Radio"},{word:"Crab"},{word:"Cone"},{word:"Skull"},{word:"Wheelchair"},{word:"Egg"},{word:"Butter"},{word:"Werewolf"},{word:"Cherry"},{word:"Patient"},{word:"Dryer"},{word:"Drawing"},{word:"Boss"},{word:"Fever"},{word:"Banana"},{word:"Polish"},{word:"Knot"},{word:"Paint"},{word:"Storm"},{word:"Goldilocks"},{word:"Pillow"},{word:"Chain"},{word:"Moses"},{word:"Saw"},{word:"Brother"},{word:"Rail"},{word:"Rope"},{word:"Street"},{word:"Pad"},{word:"Captain"},{word:"Wish"},{word:"Axe"},{word:"Shorts"},{word:"Popcorn"},{word:"Castle"},{word:"Second"},{word:"Team"},{word:"Oasis"},{word:"Mess"},{word:"Miss"},{word:"Avalanche"},{word:"Texas"},{word:"Sun"},{word:"Letter"},{word:"Rust"},{word:"Wing"},{word:"Steel"},{word:"Ear"},{word:"Scroll"},{word:"Bunk"},{word:"Cane"},{word:"Venus"},{word:"Ladder"},{word:"Purse"},{word:"Sheet"},{word:"Napoleon"},{word:"Sugar"},{word:"Director"},{word:"Ace"},{word:"Scratch"},{word:"Bucket"},{word:"Caesar"},{word:"Disk"},{word:"Beard"},{word:"Bulb"},{word:"Bench"},{word:"Scarecrow"},{word:"Igloo"},{word:"Tuxedo"},{word:"Earth"},{word:"Ram"},{word:"Sister"},{word:"Bread"},{word:"Record"},{word:"Dash"},{word:"Greenhouse"},{word:"Drone"},{word:"Steam"},{word:"Biscuit"},{word:"Rip"},{word:"NotreDame"},{word:"LipShampoo"},{word:"Cheese"},{word:"Sack"},{word:"Mountie"},{word:"Sumo"},{word:"Sahara"},{word:"Walrus"},{word:"Dust"},{word:"Hammer"},{word:"Cloud"},{word:"Spray"},{word:"St.Patrick"},{word:"Kilt"},{word:"Monkey"},{word:"Frog"},{word:"Dentist"},{word:"Rainbow"},{word:"Whistle"},{word:"Reindeer"},{word:"Kitchen"},{word:"Lemonade"},{word:"Slipper"},{word:"Floor"},{word:"Valentine"},{word:"Pepper"},{word:"Road"},{word:"Shed"},{word:"Bowler"},{word:"Milk"},{word:"Wheel"},{word:"Magazine"},{word:"Brass"},{word:"Tea"},{word:"Helmet"},{word:"Flag"},{word:"Troll"},{word:"Jail"},{word:"Sticker"},{word:"Puppet"},{word:"Chalk"},{word:"Bonsai"},{word:"Sweat"},{word:"Gangster"},{word:"Butterfly"},{word:"Story"},{word:"Salad"},{word:"Armor"},{word:"Smoke"},{word:"Cave"},{word:"Quack"},{word:"Break"},{word:"Snake"},{word:"Mill"},{word:"Gymnast"},{word:"Wonderland"},{word:"Driver"},{word:"Spurs"},{word:"Zombie"},{word:"Pig"},{word:"Cleopatra"},{word:"Toast"},{word:"Penny"},{word:"Ant"},{word:"Volume"},{word:"Lace"},{word:"Battleship"},{word:"Maracas"},{word:"Meter"},{word:"Sling"},{word:"Delta"},{word:"Step"},{word:"Arc"},{word:"Comet"},{word:"Bath"},{word:"Polo"},{word:"Gum"},{word:"Vampire"},{word:"Ski"},{word:"Pocket"},{word:"Battle"},{word:"Foam"},{word:"Rodeo"},{word:"Squirrel"},{word:"Salt"},{word:"Mummy"},{word:"Blacksmith"},{word:"Chip"},{word:"Goat"},{word:"Laundry"},{word:"Bee"},{word:"Tattoo"},{word:"Russia"},{word:"Tin"},{word:"Map"},{word:"Yellowstone"},{word:"Silk"},{word:"Hose"},{word:"Sloth"},{word:"KungFu"},{word:"Clock"},{word:"Bean"},{word:"Lightning"},{word:"Bowl"},{word:"Guitar"},{word:"Ranch"},{word:"Pearl"},{word:"Flat"},{word:"Virus"},{word:"IceAge"},{word:"Coffee"},{word:"Marathon"},{word:"Attic"},{word:"Wedding"},{word:"Columbus"},{word:"Pop"},{word:"Sherwood"},{word:"Trick"},{word:"Nylon"},{word:"Locust"},{word:"Pacific"},{word:"Cuckoo"},{word:"Tornado"},{word:"Memory"},{word:"Jockey"},{word:"Minotaur"},{word:"BigBang"},{word:"Page"},{word:"Sphinx"},{word:"Crusader"},{word:"Volcano"},{word:"Rifle"},{word:"Boil"},{word:"Hair"},{word:"Bicycle"},{word:"Jumper"},{word:"Smoothie"},{word:"Sleep"},{word:"Pentagon"},{word:"Groom"},{word:"River"},{word:"Farm"},{word:"Judge"},{word:"Viking"},{word:"Easter"},{word:"Mud"},{word:"Parrot"},{word:"Comb"},{word:"Salsa"},{word:"Eden"},{word:"Army"},{word:"Paddle"},{word:"Saloon"},{word:"MonaLisa"},{word:"Mile"},{word:"Blizzard"},{word:"Quarter"},{word:"Jeweler"},{word:"Hamburger"},{word:"Glasses"},{word:"Sail"},{word:"Boxer"},{word:"Rice"},{word:"Mirror"},{word:"Ink"},{word:"Beer"},{word:"Tipi"},{word:"Makeup"},{word:"Microwave"},{word:"Hercules"},{word:"Sign"},{word:"Pizza"},{word:"Wool"},{word:"Homer"},{word:"Minute"},{word:"Sword"},{word:"Soup"},{word:"Alaska"},{word:"Baby"},{word:"Potter"},{word:"Shower"},{word:"Blade"},{word:"Noah"},{word:"Soap"},{word:"Tunnel"},{word:"Peach"},{word:"Dollar"},{word:"Tip"},{word:"Love"},{word:"Jellyfish"},{word:"Stethoscope"},{word:"Taste"},{word:"Fuel"},{word:"Mosquito"},{word:"Wizard"},{word:"BigBen"},{word:"Garden"},{word:"Waitress"},{word:"Shoot"},{word:"Shell"},{word:"Lumberjack"},{word:"Medic"},{word:"Dream"},{word:"Blues"},{word:"Earthquake"},{word:"Pea"},{word:"Parade"},{word:"Sled"},{word:"Smell"},{word:"Computer"},{word:"Cow"},{word:"Peanut"},{word:"Window"},{word:"Mustard"},{word:"Sand"},{word:"Golf"},{word:"Crow"},{word:"Iceland"},{word:"Apron"},{word:"Violet"},{word:"Door"},{word:"Tiger"},{word:"Joker"},{word:"House"},{word:"Collar"},{word:"Hawaii"},{word:"Dwarf"},{word:"Pine"},{word:"Magician"},{word:"Frost"},{word:"Curry"},{word:"Bubble"},{word:"Wood"}];
  
var socket = io();
  $scope.spymaster = false;
  $scope.masters = 0;
  $scope.red = $scope.blue = 0;
  $scope.title = "Code Fleshy";

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

  function _addNewCards(){ //add new cards to dictionary when necessary
    for(var i = 0; i < $scope.cards.length; i++){
      $http.put('/cards', $scope.cards[i]).then(
        function(res) { },
        function (err) { console.log('Error saving list item'); }
      );
    }
  }

  function _getCards() {
    //_addNewCards();
    $http.get('/cards').then(
      function(res) { $scope.cards = res.data; _remaining();},
      function (err) { console.log('Error getting cards'); }
    );
    $http.get('/spymasters').then(
      function(res) { $scope.masters = res.data; console.log("Get Spymasters: ", $scope.masters);},
      function (err) { console.log('Error getting cards'); }
    );
  }
  _getCards();

  $scope.reset = function(){
    $http.put('/spymasters').then(
      function(res) { },
      function (err) { console.log('Error resetting spymasters'); }
    );
  }

  $scope.role = function(role){
    var old = $scope.spymaster;
    if(role == 'spymaster' && ($scope.masters < 2)){
      $scope.spymaster = true;
      socket.emit('spymaster', $scope.spymaster);
    }
    else if(role == "agent" && old){
      $scope.spymaster = false;
      socket.emit('spymaster', $scope.spymaster);
    }
  }

  $scope.nextGame = function(){
    $http.get('/shuffle').then(
      function(res) { $scope.cards = res.data;},
      function (err) { console.log('Error shuffling'); }
    );
    $scope.title = "Code Fleshy";
  }

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

  socket.on('spymaster', function(masters){ //new spymaster added
    $http.get('/spymasters').then(
      function(res) { $scope.masters = res.data; console.log("Get Spymasters: ", $scope.masters);},
      function (err) { console.log('Error getting cards'); }
    );
  });
  socket.on('spymaster reset', function(card){ //card selected
    $scope.spymaster = false;
  });
  socket.on('card selected', function(card){ //card selected
    _getCards();
  });
  socket.on('next game', function(){ //new game
    $scope.spymaster = false;
    $scope.title = "Code Fleshy";
    _getCards();
  });

});
