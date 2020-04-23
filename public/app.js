angular.module('codenames', []).controller('appController', function($scope, $http, $timeout, $q) {
  
  console.log("appController!");

  //$scope.cards = [{word:"Hollywood"},{word:"Well"},{word:"Foot"},{word:"NewYork"},{word:"Spring"},{word:"Court"},{word:"Tube"},{word:"Point"},{word:"Tablet"},{word:"Slip"},{word:"Date"},{word:"Drill"},{word:"Lemon"},{word:"Bell"},{word:"Screen"},{word:"Fair"},{word:"Torch"},{word:"State"},{word:"Match"},{word:"Iron"},{word:"Block"},{word:"France"},{word:"Australia"},{word:"Limousine"},{word:"Stream"},{word:"Glove"},{word:"Nurse"},{word:"Leprechaun"},{word:"Play"},{word:"Tooth"},{word:"Arm"},{word:"Bermuda"},{word:"Diamond"},{word:"Whale"},{word:"Comic"},{word:"Mammoth"},{word:"Green"},{word:"Pass"},{word:"Missile"},{word:"Paste"},{word:"Drop"},{word:"Pheonix"},{word:"Marble"},{word:"Staff"},{word:"Figure"},{word:"Park"},{word:"Centaur"},{word:"Shadow"},{word:"Fish"},{word:"Cotton"},{word:"Egypt"},{word:"Theater"},{word:"Scale"},{word:"Fall"},{word:"Track"},{word:"Force"},{word:"Dinosaur"},{word:"Bill"},{word:"Mine"},{word:"Turkey"},{word:"March"},{word:"Contract"},{word:"Bridge"},{word:"Robin"},{word:"Line"},{word:"Plate"},{word:"Band"},{word:"Fire"},{word:"Bank"},{word:"Boom"},{word:"Cat"},{word:"Shot"},{word:"Suit"},{word:"Chocolate"},{word:"Roulette"},{word:"Mercury"},{word:"Moon"},{word:"Net"},{word:"Lawyer"},{word:"Satellite"},{word:"Angel"},{word:"Spider"},{word:"Germany"},{word:"Fork"},{word:"Pitch"},{word:"King"},{word:"Crane"},{word:"Trip"},{word:"Dog"},{word:"Conductor"},{word:"Part"},{word:"Bugle"},{word:"Witch"},{word:"Ketchup"},{word:"Press"},{word:"Spine"},{word:"Worm"},{word:"Alps"},{word:"Bond"},{word:"Pan"},{word:"Beijing"},{word:"Racket"},{word:"Cross"},{word:"Seal"},{word:"Aztec"},{word:"Maple"},{word:"Parachute"},{word:"Hotel"},{word:"Berry"},{word:"Soldier"},{word:"Ray"},{word:"Post"},{word:"Greece"},{word:"Square"},{word:"Mass"},{word:"Bat"},{word:"Wave"},{word:"Car"},{word:"Smuggler"},{word:"England"},{word:"Crash"},{word:"Tail"},{word:"Card"},{word:"Horn"},{word:"Capital"},{word:"Fence"},{word:"Deck"},{word:"Buffalo"},{word:"Microscope"},{word:"Jet"},{word:"Duck"},{word:"Ring"},{word:"Train"},{word:"Field"},{word:"Gold"},{word:"Tick"},{word:"Check"},{word:"Queen"},{word:"Strike"},{word:"Kangaroo"},{word:"Spike"},{word:"Scientist"},{word:"Engine"},{word:"Shakespeare"},{word:"Wind"},{word:"Kid"},{word:"Embassy"},{word:"Robot"},{word:"Note"},{word:"Ground"},{word:"Draft"},{word:"Ham"},{word:"War"},{word:"Mouse"},{word:"Center"},{word:"Chick"},{word:"China"},{word:"Bolt"},{word:"Spot"},{word:"Piano"},{word:"Pupil"},{word:"Plot"},{word:"Lion"},{word:"Police"},{word:"Head"},{word:"Litter"},{word:"Concert"},{word:"Mug"},{word:"Vacuum"},{word:"Atlantis"},{word:"Straw"},{word:"Switch"},{word:"Skyscraper"},{word:"Laser"},{word:"Scuba"},{word:"Diver"},{word:"Africa"},{word:"Plastic"},{word:"Dwarf"},{word:"Lap"},{word:"Life"},{word:"Honey"},{word:"Horseshoe"},{word:"Unicorn"},{word:"Spy"},{word:"Pants"},{word:"Wall"},{word:"Paper"},{word:"Sound"},{word:"Ice"},{word:"Tag"},{word:"Web"},{word:"Fan"},{word:"Orange"},{word:"Temple"},{word:"Canada"},{word:"Scorpion"},{word:"Undertaker"},{word:"Mail"},{word:"Europe"},{word:"Soul"},{word:"Apple"},{word:"Pole"},{word:"Tap"},{word:"Mouth"},{word:"Ambulance"},{word:"Dress"},{word:"IceCream"},{word:"Rabbit"},{word:"Buck"},{word:"Agent"},{word:"Sock"},{word:"Nut"},{word:"Boot"},{word:"Ghost"},{word:"Oil"},{word:"Superhero"},{word:"Code"},{word:"Kiwi"},{word:"Hospital"},{word:"Saturn"},{word:"Film"},{word:"Button"},{word:"Snowman"},{word:"Helicopter"},{word:"LochNess"},{word:"Log"},{word:"Princess"},{word:"Time"},{word:"Cook"},{word:"Revolution"},{word:"Shoe"},{word:"Mole"},{word:"Spell"},{word:"Grass"},{word:"Washer"},{word:"Game"},{word:"Beat"},{word:"Hole"},{word:"Horse"},{word:"Pirate"},{word:"Link"},{word:"Dance"},{word:"Fly"},{word:"Pit"},{word:"Server"},{word:"School"},{word:"Lock"},{word:"Brush"},{word:"Pool"},{word:"Star"},{word:"Jam"},{word:"Organ"},{word:"Berlin"},{word:"Face"},{word:"Luck"},{word:"Amazon"},{word:"Cast"},{word:"Gas"},{word:"Club"},{word:"Sink"},{word:"Water"},{word:"Chair"},{word:"Shark"},{word:"Jupiter"},{word:"Copper"},{word:"Jack"},{word:"Platypus"},{word:"Stick"},{word:"Olive"},{word:"Grace"},{word:"Bear"},{word:"Glass"},{word:"Row"},{word:"Pistol"},{word:"London"},{word:"Rock"},{word:"Van"},{word:"Vet"},{word:"Beach"},{word:"Charge"},{word:"Port"},{word:"Disease"},{word:"Palm"},{word:"Moscow"},{word:"Pin"},{word:"Washington"},{word:"Pyramid"},{word:"Opera"},{word:"Casino"},{word:"Pilot"},{word:"String"},{word:"Night"},{word:"Chest"},{word:"Yard"},{word:"Teacher"},{word:"Pumpkin"},{word:"Thief"},{word:"Bark"},{word:"Bug"},{word:"Mint"},{word:"Cycle"},{word:"Telescope"},{word:"Calf"},{word:"Air"},{word:"Box"},{word:"Mount"},{word:"Thumb"},{word:"Antarctica"},{word:"Trunk"},{word:"Snow"},{word:"Penguin"},{word:"Root"},{word:"Bar"},{word:"File"},{word:"Hawk"},{word:"Battery"},{word:"Compound"},{word:"Slug"},{word:"Octopus"},{word:"Whip"},{word:"America"},{word:"Ivory"},{word:"Pound"},{word:"Sub"},{word:"Cliff"},{word:"Lab"},{word:"Eagle"},{word:"Genius"},{word:"Ship"},{word:"Dice"},{word:"Hood"},{word:"Heart"},{word:"Novel"},{word:"Pipe"},{word:"Himalayas"},{word:"Crown"},{word:"Round"},{word:"India"},{word:"Needle"},{word:"Shop"},{word:"Watch"},{word:"Lead"},{word:"Tie"},{word:"Table"},{word:"Cell"},{word:"Cover"},{word:"Czech"},{word:"Back"},{word:"Bomb"},{word:"Ruler"},{word:"Forest"},{word:"Bottle"},{word:"Space"},{word:"Hook"},{word:"Doctor"},{word:"Ball"},{word:"Bow"},{word:"Degree"},{word:"Rome"},{word:"Plane"},{word:"Giant"},{word:"Nail"},{word:"Dragon"},{word:"Stadium"},{word:"Flute"},{word:"Carrot"},{word:"Wake"},{word:"Fighter"},{word:"Model"},{word:"Tokyo"},{word:"Eye"},{word:"Mexico"},{word:"Hand"},{word:"Swing"},{word:"Key"},{word:"Alien"},{word:"Tower"},{word:"Poison"},{word:"Cricket"},{word:"Cold"},{word:"Knife"},{word:"Church"},{word:"Board"},{word:"Cloak"},{word:"Ninja"},{word:"Olympus"},{word:"Belt"},{word:"Light"},{word:"Death"},{word:"Stock"},{word:"Millionaire"},{word:"Day"},{word:"Knight"},{word:"Pie"},{word:"Bed"},{word:"Circle"},{word:"Rose"},{word:"Change"},{word:"Cap"},{word:"Triangle"}];
  //$scope.cards = [{word: "Drum"},{word:"Bride"},{word:"Wagon"},{word:"Univerity"},{word:"Hit"},{word:"Ash"},{word:"Bass"},{word:"Astronaut"},{word:"Doll"},{word:"Nerve"},{word:"Coach"},{word:"Beam"},{word:"Spoon"},{word:"CountryNose"},{word:"King"},{word:"Arthur"},{word:"Stamp"},{word:"Camp"},{word:"Brain"},{word:"Leaf"},{word:"Tutu"},{word:"Coast"},{word:"Lunch"},{word:"Thunder"},{word:"Potato"},{word:"Desk"},{word:"Onion"},{word:"Elephant"},{word:"Anchor"},{word:"Cowboy"},{word:"Flood"},{word:"Mohawk"},{word:"Santa"},{word:"Pitcher"},{word:"Barbecue"},{word:"Leather"},{word:"Skates"},{word:"Musketeer"},{word:"Snap"},{word:"Saddle"},{word:"Genie"},{word:"MarkShoulder"},{word:"Governor"},{word:"Manicure"},{word:"Anthem"},{word:"Halloween"},{word:"Newton"},{word:"Balloon"},{word:"Fiddle"},{word:"Craft"},{word:"Glacier"},{word:"Cake"},{word:"Rat"},{word:"Tank"},{word:"Blind"},{word:"Spirit"},{word:"Cable"},{word:"Swamp"},{word:"Einstein"},{word:"Hide"},{word:"Crystal"},{word:"Gear"},{word:"Kiss"},{word:"Pew"},{word:"Powder"},{word:"Turtle"},{word:"Bacon"},{word:"Sherlock"},{word:"Squash"},{word:"Book"},{word:"Razor"},{word:"Dressing"},{word:"Brick"},{word:"Brazil"},{word:"Tear"},{word:"Stable"},{word:"Bikini"},{word:"Pen"},{word:"Roll"},{word:"Christmas"},{word:"Rubber"},{word:"Bay"},{word:"Mother"},{word:"Kick"},{word:"Fog"},{word:"Radio"},{word:"Crab"},{word:"Cone"},{word:"Skull"},{word:"Wheelchair"},{word:"Egg"},{word:"Butter"},{word:"Werewolf"},{word:"Cherry"},{word:"Patient"},{word:"Dryer"},{word:"Drawing"},{word:"Boss"},{word:"Fever"},{word:"Banana"},{word:"Polish"},{word:"Knot"},{word:"Paint"},{word:"Storm"},{word:"Goldilocks"},{word:"Pillow"},{word:"Chain"},{word:"Moses"},{word:"Saw"},{word:"Brother"},{word:"Rail"},{word:"Rope"},{word:"Street"},{word:"Pad"},{word:"Captain"},{word:"Wish"},{word:"Axe"},{word:"Shorts"},{word:"Popcorn"},{word:"Castle"},{word:"Second"},{word:"Team"},{word:"Oasis"},{word:"Mess"},{word:"Miss"},{word:"Avalanche"},{word:"Texas"},{word:"Sun"},{word:"Letter"},{word:"Rust"},{word:"Wing"},{word:"Steel"},{word:"Ear"},{word:"Scroll"},{word:"Bunk"},{word:"Cane"},{word:"Venus"},{word:"Ladder"},{word:"Purse"},{word:"Sheet"},{word:"Napoleon"},{word:"Sugar"},{word:"Director"},{word:"Ace"},{word:"Scratch"},{word:"Bucket"},{word:"Caesar"},{word:"Disk"},{word:"Beard"},{word:"Bulb"},{word:"Bench"},{word:"Scarecrow"},{word:"Igloo"},{word:"Tuxedo"},{word:"Earth"},{word:"Ram"},{word:"Sister"},{word:"Bread"},{word:"Record"},{word:"Dash"},{word:"Greenhouse"},{word:"Drone"},{word:"Steam"},{word:"Biscuit"},{word:"Rip"},{word:"NotreDame"},{word:"LipShampoo"},{word:"Cheese"},{word:"Sack"},{word:"Mountie"},{word:"Sumo"},{word:"Sahara"},{word:"Walrus"},{word:"Dust"},{word:"Hammer"},{word:"Cloud"},{word:"Spray"},{word:"St.Patrick"},{word:"Kilt"},{word:"Monkey"},{word:"Frog"},{word:"Dentist"},{word:"Rainbow"},{word:"Whistle"},{word:"Reindeer"},{word:"Kitchen"},{word:"Lemonade"},{word:"Slipper"},{word:"Floor"},{word:"Valentine"},{word:"Pepper"},{word:"Road"},{word:"Shed"},{word:"Bowler"},{word:"Milk"},{word:"Wheel"},{word:"Magazine"},{word:"Brass"},{word:"Tea"},{word:"Helmet"},{word:"Flag"},{word:"Troll"},{word:"Jail"},{word:"Sticker"},{word:"Puppet"},{word:"Chalk"},{word:"Bonsai"},{word:"Sweat"},{word:"Gangster"},{word:"Butterfly"},{word:"Story"},{word:"Salad"},{word:"Armor"},{word:"Smoke"},{word:"Cave"},{word:"Quack"},{word:"Break"},{word:"Snake"},{word:"Mill"},{word:"Gymnast"},{word:"Wonderland"},{word:"Driver"},{word:"Spurs"},{word:"Zombie"},{word:"Pig"},{word:"Cleopatra"},{word:"Toast"},{word:"Penny"},{word:"Ant"},{word:"Volume"},{word:"Lace"},{word:"Battleship"},{word:"Maracas"},{word:"Meter"},{word:"Sling"},{word:"Delta"},{word:"Step"},{word:"Arc"},{word:"Comet"},{word:"Bath"},{word:"Polo"},{word:"Gum"},{word:"Vampire"},{word:"Ski"},{word:"Pocket"},{word:"Battle"},{word:"Foam"},{word:"Rodeo"},{word:"Squirrel"},{word:"Salt"},{word:"Mummy"},{word:"Blacksmith"},{word:"Chip"},{word:"Goat"},{word:"Laundry"},{word:"Bee"},{word:"Tattoo"},{word:"Russia"},{word:"Tin"},{word:"Map"},{word:"Yellowstone"},{word:"Silk"},{word:"Hose"},{word:"Sloth"},{word:"KungFu"},{word:"Clock"},{word:"Bean"},{word:"Lightning"},{word:"Bowl"},{word:"Guitar"},{word:"Ranch"},{word:"Pearl"},{word:"Flat"},{word:"Virus"},{word:"IceAge"},{word:"Coffee"},{word:"Marathon"},{word:"Attic"},{word:"Wedding"},{word:"Columbus"},{word:"Pop"},{word:"Sherwood"},{word:"Trick"},{word:"Nylon"},{word:"Locust"},{word:"Pacific"},{word:"Cuckoo"},{word:"Tornado"},{word:"Memory"},{word:"Jockey"},{word:"Minotaur"},{word:"BigBang"},{word:"Page"},{word:"Sphinx"},{word:"Crusader"},{word:"Volcano"},{word:"Rifle"},{word:"Boil"},{word:"Hair"},{word:"Bicycle"},{word:"Jumper"},{word:"Smoothie"},{word:"Sleep"},{word:"Pentagon"},{word:"Groom"},{word:"River"},{word:"Farm"},{word:"Judge"},{word:"Viking"},{word:"Easter"},{word:"Mud"},{word:"Parrot"},{word:"Comb"},{word:"Salsa"},{word:"Eden"},{word:"Army"},{word:"Paddle"},{word:"Saloon"},{word:"MonaLisa"},{word:"Mile"},{word:"Blizzard"},{word:"Quarter"},{word:"Jeweler"},{word:"Hamburger"},{word:"Glasses"},{word:"Sail"},{word:"Boxer"},{word:"Rice"},{word:"Mirror"},{word:"Ink"},{word:"Beer"},{word:"Tipi"},{word:"Makeup"},{word:"Microwave"},{word:"Hercules"},{word:"Sign"},{word:"Pizza"},{word:"Wool"},{word:"Homer"},{word:"Minute"},{word:"Sword"},{word:"Soup"},{word:"Alaska"},{word:"Baby"},{word:"Potter"},{word:"Shower"},{word:"Blade"},{word:"Noah"},{word:"Soap"},{word:"Tunnel"},{word:"Peach"},{word:"Dollar"},{word:"Tip"},{word:"Love"},{word:"Jellyfish"},{word:"Stethoscope"},{word:"Taste"},{word:"Fuel"},{word:"Mosquito"},{word:"Wizard"},{word:"BigBen"},{word:"Garden"},{word:"Waitress"},{word:"Shoot"},{word:"Shell"},{word:"Lumberjack"},{word:"Medic"},{word:"Dream"},{word:"Blues"},{word:"Earthquake"},{word:"Pea"},{word:"Parade"},{word:"Sled"},{word:"Smell"},{word:"Computer"},{word:"Cow"},{word:"Peanut"},{word:"Window"},{word:"Mustard"},{word:"Sand"},{word:"Golf"},{word:"Crow"},{word:"Iceland"},{word:"Apron"},{word:"Violet"},{word:"Door"},{word:"Tiger"},{word:"Joker"},{word:"House"},{word:"Collar"},{word:"Hawaii"},{word:"Dwarf"},{word:"Pine"},{word:"Magician"},{word:"Frost"},{word:"Curry"},{word:"Bubble"},{word:"Wood"}];
  //$scope.cards = [{word:"Horse"},{word:"Sauna"},{word:"Hooker"},{word:"Stool"},{word:"Mouth"},{word:"Touchdown"},{word:"Snake"},{word:"Whiskey"},{word:"Pickle"},{word:"Hose"},{word:"Legend"},{word:"Blush"},{word:"Dick"},{word:"Cock"},{word:"Alcohol"},{word:"Sausage"},{word:"Pecker"},{word:"Straight"},{word:"Sore"},{word:"Toy"},{word:"Black"},{word:"White"},{word:"Period"},{word:"Couch"},{word:"Juice"},{word:"Bra"},{word:"Dame"},{word:"Chick"},{word:"Bitch"},{word:"Score"},{word:"Sheep"},{word:"Strap"},{word:"Mattress"},{word:"Train"},{word:"Bondage"},{word:"Wiener"},{word:"Penis"},{word:"Furry"},{word:"Joystick"},{word:"Apples"},{word:"Condom"},{word:"Bisexual"},{word:"Hole"},{word:"Secretary"},{word:"Roll"},{word:"Strip"},{word:"Freak"},{word:"Tramp"},{word:"Foreskin"},{word:"Wine"},{word:"Pee"},{word:"Experiment"},{word:"Johnson"},{word:"Banana"},{word:"Clam"},{word:"Blow"},{word:"Balloon"},{word:"Semen"},{word:"Regret"},{word:"Stripper"},{word:"Homerun"},{word:"Trim"},{word:"Bar"},{word:"Wood"},{word:"Paddle"},{word:"Cowgirl"},{word:"John"},{word:"Candle"},{word:"Cigarette"},{word:"Cigar"},{word:"Knob"},{word:"Sex"},{word:"Gang"},{word:"Stud"},{word:"Screw"},{word:"Trousers"},{word:"Safe"},{word:"Girl"},{word:"Package"},{word:"Grope"},{word:"Jewels"},{word:"Beach"},{word:"Chubby"},{word:"Beef"},{word:"Bender"},{word:"Shaft"},{word:"Peaches"},{word:"Swallow"},{word:"Flower"},{word:"Trunk"},{word:"Sack"},{word:"Job"},{word:"Onion"},{word:"Bowl"},{word:"Jerk"},{word:"Crap"},{word:"Bush"},{word:"Box"},{word:"Mushroom"},{word:"Shame"},{word:"Couple"},{word:"Sweat"},{word:"Strobe"},{word:"Tubesteak"},{word:"Rug"},{word:"Butt"},{word:"Nylon"},{word:"Lick"},{word:"Hotel"},{word:"Boy"},{word:"Boob"},{word:"Biscuits"},{word:"Fatty"},{word:"Share"},{word:"Slut"},{word:"Swimmers"},{word:"Pound"},{word:"Tuna"},{word:"Roach"},{word:"Brownie"},{word:"Nuts"},{word:"Blonde"},{word:"Horny"},{word:"Catcher"},{word:"Body"},{word:"Dominate"},{word:"Mole"},{word:"Shave"},{word:"Orgasm"},{word:"Taboo"},{word:"Roof"},{word:"Twig"},{word:"Red"},{word:"Lube"},{word:"Nude"},{word:"Eat"},{word:"Hooters"},{word:"Legs"},{word:"Behind"},{word:"Olive"},{word:"Brown"},{word:"Shower"},{word:"Oyster"},{word:"Taco"},{word:"Salad"},{word:"Udders"},{word:"Rave"},{word:"Inch"},{word:"Nipple"},{word:"Gay"},{word:"High"},{word:"Booze"},{word:"Beaver"},{word:"Pussy"},{word:"Ice"},{word:"Skank"},{word:"Melons"},{word:"Tail"},{word:"Rack"},{word:"Uranus"},{word:"Queer"},{word:"Lingerie"},{word:"Needle"},{word:"Escort"},{word:"Herb"},{word:"Bear"},{word:"Beans"},{word:"Log"},{word:"Hamster"},{word:"Skirt"},{word:"Gigolo"},{word:"Tap"},{word:"Pie"},{word:"Vasectomy"},{word:"Queen"},{word:"Group"},{word:"Necklace"},{word:"Commando"},{word:"Head"},{word:"lights"},{word:"Ashes"},{word:"Bacon"},{word:"Goose"},{word:"Pillows"},{word:"Smell"},{word:"Latex"},{word:"Tavern"},{word:"Smegma"},{word:"Vegas"},{word:"Queef"},{word:"Hot"},{word:"Navel"},{word:"Gag"},{word:"Headboard"},{word:"Bed"},{word:"Ass"},{word:"Caboose"},{word:"Carpet"},{word:"Smoke"},{word:"Cuffs"},{word:"Teabag"},{word:"Shot"},{word:"Vein"},{word:"Purple"},{word:"Gash"},{word:"Nail"},{word:"Hand"},{word:"Head"},{word:"Chaps"},{word:"Animal"},{word:"Coozie"},{word:"Fish"},{word:"Snatch"},{word:"Rookie"},{word:"Tease"},{word:"Snort"},{word:"Vibrator"},{word:"Pucker"},{word:"Film"},{word:"Mug"},{word:"Bang"},{word:"Hammer"},{word:"Grandma"},{word:"Grass"},{word:"Sniff"},{word:"Prick"},{word:"Tent"},{word:"Baked"},{word:"Video"},{word:"Pub"},{word:"G-Spot"},{word:"Movie"},{word:"Jazz"},{word:"Friction"},{word:"Eyes"},{word:"Drunk"},{word:"Softballs"},{word:"Kitty"},{word:"Tequila"},{word:"Bottom"},{word:"Vinyl"},{word:"Prostate"},{word:"Chains"},{word:"Motorboat"},{word:"Crabs"},{word:"French"},{word:"Hurl"},{word:"Cheek"},{word:"Solo"},{word:"Lizard"},{word:"Threesome"},{word:"Breast"},{word:"Virgin"},{word:"Prison"},{word:"Donkey"},{word:"Monkey"},{word:"Douche"},{word:"Freckles"},{word:"Bond"},{word:"Keg"},{word:"Spank"},{word:"Boxers"},{word:"Throat"},{word:"Pinch"},{word:"Vodka"},{word:"Pot"},{word:"Lips"},{word:"Mom"},{word:"Finger"},{word:"Fluff"},{word:"Bling"},{word:"Rectum"},{word:"Speed"},{word:"Missionary"},{word:"Tickle"},{word:"Sin"},{word:"Vomit"},{word:"Porn"},{word:"Cuddle"},{word:"Moist"},{word:"Manboobs"},{word:"Flash"},{word:"Dildo"},{word:"Cocktail"},{word:"Sperm"},{word:"Emission"},{word:"tie"},{word:"Diarrhea"},{word:"Wad"},{word:"Pork"},{word:"Bottle"},{word:"Mixer"},{word:"Crack"},{word:"Fist"},{word:"Club"},{word:"Cucumber"},{word:"Spoon"},{word:"Seed"},{word:"Tip"},{word:"Intern"},{word:"Wang"},{word:"Pole"},{word:"Champagne"},{word:"Milk"},{word:"Loose"},{word:"Fire"},{word:"Choke"},{word:"Noodle"},{word:"Spread"},{word:"Doggy"},{word:"Tit"},{word:"Beer"},{word:"Waste"},{word:"Poker"},{word:"Gerbil"},{word:"Member"},{word:"Bartender"},{word:"Fetish"},{word:"Bone"},{word:"Motel"},{word:"Squirt"},{word:"Lotion"},{word:"Tongue"},{word:"Flesh"},{word:"Watch"},{word:"Player"},{word:"Balls"},{word:"Meat"},{word:"Cream"},{word:"Fecal"},{word:"Rubber"},{word:"Kinky"},{word:"Stalker"},{word:"Bust"},{word:"Tool"},{word:"Skid"},{word:"Wax"},{word:"Pitcher"},{word:"Knees"},{word:"Martini"},{word:"Lobster"},{word:"Feather"},{word:"Booty"},{word:"Joint"},{word:"Steamy"},{word:"Mesh"},{word:"Top"},{word:"Facial"},{word:"Weed"},{word:"Pipe"},{word:"Cherry"},{word:"Lust"},{word:"Knockers"},{word:"Fantasy"},{word:"Hump"},{word:"Poop"},{word:"Stiff"},{word:"Nurse"},{word:"Torture"},{word:"Bong"},{word:"Wench"},{word:"Pink"},{word:"Gangbang"},{word:"Love"},{word:"Coyote"},{word:"Drill"},{word:"Acid"},{word:"Line"},{word:"Stiletto"},{word:"Turd"},{word:"Touch"},{word:"Daddy"},{word:"Wet"},{word:"Pimp"},{word:"Hell"},{word:"Liquor"},{word:"Burn"},{word:"Drag"},{word:"Cougar"},{word:"Briefs"},{word:"Stones"},{word:"Naked"},{word:"Orgy"},{word:"Chest"},{word:"Whip"},{word:"Pig"},{word:"Jugs"},{word:"Lighter"},{word:"Cannons"},{word:"Down"},{word:"Clap"}];
  var database = 0;
  var socket = io();
  $scope.spymaster = false;
  $scope.masters = 0;
  $scope.agents = 0;
  $scope.players = 0;
  $scope.red = $scope.blue = 0;
  $scope.title = "Code Fleshy";
  $scope.turn = "Blue";
  $scope.team = "Spectator";
  $scope.kid = false;

  _gameover = function(){
    if($scope.red == 0) $scope.title = "RED WINS!!!";
    else if($scope.blue == 0) $scope.title = "BLUE WINS!!!";
    else $scope.title = $scope.title = $scope.death_win;
    $timeout(function(){
      for(i = 0; i < 25; i++){
        $scope.cards[i].selected = false;
      }
      $scope.spymaster = true;
    },3000);
  }

  $scope.server = function(server){
    $scope.spymaster = false;
    socket.emit('spymaster', $scope.spymaster, database);
    switch(server){
      case 1:
        console.log("server: ", server);
        database = 0;
        break;
      case 2:
        console.log("server: ", server);
        database = 1;
        break;
      case 3:
        console.log("server: ", server);
        database = 2;
        break;
      case 4:
        console.log("server: ", server);
        database = 3;
        break;
    }
    socket.emit('database', database);
  }

  $scope.endTurn = function(){
    if($scope.turn == "Blue") $scope.turn = "Red";
    else $scope.turn = "Blue";
    socket.emit('turn', $scope.turn, database);
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
        function (err) { console.log('Error saving card'); }
      );
    }
  }
  //_addNewCards();

  $scope.reset = function(){
    socket.emit('reset', database);
  }

  $scope.role = function(role){
    var old = $scope.spymaster;
    if(role == 'spymaster' && ($scope.masters < 2) && !old){
      $scope.spymaster = true;
      socket.emit('spymaster', $scope.spymaster, database);
    }
    else if(role == "agent" && old){
      $scope.spymaster = false;
      socket.emit('spymaster', $scope.spymaster, database);
    }
  }

  $scope.nextGame = function(){
    socket.emit('shuffle', database);
    $scope.title = "Code Fleshy";
  }

  $scope.select = function(card){
    if(($scope.team == $scope.turn || $scope.spymaster) && !$scope.kid) {
      if(!card.selected){
        if(card.textColor == "red"){
          $scope.red--;
          if($scope.turn == "Blue") $scope.endTurn();
        }
        else if(card.textColor == "blue"){
          $scope.blue--;
          if($scope.turn == "Red") $scope.endTurn();
        }
        else if(card.textColor == "black"){
          if($scope.turn == "Red") $scope.death_win = "BLUE WINS!!!";
          else $scope.death_win = "RED WINS!!!";
          socket.emit('death card', $scope.death_win, database);
          //_gameover();
        }
        else $scope.endTurn();
      }
      else{
        if(card.textColor == "red") $scope.red++;
        else if(card.textColor == "blue") $scope.blue++;
      }
      socket.emit('card selected', $scope.cards.indexOf(card), database);
      if($scope.red == 0 || $scope.blue == 0) _gameover();
    }
  }

  socket.on('get cards', function(cards, db){ //new spymaster added
    if(db == database) $scope.$apply(function(){ $scope.cards = cards; _remaining();}); 
  });
  socket.on('spymaster', function(masters, db){ //new spymaster added
    if(db == database) $scope.$apply(function(){ $scope.masters = masters; $scope.agents = $scope.players - $scope.masters;}); 
  });
  socket.on('spymaster reset', function(db){ //reset spymasters
    if(db == database){
      $scope.$apply(function(){
        $scope.spymaster = false;
        $scope.masters = 0;
        $scope.turn = "Blue";
      });
    }
  });
  socket.on('turn', function(turn, db){ //end turn
    if(db == database) $scope.$apply(function(){ $scope.turn = turn;});
  });
  socket.on('card selected', function(cards, db){ //card selected
    if(db == database) $scope.$apply(function(){ $scope.cards = cards;});
  });
  socket.on('death card', function(death_win, db){ //win by death card
    if(db == database) $scope.$apply(function(){ $scope.death_win = death_win; _gameover();});
  });
  socket.on('players', function(players, db){ //win by death card
    if(db == database) $scope.$apply(function(){ $scope.players = players; $scope.agents = $scope.players - $scope.masters;});
  });
  socket.on('next game', function(cards, db){ //new game
    if(db == database){
      $scope.reset();
      $scope.title = "Code Fleshy";
      $scope.$apply(function(){ $scope.cards = cards;});
    }
  });
  socket.emit('database', database);

});
