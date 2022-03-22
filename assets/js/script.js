const RE = /^\d{3}-\d{3}-\d{4}$/; // passed 555-555-5555

// '\(' match open brackets and match the close brackets '\)'
// passed the pattern (555)555-5555 and (555) 555-5555
const RE2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
// passed "555 555 5555"
const RE3 = /^\d{3}\s?\d{3}\s?\d{4}$/;
// passed "5555555555" - 10 digit in the row
// const RE4 = /^\d{10}$/;

// Create array of regexes
const REGEXES = [RE, RE2, RE3];

function telephoneCheck(str) {
  // Loop through regexes
  for (let regex of REGEXES) {
    // if one matches, return true
    if (regex.test(str)) {
      return true;
    }
  }
  return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
