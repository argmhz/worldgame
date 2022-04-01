const Water = require('./worlds/water');

class Game {

  constructor(){
    this.running = true;
    this.gameElements = [];
    this.cycles = 0;

    this.worldSize = 100;

  }

  generateWorld(){
    for (var x = 0; x < this.worldSize; x++) {
      for (var y = 0; y < this.worldSize; y++) {
        this.gameElements.push(new Water({x,y}));
      }
    }
  }

  generateAnimals(){

  }

  runCycle(){
    for (var i = 0; i < this.gameElements.length; i++) {
      this.gameElements[i].step(this);
    }
  }

  run(){

    this.generateWorld();
    this.generateAnimals();

    let interval = setInterval(() => {
        this.runCycle();
        this.cycles++;
        console.clear();
        console.log(this.cycles);
    }, 1000);

    // while(this.running){
    //   this.runCycle();
    //   this.cycles++;
    //   console.clear();
    //   console.log(this.cycles);
    // }
  }

}

module.exports = Game;
