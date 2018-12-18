function truthCheck(collection, pre) {
  let falseVal = 0;
  let trueVal = 0;
  collection.map(item => {
    return !item[pre] ? falseVal++ : trueVal++;
  });
  return falseVal >= 1 ? false : true;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
//true

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);
// false
