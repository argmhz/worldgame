
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
    // let area = this.elements[0];
    // let fish1 = new Fish(area);
    // this.elements.push(fish1);
    // this.elements[0].addAnimal(fish1);

    // let fish2 = new Fish;
    // this.elements.push(fish2);

    // this.elements[0].addAnimal(fish2);


    // this.elements[0].removeAnimal(fish2);
    // console.dir(this.elements[0]);

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
    // console.dir(this.elements);

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
        // console.clear();
        // console.log(this.cycles);
    }, 1000);

  }

}

module.exports = Game;
