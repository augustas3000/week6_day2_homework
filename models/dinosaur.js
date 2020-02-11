// A dinosaur must have:
// A species
// A diet (e.g. carnivore, herbivore or omnivore)
// An average number of visitors attracted per day



const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

module.exports = Dinosaur;
