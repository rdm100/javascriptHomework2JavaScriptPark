const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaurType = function (type) {
  const result = this.enclosure.filter(dinosaur => dinosaur.type !== type);
  this.enclosure = result;
};


Park.prototype.getDinosaursWithMoreThan3Offspring = function () {
  const result = this.enclosure.filter(dinosaur => dinosaur.offspring > 2);
  return result;
};

Park.prototype.calculateTotalPopulation = function (year) {
    var result = 0

    for(dinosaur of this.enclosure){
      result += dinosaur.offspring * year + 1;
    }
    return result;
};


module.exports = Park;