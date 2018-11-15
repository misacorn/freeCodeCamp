function pairElement(str) {
  let pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  return str.split("").map(x => [x,pairs[x]])
}

pairElement("ATCGA") 
//[["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]