var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

function add(list, bookName) {
  let newList = [...list];
  newList.push(bookName);
  return newList;
  // Add your code above this line
}

function remove(list, bookName) {
  let newList = [...list];
  if (newList.indexOf(bookName) >= 0) {
    newList.splice(newList.indexOf(bookName), 1);
    return newList;
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);
