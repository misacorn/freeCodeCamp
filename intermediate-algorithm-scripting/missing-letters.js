function fearNotLetter(str) {
  let alphabet = "abcdefghiklmnopqrstuvxyz";
  let start = alphabet.split("").findIndex(x => x === str.split("")[0]);
  let end = alphabet
    .split("")
    .findIndex(x => x === str.split("")[str.length - 1]);
  let arr = alphabet.slice(start, end + 1);
  let missingLetter = arr.split("").filter(x => !str.split("").includes(x));
  return missingLetter.length > 0 ? missingLetter.toString() : undefined;
}

fearNotLetter("abce"); //d

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
