const Base = require('./base');
const Direction = require('../direction');

class Fish extends Base {

  load(){
    this.dir = Direction.random();
    this.allowedTiles = ['Water'];
    this.foodTypes = ['Fish'];
    this.life = 10;
    this.maxLife = 100;
  }

  tick() {
    super.tick();
  }

  update(event){

    console.dir(event.type);
  }

}


module.exports = Fish;
