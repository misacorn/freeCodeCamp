let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line

let glideMixin = (obj) => {
    obj.glide = () => {
        console.log("Ride, baby rideee")
    }
}
glideMixin(bird)
glideMixin(boat)




