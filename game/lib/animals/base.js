
class Base {

  constructor(area){
    this.area = area;
  }

  setArea(area) {
    if(this.area){
      this.area.removeAnimal(this);
    }

    this.area = area;
    this.area.addAnimal(this);
  }

}


module.exports = Base;
