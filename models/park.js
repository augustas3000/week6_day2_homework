const Dinosaur = require('./dinosaur.js');


const Park = function (name, ticket_price) {
  // A name
  this.name = name;
  // A ticket price
  this.ticket_price = ticket_price;
  // A collection of dinosaurs

  this.collection_of_dinosaurs = [];
};

// Add a dinosaur to its collection of dinosaurs
Park.prototype.add_dinosaur = function(dino_obj) {
  this.collection_of_dinosaurs.push(dino_obj);
};

// Remove a dinosaur from its collection of dinosaurs, by species

Park.prototype.remove_dinosaur = function(dino_obj){
  this.collection_of_dinosaurs.splice(this.collection_of_dinosaurs.indexOf(dino_obj), 1);
};

// Find the dinosaur that attracts the most visitors
Park.prototype.most_visitors = function() {
  this.collection_of_dinosaurs.length
  // can use a hash like highest = {guestsAttractedPerDay: 0}
  // to make this shorter;
  let current_max = 0;
  let best_one;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    if (this.collection_of_dinosaurs[i].guestsAttractedPerDay > current_max) {
      best_one = this.collection_of_dinosaurs[i];
    }
  }
  return best_one;
};

// Find all dinosaurs of a particular species
Park.prototype.all_by_spp = function(species_str) {
  let dinos_found = [];

  for (let i = 0; i < this.collection_of_dinosaurs.length; i++){
    if (species_str === this.collection_of_dinosaurs[i].species) {
      dinos_found.push(this.collection_of_dinosaurs[i]);
    }
  }
  return dinos_found;

  // let result = this.collection_of_dinosaurs.filter(dinosaur => dinosaur.species == species); One liner - NICE;

};


// Calculate the total number of visitors per day
Park.prototype.total_visitors = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors;
};
// Calculate the total number of visitors per year
Park.prototype.total_visitors_per_year = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors * 365;
};

// Calculate the total revenue from ticket sales for one year
Park.prototype.total_revenue_per_year = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors * 365 * this.ticket_price;
};

// Extensions:
// remove all dinosaurs of a particular species
Park.prototype.remove_by_spp_all = function(spp_string) {

  let collection = this.collection_of_dinosaurs;

  let collection_filtered = [];


   for (let dino_obj of collection) {
     if (dino_obj.species !== spp_string) {
       collection_filtered.push(dino_obj);
     };
  };

 this.collection_of_dinosaurs = collection_filtered;

  // let result = this.collection_of_dinosaurs.filter(dinosaur => dinosaur.species !== spp_string); One liner - NICE;

};


// provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
// { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }


Park.prototype.diet_summary = function() {
  let diet_summary = {};

  let collection = this.collection_of_dinosaurs;

  for (let dino_obj of collection) {

    if (diet_summary.hasOwnProperty( dino_obj.diet)) {

        diet_summary[dino_obj.diet] += 1;
    } else {

        diet_summary[dino_obj.diet] = 1;
    };

  };

  return diet_summary;
};

// to enable require in park_spec.js
module.exports = Park;
