
const World = require('./world');
const Fish = require('./animals/fish');
class Game {

  /**
   * constructor
   */
  constructor(){

    this.interval = null;
    this.elements = [];
    this.cycles = 0;
    this.world = new World(100, this.elements);

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

    for (var i = 0; i < 10; i++) {

      let x = Math.floor(Math.random() * 100);
      let y = Math.floor(Math.random() * 100);
      let f = new Fish(this);
      this.elements.push(f);
      this.world.get(x,y).add(f);
      f.move(x,y);
    }


  }

  /**
   * Run the cycle
   * @return void
   */
  runCycle(){
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].tick(this);
    }
    console.clear();

  }

  /**
   * Run the game
   * @return void
   */
  run(){

    this.generateWorld();
    this.generateAnimals();

    this.interval = setInterval(() => {
        this.runCycle();
        this.cycles++;
    }, 5000);

  }

}

module.exports = Game;
