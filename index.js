class Happy {
  constructor() {
    this.timesPlayedHappy = 0;
    this.timesEatenHappy = 0;
  }
  playNow(theMascot) {
    if (this.timesPlayedHappy = 1) {
    theMascot.level += 2;
    document.getElementById("textUpdate").innerHTML = "Wiiii level up!!";
    }
    if ((this.timesPlayedHappy = 2)) {
      theMascot.beHungry();
      document.getElementById("textUpdate").innerHTML =
        "too hangry for playing";

    } else if (this.timesPlayedHappy >= 3) {
      document.getElementById("textUpdate").innerHTML =
        "I cannot play anymore right now. Give me fooood!";
      throw new Error("I cannot play anymore right now. Give me fooood");
    }
  }
  eatNow(theMascot) {
    if (this.timesEatenHappy = 1) {
      theMascot.level += 1;
      document.getElementById("textUpdate").innerHTML = "Wiiii level up!!";
    }
    if ((this.timesEatenHappy = 2)) {
      document.getElementById("textUpdate").innerHTML = "Brrruh I'm tooo bored.."
      theMascot.beBored();

    } else if (this.timesEatenHappy >= 3) {
      document.getElementById("textUpdate").innerHTML = "I cannot eat anymore right now. Play with me!!";
      throw new Error("I cannot eat anymore right now. Play with me");
    }
  }
}

class Bored {
  playNow(theMascot) {
    theMascot.beHappy();
  }
  eatNow(theMascot) {
    if (theMascot.howLongSinceYouAreBored() > 10) {
      theMascot.beHappy();
    } else {
      document.getElementById("textUpdate").innerHTML = "No more food please";
    }
  }
}

class Hungry {
  playNow(theMascot) {
    console.log("The mascot is too hungry to play");
  }
  eatNow(theMascot) {
    theMascot.beHappy();
  }
}
class Mascot {
  constructor() {
    this.mood = new Happy();
    this.level = 0;
  }
  play() {
    this.mood.playNow(this);
  }
  eat() {
    this.mood.eatNow(this);
  }
  beHappy() {
    this.mood = new Happy();
  }
  beBored() {
    this.timeWhenIGotBored = new Date();
    this.mood = new Bored();
  }
  beHungry() {
    this.mood = new Hungry();
  }
  howLongSinceYouAreBored(timeWhenIGotBored) {
    return (new Date() - this.timeWhenIGotBored) / 1000;
  }
}