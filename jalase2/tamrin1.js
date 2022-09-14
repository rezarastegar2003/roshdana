// adade aval adadi ast ke be dota adade bakhsh pazir bashe, yeki be adade (1) va adade (n)
// adade aval, adade sahih va bogorg tar az (0) hastand
// agar adadi ro taghsim konim bar 2 va baghimande 0 beshe aval nist!

// get number from user
let number = prompt("Write a number");
// har adadi ro aval dar nazar migirim magar khalaf sh sabet she
let isPrime = true;
function adadeAval() {
  // check kardane inke kodom adade taghsim bar 2 mishe 0?, agar beshe 0 aval nist
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  if (number === null) {
    console.log("Please enter a number!");
  }
  console.log(number, isPrime);
}
adadeAval();