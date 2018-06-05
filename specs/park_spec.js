const assert = require("assert");
const Park = require("../park.js")
const Dinosaur = require("../dinosaur.js")

describe('Park', function(){

beforeEach(function(){
  park = new Park();
  dinosaur1 = new Dinosaur("Velociraptor", 3);
});

it('enclosure is initially empty', function(){
  assert.strictEqual(park.enclosure.length, 0);
});

it('can add dinosaur to enclosure', function(){
  park.addDinosaur(dinosaur1);
  assert.strictEqual(park.enclosure.length, 1);
});

it('can calculate number of dinosaurs after year one, starting with 1 dinosaur', function() {
  park.addDinosaur(dinosaur1);
  assert.strictEqual(park.calculateTotalPopulation(1), 4);
});

it('can calculate number of dinosaurs after year two, starting with 1 dinosaur', function() {
  park.addDinosaur(dinosaur1);
  assert.strictEqual(park.calculateTotalPopulation(2), 7);
});

});


describe('Park with Dinosaurs', function(){
  beforeEach(function(){
    park = new Park();
    dinosaur2 = new Dinosaur("Velociraptor", 3);
    dinosaur3 = new Dinosaur("Tyrannosaurus", 2)
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  });

it('can remove dinosaur of type', function(){
  park.removeDinosaurType("Velociraptor");
  assert.strictEqual(park.enclosure.length, 1);
});

it('can get dinosaurs with more than 2 offspring', function(){
  assert.deepStrictEqual(park.getDinosaursWithMoreThan3Offspring(), [dinosaur2]);
});

it('can calculate number of dinosaurs after year two, starting with 2 dinosaurs', function() {
  assert.strictEqual(park.calculateTotalPopulation(2), 12);
})


});