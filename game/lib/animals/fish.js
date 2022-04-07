const Base = require('./base');

class Fish extends Base {

  tick() {
    if(this.tile){
      let x = this.tile.pos.x;
      let y = this.tile.pos.y;
      this.move(x,y+1);
    }
  }

  update(event){
    console.dir(event);
  }

}


module.exports = Fish;
