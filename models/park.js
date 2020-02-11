const Park = function (name, ticket_price) {
  this.name = name;
  this.ticket_price = ticket_price;
  this.collection_of_dinosaurs = [];
};


Park.prototype.add_dinosaur = function(dino_obj) {
  this.collection_of_dinosaurs.push(dino_obj);
};

Park.prototype.remove_dinosaur = function(dino_str){
  this.collection_of_dinosaurs.splice(this.collection_of_dinosaurs.indexOf(dino_str), 1);
}

Park.prototype.most_visitors = function() {
  this.collection_of_dinosaurs.length
  let current_max = 0;
  let best_one;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    if (this.collection_of_dinosaurs[i].guestsAttractedPerDay > current_max) {
      best_one = this.collection_of_dinosaurs[i];
    }
  }
  return best_one;
};


Park.prototype.all_by_spp = function(species_str) {
  let dinos_found = [];

  for (let i = 0; i < this.collection_of_dinosaurs.length; i++){
    if (species_str === this.collection_of_dinosaurs[i].species) {
      dinos_found.push(this.collection_of_dinosaurs[i]);
    }
  }
  return dinos_found;
};

Park.prototype.total_visitors = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors;
};

Park.prototype.total_visitors_per_year = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors * 365;
};


Park.prototype.total_revenue_per_year = function() {
  let tot_visitors = 0;
  for (let i = 0; i < this.collection_of_dinosaurs.length; i++) {
    tot_visitors += this.collection_of_dinosaurs[i].guestsAttractedPerDay;
  }
  return tot_visitors * 365 * this.ticket_price;
};




module.exports = Park;



// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs
// A park must be able to:
//
// Add a dinosaur to its collection of dinosaurs
// Remove a dinosaur from its collection of dinosaurs
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year
