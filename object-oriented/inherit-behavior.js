function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype)
let beagle = Object.create(Animal.prototype)

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 

//Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of duck anf beagle to be Animal's prototype, you are effectively giving the duck and beagle instances the same "recipe" as any other instance of Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"