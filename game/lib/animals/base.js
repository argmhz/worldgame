const Direction = require('../direction');


class Base {

  constructor(game){
    this.game = game;
    this.life = 10;
    this.tile = null;
    this.load();
  }

  moveTo(x,y){

    if(this.game.world.get(x,y)){

      if(this.tile){
        this.tile.remove(this);
      }

      this.tile = this.game.world.get(x,y);
      this.tile.add(this);
      return true;
    }

    return false;
  }

  move(direction){
    let dir = Direction.get(this.tile.x,this.tile.y,direction);
    if(this.moveTo(dir.x,dir.y)){
      return true;
    }
    return false;
  }

  tick(){}

  /**
   * Called when the world around is changing
   * @param  {JSON} event
   * @return {void}
   */
  update(event){}
}


module.exports = Base;
