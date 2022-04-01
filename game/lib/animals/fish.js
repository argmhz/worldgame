const Base = require('./base');

class Fish extends Base {

  tick(game) {

    let x = this.area.pos.x;
    let y = this.area.pos.y;

    console.log(x + ' ' + y);
    let newArea = game.world.get(x+1,y+1);
    this.setArea(newArea);

  }


}


module.exports = Fish;
