class Base {

  constructor(x,y){
    this.weather = {};
    this.animals = [];

    this.pos = {x,y};
  }

  addAnimal(animal){
    this.animals.push(animal);
  }

  removeAnimal(animal) {
    let index = this.animals.indexOf(animal);
    if(index != -1){
        this.animals.splice(index, 1);
    }
  }

  tick(game){}

}

module.exports = Base;
