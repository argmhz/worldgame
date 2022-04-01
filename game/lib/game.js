
const World = require('./world');

class Game {

  /**
   * constructor
   */
  constructor(){

    this.running = true;
    this.gameElements = [];
    this.cycles = 0;

    this.worldSize = 100;

    this.world = new World(this.worldSize, this.gameElements);

  }

  /**
   * Generate the world
   * @return void
   */
  generateWorld(){
    this.world.generate();
  }

  /**
   * Generate animals
   * @return void
   */
  generateAnimals(){

  }

  /**
   * Run the cycle
   * @return void
   */
  runCycle(){
    for (var i = 0; i < this.gameElements.length; i++) {
      this.gameElements[i].step(this);
    }
  }

  /**
   * Run the game
   * @return void
   */
  run(){

    this.generateWorld();
    this.generateAnimals();

    let interval = setInterval(() => {
        this.runCycle();
        this.cycles++;
        console.clear();
        console.log(this.cycles);
    }, 1000);

  }

}

module.exports = Game;
