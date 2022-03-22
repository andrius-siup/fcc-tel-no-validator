const RE = /^\d{3}-\d{3}-\d{4}$/; // passed 555-555-5555
// '\(' match open brackets and match the close brackets '\)'
const RE2 = /^\(\d{3}\)\d{3}-\d{4}$/;
function telephoneCheck(str) {
  return RE.test(str) || RE2.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
