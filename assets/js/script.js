const RE = /^\d{3}-\d{3}-\d{4}/;

function telephoneCheck(str) {
  return RE.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("lalal555-555-5555"));
