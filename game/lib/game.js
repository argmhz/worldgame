
const World = require('./world');
const Fish = require('./animals/fish');
class Game {

  /**
   * constructor
   */
  constructor(){

    this.interval = null;
    this.elements = [];
    this.speed = 500;
    this.cycles = 0;
    this.world = new World(10, this.elements);

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

    for (var i = 0; i < 2; i++) {
      let y = Math.floor(Math.random() * this.world.size);
      let x = Math.floor(Math.random() * this.world.size);
      let f = new Fish(this);
      this.elements.push(f);

      var tile = this.world.get(x,y);
      tile.add(f);
      f.tile = tile;
    }
  }

  /**
   * Run the cycle
   * @return void
   */
  runCycle(){
    this.elements.forEach((item, i) => {
      item.tick(this);
    });
    this.display();
  }

  display(){

    let display = [];
    for (var y = 0; y < this.world.size; y++) {
      let col = [];
      for (var x = 0; x < this.world.size; x++) {
        col.push(this.world.get(x,y).entities.length);
      }
      display.push(col);
    }

    process.stdout.write("\u001b[2J\u001b[0;0H\n");
    console.log("############### WORLD GAME ###############");
    console.table(display);
    console.log("Animals: " + (this.elements.length - (this.world.size*this.world.size)));
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
    }, this.speed);

  }

}

module.exports = Game;
