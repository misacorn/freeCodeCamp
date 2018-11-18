function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(x => htmlEntities[x] || x)
    .join("");
}

convertHTML("Dolce & Gabbana");
