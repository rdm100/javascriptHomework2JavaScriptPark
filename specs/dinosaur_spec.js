const assert = require("assert");
const Dinosaur = require("../dinosaur.js")

describe('Dinosaur', function(){

let dinosaur1;

    beforeEach(function(){
      dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
});


    it('Dinosaur has a type', function(){
      assert.strictEqual(dinosaur1.type, "Tyrannosaurus");
    });

    it('Dinosaur has a number of offspring', function(){
      assert.strictEqual(dinosaur1.offspring, 2);
	});

	

});