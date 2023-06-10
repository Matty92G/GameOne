import Dice from '../gameFunctions/Dice';
import Player from '../constructors/Player';

const Gamble = (g) => {
  if (g >= 10) {
    timeTaken = day(5);
    // Create 3 people who gamble player with Insight, Deception, and Intimidation with a DC of 5 + 2d10
    // nameGenerate, 5 + Dice(10) + Dice(10)
    // Player, Insight | GamingSetProficiency + Dice(20)
    // success ? (+1) : "Lost to (generated name)"
    // nameGenerate, 5 + Dice(10) + Dice(10)
    // Player, Deception | GamingSetProficiency + Dice(20)
    // success ? (+1) : "Lost to (generated name)"
    // nameGenerate, 5 + Dice(10) + Dice(10)
    // Player, Intimidation | GamingSetProficiency + Dice(20)
    // success ? (+1) : "Lost to (generated name)"
    // Case between success = 0, 1, 2, 3
    switch (success) {
      case 0:
        'you lost your gold and owe an eaqual amount of debt',
          Player.Gold(-g * 2);
      case 1:
        'lost half the money bet', Player.Gold(-g / 2);
      case 2:
        'win half the money bet', Player.Gold(g / 2);
      case 3:
        'win double the money you bet', Player.Gold(g * 2);
    }
  } else {
    return error;
  }
};
