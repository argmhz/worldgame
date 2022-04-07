
class Base {

  constructor(game){
    this.game = game;
    this.life = 10;
    this.tile = null;
  }

  move(x,y){

    if( x <= this.game.world.size ){
      
    }

    if(this.tile){
      this.tile.remove(this);
    }

    this.tile = this.game.world.get(x,y);
    this.tile.add(this);
  }
  /**
   * Called when the world around is changing
   * @param  {JSON} event
   * @return {void}
   */
  update(event){

  }
}


module.exports = Base;
