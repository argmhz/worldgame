class Base {

  constructor(x,y){
    this.entities = [];
    this.x = x;
    this.y = y;
  }

  add(entity){
    this.notify({
      type: "entity_added",
      entity
    });
    this.entities.push(entity);
  }

  remove(entity) {
    let index = this.entities.indexOf(entity);
    if(index != -1){
      this.entities.splice(index, 1);
      this.notify({
        type: "entity_removed",
        entity
      });
    }

  }

  notify(event){
    this.entities.forEach((entity) => entity.update(event));
  }

  tick(game){}

}

module.exports = Base;
