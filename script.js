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
// For higher and lower characters
const highLow = [...higherAlphabet, ...lowerAlphabet];
// For higher,lower,numbers
const highLowNum = [...higherAlphabet, ...lowerAlphabet, ...numbers];
// For high,num
const highNum = [...higherAlphabet, ...numbers];
// For higher,special char
const highS = [...higherAlphabet, ...specialChar];
// For low, num
const lowNum = [...lowerAlphabet, ...numbers];
// For lower, special char
const lowS = [...lowerAlphabet, ...specialChar];
// For numbers, special char
const numS = [...numbers, ...specialChar];

// ---------------------------------------------ASSIGNED VARIABLES---------------------------------------
// Asks for password length
let passwordLength;
const askForLength = function () {
  passwordLength = Number(
    prompt(`Please choose the length of the password you would like
    Min: 8 characters long
    Max: 128 characters long`)
  );

  // TODO: Study regex to add in if what is inputed isnt a number
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Not valid");
    askForLength();
  }
};
askForLength();

// STEP 3 - Generate random character passwords
//FIXME: These will sometimes give undefined, check why
// TODO: Add a few more functions, missing some like high-num
// Each function will generate a password depending on which type of characters the user desires

// All characters
const generateAllChar = function () {
  return allChars[Math.floor(Math.random() * (allChars.length - 0 + 1)) + 0];
};
// Uppercase
const generateUpperChar = function () {
  return higherAlphabet[
    Math.floor(Math.random() * (higherAlphabet.length - 0 + 1)) + 0
  ];
};
// Lowercase
const generateLowerChar = function () {
  return lowerAlphabet[
    Math.floor(Math.random() * (lowerAlphabet.length - 0 + 1)) + 0
  ];
};
// Numbers
const generateNumbers = function () {
  return numbers[Math.floor(Math.random() * (numbers.length - 0 + 1)) + 0];
};
// Special Characters
const generateSpecialChar = function () {
  return specialChar[
    Math.floor(Math.random() * (specialChar.length - 0 + 1)) + 0
  ];
};
// High and low
const genHighLow = function () {
  return highLow[Math.floor(Math.random() * (highLow.length - 0 + 1)) + 0];
};
// High and low and num
const genHighLowNum = function () {
  return highLowNum[
    Math.floor(Math.random() * (highLowNum.length - 0 + 1)) + 0
  ];
};
// High and num
const genHighNum = function () {
  return highNum[Math.floor(Math.random() * (highNum.length - 0 + 1)) + 0];
};
// High and special
const genHighSpecial = function () {
  return highS[Math.floor(Math.random() * (highS.length - 0 + 1)) + 0];
};
// Low and special
const genLowSpecial = function () {
  return lowS[Math.floor(Math.random() * (lowS.length - 0 + 1)) + 0];
};
// Low and num
const genlowNum = function () {
  return lowNum[Math.floor(Math.random() * (lowNum.length - 0 + 1)) + 0];
};
// Num and special
const genNumSpecial = function () {
  return numS[Math.floor(Math.random() * (numS.length - 0 + 1)) + 0];
};

let newPassWord = [];
const generatePassword = function (generator) {
  for (i = 0; i < passwordLength; i++) {
    newPassWord.push(generator());
  }
  console.log(newPassWord);
};

// generatePassword(genNumSpecial);

// -----------------------------------PASSWORD GENERATOR----------------------------

// STEP 2 - Ask a prompt for a number between 8 and 128
let passwordUpperCase;
let passwordLowerCase;
let passwordSpecialChars;
let password;

const ask = function () {
  passwordUpperCase = confirm(
    "Would you like to use uppercase characters in your password?"
  );
  passwordLowerCase = confirm(
    "Would you like to use lowercase characters in your password?"
  );
  passwordNumbers = confirm(
    "Would you like to use numerical values in your password?"
  );
  passwordSpecialChars = confirm(
    "Would you like to use special characters in your password?"
  );

  // Chooses password generator based on user input
  if (
    // Just uppercase
    passwordUpperCase &&
    !passwordLowerCase &&
    !passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(generateUpperChar);
  } else if (
    // Just lower case
    !passwordUpperCase &&
    passwordLowerCase &&
    !passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(generateLowerChar);
  } else if (
    // Just numbers
    !passwordUpperCase &&
    !passwordLowerCase &&
    passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(generateNumbers);
  } else if (
    // Just special characters
    !passwordUpperCase &&
    !passwordLowerCase &&
    !passwordNumbers &&
    passwordSpecialChars
  ) {
    generatePassword(generateSpecialChar);
  } else if (
    // All characters
    passwordUpperCase &&
    passwordLowerCase &&
    passwordNumbers &&
    passwordSpecialChars
  ) {
    generatePassword(generateAllChar);
  } else if (
    // Uppercase and lowercase
    passwordUpperCase &&
    passwordLowerCase &&
    !passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(genHighLow);
  } else if (
    // Uppercase and lowercase and numbers
    passwordUpperCase &&
    passwordLowerCase &&
    passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(genHighLowNum);
  } else if (
    // uppercase and numbers
    passwordUpperCase &&
    !passwordLowerCase &&
    passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(genHighNum);
  } else if (
    // uppercase and special characters
    passwordUpperCase &&
    !passwordLowerCase &&
    !passwordNumbers &&
    passwordSpecialChars
  ) {
    generatePassword(genHighSpecial);
  } else if (
    // lowercase and number
    !passwordUpperCase &&
    passwordLowerCase &&
    passwordNumbers &&
    !passwordSpecialChars
  ) {
    generatePassword(genlowNum);
  } else if (
    // lowercase and special characters
    !passwordUpperCase &&
    passwordLowerCase &&
    !passwordNumbers &&
    passwordSpecialChars
  ) {
    generatePassword(genLowSpecial);
  } else if (
    // numbers and special characters
    !passwordUpperCase &&
    !passwordLowerCase &&
    passwordNumbers &&
    passwordSpecialChars
  ) {
    generatePassword(genNumSpecial);
  }
};
ask();
// --------------------------------------Experimental------------------------------------------
// const choice = [
//   "high",
//   "low",
//   "num",
//   "special",
//   "high-low",
//   "high-low-num",
//   "allChar",
//   "high-num",
//   "high-special",
//   "low-num",
//   "low-special",
//   "num-special",
// ];

// --------------------------------------Experimental------------------------------------------

// --------------------------------------DOM------------------------------------------

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePasswordssss();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
