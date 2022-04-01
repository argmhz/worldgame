class Base {

  constructor({x,y}){
    console.dir(x,y);
    this.weather = {};
    this.animals = [];
    this.pos = {x:x,y:y};
  }

  step(Game){
    console.log("do hej something")
  }

}

module.exports = Base;
