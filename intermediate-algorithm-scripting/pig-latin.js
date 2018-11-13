function translatePigLatin(str) {
  if (["a", "o", "u", "e", "i"].indexOf(str[0]) !== -1) {
    return str.concat("", "way");
  } else {
    for (let i = 1; i < str.length; i++) {
      if (["a", "o", "u", "e", "i"].indexOf(str[i]) !== -1) {
        return str.slice(i, str.length).concat(str.slice(0, i), "ay");
      }
    }
  }
}

translatePigLatin("consonant");

function translatePigLatin(str) {
  if (["a", "o", "u", "e", "i"].indexOf(str[0]) !== -1) {
    return str.concat("", "way");
  } else {
    return str
      .slice(
        str.split("").findIndex(c => ["a", "o", "u", "e", "i"].includes(c)),
        str.length
      )
      .concat(
        str.slice(
          0,
          str.split("").findIndex(c => ["a", "o", "u", "e", "i"].includes(c))
        ),
        "ay"
      );
  }
}
