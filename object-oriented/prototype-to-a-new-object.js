function Birds (name) {
  this.name = name
}

// Birds.prototype.numLegs = 2
// Birds.prototype.eat = function () {
//   console.log("nom nom")
// }
// Birds.prototype.describe = function () {
//   console.log("Bird's name is " + this.name)
// }

Birds.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}