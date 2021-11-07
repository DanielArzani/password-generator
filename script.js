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
// For higher,lower,special char
const highLowS = [...higherAlphabet, ...lowerAlphabet, ...specialChar];
// For higher,lower,numbers
const highLowNum = [...higherAlphabet, ...lowerAlphabet, ...numbers];
// For high,num
const highNum = [...higherAlphabet, ...numbers];
// For high,num,special char
const highNumS = [...higherAlphabet, ...numbers, ...specialChar];
// For higher,special char
const highS = [...higherAlphabet, ...specialChar];
// For low, num
const lowNum = [...lowerAlphabet, ...numbers];
// For low, num and special char
const lowNumS = [...lowerAlphabet, ...numbers, ...specialChar];
// For lower, special char
const lowS = [...lowerAlphabet, ...specialChar];
// For numbers, special char
const numS = [...numbers, ...specialChar];

// Asks for password length and whether user would like upper/lower case, numbers and symbols
let passwordLength;
let passwordUpperCase;
let passwordLowerCase;
let passwordSpecialChars;
let password;

// --------------------------Variables---------------------------------

// Each function will generate a password depending on which type of characters the users inputs

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
// High and low and special
const genHighLowSpecial = function () {
  return highLowS[Math.floor(Math.random() * (highLowS.length - 0 + 1)) + 0];
};
// High and num
const genHighNum = function () {
  return highNum[Math.floor(Math.random() * (highNum.length - 0 + 1)) + 0];
};
// High and num and special
const genHighNumSpecial = function () {
  return highNumS[Math.floor(Math.random() * (highNumS.length - 0 + 1)) + 0];
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
// Low and num and special
const genlowNumSpecial = function () {
  return lowNumS[Math.floor(Math.random() * (lowNumS.length - 0 + 1)) + 0];
};
// Num and special
const genNumSpecial = function () {
  return numS[Math.floor(Math.random() * (numS.length - 0 + 1)) + 0];
};

// Function to create new password, push it to the array then convert the array into a string
let newPassWord = [];
const generatePassword = function (generator) {
  for (i = 0; i < passwordLength - 1; i++) {
    newPassWord.push(generator());
  }
  newPassWord = newPassWord.join("");
  console.log(newPassWord);
  return newPassWord;
};

// ----------------------PASSWORD GENERATOR----------------------------

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Reset function - This will clear the text area and password
function reset() {
  newPassWord = [];
  return (passwordText.value = "");
}

// Prompt asking for password length
function writePassword() {
  const askForLength = function () {
    passwordLength = Number(
      prompt(`Please choose the length of the password you would like
      Min: 8 characters long
      Max: 128 characters long`)
    );
    // Invalid responses
    if (
      !passwordLength ||
      passwordLength < 8 ||
      passwordLength > 128 ||
      !passwordLength == /^[0-9]+$/
    ) {
      alert("Not valid");
      askForLength();
    }
  };
  askForLength();

  // Function that prompts user to decide what type of characters they want in their password
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
      // Uppercase and lowercase and special characters
      passwordUpperCase &&
      passwordLowerCase &&
      !passwordNumbers &&
      passwordSpecialChars
    ) {
      generatePassword(genHighLowSpecial);
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
      passwordNumbers &&
      passwordSpecialChars
    ) {
      generatePassword(genHighNumSpecial);
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
      // lowercase and number and special
      !passwordUpperCase &&
      passwordLowerCase &&
      passwordNumbers &&
      !passwordSpecialChars
    ) {
      generatePassword(genlowNumSpecial);
    } else if (
      // lowercase and special characters
      !passwordUpperCase &&
      passwordLowerCase &&
      passwordNumbers &&
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
  reset();
  ask();

  passwordText.value = newPassWord;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ------------------------------DOM-----------------------------------
