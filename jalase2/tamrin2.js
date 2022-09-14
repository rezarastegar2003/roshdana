const number = prompt("Write a number");
const stringNumber = number.toString();
const lastCharacter = stringNumber.slice(-1);
function adadeZojYaFard() {
  // odd = adade fard
  if (lastCharacter % 2 !== 0) {
    console.log(`Your number is ${number} and odd:${lastCharacter}`);
  }
  // even = adade zoj
  if (lastCharacter % 2 === 0) {
    console.log(`Your number is ${number} and even:${lastCharacter}`);
  }
}
adadeZojYaFard();