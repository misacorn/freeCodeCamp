function uniteUnique(...arr) {
  return [...new Set([].concat(...arr))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//The Set object lets you store unique values of any type, whether primitive values or object references.