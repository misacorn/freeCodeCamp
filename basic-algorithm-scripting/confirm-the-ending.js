function confirmEnding(str, target) {
  let result = ""
  if (str.substring([str.length-target.length],[str.length]) !== target.substring(0,[target.length])) {
    result = false
  } else {
    result = true
  }
  return result;
}

confirmEnding("Bastian", "n");