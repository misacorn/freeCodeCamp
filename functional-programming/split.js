function splitify(str) {
  return str.split(/\W/);
}
splitify("Hello World,I-am code");
//["Hello", "World", "I", "am", "code"]

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => obj !== "")
    .join("-")
    .toLowerCase();
}
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('This Is Spinal Tap');