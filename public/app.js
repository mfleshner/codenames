angular.module('kellyplextv', []).controller('appController', function($scope, $http, $timeout, $q) {
  
  console.log("appController!");

  $scope.cards = [{word: "Hello"}, {word: "World"}, {word: "Goats"}, {word: "Sharks"}, {word: "Pizza"},
  {word: "Hello"}, {word: "World"}, {word: "Goats"}, {word: "Sharks"}, {word: "Pizza"},
  {word: "Hello"}, {word: "World"}, {word: "Goats"}, {word: "Sharks"}, {word: "Pizza"},
  {word: "Hello"}, {word: "World"}, {word: "Goats"}, {word: "Sharks"}, {word: "Pizza"},
  {word: "Hello"}, {word: "World"}, {word: "Goats"}, {word: "Sharks"}, {word: "Pizza"}];

  $scope.cards = [{word: "bread"},{word: "break"},{word: "breed"},{word: "brief"},{word: "bring"},{word: "broad"},{word: "broke"},{word: "brown"},{word: "build"},{word: "built"},{word: "buyer"},{word: "cable"},{word: "calif"},{word: "carry"},{word: "catch"},{word: "cause"},{word: "chain"},{word: "chair"},{word: "chart"},{word: "chase"},{word: "cheap"},{word: "check"},{word: "chest"},{word: "chief"},{word: "child"},{word: "china"},{word: "chose"},{word: "civil"},{word: "claim"},{word: "class"},{word: "clean"},{word: "clear"},{word: "click"},{word: "clock"},{word: "close"},{word: "coach"},{word: "coast"},{word: "could"},{word: "count"},{word: "court"},{word: "cover"},{word: "craft"},{word: "crash"},{word: "cream"},{word: "crime"},{word: "cross"},{word: "crowd"},{word: "crown"},{word: "curve"},{word: "cycle"},{word: "daily"},{word: "dance"},{word: "dated"},{word: "dealt"},{word: "death"},{word: "debut"},{word: "delay"},{word: "depth"},{word: "doing"},{word: "doubt"},{word: "dozen"},{word: "draft"},{word: "drama"},{word: "drawn"},{word: "dream"},{word: "dress"},{word: "drill"},{word: "drink"},{word: "drive"},{word: "drove"},{word: "dying"},{word: "eager"},{word: "early"},{word: "earth"},{word: "eight"},{word: "elite"},{word: "empty"},{word: "enemy"},{word: "enjoy"},{word: "enter"},{word: "entry"},{word: "equal"},{word: "error"},{word: "event"},{word: "every"},{word: "exact"},{word: "exist"},{word: "extra"},{word: "faith"},{word: "false"},{word: "fault"},{word: "fiber"},{word: "field"},{word: "fifth"},{word: "fifty"},{word: "fight"},{word: "final"},{word: "first"},{word: "fixed"},{word: "flash"},{word: "fleet"},{word: "floor"},{word: "fluid"},{word: "focus"},{word: "force"},{word: "forth"},{word: "forty"},{word: "forum"},{word: "found"},{word: "frame"},{word: "frank"},{word: "fraud"},{word: "fresh"},{word: "front"},{word: "fruit"},{word: "fully"},{word: "funny"},{word: "giant"},{word: "given"},{word: "glass"},{word: "globe"},{word: "going"},{word: "grace"},{word: "grade"},{word: "grand"},{word: "grant"},{word: "grass"},{word: "great"},{word: "green"},{word: "gross"},{word: "group"},{word: "grown"},{word: "guard"},{word: "guess"},{word: "guest"},{word: "guide"},{word: "happy"},{word: "harry"},{word: "heart"},{word: "heavy"},{word: "hence"},{word: "henry"},{word: "horse"},{word: "hotel"},{word: "house"},{word: "human"},{word: "ideal"},{word: "image"},{word: "index"},{word: "inner"},{word: "input"},{word: "issue"},{word: "japan"},{word: "jimmy"},{word: "joint"},{word: "jones"},{word: "judge"},{word: "known"},{word: "label"},{word: "large"},{word: "laser"},{word: "later"},{word: "laugh"},{word: "layer"},{word: "learn"},{word: "lease"},{word: "least"},{word: "leave"},{word: "legal"},{word: "level"},{word: "lewis"},{word: "light"},{word: "limit"},{word: "links"},{word: "lives"},{word: "local"},{word: "logic"},{word: "loose"},{word: "lower"},{word: "lucky"},{word: "lunch"},{word: "lying"},{word: "magic"},{word: "major"},{word: "maker"},{word: "march"},{word: "maria"},{word: "match"},{word: "maybe"},{word: "mayor"},{word: "meant"},{word: "media"},{word: "metal"},{word: "might"},{word: "minor"},{word: "minus"},{word: "mixed"},{word: "model"},{word: "money"},{word: "month"},{word: "moral"},{word: "motor"},{word: "mount"},{word: "mouse"},{word: "mouth"},{word: "movie"},{word: "music"},{word: "needs"},{word: "never"},{word: "newly"},{word: "night"},{word: "noise"},{word: "north"},{word: "noted"},{word: "novel"},{word: "nurse"},{word: "occur"},{word: "ocean"},{word: "offer"},{word: "often"},{word: "order"},{word: "other"},{word: "ought"},{word: "paint"},{word: "panel"},{word: "paper"},{word: "party"},{word: "peace"},{word: "peter"},{word: "phase"},{word: "phone"},{word: "photo"},{word: "piece"},{word: "pilot"},{word: "pitch"},{word: "place"},{word: "plain"},{word: "plane"},{word: "plant"},{word: "plate"},{word: "point"},{word: "pound"},{word: "power"},{word: "press"},{word: "price"},{word: "pride"},{word: "prime"},{word: "print"},{word: "prior"},{word: "prize"},{word: "proof"},{word: "proud"},{word: "prove"},{word: "queen"},{word: "quick"},{word: "quiet"},{word: "quite"},{word: "radio"},{word: "raise"},{word: "range"},{word: "rapid"},{word: "ratio"},{word: "reach"},{word: "ready"},{word: "refer"},{word: "right"},{word: "rival"},{word: "river"},{word: "robin"},{word: "roger"},{word: "roman"},{word: "rough"},{word: "round"},{word: "route"},{word: "royal"},{word: "rural"},{word: "scale"},{word: "scene"},{word: "scope"},{word: "score"},{word: "sense"},{word: "serve"},{word: "seven"},{word: "shall"},{word: "shape"},{word: "share"},{word: "sharp"},{word: "sheet"},{word: "shelf"},{word: "shell"},{word: "shift"},{word: "shirt"},{word: "shock"},{word: "shoot"},{word: "short"},{word: "shown"},{word: "sight"},{word: "since"},{word: "sixth"},{word: "sixty"},{word: "sized"},{word: "skill"},{word: "sleep"},{word: "slide"},{word: "small"},{word: "smart"},{word: "smile"},{word: "smith"},{word: "smoke"},{word: "solid"},{word: "solve"},{word: "sorry"},{word: "sound"},{word: "south"},{word: "space"},{word: "spare"},{word: "speak"},{word: "speed"},{word: "spend"},{word: "spent"},{word: "split"},{word: "spoke"},{word: "sport"},{word: "staff"},{word: "stage"},{word: "stake"},{word: "stand"},{word: "start"},{word: "state"},{word: "steam"},{word: "steel"},{word: "stick"},{word: "still"},{word: "stock"},{word: "stone"},{word: "stood"},{word: "store"},{word: "storm"},{word: "story"},{word: "strip"},{word: "stuck"},{word: "study"},{word: "stuff"},{word: "style"},{word: "sugar"},{word: "suite"},{word: "super"},{word: "sweet"},{word: "table"},{word: "taken"},{word: "taste"},{word: "taxes"},{word: "teach"},{word: "teeth"},{word: "terry"},{word: "texas"},{word: "thank"},{word: "theft"},{word: "their"},{word: "theme"},{word: "there"},{word: "these"},{word: "thick"},{word: "thing"},{word: "think"},{word: "third"},{word: "those"},{word: "three"},{word: "threw"},{word: "throw"},{word: "tight"},{word: "times"},{word: "tired"},{word: "title"},{word: "today"},{word: "topic"},{word: "total"},{word: "touch"},{word: "tough"},{word: "tower"},{word: "track"},{word: "trade"},{word: "train"},{word: "treat"},{word: "trend"},{word: "trial"},{word: "tried"},{word: "tries"},{word: "truck"},{word: "truly"},{word: "trust"},{word: "truth"},{word: "twice"},{word: "under"},{word: "undue"},{word: "union"},{word: "unity"},{word: "until"},{word: "upper"},{word: "upset"},{word: "urban"},{word: "usage"},{word: "usual"},{word: "valid"},{word: "value"},{word: "video"},{word: "virus"},{word: "visit"},{word: "vital"},{word: "voice"},{word: "waste"},{word: "watch"},{word: "water"},{word: "wheel"},{word: "where"},{word: "which"},{word: "while"},{word: "white"},{word: "whole"},{word: "whose"},{word: "woman"},{word: "women"},{word: "world"},{word: "worry"},{word: "worse"},{word: "worst"},{word: "worth"},{word: "would"},{word: "wound"},{word: "write"},{word: "wrong"},{word: "wrote"},{word: "yield"},{word: "young"},{word: "youth"}];

  $scope.spymaster = false;

  $scope.role = function(role){
    if(role == 'spymaster') $scope.spymaster = true;
    else $scope.spymaster = false;
    //only allow two spymasters. add code below
  }

  $scope.doShuffle = function() {
    shuffleArray($scope.cards);
    var arr = [];
    while(arr.length < 25){
      var r = Math.floor(Math.random() * 25);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    for(var i = 0; i < 9; i++){
      $scope.cards[arr[i]].textColor = "blue";
      $scope.cards[arr[i]].backColor = "backblue";
    }
    for(var i = 9; i < 17; i++){
      $scope.cards[arr[i]].textColor = "red";
      $scope.cards[arr[i]].backColor = "backred";
    }
    for(var i = 17; i < 24; i++){
      $scope.cards[arr[i]].textColor = "yellow";
      $scope.cards[arr[i]].backColor = "backyellow";
    }
    $scope.cards[arr[24]].textColor = "black";
    $scope.cards[arr[24]].backColor = "backblack";

  }
  
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
  $scope.doShuffle();

  $scope.select = function(card){
    //console.log("select: ", card);
    if(!card.selected) card.selected = true;
    else card.selected = false;
  }

});
