// Assignment code here

// Push random letters, numbers, character codes into an array:
// Have an empty array and push everything into it separately?
// Take everything and use REST operator to turn them into an array then SPREAD operator to output them separately?

//STEP 1 - Create arrays for all characters and merge them into a single array

//Adds all special characters into a single array with each character having its own position
const specialChar = [..."!#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
// Adds all lower case and upper case letters into single strings
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const higherString = lowerString.toUpperCase();
// Turns those strings into arrays
const lowerAlphabet = [...lowerString];
const higherAlphabet = [...higherString];
// Adds numbers
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Merges all arrays into one
const allChars = [
  ...lowerAlphabet,
  ...higherAlphabet,
  ...numbers,
  ...specialChar,
];

// STEP 2 - Ask a prompt for a number between 8 and 128
let passwordLength;
const ask = function () {
  const intro = alert(`Please choose the length of the password you would like
    Min: 8 characters long
    Max: 128 characters long`);
  passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
};
// ask();

// TODO: Study regex to add in if what is inputed isnt a number
if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
  // alert("Not valid");
  // ask();


// STEP 3 - Generate random character
// This will generate a random character from the allChars array when called like so;
// charPicker(0, allchars.length);
//FIXME: This will sometimes give undefined, check why
const charPicker = function (min, max) {
  return allChars[Math.floor(Math.random() * (max - min + 1)) + min];
};

// console.log(charPicker(0, allChars.length));

// STEP 4 - Create random password
const generatePassword = function () {
  return charPicker(0, allChars.length);
};

let newPassWord = [];

for (i = 0; i < 128; i++) {
  newPassWord.push(generatePassword());
}

console.log(newPassWord);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
