const RE = /\d\d\d-\d\d\d-\d\d\d\d/;

function telephoneCheck(str) {
  return RE.test(str);
}

console.log(telephoneCheck("555-555-5555"));
