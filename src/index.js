function removeBrackets(str, typeBrackets) {
  for (let i = 0; i < typeBrackets.length; i++) {
    while (str.includes(typeBrackets[i])) {
      str = str.replace(typeBrackets[i],'');
    }
  }
  return str;
}

function checkBrackets(str, typeBrackets) {
    let result = false;
    for (let i = 0; i < typeBrackets.length; i++) {
        if (str.includes(typeBrackets[i])) {
            result = true;
        }
    }
    return result;
  }

module.exports = function check(str, bracketsConfig) {
  let typeBrackets = bracketsConfig.slice(0);
  let result = true;
  typeBrackets = typeBrackets.map((e) => `${e[0]}${e[1]}`);
  while (result) {
    str = removeBrackets(str, typeBrackets);
    result = checkBrackets(str, typeBrackets);
  }
  return str.length === 0;
}
