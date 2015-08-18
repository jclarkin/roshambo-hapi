var RESULT_DRAW = 'draw';
var RESULT_WIN = 'win';
var RESULT_LOSE = 'lose';
var ROCK = 1;
var PAPER = 2;
var SCISSORS = 3;

var options = {'rock': ROCK, 'paper': PAPER, 'scissors': SCISSORS};

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var roshambo = {
  go: function() {
    var opt_array = Object.keys(options);
    return opt_array[getRandomIntInclusive(0,opt_array.length-1)];
  },
  call: function(bet, opponent_bet) {
    if( bet === opponent_bet) return RESULT_DRAW;

    var bet_val = options[bet];
    var opponent_bet_val = options[opponent_bet];
    if (bet_val === null) return RESULT_LOSE;
    if (opponent_bet_val === null) return RESULT_WIN;

    switch (bet_val) {
        case ROCK:
          return opponent_bet_val === SCISSORS ? RESULT_WIN : RESULT_LOSE;
        case PAPER:
          return opponent_bet_val === ROCK ? RESULT_WIN : RESULT_LOSE;
        case SCISSORS:
          return opponent_bet_val === PAPER ? RESULT_WIN : RESULT_LOSE;
    }
  }
};

module.exports = roshambo;
