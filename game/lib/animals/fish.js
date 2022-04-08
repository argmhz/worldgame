const Base = require('./base');
const Direction = require('../direction');

class Fish extends Base {

  load(){
    this.dir = Direction.random();
  }

  tick() {

    let n = this.game.cycles % Math.floor(Math.random()*5);
    if(n == 0){
      this.dir = Direction.random();
    }

    if(!this.move(this.dir)){
      this.dir = Direction.random();
    }
  }

  update(event){
    console.dir(event.type);
  }

}


module.exports = Fish;
