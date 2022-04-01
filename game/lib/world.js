const Water = require('./areas/water');

class World {

  constructor(size,elements) {
    this.size = size;
    this.elements = elements;
    this.map = {};
  }

  get(x,y){
    return this.map[x+'_'+y];
  }

  generate(){
    for (var x = 0; x < this.size; x++) {
      for (var y = 0; y < this.size; y++) {
        let w = new Water(x,y);
        this.map[x+'_'+y] = w;
        this.elements.push(w);
      }
    }

  }

}

module.exports = World;
