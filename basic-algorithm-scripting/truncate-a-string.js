function truncateString(str, num) {
  let result = "";
  if (str.length <= num) {
    result = str;
  } else if (str.length > num) {
    result = str.substring(0, num) + "...";
  }
  return result;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
