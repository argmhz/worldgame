const Direction = require('../direction');


class Base {

  constructor(game, id){
    this.game = game;
    this.tile = null;
    this.id = id;
    this.life = 0;
    this.maxLife = 0;
    this.strength = 0;
    this.foodTypes = [];
    this.allowedTiles = [];
    this.movement = 0;

    this.seekArea = [
      {x:-1,y:-1},{x: 0, y:-1},{x:-1, y:-1},
      {x:-1,y: 0},             {x: 1, y: 0},
      {x:-1,y: 1},{x: 0, y: 1},{x: 1, y: 1}
    ];

    this.load();
  }

  load(){}

  isHungry(){
    return this.life < (this.maxLife * .50);
  }

  defend(entity){
    let hit = entity.hit();

    this.life - hit;

    if(this.isDead()){
      console.log(this.id + " i died ");

      entity.eat(this.maxLife * .2);
      this.tile.remove(this);
      this.game.remove(this);
    }

  }

  hit(){
    return Math.floor(Math.random()*this.strength)
  }

  attack(entity){
    console.log("attack..");
    entity.defend(this);
  }

  eat(num){
    this.life += num;
    if(this.life > this.maxLife){
      this.life = this.maxLife;
    }
  }

  isDead(){
    return (this.life <= 0);
  }

  seekTiles(callback){
    let x = this.tile.x;
    let y = this.tile.y;
    this.seekArea.forEach((item, i) => {
      let entity = this.game.world.get(item.x+x,item.y+y);
      if(entity && entity !== this){
          callback(entity);
      }
    });

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

  seekFood(){
    let found = null;
    this.seekTiles((tile) => {
      tile.entities.forEach((animal, i) => {
        if(this.foodTypes.includes(animal.getType())){
          found = animal;
        }
      });
    });

    if(found) {
      this._moveTo(found.x, found.y);
      this.attack(found);
    } else {
      this.moveAround();
    }
  }

  moveAround(){
    let n = this.game.cycles % Math.floor(Math.random()*5);
    if(n == 0){
      this.dir = Direction.random();
    }

    while (!this.move(this.dir)) {
      this.dir = Direction.random();
    }

  }

  tick(){

    if(this.isHungry()){
      this.seekFood();
    } else {
      this.moveAround();
    }
  }

  /**
   * Called when the world around is changing
   * @param  {JSON} event
   * @return {void}
   */
  update(event){}
}


module.exports = Base;
