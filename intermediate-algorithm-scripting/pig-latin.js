const vowels = ["a", "o", "u", "e", "i"];

function translatePigLatin(str) {
  if (vowels.indexOf(str[0]) !== -1) {
    return str.concat("", "way");
  } else {
    for (let i = 1; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        return str.slice(i, str.length).concat(str.slice(0, i), "ay");
      }
    }
  }
}

translatePigLatin("consonant"); //onsonantcay
translatePigLatin("glove"); //oveglay

function translatePigLatin(str) {
  if (vowels.indexOf(str[0]) !== -1) {
    return str.concat("", "way");
  } else {
    return str
      .slice(str.split("").findIndex(c => vowels.includes(c)), str.length)
      .concat(
        str.slice(0, str.split("").findIndex(c => vowels.includes(c))),
        "ay"
      );
  }
}
