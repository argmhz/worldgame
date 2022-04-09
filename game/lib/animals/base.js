const Direction = require('../direction');


class Base {

  constructor(game){
    this.game = game;
    this.tile = null;

    this.life = 0;
    this.foodTypes = [];
    this.allowedTiles = [];


    this.seekArea = [
      {x:-1,y:-1},{x: 0, y:-1},{x:-1, y:-1},
      {x:-1,y: 0},             {x: 1, y: 0},
      {x:-1,y: 1},{x: 0, y: 1},{x: 1, y: 1}
    ];

    this.load();
  }

  load(){}

  defend(entity){}

  attack(entity){}

  eat(entity){}

  isDead(){}

  seekFood(){
    let x = this.tile.x;
    let y = this.tile.y;
    for (var i = 0; i < this.seekArea.length; i++) {
      // console.log(this.seekArea[i].x+x);
      // console.log(this.seekArea[i].y+y);
      console.dir(this.game.world.get(this.seekArea[i].x+x,this.seekArea[i].y+y));
      // console.dir();
    }
  }

  getType(){
    return this.constructor.name;
  }

  _moveTo(x,y){

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
    if(this._moveTo(dir.x,dir.y)){
      return true;
    }
    return false;
  }

  tick(){

    // if hungry
      // find and kill and eat
      // find food and eat

    // else
      // find same entity and reproduce

  }

  /**
   * Called when the world around is changing
   * @param  {JSON} event
   * @return {void}
   */
  update(event){}
}


module.exports = Base;
