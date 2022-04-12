const Base = require('./base');
const Direction = require('../direction');

class Fish extends Base {

  load(){
    this.dir = Direction.random();
    this.allowedTiles = ['Water'];
    this.foodTypes = ['Fish'];
    this.life = 49;
    this.strength = 100;
    this.maxLife = 100;
  }

  tick() {
    this.life -= 1;
    super.tick();
  }

  update(event){

  }

}


module.exports = Fish;
