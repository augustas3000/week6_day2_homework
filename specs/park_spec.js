const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Good park', 20);
    apatosaurus = new Dinosaur('Apatosaurus', 'omnivore', 20);
    spinosaurus = new Dinosaur('Spinosaurus', 'carnivore', 60);

  });

  it('should have a name', function() {
    const actual = park.name;
    const expected =  'Good park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park.ticket_price;
    const expected =  20;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);
    const actual = park.collection_of_dinosaurs;
    const expected = [apatosaurus, spinosaurus];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.add_dinosaur(apatosaurus);
    const actual = park.collection_of_dinosaurs.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);
    park.remove_dinosaur('Spinosaurus');

    const expected = 'Apatosaurus';
    const actual = park.collection_of_dinosaurs[0].species;
    assert.strictEqual(actual, expected);

    assert.strictEqual(park.collection_of_dinosaurs.length, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);

    const actual = park.most_visitors();
    const expected = spinosaurus;
    assert.deepStrictEqual(actual,expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);

    spinosaurus_2 = new Dinosaur('Spinosaurus', 'carnivore', 50);
    park.add_dinosaur(spinosaurus_2);

    const actual = park.all_by_spp('Spinosaurus');
    const expected = [spinosaurus, spinosaurus_2];
    assert.deepStrictEqual(actual,expected);
  });


  it('should be able to calculate the total number of visitors per day', function() {
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);
    const expected = 80;
    const actual = park.total_visitors();
    assert.strictEqual(actual,expected);
  });

  it('should be able to calculate the total number of visitors per year',  function() {
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);
    const expected = 29200;
    const actual = park.total_visitors_per_year();
    assert.strictEqual(actual,expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.add_dinosaur(apatosaurus);
    park.add_dinosaur(spinosaurus);
    const expected = 584000;

    const actual = park.total_revenue_per_year();
    assert.strictEqual(actual,expected);
  });

});
